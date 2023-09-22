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
import { NotificationHubsManagementClient } from "../src/notificationHubsManagementClient";

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

describe("NotificationHubs test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: NotificationHubsManagementClient;
  let location: string;
  let resourceGroup: string;
  let nameSpaceName: string;
  let notificationhubsName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new NotificationHubsManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({})
    );
    location = "eastus";
    resourceGroup = "myjstest";
    nameSpaceName = "mynamespacexxx";
    notificationhubsName = "mynotificationhubsxxx";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("namespaces create test", async function () {
    const res = await client.namespaces.createOrUpdate(resourceGroup, nameSpaceName, {
      location: location,
    });
    assert.equal(res.name, nameSpaceName);
  });

  it("namespaces get test", async function () {
    const res = await client.namespaces.get(resourceGroup, nameSpaceName);
    assert.equal(res.name, nameSpaceName);
  });

  it("notificationHubs create test", async function () {
    const res = await client.notificationHubs.createOrUpdate(
      resourceGroup,
      nameSpaceName,
      notificationhubsName,
      { location: location }
    );
    assert.equal(res.name, notificationhubsName);
  });

  it("notificationHubs get test", async function () {
    const res = await client.notificationHubs.get(
      resourceGroup,
      nameSpaceName,
      notificationhubsName
    );
    assert.equal(res.name, notificationhubsName);
  });

  it("notificationHubs list test", async function () {
    const resArray = new Array();
    for await (let item of client.notificationHubs.list(resourceGroup, nameSpaceName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("notificationHubs delete test", async function () {
    const res = await client.notificationHubs.delete(
      resourceGroup,
      nameSpaceName,
      notificationhubsName
    );
    const resArray = new Array();
    for await (let item of client.notificationHubs.list(resourceGroup, nameSpaceName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

  it("namespaces delete test", async function () {
    const res = await client.namespaces.beginDeleteAndWait(
      resourceGroup,
      nameSpaceName,
      testPollingOptions
    );
  });
});
