# Changelog

## Version 1.1.1

- Fixed dublicate issue with `files` inside `package.json`
- Removed unused dependencies from `package.json`
- Fixed `publish-please` to be fully working

## Version 1.1.0

- *breaking* Changed the main file in `package.json`
- *breaking* Changed the build files location to `dist/` folder
- *breaking* Changed the component styles
- Added new props: `center` and `size`
- Removed fixes for tests, now tests are supported as they should be
- Changed the styles language from `scss` to `sass`
- Updated `peerDependencies` to support `vue@2.1`
- Added `vue-play` support, removed `vue-dev-derver`
- Added new examples

## Version 1.0.0

- Changed the way the `document-offset` dependency is mounted, since now it is ssr-friendly
- Component is now production ready

## Version 0.0.1

- Initial semver release
