# Vitest does not transform imported Solid JSX

When importing a SolidJS component from a package that is bundled with `rollup-preset-solid`, Vitest does not transform the source JSX.

## Instructions

1. `npm i` to install dependencies
2. `npm run test -w foo` transforms JSX and runs test
3. `npm run test -w bar` fails due to `SyntaxError: Unexpected token '<'`
