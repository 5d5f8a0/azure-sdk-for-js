/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SearchManagementClient } = require("@azure/arm-search");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Reconcile network security perimeter configuration for the Azure AI Search resource provider. This triggers a manual resync with network security perimeter configurations by ensuring the search service carries the latest configuration.
 *
 * @summary Reconcile network security perimeter configuration for the Azure AI Search resource provider. This triggers a manual resync with network security perimeter configurations by ensuring the search service carries the latest configuration.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/preview/2024-03-01-preview/examples/NetworkSecurityPerimeterConfigurationsReconcile.json
 */
async function reconcileNspConfig() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const nspConfigName = "00000001-2222-3333-4444-111144444444.assoc1";
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const result = await client.networkSecurityPerimeterConfigurations.beginReconcileAndWait(
    resourceGroupName,
    searchServiceName,
    nspConfigName,
  );
  console.log(result);
}

async function main() {
  reconcileNspConfig();
}

main().catch(console.error);
