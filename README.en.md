# Compartie

Compartie is a mobile app built with Expo to encourage sharing between neighbors. The project is designed to connect people within the same community so they can lend, request, discover, and circulate everyday items through a simple and welcoming experience.

## Overview

In its current version, the app exposes a home screen centered on discovery:

- welcome header
- item search
- category list
- available items section
- neighbor requests section
- sharing call-to-action banner
- bottom navigation with home, explore, share, activity, and profile areas

This structure works as a foundation for evolving the product into a local collaborative economy experience.

## Tech stack

- Expo `~57.0.17`
- React `19.2.3`
- React Native `0.86.3`
- Expo Router
- TypeScript
- NativeWind
- Lucide React Native

## Main structure

```text
src/
  app/                    app routes with Expo Router
  components/home/        home screen components
  components/navigation/  navigation components
  components/ui/          reusable UI building blocks
assets/
  images/                 logos and project images
scripts/                  utility scripts
```

## Running the project

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run start
```

3. Open the target platform:

- `npm run android`
- `npm run ios`
- `npm run web`

## Available scripts

- `npm run start`: starts Expo
- `npm run android`: opens the project on Android
- `npm run ios`: opens the project on iOS
- `npm run web`: opens the project on the web
- `npm run lint`: runs lint checks
- `npm run reset-project`: resets the original template baseline

## Current status

The project is still in an early UI and product-structure phase. Some components still use placeholder content, which is expected while the interaction model and visual direction are being shaped.

## Suggested next steps

- connect components to real data or centralized mocks
- implement functional tab navigation
- build onboarding, profile, and item publishing flows
- add loading, empty, and error states
- introduce tests and UI validation

## License

This repository includes a [LICENSE](./LICENSE) file.
