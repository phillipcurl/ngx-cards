# WIP: DO NOT USE YET

# ngx-cards
[![Build Status](https://travis-ci.org/phillipcurl/ngx-cards.svg?branch=master)](https://travis-ci.org/phillipcurl/ngx-cards)
[![npm version](https://badge.fury.io/js/ngx-cards.svg)](http://badge.fury.io/js/ngx-cards)
[![devDependency Status](https://david-dm.org/phillipcurl/ngx-cards/dev-status.svg)](https://david-dm.org/phillipcurl/ngx-cards?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/phillipcurl/ngx-cards.svg)](https://github.com/phillipcurl/ngx-cards/issues)
[![GitHub stars](https://img.shields.io/github/stars/phillipcurl/ngx-cards.svg)](https://github.com/phillipcurl/ngx-cards/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/phillipcurl/ngx-cards/master/LICENSE)

## Demo
https://phillipcurl.github.io/ngx-cards/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

A collection of functional UI components for building multimedia cards in Angular apps

## Installation

Install through npm:
```
npm install --save ngx-cards
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { NgxCardsModule } from 'ngx-cards';

@NgModule({
  imports: [
    NgxCardsModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/phillipcurl/ngx-cards/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/ngx-cards/ngx-cards.js"></script>
<script>
    // everything is exported ngxCards namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://phillipcurl.github.io/ngx-cards/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
