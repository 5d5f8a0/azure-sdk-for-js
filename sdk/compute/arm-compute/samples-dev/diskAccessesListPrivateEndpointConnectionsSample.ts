/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to List information about private endpoint connections under a disk access resource
 *
 * @summary List information about private endpoint connections under a disk access resource
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2022-03-02/DiskRP/examples/diskAccessExamples/DiskAccessPrivateEndpointConnection_ListByDiskAccess.json
 */
async function getInformationAboutAPrivateEndpointConnectionUnderADiskAccessResource() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskAccessName = "myDiskAccess";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.diskAccesses.listPrivateEndpointConnections(
    resourceGroupName,
    diskAccessName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getInformationAboutAPrivateEndpointConnectionUnderADiskAccessResource().catch(
  console.error
);
