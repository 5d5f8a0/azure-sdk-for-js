/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { EnrollmentAccounts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClient } from "../billingManagementClient";
import {
  EnrollmentAccount,
  EnrollmentAccountsListByDepartmentNextOptionalParams,
  EnrollmentAccountsListByDepartmentOptionalParams,
  EnrollmentAccountsListByDepartmentResponse,
  EnrollmentAccountsListByBillingAccountNextOptionalParams,
  EnrollmentAccountsListByBillingAccountOptionalParams,
  EnrollmentAccountsListByBillingAccountResponse,
  EnrollmentAccountsGetByDepartmentOptionalParams,
  EnrollmentAccountsGetByDepartmentResponse,
  EnrollmentAccountsGetOptionalParams,
  EnrollmentAccountsGetResponse,
  EnrollmentAccountsListByDepartmentNextResponse,
  EnrollmentAccountsListByBillingAccountNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EnrollmentAccounts operations. */
export class EnrollmentAccountsImpl implements EnrollmentAccounts {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class EnrollmentAccounts class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * Lists the enrollment accounts for a department. The operation is supported only for billing accounts
   * with agreement type Enterprise Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param departmentName The name of the department.
   * @param options The options parameters.
   */
  public listByDepartment(
    billingAccountName: string,
    departmentName: string,
    options?: EnrollmentAccountsListByDepartmentOptionalParams,
  ): PagedAsyncIterableIterator<EnrollmentAccount> {
    const iter = this.listByDepartmentPagingAll(
      billingAccountName,
      departmentName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByDepartmentPagingPage(
          billingAccountName,
          departmentName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByDepartmentPagingPage(
    billingAccountName: string,
    departmentName: string,
    options?: EnrollmentAccountsListByDepartmentOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<EnrollmentAccount[]> {
    let result: EnrollmentAccountsListByDepartmentResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDepartment(
        billingAccountName,
        departmentName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDepartmentNext(
        billingAccountName,
        departmentName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDepartmentPagingAll(
    billingAccountName: string,
    departmentName: string,
    options?: EnrollmentAccountsListByDepartmentOptionalParams,
  ): AsyncIterableIterator<EnrollmentAccount> {
    for await (const page of this.listByDepartmentPagingPage(
      billingAccountName,
      departmentName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the enrollment accounts for a billing account. The operation is supported only for billing
   * accounts with agreement type Enterprise Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  public listByBillingAccount(
    billingAccountName: string,
    options?: EnrollmentAccountsListByBillingAccountOptionalParams,
  ): PagedAsyncIterableIterator<EnrollmentAccount> {
    const iter = this.listByBillingAccountPagingAll(
      billingAccountName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByBillingAccountPagingPage(
          billingAccountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByBillingAccountPagingPage(
    billingAccountName: string,
    options?: EnrollmentAccountsListByBillingAccountOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<EnrollmentAccount[]> {
    let result: EnrollmentAccountsListByBillingAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingAccount(billingAccountName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingAccountNext(
        billingAccountName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingAccountPagingAll(
    billingAccountName: string,
    options?: EnrollmentAccountsListByBillingAccountOptionalParams,
  ): AsyncIterableIterator<EnrollmentAccount> {
    for await (const page of this.listByBillingAccountPagingPage(
      billingAccountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets an enrollment account by department. The operation is supported only for billing accounts with
   * agreement type Enterprise Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param departmentName The name of the department.
   * @param enrollmentAccountName The name of the enrollment account.
   * @param options The options parameters.
   */
  getByDepartment(
    billingAccountName: string,
    departmentName: string,
    enrollmentAccountName: string,
    options?: EnrollmentAccountsGetByDepartmentOptionalParams,
  ): Promise<EnrollmentAccountsGetByDepartmentResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, departmentName, enrollmentAccountName, options },
      getByDepartmentOperationSpec,
    );
  }

  /**
   * Lists the enrollment accounts for a department. The operation is supported only for billing accounts
   * with agreement type Enterprise Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param departmentName The name of the department.
   * @param options The options parameters.
   */
  private _listByDepartment(
    billingAccountName: string,
    departmentName: string,
    options?: EnrollmentAccountsListByDepartmentOptionalParams,
  ): Promise<EnrollmentAccountsListByDepartmentResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, departmentName, options },
      listByDepartmentOperationSpec,
    );
  }

  /**
   * Gets an enrollment account by ID. The operation is supported only for billing accounts with
   * agreement type Enterprise Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param enrollmentAccountName The name of the enrollment account.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    enrollmentAccountName: string,
    options?: EnrollmentAccountsGetOptionalParams,
  ): Promise<EnrollmentAccountsGetResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, enrollmentAccountName, options },
      getOperationSpec,
    );
  }

  /**
   * Lists the enrollment accounts for a billing account. The operation is supported only for billing
   * accounts with agreement type Enterprise Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  private _listByBillingAccount(
    billingAccountName: string,
    options?: EnrollmentAccountsListByBillingAccountOptionalParams,
  ): Promise<EnrollmentAccountsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, options },
      listByBillingAccountOperationSpec,
    );
  }

  /**
   * ListByDepartmentNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param departmentName The name of the department.
   * @param nextLink The nextLink from the previous successful call to the ListByDepartment method.
   * @param options The options parameters.
   */
  private _listByDepartmentNext(
    billingAccountName: string,
    departmentName: string,
    nextLink: string,
    options?: EnrollmentAccountsListByDepartmentNextOptionalParams,
  ): Promise<EnrollmentAccountsListByDepartmentNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, departmentName, nextLink, options },
      listByDepartmentNextOperationSpec,
    );
  }

  /**
   * ListByBillingAccountNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingAccount method.
   * @param options The options parameters.
   */
  private _listByBillingAccountNext(
    billingAccountName: string,
    nextLink: string,
    options?: EnrollmentAccountsListByBillingAccountNextOptionalParams,
  ): Promise<EnrollmentAccountsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, nextLink, options },
      listByBillingAccountNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getByDepartmentOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/enrollmentAccounts/{enrollmentAccountName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnrollmentAccount,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.departmentName,
    Parameters.enrollmentAccountName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByDepartmentOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/enrollmentAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnrollmentAccountListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.departmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnrollmentAccount,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.enrollmentAccountName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByBillingAccountOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnrollmentAccountListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
  ],
  urlParameters: [Parameters.$host, Parameters.billingAccountName],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByDepartmentNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnrollmentAccountListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.departmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByBillingAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnrollmentAccountListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
