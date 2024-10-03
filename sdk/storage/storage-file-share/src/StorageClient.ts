// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { StorageClient as StorageClientContext } from "./generated/src/";
import { StorageContextClient } from "./StorageContextClient";
import type { Pipeline} from "./Pipeline";
import { getCoreClientOptions, getCredentialFromPipeline } from "./Pipeline";
import { escapeURLPath, getAccountNameFromUrl } from "./utils/utils.common";
import type { OperationTracingOptions } from "@azure/core-tracing";
import type { AnonymousCredential } from "../../storage-blob/src/credentials/AnonymousCredential";
import type { StorageSharedKeyCredential } from "../../storage-blob/src/credentials/StorageSharedKeyCredential";
import type { TokenCredential } from "@azure/core-auth";

/**
 * An interface for options common to every remote operation.
 */
export interface CommonOptions {
  tracingOptions?: OperationTracingOptions;
}

/**
 * A StorageClient represents a base client class for ServiceClient, ContainerClient and etc.
 */
export abstract class StorageClient {
  /**
   * URL string value.
   */
  public readonly url: string;
  public readonly accountName: string;

  /**
   * Request policy pipeline.
   *
   * @internal
   */
  protected readonly pipeline: Pipeline;

  /**
   * Credential in the pipeline to authenticate requests to the service, such as AnonymousCredential, StorageSharedKeyCredential.
   * Initialized to an AnonymousCredential if not able to retrieve it from the pipeline.
   *
   * @internal
   */
  protected readonly credential: StorageSharedKeyCredential | AnonymousCredential | TokenCredential;

  /**
   * StorageClient is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator.
   */
  protected readonly storageClientContext: StorageClientContext;

  /**
   * Creates an instance of StorageClient.
   * @param url -
   * @param pipeline -
   */
  protected constructor(url: string, pipeline: Pipeline) {
    // URL should be encoded and only once, protocol layer shouldn't encode URL again
    this.url = escapeURLPath(url);
    this.accountName = getAccountNameFromUrl(url);

    this.pipeline = pipeline;
    this.storageClientContext = new StorageContextClient(this.url, getCoreClientOptions(pipeline));
    // Remove the default content-type in generated code of StorageClientContext
    const storageClientContext = this.storageClientContext as any;
    if (storageClientContext.requestContentType) {
      storageClientContext.requestContentType = undefined;
    }

    const credential = getCredentialFromPipeline(pipeline);
    this.credential = credential;
  }
}
