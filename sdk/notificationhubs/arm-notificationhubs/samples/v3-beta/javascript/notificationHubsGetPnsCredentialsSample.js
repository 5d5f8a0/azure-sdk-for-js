/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NotificationHubsManagementClient } = require("@azure/arm-notificationhubs");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists the PNS Credentials associated with a notification hub.
 *
 * @summary Lists the PNS Credentials associated with a notification hub.
 * x-ms-original-file: specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/preview/2023-10-01-preview/examples/NotificationHubs/PnsCredentialsGet.json
 */
async function notificationHubsGetPnsCredentials() {
  const subscriptionId =
    process.env["NOTIFICATIONHUBS_SUBSCRIPTION_ID"] || "29cfa613-cbbc-4512-b1d6-1b3a92c7fa40";
  const resourceGroupName = process.env["NOTIFICATIONHUBS_RESOURCE_GROUP"] || "5ktrial";
  const namespaceName = "nh-sdk-ns";
  const notificationHubName = "nh-sdk-hub";
  const credential = new DefaultAzureCredential();
  const client = new NotificationHubsManagementClient(credential, subscriptionId);
  const result = await client.notificationHubs.getPnsCredentials(
    resourceGroupName,
    namespaceName,
    notificationHubName,
  );
  console.log(result);
}

async function main() {
  notificationHubsGetPnsCredentials();
}

main().catch(console.error);
