/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ThroughputPool } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ThroughputPoolGetOptionalParams,
  ThroughputPoolGetResponse,
  ThroughputPoolResource,
  ThroughputPoolCreateOrUpdateOptionalParams,
  ThroughputPoolCreateOrUpdateResponse,
  ThroughputPoolUpdateOptionalParams,
  ThroughputPoolUpdateResponse,
  ThroughputPoolDeleteOptionalParams,
  ThroughputPoolDeleteResponse,
} from "../models";

/** Class containing ThroughputPool operations. */
export class ThroughputPoolImpl implements ThroughputPool {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class ThroughputPool class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the properties of an existing Azure Cosmos DB Throughput Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param throughputPoolName Cosmos DB Throughput Pool name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    throughputPoolName: string,
    options?: ThroughputPoolGetOptionalParams,
  ): Promise<ThroughputPoolGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, throughputPoolName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates an Azure Cosmos DB ThroughputPool account. The "Update" method is preferred when
   * performing updates on an account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param throughputPoolName Cosmos DB Throughput Pool name.
   * @param body The parameters to provide for the current ThroughputPool.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    throughputPoolName: string,
    body: ThroughputPoolResource,
    options?: ThroughputPoolCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ThroughputPoolCreateOrUpdateResponse>,
      ThroughputPoolCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ThroughputPoolCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, throughputPoolName, body, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ThroughputPoolCreateOrUpdateResponse,
      OperationState<ThroughputPoolCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an Azure Cosmos DB ThroughputPool account. The "Update" method is preferred when
   * performing updates on an account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param throughputPoolName Cosmos DB Throughput Pool name.
   * @param body The parameters to provide for the current ThroughputPool.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    throughputPoolName: string,
    body: ThroughputPoolResource,
    options?: ThroughputPoolCreateOrUpdateOptionalParams,
  ): Promise<ThroughputPoolCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      throughputPoolName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the properties of an existing Azure Cosmos DB Throughput Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param throughputPoolName Cosmos DB Throughput Pool name.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    throughputPoolName: string,
    options?: ThroughputPoolUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ThroughputPoolUpdateResponse>,
      ThroughputPoolUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ThroughputPoolUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, throughputPoolName, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      ThroughputPoolUpdateResponse,
      OperationState<ThroughputPoolUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates the properties of an existing Azure Cosmos DB Throughput Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param throughputPoolName Cosmos DB Throughput Pool name.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    throughputPoolName: string,
    options?: ThroughputPoolUpdateOptionalParams,
  ): Promise<ThroughputPoolUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      throughputPoolName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing Azure Cosmos DB Throughput Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param throughputPoolName Cosmos DB Throughput Pool name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    throughputPoolName: string,
    options?: ThroughputPoolDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ThroughputPoolDeleteResponse>,
      ThroughputPoolDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ThroughputPoolDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, throughputPoolName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      ThroughputPoolDeleteResponse,
      OperationState<ThroughputPoolDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an existing Azure Cosmos DB Throughput Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param throughputPoolName Cosmos DB Throughput Pool name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    throughputPoolName: string,
    options?: ThroughputPoolDeleteOptionalParams,
  ): Promise<ThroughputPoolDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      throughputPoolName,
      options,
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/throughputPools/{throughputPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputPoolResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.throughputPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/throughputPools/{throughputPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputPoolResource,
    },
    201: {
      bodyMapper: Mappers.ThroughputPoolResource,
    },
    202: {
      bodyMapper: Mappers.ThroughputPoolResource,
    },
    204: {
      bodyMapper: Mappers.ThroughputPoolResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.throughputPoolName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/throughputPools/{throughputPoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputPoolResource,
    },
    201: {
      bodyMapper: Mappers.ThroughputPoolResource,
    },
    202: {
      bodyMapper: Mappers.ThroughputPoolResource,
    },
    204: {
      bodyMapper: Mappers.ThroughputPoolResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.throughputPoolName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/throughputPools/{throughputPoolName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.ThroughputPoolDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.ThroughputPoolDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.ThroughputPoolDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.ThroughputPoolDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.throughputPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
