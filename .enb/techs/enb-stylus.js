/**
 * enb-stylus
 * ===================
 *
 * Собирает *css*-файлы вместе со *styl*-файлами по deps'ам, обрабатывает инклуды и ссылки, сохраняет в виде `?.css`.
 * При сборке *styl*-файлов использует `nib`, `bootstrap`.
 *
 * **Опции**
 *
 * * *String* **target** — Результирующий таргет. По умолчанию `?.css`.
 * * *Object* **variables** — Дополнительные переменные окружения для `stylus`.
 * * *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
 *   (его предоставляет технология `files`). По умолчанию — `?.files`.
 *
 * **Пример**
 *
 * ```javascript
 * nodeConfig.addTech(require('techs/enb-stylus'));
 * ```
 */

module.exports = require('enb-stylus/techs/css-stylus').buildFlow()
    .name('enb-stylus')
    .methods({
        _configureRenderer: function (renderer) {
            var nib,
                bootstrap,
                fa;
            try {
                nib = require('nib');
                bootstrap = require('bootstrap-styl');
                // fa = require('stylus-font-awesome');
                // bootstrap = require('bootstrap-sty');
            } catch (e) {
                throw new Error(
                    'The technology "enb-stylus" cannot be executed ' +
                    'because required npm modules were not found.'
                );
            }

            // renderer.use(nib()).use(bootstrap()).use(fa());
            renderer.set('paths', ['./libs', './node_modules'])
                    .use(nib())
                    .use(bootstrap());
            return renderer;
        }
    })
    .createTech();