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
import { FeatureClient } from "../src/featureClient";

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

describe("Features test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: FeatureClient;
  let location: string;
  let resourceGroup: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new FeatureClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("features listall test", async function () {
    const arrayList = [];
    for await (const item of client.features.listAll()) {
      arrayList.push(item);
    }
    assert.notEqual(arrayList.length, 0);
  });

  it("features list test", async function () {
    const arrayList = [];
    for await (const item of client.features.list("Microsoft.Compute")) {
      arrayList.push(item);
    }
    assert.notEqual(arrayList.length, 0);
  });

  it("features get test", async function () {
    const arrayList = new Array();
    for await (const item of client.features.list("Microsoft.Compute")) {
      arrayList.push(item);
    }
    const featureName = arrayList[0].name.split("/")[1];
    const feature = await client.features.get("Microsoft.Compute", featureName);
    assert.equal(feature.name, "Microsoft.Compute/" + featureName);
  });
});
