/**
 * Enb techs container
 *
 * @type {Object}
 */
// process.env.YENV = 'development';

var enbBemTechs = require('enb-bem-techs');

var tech = {
    // essential
    fileProvider: require('enb/techs/file-provider'),
    fileCopy: require('enb/techs/file-copy'),

    // files: require('enb-bem/techs/files'),
    fileMerge: require('enb/techs/file-merge'),

    // optimization
    borschik: require('enb-borschik/techs/borschik'),

    // css
    cssStylus: require('./techs/enb-stylus'),
    cssAutoprefixer: require('enb-autoprefixer/techs/css-autoprefixer'),

    // js
    browserJs: require('enb-diverse-js/techs/browser-js'),
    prependYm: require('enb-modules/techs/prepend-modules'),

    // bemtree
    bemtree: require('enb-bemxjst/techs/bemtree'),

    // bemhtml
    bemhtml: require('enb-bemxjst/techs/bemhtml'),

    // html
    htmlFromBemjson: require('enb-bemxjst/techs/html-from-bemjson')
};

var fs = require('fs');

if (!fs.existsSync('desktop.bundles/merged')) {
    fs.mkdirSync('desktop.bundles/merged');
}

module.exports = function(config) {
    config.nodes(['*.bundles/*'], function(nodeConfig) {
        var addTechs = [
                // essential (begin)
                // config levels
                [enbBemTechs.levels, { levels: getLevels(config) }],
                // source file
                [tech.fileProvider, { target: '?.bemjson.js' }],
                [enbBemTechs.bemjsonToBemdecl],
                [enbBemTechs.files],
                // essential (end)

                // css
                [tech.cssStylus, { target: '?.noprefix.css' }],
                [tech.cssAutoprefixer, {
                    sourceTarget: '?.noprefix.css',
                    destTarget: '?.css',
                    browserSupport: getBrowsers()
                }],

                // bemtree
                [tech.bemtree, { devMode: process.env.YENV === 'development' }],

                // bemhtml
                [tech.bemhtml, { devMode: process.env.YENV === 'development' }],

                // client bemhtml (begin)
                [enbBemTechs.depsByTechToBemdecl, {
                    target: '?.bemhtml.bemdecl.js',
                    sourceTech: 'js',
                    destTech: 'bemhtml'
                }],
                [enbBemTechs.deps, {
                    target: '?.bemhtml.deps.js',
                    sourceDepsFile: '?.bemhtml.bemdecl.js'
                }],
                [enbBemTechs.files, {
                    target: '?.bemhtml.deps.js',
                    filesTarget: '?.bemhtml.files',
                    dirsTarget: '?.bemhtml.dirs'
                }],
                [tech.bemhtml, {
                    target: '?.browser.bemhtml.js',
                    filesTarget: '?.bemhtml.files',
                    devMode: process.env.YENV === 'development'
                }],
                // client bemhtml (end)

                // js
                [tech.browserJs],
                [tech.fileMerge, {
                    target: '?.pre.js',
                    sources: ['?.browser.bemhtml.js', '?.browser.js']
                }],
                [tech.prependYm, { source: '?.pre.js' }]
            ],
            addTargets = ['?.bemtree.js',  '?.bemhtml.js', '_?.css', '_?.js'];

        if (nodeConfig.getPath() === 'desktop.bundles/merged') {
            // merged bundle (begin)
            var mergedDeps = [];


            fs.readdirSync('desktop.bundles').map(function(bundle) {
                if ((/\./).test(bundle)) return;

                if (bundle !== 'merged') {

                    // Copy deps by bundles into merged
                    addTechs.push([
                        enbBemTechs.provideDeps,
                        {
                            node: 'desktop.bundles/' + bundle,
                            target: bundle + '.deps.js'
                        }
                    ]);

                    mergedDeps.push(bundle + '.deps.js');
                }
            });

            // Merge all deps to one - merged.deps.js
            addTechs.push([
                // tech.depsMerge,
                // {depsSources: mergedDeps},
                // {depsTarget: 'merged.deps.js'}
                enbBemTechs.mergeDeps, {
                    sources: mergedDeps,
                    target: 'merged.deps.js'
                }
            ]);
            // merged bundle (end)

        } else {
            addTechs.push([enbBemTechs.deps]);
            addTechs.push([tech.htmlFromBemjson]);
            addTargets.push('?.html');
        }

        nodeConfig.addTechs(addTechs);
        nodeConfig.addTargets(addTargets);

        // config make mode (dev/prod/etc...) (begin)
        nodeConfig.mode('development', function() {
            nodeConfig.addTechs([
                [tech.fileCopy, {sourceTarget: '?.js', destTarget: '_?.js'}],
                // [tech.borschik, {sourceTarget: '?.js', destTarget: '_?.js'}],
                [tech.fileCopy, {sourceTarget: '?.css', destTarget: '_?.css'}]
            ]);
        });

        nodeConfig.mode('production', function() {
            nodeConfig.addTechs([
                [tech.borschik, {sourceTarget: '?.js', destTarget: '_?.js'}],
                [tech.borschik, {sourceTarget: '?.css', destTarget: '_?.css'}]
            ]);
        });
        // config make mode (end)
    });
};

/**
 * Resolve absolute path to libs levels.
 * It uses `bem-core`, `bem-components` with design and your own `common` + `desktop` levels.
 *
 * @param {Object} config
 * @returns {Array} Levels
 */
function getLevels(config) {
    return [
        {path: 'libs/bem-core/common.blocks', check: false},
        {path: 'libs/bem-core/desktop.blocks', check: false},
        {path: 'libs/bem-components/common.blocks', check: false},
        {path: 'libs/bem-components/desktop.blocks', check: false},
        {path: 'libs/bem-components/design/common.blocks', check: false},
        {path: 'libs/bem-components/design/desktop.blocks', check: false},
        'common.blocks',
        'desktop.blocks'
    ]
        .map(function(level) {
            return config.resolvePath(level);
        });
}


/**
 * Get Browser list for CSS autoprefixer
 *
 * @returns {string[]}
 */
function getBrowsers() {
    return [
        'last 2 versions',
        'ie 10',
        'opera 12.16'
    ];
}