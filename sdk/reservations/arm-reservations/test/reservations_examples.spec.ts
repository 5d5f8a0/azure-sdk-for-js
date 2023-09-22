/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "@azure/test-utils";
import { Context } from "mocha";
import { AzureReservationAPI } from "../src/azureReservationAPI";
import { CurrentQuotaLimitBase } from "../src/models";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id",
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Datafactory test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: AzureReservationAPI;
  let location: string;
  let resourceGroup: string;
  let providerId: string;
  let resourceName: string;
  let createQuotaRequest: CurrentQuotaLimitBase;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new AzureReservationAPI(credential, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    providerId = "Microsoft.Compute";
    resourceName = "standardFSv2Family";
    createQuotaRequest = {
      properties: {
        name: { value: "standardFSv2Family" },
        limit: 200,
        unit: "Count",
      },
    };
  });

  afterEach(async function () {
    await recorder.stop();
  });

  // it("quota create test", async function () {
  //   const res = await client.quota.beginCreateOrUpdateAndWait(
  //     subscriptionId,
  //     providerId,
  //     location,
  //     resourceName,
  //     createQuotaRequest
  //   );
  //   assert.equal(res.name, resourceName);
  // });

  it("quota get test", async function () {
    const res = await client.quota.get(subscriptionId, providerId, location, resourceName);
    assert.equal(res.name, resourceName);
  });

  it("quota list test", async function () {
    const resArray = new Array();
    for await (let item of client.quota.list(subscriptionId, providerId, location)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 108);
  });
});
