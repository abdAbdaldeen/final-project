const functions = require("firebase-functions");
const { Nuxt } = require("nuxt-start");

const nuxtConfig = require("./nuxt.config.js");

const config = {
  ...nuxtConfig,
  dev: false,
  buildDir: "nuxt",
};
const nuxt = new Nuxt(config);

const runtimeOpts = {
  timeoutSeconds: 540,
  memory: '2GB',
}
exports.ssrapp = functions.runWith(runtimeOpts).https.onRequest(async (req, res) => {
  await nuxt.ready();
  nuxt.render(req, res);
});