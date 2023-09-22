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
import { ManagementLinkClient } from "../src/managementLinkClient";
import { ResourceManagementClient } from "@azure/arm-resources";

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

describe("Links test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: ManagementLinkClient;
  let resources_client: ResourceManagementClient;
  let location: string;
  let resourceGroup: string;
  let linksName: string;
  let resourceName: string;
  let resource2Id: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new ManagementLinkClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({})
    );
    resources_client = new ResourceManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({})
    );
    location = "eastus";
    resourceGroup = "myjstest";
    linksName = "myLink";
    resourceName = "myresourcezzz";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  async function create_resourceId() {
    const result = await resources_client.resources.beginCreateOrUpdateAndWait(
      resourceGroup,
      "Microsoft.Compute",
      "",
      "availabilitySets",
      resourceName,
      "2019-07-01",
      { location: "eastus" },
      testPollingOptions
    );
    console.log(result);
    return result;
  }

  async function create_resourceId2() {
    const result = await resources_client.resources.beginCreateOrUpdateAndWait(
      resourceGroup,
      "Microsoft.Compute",
      "",
      "availabilitySets",
      resourceName + "2",
      "2019-07-01",
      { location: "eastus" },
      testPollingOptions
    );
    console.log(result);
    return result;
  }

  it("resourceLinks create test", async function () {
    await create_resourceId();
    await create_resourceId2();
    const res = await client.resourceLinks.createOrUpdate(
      "/subscriptions/" +
        subscriptionId +
        "/resourceGroups/" +
        resourceGroup +
        "/providers/Microsoft.Compute/availabilitySets/myresourcezzz/providers/Microsoft.Resources/links/" +
        linksName,
      {
        properties: {
          targetId:
            "/subscriptions/" +
            subscriptionId +
            "/resourceGroups/" +
            resourceGroup +
            "/providers/Microsoft.Compute/availabilitySets/myresourcezzz2",
          notes: "Testing links",
        },
      }
    );
    assert.equal(res.name, linksName);
  });

  it("resourceLinks get test", async function () {
    const linkId =
      "/subscriptions/" +
      subscriptionId +
      "/resourceGroups/" +
      resourceGroup +
      "/providers/Microsoft.Compute/availabilitySets/" +
      resourceName +
      "/providers/Microsoft.Resources/links/" +
      linksName;
    const res = await client.resourceLinks.get(linkId);
    assert.equal(res.name, linksName);
  });

  it("resourceLinks list test", async function () {
    const resArray = new Array();
    for await (const item of client.resourceLinks.listAtSubscription()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("resourceLinks delete test", async function () {
    const linkId =
      "/subscriptions/" +
      subscriptionId +
      "/resourceGroups/" +
      resourceGroup +
      "/providers/Microsoft.Compute/availabilitySets/" +
      resourceName +
      "/providers/Microsoft.Resources/links/" +
      linksName;
    const res = await client.resourceLinks.delete(linkId);
    const resArray = new Array();
    for await (const item of client.resourceLinks.listAtSubscription()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
});
