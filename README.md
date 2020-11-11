# stylelint-config-sh

Базовая Stylelint конфигурация для CSS и SCSS. 

В качестве основы используется [stylelint-config-recommended-scss](https://www.npmjs.com/package/stylelint-config-recommended-scss)
и [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard)

## Установка

Установите необходимые зависимости в проект:

- stylelint
- stylelint-scss
- stylelint-order
- stylelint-config-sh

```text
npm install --save-dev stylelint stylelint-scss stylelint-order git+https://git@gitlab.smarthead.ru/frontend-public/stylelint-config-sh.git
```

Для выбора версии **stylelint-config-sh** просто добавьте тег с нужной версией, например **#v1.3.1** в конце URL-адреса репозитория.

```text
npm install --save-dev git+https://git@gitlab.smarthead.ru/frontend-public/stylelint-config-sh.git#v1.3.1
```
Актуальные релизы можно посмотреть [тут](https://gitlab.smarthead.ru/frontend-public/stylelint-config-sh/-/releases)

## Настройка

Создайте в проекте файл **.stylelintrc** и **.stylelintignore** со следующим содержимым

### .stylelintrc
```text
{
    "extends": "stylelint-config-sh",
    "plugins": [
        "stylelint-scss",
        "stylelint-order"
    ],
    "rules": {}
}
```

### .stylelintignore
```text
**/*.js
**/vendor/**/*.css
**/vendor/**/*.scss
```

Для более тонкой настройки Stylelint следует ознакомится с его [документацией](https://stylelint.io/user-guide/configuration)

## Добавление команд Stylelint в scripts файла package.json

Об этом и про обязательную автоматизацию проверки вы можете прочесть в нашей документации: [Статический анализ кода (linting)](https://gitlab.smarthead.ru/frontend/frontend-wiki/blob/master/docs/lint.md)

## Как включить Stylelint в JetBrains WebStorm IDE?

После установки и настройки Stylelint на проекте WebStrom пытается включить его автоматически.  

Если этого не произошло:
1. Откройте настройки WebStorm
1. В навигации пройдите по следующему пути **Languages & Frameworks > Style Sheets > Stylelint**. Можно воспользоваться поиском в настройках WebStorm
1. Далее просто включите Stylelint. Обычно WebStorm сам находит файлы конфигурации и установленный Stylelint
