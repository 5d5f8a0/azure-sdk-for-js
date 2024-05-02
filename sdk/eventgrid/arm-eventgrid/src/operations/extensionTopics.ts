/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ExtensionTopics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClient } from "../eventGridManagementClient";
import {
  ExtensionTopicsGetOptionalParams,
  ExtensionTopicsGetResponse,
} from "../models";

/** Class containing ExtensionTopics operations. */
export class ExtensionTopicsImpl implements ExtensionTopics {
  private readonly client: EventGridManagementClient;

  /**
   * Initialize a new instance of the class ExtensionTopics class.
   * @param client Reference to the service client
   */
  constructor(client: EventGridManagementClient) {
    this.client = client;
  }

  /**
   * Get the properties of an extension topic.
   * @param scope The identifier of the resource to which extension topic is queried. The scope can be a
   *              subscription, or a resource group, or a top level resource belonging to a resource provider
   *              namespace. For example, use '/subscriptions/{subscriptionId}/' for a subscription,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   *              for Azure resource.
   * @param options The options parameters.
   */
  get(
    scope: string,
    options?: ExtensionTopicsGetOptionalParams,
  ): Promise<ExtensionTopicsGetResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.EventGrid/extensionTopics/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionTopic,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope1],
  headerParameters: [Parameters.accept],
  serializer,
};
