/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ConnectedPartnerResourcesListFormat,
  ConnectedPartnerResourcesListOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ConnectedPartnerResources. */
export interface ConnectedPartnerResources {
  /**
   * List of all active deployments that are associated with the marketplace subscription linked to the
   * given monitor.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the Monitors resource
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    monitorName: string,
    options?: ConnectedPartnerResourcesListOptionalParams,
  ): PagedAsyncIterableIterator<ConnectedPartnerResourcesListFormat>;
}
