const ENV = process.env.ENV

if (['local', 'ci'].includes(ENV)) {
  console.log(`Starting test execution against ${ENV} Enviorments`)
}
else {
  console.log('Please Pass the ENV values: ENV=local|ci')
  process.exit(1)
}

module.exports = {
  local: {
    FE: 'https://growth.deel.training/',
  },
  ci: {
    FE: 'https://growth.deel.training/',
  },
}
