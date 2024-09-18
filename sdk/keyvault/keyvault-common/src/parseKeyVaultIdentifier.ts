// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * The parsed components of a Key Vault entity identifier.
 */
export interface KeyVaultEntityIdentifier {
  /**
   * The vault URI.
   */
  vaultUrl: string;
  /**
   * The version of key/secret/certificate. May be undefined.
   */
  version?: string;
  /**
   * The name of key/secret/certificate.
   */
  name: string;
}

/**
 * Parses a Key Vault identifier into its components.
 *
 * @param collection - The collection of the Key Vault identifier.
 * @param identifier - The Key Vault identifier to be parsed.
 */
export function parseKeyVaultIdentifier(
  collection: string,
  identifier: string | undefined,
): KeyVaultEntityIdentifier {
  if (typeof collection !== "string" || !(collection = collection.trim())) {
    throw new Error("Invalid collection argument");
  }

  if (typeof identifier !== "string" || !(identifier = identifier.trim())) {
    throw new Error("Invalid identifier argument");
  }

  let baseUri;
  try {
    baseUri = new URL(identifier);
  } catch (e: any) {
    throw new Error(`Invalid ${collection} identifier: ${identifier}. Not a valid URI`);
  }

  // Path is of the form '/collection/name[/version]'
  const segments = (baseUri.pathname || "").split("/");
  if (segments.length !== 3 && segments.length !== 4) {
    throw new Error(
      `Invalid ${collection} identifier: ${identifier}. Bad number of segments: ${segments.length}`,
    );
  }

  if (collection !== segments[1]) {
    throw new Error(
      `Invalid ${collection} identifier: ${identifier}. segment [1] should be "${collection}", found "${segments[1]}"`,
    );
  }

  const vaultUrl = `${baseUri.protocol}//${baseUri.host}`;
  const name = segments[2];
  const version = segments.length === 4 ? segments[3] : undefined;
  return {
    vaultUrl,
    name,
    version,
  };
}
