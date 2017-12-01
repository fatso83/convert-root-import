# `convert-root-import`
> Convert paths used with `babel-plugin-root-import` into relative paths

If a file presides in `client/foo` has an import declaration `import '~/client/bar'` it will be converted to `import '../bar'`.
