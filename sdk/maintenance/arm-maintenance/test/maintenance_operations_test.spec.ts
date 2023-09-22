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
import { MaintenanceManagementClient } from "../src/maintenanceManagementClient";

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

describe("MaintenanceManagement test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: MaintenanceManagementClient;
  let location: string;
  let resourceGroup: string;
  let resourcename: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new MaintenanceManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({})
    );
    location = "eastus";
    resourceGroup = "myjstest";
    resourcename = "resourcetest";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("maintenanceConfigurations create test", async function () {
    const res = await client.maintenanceConfigurations.createOrUpdate(resourceGroup, resourcename, {
      duration: "05:00",
      expirationDateTime: "2023-12-31 00:00",
      location: "westus2",
      maintenanceScope: "OSImage",
      namespace: "Microsoft.Maintenance",
      recurEvery: "Day",
      startDateTime: "2023-08-02 08:00",
      timeZone: "Pacific Standard Time",
      visibility: "Custom",
    });
    assert.equal(res.name, resourcename);
  });

  it("maintenanceConfigurations get test", async function () {
    const res = await client.maintenanceConfigurations.get(resourceGroup, resourcename);
    assert.equal(res.name, resourcename);
  });

  it("maintenanceConfigurations list test", async function () {
    const resArray = new Array();
    for await (let item of client.maintenanceConfigurations.list()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("maintenanceConfigurations delete test", async function () {
    const resArray = new Array();
    const res = await client.maintenanceConfigurations.delete(resourceGroup, resourcename);
    for await (let item of client.maintenanceConfigurations.list()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
});
