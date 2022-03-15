# Setup

1. `npm i`

# Build

```
npm run build
```

# Install

Copy the output of `dist/` after running the build command into your Directus
project under `./extensions/hooks/force-ssl/`.

# Developing

```
npx directus-extension build -o /path/to/your/directus/extensions/hooks/force-ssl/index.js  -w
```

Extension behaviour is dependent on `NODE_ENV` so you may also need to 
tweak your `.env` or environment variables to get it to do anything in
development.
