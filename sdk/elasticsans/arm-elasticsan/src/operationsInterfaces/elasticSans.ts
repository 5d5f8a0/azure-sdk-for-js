/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ElasticSan,
  ElasticSansListBySubscriptionOptionalParams,
  ElasticSansListByResourceGroupOptionalParams,
  ElasticSansCreateOptionalParams,
  ElasticSansCreateResponse,
  ElasticSanUpdate,
  ElasticSansUpdateOptionalParams,
  ElasticSansUpdateResponse,
  ElasticSansDeleteOptionalParams,
  ElasticSansGetOptionalParams,
  ElasticSansGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ElasticSans. */
export interface ElasticSans {
  /**
   * Gets a list of ElasticSans in a subscription
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ElasticSansListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<ElasticSan>;
  /**
   * Gets a list of ElasticSan in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ElasticSansListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ElasticSan>;
  /**
   * Create ElasticSan.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param parameters Elastic San object.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    elasticSanName: string,
    parameters: ElasticSan,
    options?: ElasticSansCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ElasticSansCreateResponse>,
      ElasticSansCreateResponse
    >
  >;
  /**
   * Create ElasticSan.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param parameters Elastic San object.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    parameters: ElasticSan,
    options?: ElasticSansCreateOptionalParams,
  ): Promise<ElasticSansCreateResponse>;
  /**
   * Update a Elastic San.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param parameters Elastic San object.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    elasticSanName: string,
    parameters: ElasticSanUpdate,
    options?: ElasticSansUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ElasticSansUpdateResponse>,
      ElasticSansUpdateResponse
    >
  >;
  /**
   * Update a Elastic San.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param parameters Elastic San object.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    parameters: ElasticSanUpdate,
    options?: ElasticSansUpdateOptionalParams,
  ): Promise<ElasticSansUpdateResponse>;
  /**
   * Delete a Elastic San.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    elasticSanName: string,
    options?: ElasticSansDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a Elastic San.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    options?: ElasticSansDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Get a ElasticSan.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    elasticSanName: string,
    options?: ElasticSansGetOptionalParams,
  ): Promise<ElasticSansGetResponse>;
}
