# Desktop Starter Kit

:zap: A boilerplate for Electron, Material, Parcel, Babel, PostHTML, and PostCSS.

[![Build Status](https://img.shields.io/circleci/project/Shyam-Chen/Mobile-Starter-Kit/master.svg)](https://circleci.com/gh/Shyam-Chen/Mobile-Starter-Kit)
[![Coverage Status](https://img.shields.io/codecov/c/github/Shyam-Chen/Mobile-Starter-Kit/master.svg)](https://codecov.io/gh/Shyam-Chen/Mobile-Starter-Kit)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/Desktop-Starter-Kit/status.svg)](https://david-dm.org/Shyam-Chen/Desktop-Starter-Kit)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/Desktop-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Desktop-Starter-Kit?type=dev)

Linux DMG | macOS AppImage

This seed repository provides the following features:

* ---------- **Essentials** ----------
* [ ] User interface components with [**Material**](https://material.io/).
* [ ] Scalable state management with [**MobX**](https://mobx.js.org/).
* ---------- **Tools** ----------
* [ ] Module bundler with [**Parcel**](https://parceljs.org/).
* [ ] HTML transformations with [**PostHTML**](https://github.com/posthtml/posthtml).
* [ ] Future CSS features with [**PostCSS**](http://postcss.org/).
* [ ] Next generation JavaScript with [**Babel**](https://babeljs.io/).
* [ ] HTML static code analyzer with [**HTMLHint**](http://htmlhint.com/).
* [ ] CSS static code analyzer with [**StyleLint**](https://stylelint.io/).
* [ ] JavaScript static code analyzer with [**ESLint**](https://eslint.org).
* [ ] Type annotations with [**Flow**](https://flow.org/).
* [ ] Unit Testing with [**Jest**](http://facebook.github.io/jest/).
* [ ] End-to-End testing with [**Spectron**](https://github.com/electron/spectron).
* [ ] Test coverage integration with [**Codecov**](https://codecov.io/).
* ---------- **Environments** ----------
* [ ] JavaScript runtime with [**Node.js**](https://nodejs.org/).
* [ ] Fast and deterministic builds with [**Yarn**](https://yarnpkg.com/).
* [ ] Version control with [**Git**](https://git-scm.com/).
* [ ] Code repository with [**GitHub**](https://github.com/).
* [ ] Software container with [**Docker**](https://www.docker.com/).
* [ ] Linux/macOS continuous integration with [**CircleCI**](https://circleci.com/).

Here are some related seed repositories:

* ---------- **Client-side** ----------
* [Web Starter Kit](https://github.com/Shyam-Chen/Frontend-Starter-Kit) - Progressive Web Apps.
* [Mobile Starter Kit](https://github.com/Shyam-Chen/Mobile-Starter-Kit) - Cross-platform Mobile Apps.
* [Desktop Starter Kit](https://github.com/Shyam-Chen/Desktop-Starter-Kit) - Cross-platform Desktop Apps.
* ---------- **Server-side** ----------
* [Platform Starter Kit](https://github.com/Shyam-Chen/Backend-Starter-Kit) - Flexible Cloud Platform.
* [Functions Starter Kit](https://github.com/Shyam-Chen/Functions-Starter-Kit) - Serverless Cloud Functions.
* [Infrastructure Starter Kit](https://github.com/Shyam-Chen/Infrastructure-Starter-Kit) - Containerized Cloud Infrastructure.

## Getting Started

1. Clone this Boilerplate

```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Desktop-Starter-Kit.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install Dependencies

```bash
$ yarn install
```

3. Run the Application

```bash
$ yarn start
```

Reload: Cmd + R <br>
Close: Ctrl + C

```js
// main.js
// Enable Chromium DevTools
mainWindow.webContents.openDevTools();
```

4. Build the Application

```bash
$ yarn build
```
