# `convert-root-import`
> Convert paths used with `babel-plugin-root-import` into relative paths

If a file presides in `client/foo` has an import declaration `import '~/client/bar'` it will be converted to `import '../bar'`.

The root will be set to the current directory the command is executed from, meaning you normally would execute it from the root of your project.
