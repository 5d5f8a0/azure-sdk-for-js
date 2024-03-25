/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { LookUpResourceId } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftSupport } from "../microsoftSupport";
import {
  LookUpResourceIdRequest,
  LookUpResourceIdPostOptionalParams,
  LookUpResourceIdPostResponse,
} from "../models";

/** Class containing LookUpResourceId operations. */
export class LookUpResourceIdImpl implements LookUpResourceId {
  private readonly client: MicrosoftSupport;

  /**
   * Initialize a new instance of the class LookUpResourceId class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftSupport) {
    this.client = client;
  }

  /**
   * This operation fetches ARM resource id of support resource type.
   * @param lookUpResourceIdRequest Look up resource id request body
   * @param options The options parameters.
   */
  post(
    lookUpResourceIdRequest: LookUpResourceIdRequest,
    options?: LookUpResourceIdPostOptionalParams,
  ): Promise<LookUpResourceIdPostResponse> {
    return this.client.sendOperationRequest(
      { lookUpResourceIdRequest, options },
      postOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Support/lookUpResourceId",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LookUpResourceIdResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.lookUpResourceIdRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
