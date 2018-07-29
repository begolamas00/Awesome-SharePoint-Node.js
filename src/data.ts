import { IData } from './interfaces';

const data: IData = {
  categories: [
    'Authentication & Http', // 0
    'Client libraries for browser, which work in Node.JS', // 1
    'SPFx related', // 2
    'Tools & CLIs', // 3
    'Web applications', // 4
    'Working with files', // 5
    'Wrapper or helper libraries', // 6
    'Yeoman generators' // 7
  ],
  libs: [{
    name: 'adal-node',
    url: 'https://github.com/AzureAD/azure-activedirectory-library-for-nodejs',
    description: 'Windows Azure Active Directory Authentication Library (ADAL) for Node.js.',
    categories: [0]
  }, {
    name: 'node-sp-auth',
    url: 'https://github.com/s-KaiNet/node-sp-auth',
    description: 'Unattended SharePoint http authentication with Node.js.',
    categories: [0]
  }, {
    name: 'sp-request',
    url: 'https://github.com/s-KaiNet/sp-request',
    description: 'Simplified SharePoint HTTP client.',
    categories: [0]
  }, {
    name: 'sp-rest-proxy',
    url: 'https://github.com/koltyakov/sp-rest-proxy',
    description: 'SharePoint REST API Proxy for local Front-end development tool-chains (SPA, webparts development, SPFx).',
    categories: [0, 2]
  }, {
    name: 'sharepointconnector',
    url: 'https://github.com/veeraRaghavSanthosh/sharepointconnector',
    description: 'A Node.js SharePoint Client inherited from sharepointer.',
    categories: [0]
  }, {
    package: 'sp-pnp-js',
    name: 'PnP-JS-Core',
    url: 'https://github.com/SharePoint/PnP-JS-Core',
    description: 'PnP JavaScript Core component, a fluent API for working with the full SharePoint REST API as well as utility and helper functions. See [node-pnp-js](https://github.com/s-KaiNet/node-pnp-js) or [sp-pnp-node](https://github.com/koltyakov/sp-pnp-node) for Node.JS integration.',
    categories: [1]
  }, {
    package: '@pnp/sp',
    name: 'PnPjs',
    url: 'https://github.com/pnp/pnpjs',
    description: 'PnPJS is a fluent JavaScript API for consuming SharePoint and Office 365 REST APIs in a type-safe way. You can use it with SharePoint Framework, Nodejs, or JavaScript projects. This an open source initiative complements existing SDKs provided by Microsoft offering developers another way to consume information from SharePoint and Office 365.',
    categories: [1]
  }, {
    name: 'sharepointplus',
    url: 'https://aymkdn.github.io/SharepointPlus',
    description: 'A JavaScript library which offers some extended features for SharePoint entirely on client side (requires no server install).',
    categories: [1]
  }, {
    name: 'sprestlib',
    url: 'https://gitbrent.github.io/SpRestLib',
    description: 'SharePoint REST Library: JavaScript Library for SharePoint Web Services.',
    categories: [1]
  }, {
    name: 'spscript',
    url: 'https://github.com/DroopyTersen/spscript',
    description: 'SPScript makes it easy to code against SharePoint 2013 Rest API.',
    categories: [1]
  }, {
    name: 'gd-sprest',
    url: 'https://gunjandatta.github.io/sprest',
    description: 'SharePoint REST Framework - an easy way to create, read, update and delete data using the SharePoint 2013, 2016 and SPO REST API.',
    categories: [1]
  }, {
    name: 'node-sppkg-deploy',
    url: 'https://github.com/estruyf/node-sppkg-deploy',
    description: 'SharePoint APP Package Deployment.',
    categories: [2]
  }, {
    name: 'spfx-build-url-rewrite',
    url: 'https://www.npmjs.com/package/spfx-build-url-rewrite',
    description: 'SharePoint Framework build tool that automatically re-writes URL\'s in the manifest.',
    categories: [2]
  }, {
    name: 'spfx-extensions-cli',
    url: 'https://github.com/vman/spfx-extensions-cli',
    description: 'CLI tool to manage SharePoint Framework extensions.',
    categories: [2]
  }, {
    name: 'sp-workbench-api-proxy',
    url: 'https://github.com/valorekhov/sp-workbench-api-proxy',
    description: 'Provides an authenticated proxy to Office 365 + SharePoint Online or an on-prem SharePoint installation. Use as a part of development with SpFx Workbench or a custom toolchain.',
    categories: [2]
  }, {
    name: 'node-sp-auth-config',
    url: 'https://github.com/koltyakov/node-sp-auth-config',
    description: 'Config options builder for [node-sp-auth](https://github.com/s-KaiNet/node-pnp-js).',
    categories: [3]
  }, {
    name: 'sp-build-tasks',
    url: 'https://github.com/koltyakov/sp-build-tasks',
    description: 'SharePoint front-end projects automation and tasks tool-belt.',
    categories: [3]
  }, {
    name: 'sphooks',
    url: 'https://github.com/s-KaiNet/sphooks',
    description: 'Cross-platform CLI for managing SharePoint list web hooks.',
    categories: [3]
  }, {
    name: 'sp-live-reload',
    url: 'https://github.com/koltyakov/sp-live-reload',
    description: 'SharePoint pages live reload module for client side development.',
    categories: [3]
  }, {
    name: 'gulp-spcolor2scss',
    url: 'https://github.com/artokai/gulp-spcolor2scss',
    description: 'Convert SharePoint spcolor-files to SASS partials.',
    categories: [3]
  }, {
    name: 'gulp-spcolor-stylus',
    url: 'https://github.com/olemp/gulp-spcolor-stylus',
    description: 'Converts SharePoint .spcolor files to .styl variables.',
    categories: [3]
  }, {
    name: 'spcmd',
    url: 'https://github.com/benamar/spcmd',
    description: 'Office 365 shell command utilities.',
    categories: [3]
  }, {
    name: 'sprestlib',
    url: 'https://www.npmjs.com/package/sp-wiki-to-docx',
    description: 'Convert a sharepoint wiki library into a DOCX file.',
    categories: [3]
  }, {
    package: '@beyond-sharepoint/spo-shell',
    name: 'spo-shell',
    url: 'https://github.com/beyond-sharepoint/spo-shell',
    description: 'A cross-platform implementation of SharePoint shell commands written in straight ES6. No powershell cmdlets and confusing PnP installs.',
    categories: [3]
  }, {
    name: 'passport-sharepoint-addin',
    url: 'https://github.com/s-KaiNet/passport-sharepoint-addin',
    description: '[Passport.js](http://passportjs.org/) authentication middleware for SharePoint add-in.',
    categories: [4]
  }, {
    package: 'n/a',
    name: 'expressjs-sp-addin',
    url: 'https://github.com/s-KaiNet/expressjs-sp-addin',
    description: 'Sample SharePoint provider-hosted add-in with Express.js, [passport-sharepoint-addin](https://github.com/s-KaiNet/passport-sharepoint-addin) and PnP-JS-Core.',
    categories: [4]
  }, {
    name: 'passport-sharepoint',
    url: 'https://github.com/QuePort/passport-sharepoint',
    description: 'SharePoint authentication strategy for Passport and Node.js.',
    categories: [4]
  }, {
    name: 'gulp-spsave',
    url: 'https://github.com/s-KaiNet/gulp-spsave',
    description: 'Gulp plugin for saving files inside SharePoint.',
    categories: [5]
  }, {
    name: 'sp-download',
    url: 'https://github.com/koltyakov/sp-download',
    description: 'SharePoint files download client (library and CLI) in Node.js.',
    categories: [3, 5]
  }, {
    name: 'sppull',
    url: 'https://github.com/koltyakov/sppull',
    description: 'Download files from SharePoint document libraries using Node.js without hassles.',
    categories: [5]
  }, {
    name: 'sppurge',
    url: 'https://github.com/koltyakov/sppurge',
    description: 'Delete files from SharePoint document libraries using Node.js without hassles.',
    categories: [5]
  }, {
    name: 'spsave',
    url: 'https://github.com/s-KaiNet/spsave',
    description: 'Save files in SharePoint using node.js easily.',
    categories: [5]
  }, {
    name: 'spsave-webpack-plugin',
    url: 'https://github.com/yohanb/spsave-webpack-plugin',
    description: 'A Webpack plugin that allows you upload generated assets to a SharePoint site.',
    categories: [5]
  }, {
    name: 'gulp-spsync',
    url: 'https://github.com/wictorwilen/gulp-spsync',
    description: 'Gulp plugin for synchronizing local files with a SharePoint library.',
    categories: [5]
  }, {
    name: 'gulp-spsync-creds',
    url: 'https://github.com/estruyf/gulp-spsync-creds',
    description: 'Gulp plugin for synchronizing local files with a SharePoint library.',
    categories: [5]
  }, {
    name: 'sharepoint-file',
    url: 'https://github.com/timegrip/sharepoint-file',
    description: 'A command-line utility for Sharepoint file operations.',
    categories: [5]
  }, {
    name: 'spdeployment',
    url: 'https://github.com/mwiedemeyer/SPDeployment',
    description: 'A command line tool to deploy all kind of files to SharePoint / Office 365 and set properties if specified.',
    categories: [5]
  }, {
    name: 'node-pnp-js',
    url: 'https://github.com/s-KaiNet/node-pnp-js',
    description: 'PnP-JS-Core (sp-pnp-js) with Node.js made easy.',
    categories: [6]
  }, {
    name: 'sp-jsom-node',
    url: 'https://github.com/koltyakov/sp-jsom-node',
    description: 'SharePoint JavaScript Object Model for Node.js.',
    categories: [6]
  }, {
    name: 'sp-pnp-node',
    url: 'https://github.com/koltyakov/sp-pnp-node',
    description: 'SharePoint JavaScript Core Library wrapper helper for Node.js.',
    categories: [6]
  }, {
    name: 'sp-screwdriver',
    url: 'https://github.com/koltyakov/sp-screwdriver',
    description: 'Adds missing and abstracts SharePoint APIs for transparent usage in Node.js applications.',
    categories: [6]
  }, {
    name: 'csom-node',
    url: 'https://github.com/vgrem/CSOMNode',
    description: 'SharePoint Client Object Model (CSOM) API for Node.js applications.',
    categories: [6]
  }, {
    name: 'generator-sppp',
    url: 'https://github.com/koltyakov/generator-sppp',
    description: 'SP Pull-n-Push - Yeoman generator for SharePoint client-side applications.',
    categories: [7]
  }, {
    package: '@microsoft/generator-sharepoint',
    name: 'SharePoint Framework generator',
    url: 'https://dev.office.com/sharepoint/docs/spfx/toolchain/scaffolding-projects-using-yeoman-sharepoint-generator',
    description: 'A Yeoman plugin for use with the SharePoint Framework. Using this generator, developers can quickly set up a new client-side web part project with sensible defaults and best practices.',
    categories: [7]
  }, {
    name: 'generator-spcaf',
    url: 'https://github.com/rencoreab/generator-spcaf',
    description: 'This generator makes it easier to run SPCAF analysis on SharePoint Framework projects.',
    categories: [7]
  }, {
    name: 'generator-portals-clientside',
    url: 'https://www.npmjs.com/package/generator-portals-clientside',
    description: 'Scaffold out your clientside sharepoint projects. It has sub-generators for components, list exports, and CSR fields.',
    categories: [7]
  }, {
    package: '@pnp/office365-cli',
    name: 'office365-cli',
    url: 'https://www.npmjs.com/package/@pnp/office365-cli',
    description: 'The Office 365 CLI allows you to manage different settings of your Microsoft Office 365 tenant on any platform.',
    categories: [3]
  }, {
    package: 'sp-engineer',
    name: 'sp-engineer',
    url: 'https://github.com/sprtus/engineer',
    description: 'A powerful command-line tool for configuring SharePoint site columns, content types, lists, views, and more...',
    categories: [3]
  }, {
    name: 'node-sp-alm',
    url: 'https://www.npmjs.com/package/node-sp-alm',
    description: 'Module created for automating the deployment process of SharePoint solution packages to the App Catalog. This module uses the new ALM APIs that are available on SharePoint Online tenants.',
    categories: [2]
  }, {
    package: 'sp-react-formfields',
    name: 'sp-listform-react',
    url: 'https://github.com/olegrumiancev/sp-listform-react',
    description: 'Classic forms modernizer tool: Brings Office UI Fabric-based forms into SharePoint 2013/2016/Online. Is based on [sp-react-formfields](https://github.com/olegrumiancev/sp-react-formfields) and SPPP genarator.',
    categories: [3]
  }]
};

export default data;
