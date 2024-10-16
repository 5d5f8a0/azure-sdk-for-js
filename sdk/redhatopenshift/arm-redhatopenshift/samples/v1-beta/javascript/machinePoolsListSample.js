/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureRedHatOpenShiftClient } = require("@azure/arm-redhatopenshift");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to The operation returns properties of each MachinePool.
 *
 * @summary The operation returns properties of each MachinePool.
 * x-ms-original-file: specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/openshiftclusters/stable/2023-11-22/examples/MachinePools_List.json
 */
async function listsMachinePoolsThatBelongToThatAzureRedHatOpenShiftCluster() {
  const subscriptionId = process.env["REDHATOPENSHIFT_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["REDHATOPENSHIFT_RESOURCE_GROUP"] || "resourceGroup";
  const resourceName = "resourceName";
  const credential = new DefaultAzureCredential();
  const client = new AzureRedHatOpenShiftClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.machinePools.list(resourceGroupName, resourceName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listsMachinePoolsThatBelongToThatAzureRedHatOpenShiftCluster();
}

main().catch(console.error);
