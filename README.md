# minishop-nuxt2
miniShop is an open source project that tries to show the features and methods of using nuxt 2, type script, tailwind, etc,in different aspects of an online shop project.
Currently, this project is not complete, but it will be updated over time.

If you are using Nuxt 3, check this [link](https://github.com/atenazr/miniShop).

## Features

### [validation mixin](https://github.com/atenazr/miniShop-nuxt2/blob/nuxt-v2/mixins/validation.ts)
By using options API and the [yup](https://github.com/jquense/yup) package, we create a validation mixin that declares values and errors objects to use in form validation. Functions validate and validateAll are used to evaluate single fields and the overall evaluation of a form, respectively.

[usage](https://github.com/atenazr/miniShop-nuxt2/blob/nuxt-v2/pages/ContactUs.vue)

#### next features 
These features will be added soon: adding product store and configuration store management, styling and adding content to privacy page, connecting contactUs form to server, adding addProduct page,adding auth page and defining user access permissions,...
 

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
