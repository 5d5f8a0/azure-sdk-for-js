/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists IKE Security Associations for the virtual network gateway connection in the specified resource group.
 *
 * @summary Lists IKE Security Associations for the virtual network gateway connection in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-03-01/examples/VirtualNetworkGatewayConnectionGetIkeSas.json
 */
async function getVirtualNetworkGatewayConnectionIkeSa() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualNetworkGatewayConnectionName = "vpngwcn1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.virtualNetworkGatewayConnections.beginGetIkeSasAndWait(
      resourceGroupName,
      virtualNetworkGatewayConnectionName,
    );
  console.log(result);
}

async function main() {
  getVirtualNetworkGatewayConnectionIkeSa();
}

main().catch(console.error);
