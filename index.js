import eslintConfigPrettier from 'eslint-config-prettier';
import bristlefrostConfig from '@bristlefrost/eslint-config';

export default [
    ...bristlefrostConfig,
    eslintConfigPrettier,
];
