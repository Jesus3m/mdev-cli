export const configFiles = [
    {
        name: "tsconfig.json",
        data:  `{
            "compilerOptions": {
              "target": "es6",
              "lib": ["dom", "dom.iterable", "esnext"],
              "allowJs": true,
              "skipLibCheck": true,
              "strict": true,
              "forceConsistentCasingInFileNames": true,
              "noEmit": true,
              "esModuleInterop": true,
              "module": "esnext",
              "moduleResolution": "node",
              "resolveJsonModule": true,
              "isolatedModules": true,
              "jsx": "preserve",
              "incremental": true,
              "baseUrl": "./src",
              "paths": {
                "@core/*": ["core/*"],
                "@shared/*": ["shared/*"],
                "@components/*": ["shared/components/*"],
                "@context/*": ["shared/context/*"],
                "@hooks/*": ["shared/hooks/*"],
                "@services/*": ["shared/services/*"],
                "@utils/*": ["shared/utils/*"],
            }
            },
            "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
            "exclude": ["node_modules"],
}`
    },
    {
        name: "next.config.js",
        data: `
        /** @type {import('next').NextConfig} */
        module.exports = {
          reactStrictMode: true
}`
    },
    {
        name: "next-env.d.ts",
        data: `/// <reference types="next" />
        /// <reference types="next/image-types/global" />

        // NOTE: This file should not be edited
        // see https://nextjs.org/docs/basic-features/typescript for more information.
        `
    },
     {
        name: "mdev-cli.json",
        data: `{
            "preferArch": false
        }
        `
    },
    {
        name: ".eslintrc.json",
        data: `
        {
            "env": {
                "browser": true,
                "es2021": true
            },
            "extends": [
                "plugin:react/recommended",
                "standard",
                "plugin:@typescript-eslint/recommended",
                "next/core-web-vitals"
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "ecmaFeatures": {
                    "jsx": true
                },
                "ecmaVersion": 12,
                "sourceType": "module"
            },
            "plugins": [
                "react",
                "@typescript-eslint"
            ],
             "rules": {
                "dot-notation": "off",
                "@typescript-eslint/no-explicit-any": 1
               }
        }`
    },
    {
        name: ".babelrc",
        data: `
        {
            "presets": ["next/babel"],
            "plugins": [["styled-components", {
                "ssr": true,
                "pure": true
              }]]
        }`
    },
    {
        name: ".gitignore",
        data: `
        # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
        
        # dependencies
        /node_modules
        /.pnp
        .pnp.js
        
        # testing
        /coverage
        
        # next.js
        /.next/
        /out/
        
        # production
        /build
        
        # misc
        .DS_Store
        *.pem
        
        # debug
        npm-debug.log*
        yarn-debug.log*
        yarn-error.log*
        yarn.lock
        package-lock.json
        
        # local env files
        .env.local
        .env.development.local
        .env.test.local
        .env.production.local
        
        # vercel
        .vercel
        
        # typescript
        *.tsbuildinfo

        `

    }
]

