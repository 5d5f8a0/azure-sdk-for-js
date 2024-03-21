/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NewRelicObservability } = require("@azure/arm-newrelicobservability");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List the app service resources currently being monitored by the NewRelic resource.
 *
 * @summary List the app service resources currently being monitored by the NewRelic resource.
 * x-ms-original-file: specification/newrelic/resource-manager/NewRelic.Observability/stable/2024-01-01/examples/Monitors_ListAppServices_MaximumSet_Gen.json
 */
async function monitorsListAppServicesMaximumSetGen() {
  const subscriptionId =
    process.env["NEWRELICOBSERVABILITY_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["NEWRELICOBSERVABILITY_RESOURCE_GROUP"] || "rgNewRelic";
  const monitorName = "fhcjxnxumkdlgpwanewtkdnyuz";
  const request = {
    azureResourceIds: [
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rgNewRelic/providers/NewRelic.Observability/monitors/fhcjxnxumkdlgpwanewtkdnyuz",
    ],
    userEmail: "ruxvg@xqkmdhrnoo.hlmbpm",
  };
  const credential = new DefaultAzureCredential();
  const client = new NewRelicObservability(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.monitors.listAppServices(resourceGroupName, monitorName, request)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List the app service resources currently being monitored by the NewRelic resource.
 *
 * @summary List the app service resources currently being monitored by the NewRelic resource.
 * x-ms-original-file: specification/newrelic/resource-manager/NewRelic.Observability/stable/2024-01-01/examples/Monitors_ListAppServices_MinimumSet_Gen.json
 */
async function monitorsListAppServicesMinimumSetGen() {
  const subscriptionId =
    process.env["NEWRELICOBSERVABILITY_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["NEWRELICOBSERVABILITY_RESOURCE_GROUP"] || "rgNewRelic";
  const monitorName = "fhcjxnxumkdlgpwanewtkdnyuz";
  const request = {
    azureResourceIds: [
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rgNewRelic/providers/NewRelic.Observability/monitors/fhcjxnxumkdlgpwanewtkdnyuz",
    ],
    userEmail: "ruxvg@xqkmdhrnoo.hlmbpm",
  };
  const credential = new DefaultAzureCredential();
  const client = new NewRelicObservability(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.monitors.listAppServices(resourceGroupName, monitorName, request)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  monitorsListAppServicesMaximumSetGen();
  monitorsListAppServicesMinimumSetGen();
}

main().catch(console.error);
