/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  SqlVirtualMachineGroup,
  SqlVirtualMachineManagementClient
} from "@azure/arm-sqlvirtualmachine";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a SQL virtual machine group.
 *
 * @summary Creates or updates a SQL virtual machine group.
 * x-ms-original-file: specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/preview/2021-11-01-preview/examples/CreateOrUpdateSqlVirtualMachineGroup.json
 */
async function createsOrUpdatesASqlVirtualMachineGroup() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const sqlVirtualMachineGroupName = "testvmgroup";
  const parameters: SqlVirtualMachineGroup = {
    location: "northeurope",
    sqlImageOffer: "SQL2016-WS2016",
    sqlImageSku: "Enterprise",
    tags: { mytag: "myval" },
    wsfcDomainProfile: {
      clusterBootstrapAccount: "testrpadmin",
      clusterOperatorAccount: "testrp@testdomain.com",
      domainFqdn: "testdomain.com",
      ouPath: "OU=WSCluster,DC=testdomain,DC=com",
      sqlServiceAccount: "sqlservice@testdomain.com",
      storageAccountPrimaryKey: "<primary storage access key>",
      storageAccountUrl: "https://storgact.blob.core.windows.net/"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlVirtualMachineManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.sqlVirtualMachineGroups.beginCreateOrUpdateAndWait(
    resourceGroupName,
    sqlVirtualMachineGroupName,
    parameters
  );
  console.log(result);
}

createsOrUpdatesASqlVirtualMachineGroup().catch(console.error);
