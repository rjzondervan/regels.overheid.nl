# web

## 1.23.0

### Minor Changes

- a3c7f2b: Created Tailwind navbar component
- f2a06c7: Added tag property to `methode` content-type
  Sorted methods on method page by title
  Created Tailwind typography component
  Created Tailwind chip component
  Created Tailwind button component
  Refactored methoden page from MUI to Tailwind

## 1.22.0

### Minor Changes

- 9dd254a: Created Tailwind footer component
- a4feb7a: Created Tailwind notification component

## 1.21.1

### Patch Changes

- 89fd7c6: Fixed typography not displaying properly on cms pages

## 1.21.0

### Minor Changes

- 002220a: - Created publication page
  - Created publication card component
  - Created Tailwind card component
  - Installed dependencies: clsx, @storybook/addon-styling

## 1.20.1

### Patch Changes

- c637e82: Hoisting has been disabled throughout the entire repo now, in order work with this the Dockerfile has been updated

  Following dependency maintenance has been done, this has been done to facilitate for the migration to the NextJs approuter

  - Removed the following dependencies: @next/font
  - Installed the following dependencies: tailwindcss, postcss, autoprefixer
  - Upgraded the following dependencies: next, @types/react, @types/react-dom, typescript, eslint-config-next, eslint, @types/node

## 1.20.0

### Minor Changes

- cf4c948: Removed all [Mui SvgIcons](https://mui.com/material-ui/api/svg-icon/) in favor of [Tabler](https://tabler-icons.io/) icons