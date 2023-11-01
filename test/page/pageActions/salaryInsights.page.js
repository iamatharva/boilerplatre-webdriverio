const Page = require('./page')
const SalaryInsights = require('../selectors/salaryInsights.selector')
const ElementService = require('../../services/selectorService/elementService')

class SalaryInsightsPage extends Page{
  async open (path) {
    return super.open(path)
  }

  async roleField() {
    const element = await browser.$(SalaryInsights.roleField)
    return element
  }

  async roleDropDown() {
    const element = await browser.$(SalaryInsights.roleDropDown)
    return element
  }

  async roleList() {
    const element = await browser.$(SalaryInsights.roleList)
    return element
  }

  async countryField() {
    const element = await browser.$(SalaryInsights.countryField)
    return element
  }

  // async countryDropDown() {
  //   const element = await browser.$(SalaryInsights.countryDropDown)
  //   return element
  // }

  async submitDetail() {
    const element = await browser.$(SalaryInsights.submitButton)
    return element
  }

  async salaryTable() {
    const element = await browser.$(SalaryInsights.salaryTable)
    return element
  }

  async roleSelectorOption() {
    const element = await browser.$(SalaryInsights.roleDropDownOption)
    return element
  }

  async countrySelectorOption() {
    const element = await browser.$(SalaryInsights.countryDropDownOption)
    return element
  }

  async roleSelctor (string) {
    const selector = await SalaryInsights.roleDropDownOptions
    const index = await ElementService.multipleElementSearchByIncludeText(selector, string)
    const element = await browser.$$(selector)
    return element[index]
  }

  async countrySelctor (string) {
    const selector = await SalaryInsights.countryDropDownOptions
    const index = await ElementService.multipleElementSearchByIncludeText(selector, string)
    const element = await browser.$$(selector)
    return element[index]
  }

  async fillInRolDetails(role) {
    await browser.waitUntil(async ()  => {
      const roleField = await this.roleField() 
      if (await roleField.isDisplayed()) return true
    })
    const roleField = await this.roleField()
    await roleField.click()
    await browser.waitUntil(async ()  => {
      const roleDropDowns = await this.roleDropDown()
      if (await roleDropDowns.isDisplayed()) return true
      else{
        const roleField = await this.roleField()
        await roleField.click()
      }
    })
    const roleDropDowns = await this.roleDropDown()
    await roleDropDowns.click()
    await browser.waitUntil(async ()  => {
      const roleSelector = await this.roleSelectorOption()
      if (await roleSelector.isDisplayed()) return true
      else{
        const roleDropDowns = await this.roleDropDown()
        await roleDropDowns.click()
      }
    })
    const roleItem = await this.roleSelctor(role)
    await roleItem.click()
  }

  async fillInCountryDetails(country) {
    await browser.waitUntil(async ()  => {
      const countryField = await this.countryField() 
      if (await countryField.isDisplayed()) return true
    })
    const countryField = await this.countryField()
    await countryField.click()
    await browser.waitUntil(async ()  => {
      const countrySelector = await this.countrySelectorOption()
      if (await countrySelector.isDisplayed()) return true
      else{
        const countryField = await this.countryField()
        await countryField.click()
      }
    })
    const countryItem = await this.countrySelctor(country)
    await countryItem.click()
  }

  async submitQueryDetails() {
    await browser.waitUntil(async ()  => {
      const submitDetail = await this.submitDetail()
      if (await submitDetail.isDisplayed()) return true
    })
    const submitDetail = await this.submitDetail()
    await submitDetail.click()
  }

  async salaryDetails() {
    await browser.waitUntil(async ()  => {
      const salaryTable = await this.salaryTable()
      if (await salaryTable.isDisplayed()) return true
    })
    const salaryTable = await this.salaryTable()
    await salaryTable.scrollIntoView()
    await browser.waitUntil(async () => (await salaryTable.getText()).length !=0,{
      timeout: 5000,
      timeoutMsg: 'Expected text is not available after 5 Seconds'
    })
    const text = await salaryTable.getText()
    return text
  }
}

module.exports = new SalaryInsightsPage()
