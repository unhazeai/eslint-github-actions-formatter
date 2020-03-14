# eslint-github-actions-formatter
ESLint formatter to create annotations when running tests in GitHub Actions.


## Installation
Add the package as a development dependency

npm:
```
npm install --save-dev @firmnav/eslint-github-actions-formatter
```
yarn:
```
yarn add --dev @firmnav/eslint-github-actions-formatter
```

## Usage
Assuming you have a lint command in your package.json simply add the -f flag pointing to the formatter.
```json
{
    ...
    "scripts": {
        "build": "...",
        "lint": "eslint 'src/**/*.{js,ts,tsx}' -f ./node_modules/@firmnav/eslint-github-actions-formatter/dist/formatter.js",
        "test": "..."
    }
}
```

Then you can run your lint command as you would do normally:
```
$ npm run lint
```

Alternativly move the -f flag to where you invoke your lint command if you only want to use the formatter certain places, like CI.
```
$ npm run lint -f ./node_modules/@firmnav/eslint-github-actions-formatter/dist/formatter.js
```