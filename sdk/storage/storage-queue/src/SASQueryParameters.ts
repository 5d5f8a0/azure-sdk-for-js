// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SasIPRange, ipRangeToString } from "./SasIPRange";
import { truncatedISO8061Date } from "./utils/utils.common";

/**
 * Protocols for generated SAS.
 */
export enum SASProtocol {
  /**
   * Protocol that allows HTTPS only
   */
  Https = "https",

  /**
   * Protocol that allows both HTTPS and HTTP
   */
  HttpsAndHttp = "https,http",
}

/**
 * Represents the components that make up an Azure Storage SAS' query parameters. This type is not constructed directly
 * by the user; it is only generated by the {@link AccountSASSignatureValues} and {@link QueueSASSignatureValues}
 * types. Once generated, it can be encoded into a {@link String} and appended to a URL directly (though caution should
 * be taken here in case there are existing query parameters, which might affect the appropriate means of appending
 * these query parameters).
 *
 * NOTE: Instances of this class are immutable.
 */
export class SASQueryParameters {
  /**
   * The storage API version.
   */
  public readonly version: string;

  /**
   * Optional. The allowed HTTP protocol(s).
   */
  public readonly protocol?: SASProtocol;

  /**
   * Optional. The start time for this SAS token.
   */
  public readonly startsOn?: Date;

  /**
   * Optional only when identifier is provided. The expiry time for this SAS token.
   */
  public readonly expiresOn?: Date;

  /**
   * Optional only when identifier is provided.
   * Please refer to {@link AccountSASPermissions}, {@link QueueSASPermissions} for more details.
   */
  public readonly permissions?: string;

  /**
   * Optional. The storage services being accessed (only for Account SAS). Please refer to {@link AccountSASServices}
   * for more details.
   */
  public readonly services?: string;

  /**
   * Optional. The storage resource types being accessed (only for Account SAS). Please refer to
   * {@link AccountSASResourceTypes} for more details.
   */
  public readonly resourceTypes?: string;

  /**
   * Optional. The signed identifier (only for {@link QueueSASSignatureValues}).
   *
   * @see https://docs.microsoft.com/en-us/rest/api/storageservices/establishing-a-stored-access-policy
   */
  public readonly identifier?: string;

  /**
   * Optional. The storage queue (only for {@link QueueSASSignatureValues}).
   */
  public readonly resource?: string;

  /**
   * The signature for the SAS token.
   */
  public readonly signature: string;

  /**
   * Inner value of getter ipRange.
   */
  private readonly ipRangeInner?: SasIPRange;

  /**
   * Optional. IP range allowed for this SAS.
   *
   * @readonly
   */
  public get ipRange(): SasIPRange | undefined {
    if (this.ipRangeInner) {
      return {
        end: this.ipRangeInner.end,
        start: this.ipRangeInner.start,
      };
    }
    return undefined;
  }

  /**
   * Creates an instance of SASQueryParameters.
   *
   * @param version - Representing the storage version
   * @param signature - Representing the signature for the SAS token
   * @param permissions - Representing the storage permissions
   * @param services - Representing the storage services being accessed (only for Account SAS)
   * @param resourceTypes - Representing the storage resource types being accessed (only for Account SAS)
   * @param protocol - Representing the allowed HTTP protocol(s)
   * @param startsOn - Representing the start time for this SAS token
   * @param expiresOn - Representing the expiry time for this SAS token
   * @param ipRange - Representing the range of valid IP addresses for this SAS token
   * @param identifier - Representing the signed identifier (only for Service SAS)
   * @param resource - Representing the storage queue (only for Service SAS)
   */
  constructor(
    version: string,
    signature: string,
    permissions?: string,
    services?: string,
    resourceTypes?: string,
    protocol?: SASProtocol,
    startsOn?: Date,
    expiresOn?: Date,
    ipRange?: SasIPRange,
    identifier?: string,
    resource?: string,
  ) {
    this.version = version;
    this.services = services;
    this.resourceTypes = resourceTypes;
    this.expiresOn = expiresOn;
    this.permissions = permissions;
    this.protocol = protocol;
    this.startsOn = startsOn;
    this.ipRangeInner = ipRange;
    this.identifier = identifier;
    this.resource = resource;
    this.signature = signature;
  }

  /**
   * Encodes all SAS query parameters into a string that can be appended to a URL.
   *
   */
  public toString(): string {
    const params: string[] = ["sv", "ss", "srt", "spr", "st", "se", "sip", "si", "sr", "sp", "sig"];
    const queries: string[] = [];

    for (const param of params) {
      switch (param) {
        case "sv":
          this.tryAppendQueryParameter(queries, param, this.version);
          break;
        case "ss":
          this.tryAppendQueryParameter(queries, param, this.services);
          break;
        case "srt":
          this.tryAppendQueryParameter(queries, param, this.resourceTypes);
          break;
        case "spr":
          this.tryAppendQueryParameter(queries, param, this.protocol);
          break;
        case "st":
          this.tryAppendQueryParameter(
            queries,
            param,
            this.startsOn ? truncatedISO8061Date(this.startsOn, false) : undefined,
          );
          break;
        case "se":
          this.tryAppendQueryParameter(
            queries,
            param,
            this.expiresOn ? truncatedISO8061Date(this.expiresOn, false) : undefined,
          );
          break;
        case "sip":
          this.tryAppendQueryParameter(
            queries,
            param,
            this.ipRange ? ipRangeToString(this.ipRange) : undefined,
          );
          break;
        case "si":
          this.tryAppendQueryParameter(queries, param, this.identifier);
          break;
        case "sr":
          this.tryAppendQueryParameter(queries, param, this.resource);
          break;
        case "sp":
          this.tryAppendQueryParameter(queries, param, this.permissions);
          break;
        case "sig":
          this.tryAppendQueryParameter(queries, param, this.signature);
          break;
      }
    }
    return queries.join("&");
  }

  /**
   * A private helper method used to filter and append query key/value pairs into an array.
   *
   * @param queries -
   * @param key -
   * @param value -
   */
  private tryAppendQueryParameter(queries: string[], key: string, value?: string): void {
    if (!value) {
      return;
    }

    key = encodeURIComponent(key);
    value = encodeURIComponent(value);
    if (key.length > 0 && value.length > 0) {
      queries.push(`${key}=${value}`);
    }
  }
}
