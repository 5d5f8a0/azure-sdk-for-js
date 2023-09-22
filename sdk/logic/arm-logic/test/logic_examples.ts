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
import { LogicManagementClient } from "../src/logicManagementClient";

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

describe("Logic test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: LogicManagementClient;
  let location: string;
  let resourceGroupName: string;
  let workflowName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new LogicManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({})
    );
    location = "eastus";
    resourceGroupName = "myjstest";
    workflowName = "myworkflowxxx";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("workflows create test", async function () {
    const res = await client.workflows.createOrUpdate(resourceGroupName, workflowName, {
      location: location,
      definition: {
        $schema:
          "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
        contentVersion: "1.0.0.0",
        parameters: {},
        triggers: {},
        actions: {},
        outputs: {},
      },
    });
    assert.equal(res.name, workflowName);
  });

  it("workflows get test", async function () {
    const res = await client.workflows.get(resourceGroupName, workflowName);
    assert.equal(res.name, workflowName);
  });

  it("workflows listByResourceGroup test", async function () {
    const resArray = new Array();
    for await (let item of client.workflows.listByResourceGroup(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("workflows delete test", async function () {
    const res = await client.workflows.delete(resourceGroupName, workflowName);
    const resArray = new Array();
    for await (let item of client.workflows.listByResourceGroup(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
});
