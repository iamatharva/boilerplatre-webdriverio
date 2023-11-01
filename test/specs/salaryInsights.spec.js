const SalaryInsightsPage = require('../page/pageActions/salaryInsights.page')

describe('Deel user', () => {
  var runs = [
    { role: 'Accountant', country: 'Brazil' },
    { role: 'QA Engineer', country: 'Canada' },
    { role: 'Software Engineer', country: 'Japan' },
  ]
  runs.forEach(function (run) {
    it(`Should be able to find the salary details of ${run.role}`, async () => {
      await SalaryInsightsPage.open('dev/salary-insights')
      await SalaryInsightsPage.fillInRolDetails(run.role)
      await SalaryInsightsPage.fillInCountryDetails(run.country)
      await SalaryInsightsPage.submitQueryDetails()
      await expect(await SalaryInsightsPage.salaryDetails()).toContain(`${run.role} compensation in ${run.country}`)
    })
  })
})
