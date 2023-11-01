const wdio = require ('../../../config/base.conf')

module.exports = class Page {
  async open (path) {
    await browser.setWindowSize(1440, 900)
    await browser.navigateTo(wdio.baseConfig.baseUrl+`${path}`)
    await browser.waitUntil(async() => {
      const url = await browser.getUrl()
      return !!url.includes(path)
    })
  }
}
