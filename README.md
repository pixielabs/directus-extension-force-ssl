Uses the X-Forwarded-Proto header provided by reverse proxies like Heroku
to decide whether to redirect the user's request to HTTPS. Only does something
if the underlying Directus Express environment is set to production, which by
default is set via a `NODE_ENV` environment variable.

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
