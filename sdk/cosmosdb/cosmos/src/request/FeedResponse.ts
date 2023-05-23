// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { Constants } from "../common";
import { CosmosHeaders, getRequestChargeIfAny } from "../queryExecutionContext";
import { IndexMetricWriter, IndexUtilizationInfo } from "../indexMetrics";

export class FeedResponse<TResource> {
  constructor(
    public readonly resources: TResource[],
    private readonly headers: CosmosHeaders,
    public readonly hasMoreResults: boolean
  ) {}
  public get continuation(): string {
    return this.continuationToken;
  }
  public get continuationToken(): string {
    return this.headers[Constants.HttpHeaders.Continuation];
  }
  public get queryMetrics(): string {
    return this.headers[Constants.HttpHeaders.QueryMetrics];
  }
  public get requestCharge(): number {
    return getRequestChargeIfAny(this.headers);
  }
  public get activityId(): string {
    return this.headers[Constants.HttpHeaders.ActivityId];
  }
  public get indexMetrics(): string {
    const writer = new IndexMetricWriter();
    const indexUtilizationInfo = IndexUtilizationInfo.createFromString(
      this.headers[Constants.HttpHeaders.IndexUtilization],
      true
    );
    return writer.writeIndexMetrics(indexUtilizationInfo);
  }
}
