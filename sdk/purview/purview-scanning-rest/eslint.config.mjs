import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

export default [
  ...azsdkEslint.configs.recommended,
  {
    rules: {
      "@azure/azure-sdk/ts-modules-only-named": "warn",
    },
  },
];
