var Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/theme/firumimi/assets/build')
    // public path used by the web server to access the output path
    .setPublicPath('/theme/firumimi/assets/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */


    .addEntry('app', './public/theme/firumimi/assets/js/app.js')
    .addEntry('home', './public/theme/firumimi/assets/js/home/index.js')


    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })

    // enables Sass/SCSS support
    .enableSassLoader((options) => {}, {
        resolveUrlLoaderOptions: {
            removeCR: true
        }
    })

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // Enable Vue loader
    .enableVueLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    .enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/admin.js')

    .enablePostCssLoader()
;
// build the first configuration
const firulay = Encore.getWebpackConfig();
// Set a unique name for the config (needed later!)
firulay.name = 'firulay';

// reset Encore to build the second config
Encore.reset();



const WebpackBar = require('webpackbar');

Encore.addPlugin(
  new WebpackBar({
    profile: Encore.isProduction(),
    minimal: false,
  }),
)

  .setOutputPath('public/assets/')
  .setPublicPath('/assets')
  .setManifestKeyPrefix('assets')

  .copyFiles({
    from: './vendor/bolt/core/assets/static',
  })

  .cleanupOutputBeforeBuild()
  .disableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(false)

  .addEntry('bolt', './vendor/bolt/core/assets/js/bolt.js')
  .addEntry('zxcvbn', './vendor/bolt/core/assets/js/zxcvbn.js')
  .addEntry('vibrant', './vendor/bolt/core/assets/js/vibrant.js')
  .addStyleEntry('theme-default', './vendor/bolt/core/assets/scss/themes/default.scss')
  .addStyleEntry('theme-light', './vendor/bolt/core/assets/scss/themes/light.scss')
  .addStyleEntry('theme-dark', './vendor/bolt/core/assets/scss/themes/dark.scss')
  .addStyleEntry('theme-woordpers', './vendor/bolt/core/assets/scss/themes/woordpers.scss')

  .splitEntryChunks()
  .autoProvidejQuery()
  .enableVueLoader()
  .enableSassLoader()
  .enablePostCssLoader();


// build the second configuration
const backend = Encore.getWebpackConfig();

// Set a unique name for the config (needed later!)
backend.name = 'backend';

// export the final configuration as an array of multiple configurations
module.exports = [firulay, backend];
