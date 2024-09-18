/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to The operation to update a capacity reservation group. When updating a capacity reservation group, only tags and sharing profile may be modified.
 *
 * @summary The operation to update a capacity reservation group. When updating a capacity reservation group, only tags and sharing profile may be modified.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/capacityReservationExamples/CapacityReservationGroup_Update_MaximumSet_Gen.json
 */
async function capacityReservationGroupUpdateMaximumSetGen() {
  const subscriptionId = process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const capacityReservationGroupName = "aaaaaaaaaaaaaaaaaaaaaa";
  const parameters = {
    instanceView: {},
    tags: { key5355: "aaa" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.capacityReservationGroups.update(
    resourceGroupName,
    capacityReservationGroupName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to update a capacity reservation group. When updating a capacity reservation group, only tags and sharing profile may be modified.
 *
 * @summary The operation to update a capacity reservation group. When updating a capacity reservation group, only tags and sharing profile may be modified.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/capacityReservationExamples/CapacityReservationGroup_Update_MinimumSet_Gen.json
 */
async function capacityReservationGroupUpdateMinimumSetGen() {
  const subscriptionId = process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const capacityReservationGroupName = "aaaaaaaaaaaaaaaaaaaaaa";
  const parameters = {};
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.capacityReservationGroups.update(
    resourceGroupName,
    capacityReservationGroupName,
    parameters,
  );
  console.log(result);
}

async function main() {
  capacityReservationGroupUpdateMaximumSetGen();
  capacityReservationGroupUpdateMinimumSetGen();
}

main().catch(console.error);
