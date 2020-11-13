# Stylelint Config

SmartHead config for Stylelint.

This config is based on [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard) and [stylelint-config-recommended-scss](https://www.npmjs.com/package/stylelint-config-recommended-scss)

## Installation

You should install these peer dependencies, if you use npm v6 and less. Npm v7+ installs them automatically.
```
stylelint
stylelint-scss
stylelint-order
```
Install the config 
```
npm install @smarthead/stylelint-config --save-dev
```

## Usage 
After install, just set your stylelint config to:

#### Standart
```
{
    "extends": "stylelint-config-smarthead",
    "plugins": [
        "stylelint-scss"
    ]
}
```

#### Extended
```
{
    "extends": "@smarthead/stylelint-config/extended",
    "plugins": [
        "stylelint-scss",
        "stylelint-order"
    ]
}
```
