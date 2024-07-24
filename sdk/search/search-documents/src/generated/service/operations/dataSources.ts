/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { DataSources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SearchServiceClient } from "../searchServiceClient";
import {
  SearchIndexerDataSource,
  DataSourcesCreateOrUpdateOptionalParams,
  DataSourcesCreateOrUpdateResponse,
  DataSourcesDeleteOptionalParams,
  DataSourcesGetOptionalParams,
  DataSourcesGetResponse,
  DataSourcesListOptionalParams,
  DataSourcesListResponse,
  DataSourcesCreateOptionalParams,
  DataSourcesCreateResponse,
} from "../models";

/** Class containing DataSources operations. */
export class DataSourcesImpl implements DataSources {
  private readonly client: SearchServiceClient;

  /**
   * Initialize a new instance of the class DataSources class.
   * @param client Reference to the service client
   */
  constructor(client: SearchServiceClient) {
    this.client = client;
  }

  /**
   * Creates a new datasource or updates a datasource if it already exists.
   * @param dataSourceName The name of the datasource to create or update.
   * @param dataSource The definition of the datasource to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    dataSourceName: string,
    dataSource: SearchIndexerDataSource,
    options?: DataSourcesCreateOrUpdateOptionalParams,
  ): Promise<DataSourcesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { dataSourceName, dataSource, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes a datasource.
   * @param dataSourceName The name of the datasource to delete.
   * @param options The options parameters.
   */
  delete(
    dataSourceName: string,
    options?: DataSourcesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { dataSourceName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Retrieves a datasource definition.
   * @param dataSourceName The name of the datasource to retrieve.
   * @param options The options parameters.
   */
  get(
    dataSourceName: string,
    options?: DataSourcesGetOptionalParams,
  ): Promise<DataSourcesGetResponse> {
    return this.client.sendOperationRequest(
      { dataSourceName, options },
      getOperationSpec,
    );
  }

  /**
   * Lists all datasources available for a search service.
   * @param options The options parameters.
   */
  list(
    options?: DataSourcesListOptionalParams,
  ): Promise<DataSourcesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Creates a new datasource.
   * @param dataSource The definition of the datasource to create.
   * @param options The options parameters.
   */
  create(
    dataSource: SearchIndexerDataSource,
    options?: DataSourcesCreateOptionalParams,
  ): Promise<DataSourcesCreateResponse> {
    return this.client.sendOperationRequest(
      { dataSource, options },
      createOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/datasources('{dataSourceName}')",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SearchIndexerDataSource,
    },
    201: {
      bodyMapper: Mappers.SearchIndexerDataSource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.dataSource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.dataSourceName],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.prefer,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/datasources('{dataSourceName}')",
  httpMethod: "DELETE",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.dataSourceName],
  headerParameters: [
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/datasources('{dataSourceName}')",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SearchIndexerDataSource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.dataSourceName],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/datasources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListDataSourcesResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.select],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/datasources",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.SearchIndexerDataSource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.dataSource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
