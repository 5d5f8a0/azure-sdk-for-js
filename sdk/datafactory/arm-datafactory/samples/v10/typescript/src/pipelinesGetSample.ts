/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DataFactoryManagementClient } from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a pipeline.
 *
 * @summary Gets a pipeline.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/Pipelines_Get.json
 */
async function pipelinesGet() {
  const subscriptionId = "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const pipelineName = "examplePipeline";
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.pipelines.get(
    resourceGroupName,
    factoryName,
    pipelineName
  );
  console.log(result);
}

pipelinesGet().catch(console.error);
