npm i express mongoose morgan dotenv cors
npm i -D typescript @types/express @types/morgan @types/mongoose @types/cors @types/node ts-node-dev


tsconfig.json
-"target": "ES6"
-"rootDir": "./src"
-"outDir": "./dist"

package.json
"scripts": {
    "build": "tsc",
    "dev": "ts-node-dev src/index.ts"
  },