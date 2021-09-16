import { prod, ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { GoogleAnalytics } from '@scullyio/scully-plugin-google-analytics';

const defaultPostRenderers = [];

if (prod) {
  setPluginConfig(GoogleAnalytics, { globalSiteTag: 'UA-#########-1' });
  defaultPostRenderers.push(GoogleAnalytics);
}

export const config: ScullyConfig = {
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