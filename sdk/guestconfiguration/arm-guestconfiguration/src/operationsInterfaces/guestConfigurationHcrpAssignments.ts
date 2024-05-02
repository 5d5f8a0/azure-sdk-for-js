/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  GuestConfigurationAssignment,
  GuestConfigurationHcrpAssignmentsListOptionalParams,
  GuestConfigurationHcrpAssignmentsCreateOrUpdateOptionalParams,
  GuestConfigurationHcrpAssignmentsCreateOrUpdateResponse,
  GuestConfigurationHcrpAssignmentsGetOptionalParams,
  GuestConfigurationHcrpAssignmentsGetResponse,
  GuestConfigurationHcrpAssignmentsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GuestConfigurationHcrpAssignments. */
export interface GuestConfigurationHcrpAssignments {
  /**
   * List all guest configuration assignments for an ARC machine.
   * @param resourceGroupName The resource group name.
   * @param machineName The name of the ARC machine.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    machineName: string,
    options?: GuestConfigurationHcrpAssignmentsListOptionalParams,
  ): PagedAsyncIterableIterator<GuestConfigurationAssignment>;
  /**
   * Creates an association between a ARC machine and guest configuration
   * @param guestConfigurationAssignmentName Name of the guest configuration assignment.
   * @param resourceGroupName The resource group name.
   * @param machineName The name of the ARC machine.
   * @param parameters Parameters supplied to the create or update guest configuration assignment.
   * @param options The options parameters.
   */
  createOrUpdate(
    guestConfigurationAssignmentName: string,
    resourceGroupName: string,
    machineName: string,
    parameters: GuestConfigurationAssignment,
    options?: GuestConfigurationHcrpAssignmentsCreateOrUpdateOptionalParams,
  ): Promise<GuestConfigurationHcrpAssignmentsCreateOrUpdateResponse>;
  /**
   * Get information about a guest configuration assignment
   * @param resourceGroupName The resource group name.
   * @param guestConfigurationAssignmentName The guest configuration assignment name.
   * @param machineName The name of the ARC machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    guestConfigurationAssignmentName: string,
    machineName: string,
    options?: GuestConfigurationHcrpAssignmentsGetOptionalParams,
  ): Promise<GuestConfigurationHcrpAssignmentsGetResponse>;
  /**
   * Delete a guest configuration assignment
   * @param resourceGroupName The resource group name.
   * @param guestConfigurationAssignmentName Name of the guest configuration assignment
   * @param machineName The name of the ARC machine.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    guestConfigurationAssignmentName: string,
    machineName: string,
    options?: GuestConfigurationHcrpAssignmentsDeleteOptionalParams,
  ): Promise<void>;
}
