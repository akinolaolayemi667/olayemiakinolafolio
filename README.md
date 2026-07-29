# Next Js v.15 & React 19 Profile Portfolio

Software Engineer Next JS Profile Portfolio

<br />
<br />

# Installation

```
npm install
```

If legacy peer dependenci failed use below command

```
npm install --legacy-peer-deps
```

<br />
<br />

# Deployment

- Add webpack with aliase if you used in tsconfig for deployment in next.config.ts file

- In next.config.ts file if needed to add images unoptimized for production environment

- Command **npm run build** to build the application

# Deployment to Netlify

- Add package

```
npm i @netlify/plugin-nextjs
```

- Add netlify.toml to base directory

```
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

- Once you configured netlify configuration on the netlify site with github configuration your deployment can trigger auto and deployed to netlify easily
