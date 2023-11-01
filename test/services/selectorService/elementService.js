class ElementService{
  async multipleElementSearchByIncludeText(elementQuery, string){
    let index
    const selector = await browser.$$(elementQuery)
    await Promise.all(selector.map(async (element) => {
      const elementText = await element.getText()
      if(elementText.includes(string)){
        return index = element.index
      }
    }))
    return index
  }
}
module.exports = new ElementService()