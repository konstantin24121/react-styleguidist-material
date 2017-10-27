# Example to Material styleguide

  [![Trello board](https://img.shields.io/badge/board-season1-blue.svg?style=flat-square&colorB=0079BF)](https://trello.com/b/gxBuRJnm/season1)
  [![GitHub issues](https://img.shields.io/github/issues/konstantin24121/hub.svg?style=flat-square)](https://github.com/konstantin24121/hub/issues)
  [![Travis branch](https://img.shields.io/travis/konstantin24121/hub/develope.svg?style=flat-square)](https://travis-ci.org/konstantin24121/hub)
  [![Codecov branch](https://img.shields.io/codecov/c/github/konstantin24121/hub/develope.svg?style=flat-square)](https://codecov.io/gh/konstantin24121/hub)
  [![Code Climate](https://img.shields.io/codeclimate/github/konstantin24121/hub.svg?style=flat-square)](https://codeclimate.com/github/konstantin24121/hub)
  [![GitHub release](https://img.shields.io/github/release/konstantin24121/hub.svg?style=flat-square)](https://github.com/konstantin24121/hub)

## Zad

Перед Вашими глазами Styleguide, по совместительству wiki, для проекта NONAME. Тут можно найти ответы на некоторые вопросы по утройству проекта, по его [запуску и настройке](/#Installation), по приемлемому стилю для написания кода, соглашениям именования, [библиотеке компонентов](/#UI Components) и [примеры](/#Examples) того как компоненты желательно проектировать, а так же краткий экскурс того, как сделать разработку проекта приятной, и использовать все заложенные инструменты.

### [Editorconfig](http://editorconfig.org/)

Утилита (на самом деле файл с конфигом) который позволяет разработчикам независимо от редактора или IDE сгладить различия в стиле кода (табуляция, окончания строк и тд.). В данном проекте оговорен следующий стиль

* Табуляция - 2 пробела, распространяется на все файлы
* Окончание строк - LF
* Максимально допустимая длинна строки - 100 символов, включая табуляции.

1. Табуляция - 2 пробела, распространяется на все файлы
2. Окончание строк - LF
3. Максимально допустимая длинна строки - 100 символов, включая табуляции.

- [ ] zad
- [x] zad
- [ ] zad

Некоторые IDE приучены понимать файл настроек из коробки. Но так же научить можно и редактор, плагины есть для всех известных редакторов, список [тут](http://editorconfig.org/#download).


### [ESlint](http://eslint.org/)

Статический линтинг js кода, показывает ошибки в коде, дает советы по стилю написания, основывающийся на пресете airbnb. Соблюдать стиль написания кода это обязательное требование. К списку правил добавлены [react](https://github.com/yannickcr/eslint-plugin-react) (линтинга классов написанных для реакта), [import](https://github.com/benmosher/eslint-plugin-import) (для соблюдения правильной записи подключаемых пакетов), [jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) (для линтинга jsx) и json.

Чтобы пользоватся линтером в редакторе кода необходимо поставить плагины, если редактор не умеет конечно из коробки пользоватся eslint. Плагины есть для всех известных редакторов, список [тут](http://eslint.org/docs/user-guide/integrations#editors).

Так же есть консольная утилита, запустить ее можно командой `yarn eslint`.

### [FlowType](https://flow.org/)

Строгая типизация js кода, показывает ошибки типизации. Использование строгой типизации желательно, как минимум для utils и components.

Чтобы пользоватся строгой типизацией и всеми ее преимуществами в редакторе кода необходимо поставить плагины, если редактор не умеет конечно из коробки пользоватся flowType (нет не умеет). Плагины есть для всех известных редакторов, список [тут](https://flow.org/en/docs/editors/).

Так же есть консольная утилита, запустить ее можно командой `yarn flow`.

### [Stylelint](https://stylelint.io/)

Линтинг pcss/css кода, показывает ошибки в стилях, дает советы по стилю написания, основывающийся на пресете stylelint-config-standard. Соблюдать стиль написания стилей это обязательное требование.

Чтобы пользоватся линтером в редакторе кода необходимо поставить плагины. Плагины вроде есть для многих известных редакторов, списка нету, искать самостоятельно под свой. Могу посоветовать только под Atom [тут](https://atom.io/packages/linter-stylelint).

Так же есть консольная утилита, запустить ее можно командой `yarn stylelint`.

```html
 <div class="her"></div>
```
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, fugiat? Sint, tenetur. Nesciunt maxime veritatis similique, illum. Reiciendis alias, voluptatum cum. Dignissimos at placeat porro quo dolorem veritatis, libero explicabo.

```css
 .her {
  display: grid;
 }
```

```js
array.map(({ id }) => id);
array.map(({ id }) => id);
array.map(({ id }) => id);
```

> С помощью цитат очень удобно в письме обозначать исходный текст.
> Эта строка - часть той же цитаты. 😁

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae similique numquam, laborum animi cupiditate, minus delectus culpa dolorum vero dolorem esse veritatis aspernatur tempora placeat cumque, voluptates eligendi modi libero?

```jsx
  import React from 'react';
  import RaisedButton from 'material-ui/RaisedButton';

  const MyAwesomeReactComponent = () => (
    <RaisedButton label="Default" />
  );

  export default MyAwesomeReactComponent;
```

<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum culpa deleniti tenetur at eum dignissimos, impedit, fugit consequatur numquam non sapiente delectus accusantium blanditiis harum veritatis. Similique, fugit et in.</div>

<div>Nihil quidem, cumque ex debitis ducimus, magnam natus ut ipsam eaque quos praesentium. Harum accusamus, sapiente ducimus ipsum quidem dolorum nostrum, nihil consectetur obcaecati, quisquam perferendis totam quod, libero sequi.</div>

---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda sint nobis tempora quasi in, repellendus laboriosam a sapiente sequi non, similique omnis rerum fugit ipsa cum culpa magnam voluptatibus?

| Таблицы       | Это                | Круто | Гиганская колонка |
| ------------- |:------------------:| -----:|------------------:|
| столбец 3     | выровнен вправо    | $1600 |           Жокей   |
| столбец 2     | выровнен по центру |   $12 |    ДжаДжа Бинкс   |
| зебра-строки  | прикольные         |    $1 |         Просто зад|


1. Первый пункт нумерованного списка
2. Второй пункт
1. Сами числа не имеют значения, лишь бы это были цифры
4. И еще один пункт.


* Ненумерованный список можно размечать звездочками
- Или минусами
+ Или плюсами

### [TernJs](http://ternjs.net/)

Автокомплит js кода. Очень полузная штука показывающая и документацию, и набор всех аргументов. Минус пока что один и он существенный - не поддержка jsx. Посему внутри jsx классов автокомплит не работает. Но в остальных случайх он прекрасно помогает. Его использование не обязательно, он лишь облегчает разработку.

Чтобы пользоватся им в редакторе кода необходимо поставить плагины. Ничего не могу сказать про иные редакторы, но в Atom работает хорошо. Список редакторов для которых есть плагины по ссылке [тут](http://ternjs.net/).

### [Yarn](https://yarnpkg.com/)

Он просто прекрасен. Чтобы пользоватся просто ставь yarn.
