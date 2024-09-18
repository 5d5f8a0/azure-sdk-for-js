/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { BillingManagementClient } = require("@azure/arm-billing");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets a subscription by its alias ID.  The operation is supported for seat based billing subscriptions.
 *
 * @summary Gets a subscription by its alias ID.  The operation is supported for seat based billing subscriptions.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingSubscriptionAliasGet.json
 */
async function billingSubscriptionAliasGet() {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31";
  const aliasName = "c356b7c7-7545-4686-b843-c1a49cf853fc";
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.billingSubscriptionsAliases.get(billingAccountName, aliasName);
  console.log(result);
}

async function main() {
  billingSubscriptionAliasGet();
}

main().catch(console.error);
