// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to generate images from prompts using Azure OpenAI Batch Image Generation.
 *
 * @summary generates images from prompts using Azure OpenAI Batch Image Generation.
 * @azsdk-weight 100
 */

import { AzureOpenAI } from "openai";
import { DefaultAzureCredential, getBearerTokenProvider } from "@azure/identity";

// Load the .env file if it exists
import "dotenv/config";

// Your Azure OpenAI endpoint
const endpoint = process.env["AZURE_OPENAI_SWEDENCENTRAL_ENDPOINT"] || "<endpoint>";

// The prompt to generate images from
const prompt = "a monkey eating a banana";
const size = "1024x1024";

// The number of images to generate
const n = 1;

export async function main() {
  console.log("== Batch Image Generation ==");

  const scope = "https://cognitiveservices.azure.com/.default";
  const azureADTokenProvider = getBearerTokenProvider(new DefaultAzureCredential(), scope);
  const deployment = "dall-e-3";
  const apiVersion = "2024-07-01-preview";
  const client = new AzureOpenAI({ endpoint, azureADTokenProvider, deployment, apiVersion });
  const results = await client.images.generate({ prompt, model: "", n, size });

  for (const image of results.data) {
    console.log(`Image generation result URL: ${image.url}`);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
