const { Builder, By, Key, until } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver')
require('geckodriver')

const rootURL = 'http://localhost:3000/'
let driver
process.env.USE_PROMISE_MANAGER = false;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5
const waitUntilTime = 20000

async function querySelector(selector, driver) {
    const el = await driver.wait(
      until.elementLocated(By.css(selector)),
      waitUntilTime
    )
    return await driver.wait(until.elementIsVisible(el), waitUntilTime)
  }
  
beforeAll(async () => {
  driver = await new Builder().forBrowser('firefox').build()
})

afterAll(async () => driver.quit())

it('initialises the context', async () => {
  await driver.get(rootURL)
})

it('should display Learn React text', async () => {
  const anchor = await querySelector('[href=\'https://reactjs.org\']', driver)
  const actual = await anchor.getText()
  const expected = 'Learn React'
  expect(actual).toEqual(expected)
})