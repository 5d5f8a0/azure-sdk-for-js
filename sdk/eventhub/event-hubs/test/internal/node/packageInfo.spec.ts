// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "@azure/test-utils";
import fs from "fs";
import { packageJsonInfo } from "../../../src/util/constants";
import path from "path";
import { testWithServiceTypes } from "../../public/utils/testWithServiceTypes";

const should = chai.should();

// Since we currently hardcode package name and version in `constants.ts` file,
// following test is in place to ensure the values in package.json and in this file are consistent

testWithServiceTypes(() => {
  describe("Ensure package name and version are consistent in SDK and package.json", function (): void {
    it("Ensure constants.ts file is consistent with package.json", () => {
      let packageJsonFilePath = path.join(__dirname, "..", "..", "..", "package.json");
      if (!fs.existsSync(packageJsonFilePath)) {
        /** the file path could be a one level highter if the compiled test module is run */
        packageJsonFilePath = path.join(__dirname, "..", "..", "..", "..", "package.json");
      }
      const rawFileContents = fs.readFileSync(packageJsonFilePath, { encoding: "utf-8" });
      const packageJsonContents = JSON.parse(rawFileContents);

      const name = packageJsonContents.name;
      const version = packageJsonContents.version;

      should.equal(
        packageJsonInfo.name,
        name,
        `${name} from package.json is not same as 'name' used in constants.ts`
      );
      should.equal(
        packageJsonInfo.version,
        version,
        `${version} from package.json is not same as 'version' used in constants.ts`
      );
    });
  });
});
