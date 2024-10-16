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
import { assert } from "chai";
import { Context } from "mocha";
import { StorageActionsManagementClient } from "../src/storageActionsManagementClient";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "88888888-8888-8888-8888-888888888888"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK3493", // .name in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3430", // .id in the body is not a secret and is listed below in the beforeEach section
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("StorageActions test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: StorageActionsManagementClient;
  let location: string;
  let resourceGroup: string;
  let resourcename: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new StorageActionsManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus2euap";
    resourceGroup = "myjstest";
    resourcename = "resourcetest";

  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("storageTasks create test", async function () {
    const res = await client.storageTasks.beginCreateAndWait(
      resourceGroup,
      resourcename,
      {
        identity: {
          type: "SystemAssigned"
        },
        location,
        properties: {
          description: "My Storage task",
          action: {
            else: {
              operations: [
                { name: "DeleteBlob", onFailure: "break", onSuccess: "continue" },
              ],
            },
            if: {
              condition: "[[equals(AccessTier, 'Cool')]]",
              operations: [
                {
                  name: "SetBlobTier",
                  onFailure: "break",
                  onSuccess: "continue",
                  parameters: { tier: "Hot" },
                },
              ],
            },
          },
          enabled: true,
        },
      },
      testPollingOptions);
    assert.equal(res.name, resourcename);
  });

  it("storageTasks get test", async function () {
    const res = await client.storageTasks.get(
      resourceGroup,
      resourcename);
    assert.equal(res.name, resourcename);
  });

  it("storageTasks list test", async function () {
    const resArray = new Array();
    for await (let item of client.storageTasks.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("storageTasks delete test", async function () {
    const resArray = new Array();
    const res = await client.storageTasks.beginDeleteAndWait(resourceGroup, resourcename
    )
    for await (let item of client.storageTasks.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
