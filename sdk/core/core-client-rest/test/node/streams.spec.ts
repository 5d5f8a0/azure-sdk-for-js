// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as td from "testdouble";
import { assert } from "chai";
import { ClientRequest, IncomingHttpHeaders, IncomingMessage } from "http";
import { PassThrough } from "stream";

const mockBaseUrl = "https://example.org";

describe("[Node] Streams", () => {
  afterEach(() => {
    td.reset();
  });

  it("should get a JSON body response as a stream", async () => {
    const https = await td.replaceEsm("https");
    const { getClient } = await import("../../src/getClient.js");

    const client = getClient(mockBaseUrl);
    const expectedBody = { foo: "foo" };
    const clientRequest = createRequest();

    td.when(
      https.request(
        td.matchers.anything(),
        td.callback(createResponse(200, JSON.stringify(expectedBody)))
      ),
      { times: 1 }
    ).thenReturn(clientRequest);

    const promise = client.pathUnchecked("/foo").get().asNodeStream();

    const response = await promise;
    const stringBody = await readStreamToBuffer(response.body!);

    assert.deepEqual(stringBody.toString(), JSON.stringify(expectedBody));
  });

  it("should get a JSON body response", async () => {
    const https = await td.replaceEsm("https");
    const { getClient } = await import("../../src/getClient.js");

    const client = getClient(mockBaseUrl);
    const expectedBody = { foo: "foo" };
    const clientRequest = createRequest();

    td.when(
      https.request(
        td.matchers.anything(),
        td.callback(createResponse(200, JSON.stringify(expectedBody)))
      ),
      { times: 1 }
    ).thenReturn(clientRequest);

    const promise = client.pathUnchecked("/foo").get();
    const response = await promise;

    assert.deepEqual(response.body, expectedBody);
  });

  it("should be able to handle errors on normal response", async () => {
    const https = await td.replaceEsm("https");
    const { getClient } = await import("../../src/getClient.js");

    const client = getClient(mockBaseUrl);

    td.when(https.request(), { ignoreExtraArgs: true }).thenThrow(new Error("ExpectedException"));

    try {
      await client.pathUnchecked("/foo").get();
    } catch (e: any) {
      assert.equal(e.message, "ExpectedException");
    }
  });

  it("should be able to handle errors on streamed response", async () => {
    const https = await td.replaceEsm("https");
    const { getClient } = await import("../../src/getClient.js");

    const client = getClient(mockBaseUrl);

    td.when(https.request(), { ignoreExtraArgs: true }).thenThrow(new Error("ExpectedException"));

    try {
      await client.pathUnchecked("/foo").get().asNodeStream();
    } catch (e: any) {
      assert.equal(e.message, "ExpectedException");
    }
  });
});

function createRequest(): ClientRequest {
  const request = new FakeRequest();
  return request as unknown as ClientRequest;
}

class FakeResponse extends PassThrough {
  public statusCode?: number;
  public headers?: IncomingHttpHeaders;
}

function createResponse(statusCode: number, body = ""): IncomingMessage {
  const response = new FakeResponse();
  response.headers = {};
  response.statusCode = statusCode;
  response.write(body);
  response.end();
  return response as unknown as IncomingMessage;
}
function readStreamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("error", reject);
    stream.on("data", function (chunk: Buffer) {
      chunks.push(chunk);
    });
    stream.on("end", function () {
      resolve(Buffer.concat(chunks));
    });
  });
}

class FakeRequest extends PassThrough {}
