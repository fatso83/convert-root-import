# `convert-root-import`
> Convert paths used with `babel-plugin-root-import` into relative paths

If a file presides in `client/foo` has an import declaration `import '~/client/bar'` it will be converted to `import '../bar'`.

The root will be set to the current directory the command is executed from, meaning you normally would execute it from the root of your project.

## Usage
```
convert-root-import -o some-file.js`
```
See `convert-root-import --help` for more information.

As this tool currently works on single files at a time, you would drive it using `find` or similar if you want to change hundreds of files:

```
# change JSX files
find src/client -name '*.jsx' -exec convert-root-import -o {} \;`
```

## Caveats
This is a simple tool that doesn't build an AST, and only works line-wise. As such, it does not handle multi-line
import such as

```
import {
    Foo,
    Bar,
    Baz
} from '~/sub/module';
```

## Contribute?
PRs are welcome :-) This tool was hacked together in a few hours, and does the job in the 95% case for me. 
Possible improvements:

- handle multi-line imports
- traversing directories and multi-file handling (would make `find` superflous)
- building ASTs to handle complex cases?

