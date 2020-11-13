# Stylelint Config

SmartHead config for Stylelint.

## Installation

You should install these peer dependencies, if you use npm v6 and less. Npm v7+ installs them automatically.
```
stylelint
stylelint-scss
stylelint-order
```

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
        "stylelint-scss",
        "stylelint-order"
    ]
}
```

#### Extended
```
{
    "extends": "@smarthead/stylelint-config/extended"
}
```
