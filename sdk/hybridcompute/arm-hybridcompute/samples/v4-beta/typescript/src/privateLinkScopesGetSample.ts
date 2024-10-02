/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridComputeManagementClient } from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns a Azure Arc PrivateLinkScope.
 *
 * @summary Returns a Azure Arc PrivateLinkScope.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2024-05-20-preview/examples/privateLinkScope/PrivateLinkScopes_Get.json
 */
async function privateLinkScopeGet() {
  const subscriptionId =
    process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] ||
    "86dc51d3-92ed-4d7e-947a-775ea79b4919";
  const resourceGroupName =
    process.env["HYBRIDCOMPUTE_RESOURCE_GROUP"] || "my-resource-group";
  const scopeName = "my-privatelinkscope";
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.privateLinkScopes.get(
    resourceGroupName,
    scopeName,
  );
  console.log(result);
}

async function main() {
  privateLinkScopeGet();
}

main().catch(console.error);
