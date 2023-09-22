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
import { SynapseManagementClient } from "../src/synapseManagementClient";
import { apiVersion } from "../src/models/parameters";

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

describe("Synapse test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: SynapseManagementClient;
  let location: string;
  let resourceGroup: string;
  let workspaceName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new SynapseManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({})
    );
    location = "eastus";
    resourceGroup = "myjstest";
    workspaceName = "workspace1";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("operations checkNameAvailability test", async function () {
    const res = await client.operations.checkNameAvailability({
      name: "workspaceabc",
      type: "Microsoft.Synapse/workspaces",
    });
  });
});
