/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BackupPolicyPatch, NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Patch a backup policy for Netapp Account
 *
 * @summary Patch a backup policy for Netapp Account
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-01-01/examples/BackupPolicies_Update.json
 */
async function backupPoliciesUpdate() {
  const subscriptionId = "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = "myRG";
  const accountName = "account1";
  const backupPolicyName = "backupPolicyName";
  const body: BackupPolicyPatch = {
    dailyBackupsToKeep: 5,
    enabled: false,
    location: "westus",
    monthlyBackupsToKeep: 10,
    weeklyBackupsToKeep: 10
  };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.backupPolicies.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    backupPolicyName,
    body
  );
  console.log(result);
}

backupPoliciesUpdate().catch(console.error);
