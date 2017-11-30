# `convert-root-import`
> Convert paths used with `babel-plugin-root-import` into relative paths

This will convert an import declaration such as `import ~/imports/foo/bar` to `import ./bar` if the current file is in the same directory.
