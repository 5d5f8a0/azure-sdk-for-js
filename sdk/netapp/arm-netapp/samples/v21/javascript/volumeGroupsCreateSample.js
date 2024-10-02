/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create a volume group along with specified volumes
 *
 * @summary Create a volume group along with specified volumes
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2024-03-01/examples/VolumeGroups_Create_Oracle.json
 */
async function volumeGroupsCreateOracle() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] || "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const volumeGroupName = "group1";
  const body = {
    groupMetaData: {
      applicationIdentifier: "OR2",
      applicationType: "ORACLE",
      groupDescription: "Volume group",
    },
    location: "westus",
    volumes: [
      {
        name: "test-ora-data1",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-ora-data1",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "ora-data1",
        zones: ["1"],
      },
      {
        name: "test-ora-data2",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-ora-data2",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "ora-data2",
        zones: ["1"],
      },
      {
        name: "test-ora-data3",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-ora-data3",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "ora-data3",
        zones: ["1"],
      },
      {
        name: "test-ora-data4",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-ora-data4",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "ora-data4",
        zones: ["1"],
      },
      {
        name: "test-ora-data5",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-ora-data5",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "ora-data5",
        zones: ["1"],
      },
      {
        name: "test-ora-data6",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-ora-data6",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "ora-data6",
        zones: ["1"],
      },
      {
        name: "test-ora-data7",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-ora-data7",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "ora-data7",
        zones: ["1"],
      },
      {
        name: "test-ora-data8",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-ora-data8",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "ora-data8",
        zones: ["1"],
      },
      {
        name: "test-ora-log",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-ora-log",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "ora-log",
        zones: ["1"],
      },
      {
        name: "test-ora-log-mirror",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-ora-log-mirror",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "ora-log-mirror",
        zones: ["1"],
      },
      {
        name: "test-ora-binary",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-ora-binary",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "ora-binary",
        zones: ["1"],
      },
      {
        name: "test-ora-backup",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-ora-backup",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "ora-backup",
        zones: ["1"],
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumeGroups.beginCreateAndWait(
    resourceGroupName,
    accountName,
    volumeGroupName,
    body,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a volume group along with specified volumes
 *
 * @summary Create a volume group along with specified volumes
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2024-03-01/examples/VolumeGroups_Create_SapHana.json
 */
async function volumeGroupsCreateSapHana() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] || "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const volumeGroupName = "group1";
  const body = {
    groupMetaData: {
      applicationIdentifier: "SH9",
      applicationType: "SAP-HANA",
      groupDescription: "Volume group",
    },
    location: "westus",
    volumes: [
      {
        name: "test-data-mnt00001",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-data-mnt00001",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        proximityPlacementGroup:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg",
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "data",
      },
      {
        name: "test-log-mnt00001",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-log-mnt00001",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        proximityPlacementGroup:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg",
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "log",
      },
      {
        name: "test-shared",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-shared",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        proximityPlacementGroup:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg",
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "shared",
      },
      {
        name: "test-data-backup",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-data-backup",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        proximityPlacementGroup:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg",
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "data-backup",
      },
      {
        name: "test-log-backup",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "test-log-backup",
        exportPolicy: {
          rules: [
            {
              allowedClients: "0.0.0.0/0",
              cifs: false,
              hasRootAccess: true,
              kerberos5ReadOnly: false,
              kerberos5ReadWrite: false,
              kerberos5IReadOnly: false,
              kerberos5IReadWrite: false,
              kerberos5PReadOnly: false,
              kerberos5PReadWrite: false,
              nfsv3: false,
              nfsv41: true,
              ruleIndex: 1,
              unixReadOnly: true,
              unixReadWrite: true,
            },
          ],
        },
        protocolTypes: ["NFSv4.1"],
        proximityPlacementGroup:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg",
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "log-backup",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumeGroups.beginCreateAndWait(
    resourceGroupName,
    accountName,
    volumeGroupName,
    body,
  );
  console.log(result);
}

async function main() {
  volumeGroupsCreateOracle();
  volumeGroupsCreateSapHana();
}

main().catch(console.error);
