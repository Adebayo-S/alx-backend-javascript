# 0x01. ES6 Promises

## Install Jest, Babel, and ESLint in project directory

in your project directory:

- Install Jest using: `npm install --save-dev jest`
- Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli`
- Install ESLint using: `npm install --save-dev eslint`

## Extra Learnings

- added the rules in eslint config to allow for CRLF endings for "windows" as unix is LF and I'm working with wsl

```
{
  "rules": {
    "linebreak-style": ["error", "windows"]
  }
}
```

- corrected the command for running the linter from `lint` to `eslint` in package.json
