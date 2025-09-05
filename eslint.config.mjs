import { FlatCompat } from '@eslint/eslintrc'
 
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})
 
const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['react-hooks'],
    rules: {
      
    }
  }),
  {
    ignores: ['node_modules/**', '.next/**', '.swc/**', '__tests__/**'],
  },
]
 
export default eslintConfig