const { Builder, By, Key, until } = require('selenium-webdriver')
const { waitTimeout, baseURL } = require('./seleniumConfig')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver') //Driver for chrome
require('geckodriver') //Driver for firefox

//Declare variable for the driver
let driver
  
//Before running tests, wait for the driver to build
beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build()
})

//Quit the driver/close browser after tests finish
afterAll(async () => driver.quit())

it('initialises the context', async () => {
  await driver.get(baseURL)
})

describe('React hello world', () => {
  //Note: tests should be async as most webdriver functions are async
  it('should display Learn React text', async () => {
    const element = await driver.wait(
      until.elementLocated(By.css('[href=\'https://reactjs.org\']')),
      waitTimeout
    )
    const link = await driver.wait(until.elementIsVisible(element), waitTimeout)
    const linkText = await link.getText()
    const expected = 'Learn React'
    expect(linkText).toEqual(expected)
  })
})