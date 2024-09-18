/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BillingRequest, BillingManagementClient } from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a billing request.
 *
 * @summary Create or update a billing request.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingRequestsCreateOrUpdate.json
 */
async function billingRequestsCreateOrUpdate() {
  const billingRequestName = "00000000-0000-0000-0000-000000000000";
  const parameters: BillingRequest = {
    properties: {
      type: "RoleAssignment",
      additionalInformation: { roleId: "40000000-aaaa-bbbb-cccc-200000000006" },
      decisionReason: "New team member",
      requestScope:
        "/providers/Microsoft.Billing/billingAccounts/00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31/billingProfiles/xxxx-xxxx-xxx-xxx",
      status: "Pending",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.billingRequests.beginCreateOrUpdateAndWait(
    billingRequestName,
    parameters,
  );
  console.log(result);
}

async function main() {
  billingRequestsCreateOrUpdate();
}

main().catch(console.error);
