/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const WorkspaceResourceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceResourceProperties",
    modelProperties: {
      providers: {
        serializedName: "providers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Provider",
            },
          },
        },
      },
      usable: {
        serializedName: "usable",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      storageAccount: {
        serializedName: "storageAccount",
        type: {
          name: "String",
        },
      },
      endpointUri: {
        serializedName: "endpointUri",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      apiKeyEnabled: {
        serializedName: "apiKeyEnabled",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const Provider: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Provider",
    modelProperties: {
      providerId: {
        serializedName: "providerId",
        type: {
          name: "String",
        },
      },
      providerSku: {
        serializedName: "providerSku",
        type: {
          name: "String",
        },
      },
      instanceUri: {
        serializedName: "instanceUri",
        type: {
          name: "String",
        },
      },
      applicationName: {
        serializedName: "applicationName",
        type: {
          name: "String",
        },
      },
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String",
        },
      },
      resourceUsageId: {
        serializedName: "resourceUsageId",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const QuantumWorkspaceIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuantumWorkspaceIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData",
        },
      },
    },
  },
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String",
        },
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String",
        },
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime",
        },
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String",
        },
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String",
        },
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail",
        },
      },
    },
  },
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail",
            },
          },
        },
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo",
            },
          },
        },
      },
    },
  },
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const TagsObject: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagsObject",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
    },
  },
};

export const WorkspaceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QuantumWorkspace",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OfferingsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OfferingsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProviderDescription",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ProviderDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderDescription",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ProviderProperties",
        },
      },
    },
  },
};

export const ProviderProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderProperties",
    modelProperties: {
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      providerType: {
        serializedName: "providerType",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      company: {
        serializedName: "company",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      defaultEndpoint: {
        serializedName: "defaultEndpoint",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      aad: {
        serializedName: "aad",
        type: {
          name: "Composite",
          className: "ProviderPropertiesAad",
        },
      },
      managedApplication: {
        serializedName: "managedApplication",
        type: {
          name: "Composite",
          className: "ProviderPropertiesManagedApplication",
        },
      },
      targets: {
        serializedName: "targets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TargetDescription",
            },
          },
        },
      },
      skus: {
        serializedName: "skus",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkuDescription",
            },
          },
        },
      },
      quotaDimensions: {
        serializedName: "quotaDimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QuotaDimension",
            },
          },
        },
      },
      pricingDimensions: {
        serializedName: "pricingDimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PricingDimension",
            },
          },
        },
      },
    },
  },
};

export const ProviderPropertiesAad: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderPropertiesAad",
    modelProperties: {
      applicationId: {
        serializedName: "applicationId",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ProviderPropertiesManagedApplication: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ProviderPropertiesManagedApplication",
      modelProperties: {
        publisherId: {
          serializedName: "publisherId",
          readOnly: true,
          type: {
            name: "String",
          },
        },
        offerId: {
          serializedName: "offerId",
          readOnly: true,
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const TargetDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TargetDescription",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        type: {
          name: "String",
        },
      },
      acceptedDataFormats: {
        serializedName: "acceptedDataFormats",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      acceptedContentEncodings: {
        serializedName: "acceptedContentEncodings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};

export const SkuDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkuDescription",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      version: {
        serializedName: "version",
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        type: {
          name: "String",
        },
      },
      restrictedAccessUri: {
        serializedName: "restrictedAccessUri",
        type: {
          name: "String",
        },
      },
      autoAdd: {
        serializedName: "autoAdd",
        type: {
          name: "Boolean",
        },
      },
      targets: {
        serializedName: "targets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      quotaDimensions: {
        serializedName: "quotaDimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QuotaDimension",
            },
          },
        },
      },
      pricingDetails: {
        serializedName: "pricingDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PricingDetail",
            },
          },
        },
      },
    },
  },
};

export const QuotaDimension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuotaDimension",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      scope: {
        serializedName: "scope",
        type: {
          name: "String",
        },
      },
      period: {
        serializedName: "period",
        type: {
          name: "String",
        },
      },
      quota: {
        serializedName: "quota",
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        type: {
          name: "String",
        },
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String",
        },
      },
      unitPlural: {
        serializedName: "unitPlural",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PricingDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PricingDetail",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PricingDimension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PricingDimension",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OperationsList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationsList",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation",
            },
          },
        },
      },
    },
  },
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean",
        },
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay",
        },
      },
    },
  },
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String",
        },
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String",
        },
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CheckNameAvailabilityParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityParameters",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      type: {
        defaultValue: "Microsoft.Quantum/Workspaces",
        serializedName: "type",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CheckNameAvailabilityResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResult",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean",
        },
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ListKeysResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ListKeysResult",
    modelProperties: {
      apiKeyEnabled: {
        serializedName: "apiKeyEnabled",
        type: {
          name: "Boolean",
        },
      },
      primaryKey: {
        serializedName: "primaryKey",
        type: {
          name: "Composite",
          className: "ApiKey",
        },
      },
      secondaryKey: {
        serializedName: "secondaryKey",
        type: {
          name: "Composite",
          className: "ApiKey",
        },
      },
      primaryConnectionString: {
        serializedName: "primaryConnectionString",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      secondaryConnectionString: {
        serializedName: "secondaryConnectionString",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ApiKey: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiKey",
    modelProperties: {
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime",
        },
      },
      key: {
        serializedName: "key",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const APIKeys: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "APIKeys",
    modelProperties: {
      keys: {
        serializedName: "keys",
        type: {
          name: "Sequence",
          element: {
            defaultValue: "Primary",
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const QuantumWorkspace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuantumWorkspace",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "WorkspaceResourceProperties",
        },
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "QuantumWorkspaceIdentity",
        },
      },
    },
  },
};
