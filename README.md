# Верстка шаблона [Halcyon Days](http://tympanus.net/codrops/2014/07/14/freebie-halcyon-days-one-page-website-template/)

Проект основан на [`project-stub`](https://github.com/bem/project-stub/tree/enb-merged-config), с использованием фреймворка [`bootstrap`] и различных jQuery-плагинов

Готовый результат можно посмотреть [тут](http://104.236.43.137/halcyon/index.html)

## Локальный запуск

```bash
 $ git clone https://github.com/oozywaters/halcyon.git

 $ npm i

 $ ./node_modules/.bin/enb server

```
Страница `index` доступна по адресу http://localhost:8080/desktop.bundles/index/index.html

## Сборка статичной верстки

Для сборки статичной версии верстки нужно запустить grunt

```
$ grunt
```

Верстка будет собрана в папке `build/`:

* папка `css`
* папка `js`
* папка `img`
* папка `fonts`
* файлы `html` страниц