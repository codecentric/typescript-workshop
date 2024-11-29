import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
    {
        ignores: ["**/*.js"],
    },
    {
        files: ["**/*.ts"],
        rules: {
            "@typescript-eslint/explicit-function-return-type": "error",
        },
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintConfigPrettier,
);
