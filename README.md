# Stylelint Config

SmartHead config for Stylelint.

Peer Dependencies (npm v7+ installs them automatically)
```
stylelint
stylelint-scss
stylelint-order
```

## Installation

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
