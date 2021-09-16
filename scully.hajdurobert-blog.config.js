"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var scully_1 = require("@scullyio/scully");
var scully_plugin_google_analytics_1 = require("@scullyio/scully-plugin-google-analytics");
var defaultPostRenderers = [];
if (scully_1.prod) {
    scully_1.setPluginConfig(scully_plugin_google_analytics_1.GoogleAnalytics, { globalSiteTag: 'UA-#########-1' });
    defaultPostRenderers.push(scully_plugin_google_analytics_1.GoogleAnalytics);
}
exports.config = {
    projectRoot: "./src",
    projectName: "hajdurobert-blog",
    outDir: './dist/static',
    routes: {
        '/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: "./blog"
            }
        },
    }
};
