## Built with

- React
- Material-UI v4

## Quick start with React Scripts

- Make sure your NodeJS and npm versions are up to date for `React 16.8.6`
- Install dependencies: `npm install`
- Start the server: `npm run start`
- Views are on: `localhost:3000`
- Build on production: `npm run build`

## Folder structure

In the root folder there are 2 folders:

- **public** _Here are the public assets, images and `index.html` file._
- **src** _Here is the main business logic of the theme._
- **|----components** _The reusable and stand-alone components are stored here, by following [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)_
- **|----|----atoms** _These are small functional components that are not using any other atomic components_
- **|----|----molecules** _Tese are those functional components which have dependencies from other atoms_
- **|----|----organisms** _These are the functional components that are using other molecules and atoms_
- **|----layouts**
- **|----|----Main** _The main layout: header navigation, the main container and footer part_
- **|----|----Minimal** _The minimal layout_
- **|----theme** _In this folder there are overrides of the default color palette and typography coming from MUI_
- **|----views** _All the views/pages that are available. Here are the combination and composition of re-usable components and pages representations._
