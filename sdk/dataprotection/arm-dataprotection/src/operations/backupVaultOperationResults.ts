/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BackupVaultOperationResults } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataProtectionClient } from "../dataProtectionClient";
import {
  BackupVaultOperationResultsGetOptionalParams,
  BackupVaultOperationResultsGetResponse,
} from "../models";

/** Class containing BackupVaultOperationResults operations. */
export class BackupVaultOperationResultsImpl
  implements BackupVaultOperationResults
{
  private readonly client: DataProtectionClient;

  /**
   * Initialize a new instance of the class BackupVaultOperationResults class.
   * @param client Reference to the service client
   */
  constructor(client: DataProtectionClient) {
    this.client = client;
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param operationId
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    operationId: string,
    options?: BackupVaultOperationResultsGetOptionalParams,
  ): Promise<BackupVaultOperationResultsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, operationId, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/operationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVaultResource,
    },
    202: {
      headersMapper: Mappers.BackupVaultOperationResultsGetHeaders,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.operationId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
