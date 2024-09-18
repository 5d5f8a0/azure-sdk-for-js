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
 * This sample demonstrates how to Moves charges for a subscription to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @summary Moves charges for a subscription to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingSubscriptionMove.json
 */
async function billingSubscriptionMove() {
  const billingAccountName =
    "a1a9c77e-4cec-4a6c-a089-867d973a6074:a80d3b1f-c626-4e5e-82ed-1173bd91c838_2019-05-31";
  const billingSubscriptionName = "6b96d3f2-9008-4a9d-912f-f87744185aa3";
  const parameters = {
    destinationInvoiceSectionId:
      "/providers/Microsoft.Billing/billingAccounts/a1a9c77e-4cec-4a6c-a089-867d973a6074:a80d3b1f-c626-4e5e-82ed-1173bd91c838_2019-05-31/billingProfiles/ea36e548-1505-41db-bebc-46fff3d37998/invoiceSections/Q7GV-UUVA-PJA-TGB",
  };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.billingSubscriptions.beginMoveAndWait(
    billingAccountName,
    billingSubscriptionName,
    parameters,
  );
  console.log(result);
}

async function main() {
  billingSubscriptionMove();
}

main().catch(console.error);
