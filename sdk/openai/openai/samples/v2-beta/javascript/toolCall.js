// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to define and call functions with chat completions.
 *
 * @summary get chat completions with functions.
 */

const { AzureOpenAI } = require("openai");
const { DefaultAzureCredential, getBearerTokenProvider } = require("@azure/identity");

// Load the .env file if it exists
require("dotenv/config");

// Your Azure OpenAI endpoint
const endpoint = process.env["AZURE_OPENAI_ENDPOINT"] || "<endpoint>";

const getCurrentWeather = {
  name: "get_current_weather",
  description: "Get the current weather in a given location",
  parameters: {
    type: "object",
    properties: {
      location: {
        type: "string",
        description: "The city and state, e.g. San Francisco, CA",
      },
      unit: {
        type: "string",
        enum: ["celsius", "fahrenheit"],
      },
    },
    required: ["location"],
  },
};

async function main() {
  console.log("== Chat Completions Sample with Tool Calling ==");

  const scope = "https://cognitiveservices.azure.com/.default";
  const azureADTokenProvider = getBearerTokenProvider(new DefaultAzureCredential(), scope);
  const deployment = "gpt-4-turbo";
  const apiVersion = "2024-07-01-preview";
  const client = new AzureOpenAI({ endpoint, azureADTokenProvider, deployment, apiVersion });
  const result = await client.chat.completions.create({
    messages: [{ role: "user", content: "What's the weather like in Boston?" }],
    model: "",
    tools: [
      {
        type: "function",
        function: getCurrentWeather,
      },
    ],
  });

  for (const choice of result.choices) {
    console.log(choice.message?.tool_calls);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };
