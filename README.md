## Getting Started
### install

```
npm install --global yarn # install yarn
git clone git@github.com:Justin-lu/react-mobx-antd.git demo
cd demo
yarn

# run dev
npm run start
# run mock server
npm run start:mock
```

### npm script

```shell
# dev start with test/lint
npm run start

# prodction start with browser-sync server
npm run start:prod

# production build
npm run build

# mock data
npm run start:mock

# run test
npm run test

# generate test cover report
npm run test:cover

```

### eslint

- enable pre-commit hook

```shell
cd .git/hooks/ && ln -s ./../../tools/pre-commit pre-commit
```

## Structure

```shell
├── README.md
├── coverage # test coverage report
├── dist  # production build directory
│   ├── 269268ade790db48e9dcc5eb0db587cd.jpg
│   ├── antd.f7f5aa5b8e507559a22db55944433a23.css
│   ├── app.89f9817729a2b19dc35586b6f0505c83.css
│   ├── app.fa0e73813f3ce3a7605d.js
│   ├── favicon.ico
│   └── index.html
├── package.json
├── src  # source directory
│   ├── components  # write your components here
│   │   ├── CustomTable.js
│   │   └── NotFoundPage  # this is a folder which include NotFoundPage.js, NotFoundPage.scss, NotFoundPage.spec.js
│   ├── config
│   │   └── api.js  # write your api config here
│   ├── constants  # some constants
│   │   └── actionTypes.js
│   ├── containers  # write your containers here
│   │   ├── AccessControl.js
│   │   ├── App  # App.js App.scss
│   ├── data
│   │   └── db.json  # mock data file
│   ├── favicon.ico
│   ├── index.html  # template index.html
│   ├── index.js  # entry file
│   ├── routes.js  # routes
│   └── utils  # utils file
│       └── cFetch.js
├── tools  # some tools script
│   ├── build.js
│   ├── chalkConfig.js
│   ├── distServer.js
│   ├── mock.js
│   ├── pre-commit
│   ├── srcServer.js
│   ├── startMessage.js
│   ├── testSetup.js
│   └── updateIndexHTML.js
├── webpack.config.dev.js  # webpack config of dev
└── webpack.config.prod.js  # webpack config of production
```
