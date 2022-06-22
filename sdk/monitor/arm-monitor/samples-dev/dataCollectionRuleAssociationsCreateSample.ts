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
  DataCollectionRuleAssociationProxyOnlyResource,
  DataCollectionRuleAssociationsCreateOptionalParams,
  MonitorClient
} from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates an association.
 *
 * @summary Creates or updates an association.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-09-01-preview/examples/DataCollectionRuleAssociationsCreate.json
 */
async function createOrUpdateAssociation() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceUri =
    "subscriptions/703362b3-f278-4e4b-9179-c76eaf41ffc2/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVm";
  const associationName = "myAssociation";
  const body: DataCollectionRuleAssociationProxyOnlyResource = {
    dataCollectionRuleId:
      "/subscriptions/703362b3-f278-4e4b-9179-c76eaf41ffc2/resourceGroups/myResourceGroup/providers/Microsoft.Insights/dataCollectionRules/myCollectionRule"
  };
  const options: DataCollectionRuleAssociationsCreateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.dataCollectionRuleAssociations.create(
    resourceUri,
    associationName,
    options
  );
  console.log(result);
}

createOrUpdateAssociation().catch(console.error);
