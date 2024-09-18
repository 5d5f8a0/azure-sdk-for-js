// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "../../../vitest.browser.shared.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: [
        "dist-test/browser/test/internal/unit/{,!(browser)/**/}*.spec.js",
        "dist-test/browser/test/public/unit/{,!(browser)/**/}*.spec.js",
      ],
    },
  }),
);
