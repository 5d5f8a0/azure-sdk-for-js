// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { isTokenCredential } from "@azure/core-auth";
import { assert } from "@azure/test-utils";
import { StorageClient } from "../../src/StorageClient";

export function assertClientUsesTokenCredential(client: StorageClient): void {
  assert.isTrue(isTokenCredential(client.credential));
}
