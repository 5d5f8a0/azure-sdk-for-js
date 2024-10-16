// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const createNetworkManagementClient = require("@azure-rest/arm-network").default;
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets a packet capture session by name.
 *
 * @summary Gets a packet capture session by name.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkWatcherPacketCaptureGet.json
 */
async function getPacketCapture() {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "rg1";
  const networkWatcherName = "nw1";
  const packetCaptureName = "pc1";
  const options = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}",
      subscriptionId,
      resourceGroupName,
      networkWatcherName,
      packetCaptureName
    )
    .get(options);
  console.log(result);
}

getPacketCapture().catch(console.error);
