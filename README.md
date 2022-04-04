## ESLint - Pluggable JavaScript linter

ESLint is a popular linter for the JavaScript programming language. It helps to analyze your code to fix the error and intelligently understand the syntax error in JS code, and a developer can write their own rules to make your code flexible and optimal. Shortly we can say it is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code

## Installation Globally

```js

npm install -g eslint

```

Also you can set up a configuration file with the eslint --init command

```js

eslint --init

```

You can lint file using command

```js

eslint yourfile.js

```

## Installing ESLint locally

```js

npm install eslint --save-dev

```

After that you can make directly .eslintrc file and use default extension `eslint:recommended` but also can use automatically configuration using command

```js

npm init @eslint/config

```

If you want to analyze all files once then add below line in scripts
and You can also use different extension after -fix like .js jsx etc

```js

  "lint": "eslint --fix ."

```

When configuration and lint added in package.json then you can run script. It will fix issues automatically.

```js

 npm run lint

```

.eslintignore file will ingnore all files which you will add in this file.

## EsLint Custom rules

`eslint:recommended` active default rules but you can override these rules according to your design patter.
For more detail please check official [documentation](https://eslint.org/docs/rules/)

## ESlint dev extension

ESlint <img src="https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/2.2.3/1642067257652/Microsoft.VisualStudio.Services.Icons.Default" width="30"> help user to identify problems easily. You can also use it during development.

## ESlint Plugins

Eslint plugins are group of rules which provide additional rules definitions. I added additional plugins and activate JSX for your understanding. Please check in `.eslintrc`

## Note

Soon, I will add React JS best practices for you. Please follow me in github and contact me if you need any help. Thanks
