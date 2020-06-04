# Inenindo PoC

## Available Scripts

`npm install`

Installs all dependencies.

`npm start`

Runs the app in the development mode.
Open <http://localhost:8080> to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

`npm run build`

Builds a static copy of yor site to the `build/` folder.
Your app is ready to be deployed! Always flush after yourself (**delete build folder after export to production**)!

`npm run publish`

Deploys your site online from `build/` folder using `surge`. See the section **Additional workflow tools** for more details.

`npm test`

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

`npm run lint`

Lints code. Run **before build task**, otherwise it resorts to catch compiled false-positives.

## Current build size

```bash
build
├── [  96]  build/css
│   └── [ 169]  build/css/style-37edc95c98a5f504d66a.css
├── [1.1K]  build/favicon.ico
├── [ 953]  build/index.html
├── [ 128]  build/js
│   ├── [2.8M]  build/js/bundle-37edc95c98a5f504d66a.js
│   └── [ 811]  build/js/bundle-37edc95c98a5f504d66a.js.LICENSE.txt
├── [1.1K]  build/logo.svg
└── [  67]  build/robots.txt

public
├── [1.1K]  public/favicon.ico
├── [ 881]  public/index.html
├── [1.1K]  public/logo.svg
└── [  67]  public/robots.txt

src
├── [ 482]  src/App.svelte
├── [ 252]  src/App.test.js
├── [ 397]  src/index.ts
├── [  60]  src/main.css
├── [ 679]  src/scene.ts
└── [ 134]  src/tailwind.config.js
```

## NOTE

### Additional workflow tools

(install with the npm global flag)

`surge`: <https://surge.sh/help/getting-started-with-surge>

`npm-check -u`: <https://www.npmjs.com/package/npm-check>

`svelte-check`: <https://www.npmjs.com/package/svelte-check>
