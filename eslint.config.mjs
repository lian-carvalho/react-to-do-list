import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            globals: globals.node,
        },
        plugins: {
            prettier,
        },
        rules: {
            ...js.configs.recommended.rules,

            // ativa prettier dentro do eslint
            'prettier/prettier': 'error',
        },
    },

    // desativa conflitos entre eslint e prettier
    configPrettier,
]);
