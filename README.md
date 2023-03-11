# ts-rsc-prisma

## How to create Environment

### Install core libraries

```sh
npm install react@experimental react-dom@experimental react-server-dom-webpack@experimental
npm install --save-dev @types/react @types/react-dom typescript webpack webpack-cli
```

```sh
npx tsc --init
```

### Install linter and formatter

```sh
npm init @eslint/config
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · YAML
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```

```sh
npm install --save-dev --save-exact prettier
echo {}> .prettierrc.json
```

```sh
npm install --save-dev eslint-config-prettier
npm install --save-dev eslint-plugin-import eslint-plugin-unused-imports
```

### Create React App

```sh
mkdir public
touch public/index.html
touch public/style.css
```

```sh
mkdir src
touch src/index.js
touch src/App.client.tsx
```

```
npm install react-error-boundary --force
```

```sh
touch webpack.config.js
npm install --save-dev html-webpack-plugin
npm install --save-dev webpack-dev-server
npm install --save-dev ts-loader
```

```sh
npm install --save-dev @babel/core @babel/preset-env "@babel/preset-react" "@babel/preset-typescript" babel-loader
touch .babelrc
```