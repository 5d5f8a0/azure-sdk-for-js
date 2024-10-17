// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Attributes, HrTime, SpanContext, SpanKind, ROOT_CONTEXT } from "@opentelemetry/api";
import { timeInputToHrTime } from "@opentelemetry/core";
import { BasicTracerProvider, Span } from "@opentelemetry/sdk-trace-base";
import {
  ENQUEUED_TIME,
  TIME_SINCE_ENQUEUED,
} from "../../src/utils/constants/applicationinsights.js";
import {
  AzNamespace,
  MessageBusDestination,
  MicrosoftEventHub,
} from "../../src/utils/constants/span/azAttributes.js";
import { parseEventHubSpan } from "../../src/utils/eventhub.js";
import { RemoteDependencyData, TelemetryItem as Envelope } from "../../src/generated/index.js";
import { describe, it, assert } from "vitest";

const tracer = new BasicTracerProvider().getTracer("default");

describe("#parseEventHubSpan(...)", () => {
  const peerAddress = "example.servicebus.windows.net";
  const destination = "test123";
  const attributes: Attributes = {
    [AzNamespace]: MicrosoftEventHub,
    ["peer.address"]: peerAddress,
    [MessageBusDestination]: destination,
  };

  it("should correctly parse SpanKind.CLIENT", () => {
    const envelope = { data: { baseData: {} } } as Envelope;
    const span = new Span(
      tracer,
      ROOT_CONTEXT,
      "test span",
      { traceId: "traceid", spanId: "spanId", traceFlags: 0 },
      SpanKind.CLIENT,
    );
    span.setAttributes(attributes);

    const baseData = envelope.data?.baseData as RemoteDependencyData;
    parseEventHubSpan(span, baseData);

    assert.strictEqual(baseData.type, attributes[AzNamespace]);
    assert.strictEqual(baseData.target, `${peerAddress}/${destination}`);

    assert.strictEqual((baseData as any).source, undefined);
    assert.strictEqual(baseData.measurements, undefined);
  });

  it("should correctly parse SpanKind.PRODUCER", () => {
    const envelope = { data: { baseData: {} } } as Envelope;
    const span = new Span(
      tracer,
      ROOT_CONTEXT,
      "test span",
      { traceId: "traceid", spanId: "spanId", traceFlags: 0 },
      SpanKind.PRODUCER,
    );
    span.setAttributes(attributes);

    const baseData = envelope.data?.baseData as RemoteDependencyData;
    parseEventHubSpan(span, baseData);

    assert.strictEqual(baseData.type, `Queue Message | ${attributes[AzNamespace]}`);
    assert.strictEqual(baseData.target, `${peerAddress}/${destination}`);

    assert.strictEqual((baseData as any).source, undefined);
    assert.strictEqual(baseData.measurements, undefined);
  });

  it("should correctly parse SpanKind.CONSUMER", () => {
    const startTime = Date.now();
    const envelope = { data: { baseData: {} } } as Envelope;
    const span = new Span(
      tracer,
      ROOT_CONTEXT,
      "test span",
      { traceId: "traceid", spanId: "spanId", traceFlags: 0 },
      SpanKind.CONSUMER,
      undefined,
      [
        {
          context: null as unknown as SpanContext,
          attributes: { [ENQUEUED_TIME]: startTime - 111 },
        },
        {
          context: null as unknown as SpanContext,
          attributes: { [ENQUEUED_TIME]: startTime - 222 },
        },
        {
          context: null as unknown as SpanContext,
          attributes: { [ENQUEUED_TIME]: startTime - 111 },
        },
      ],
    );

    // cast since startTime is readonly
    (span as { startTime: HrTime }).startTime = timeInputToHrTime(startTime);
    span.setAttributes(attributes);

    const baseData = envelope.data?.baseData as RemoteDependencyData;
    parseEventHubSpan(span, baseData);
    assert.strictEqual(baseData.type, `Queue Message | ${attributes[AzNamespace]}`);
    assert.strictEqual((baseData as any).source, `${peerAddress}/${destination}`);
    assert.deepStrictEqual(baseData.measurements, {
      [TIME_SINCE_ENQUEUED]: 148,
    });

    assert.strictEqual(baseData.target, undefined);
  });
});
