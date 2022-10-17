import { HomePage } from '../Page-Objects/homePage'


const homePage = new HomePage

jest.setTimeout(10000)


test('navigate to home page url', async () => {
    await homePage.navigate()
    await homePage.driver.manage().setTimeouts( { implicit: 300 } );
})

test('motivational quote', async () => {
    await homePage.click(homePage.quoteBtn)
    await homePage.driver.manage().setTimeouts( { implicit: 400 } );
})


test('dog pictures', async () => {
    await homePage.click(homePage.pictureBtn)
    await homePage.driver.manage().setTimeouts( { implicit: 500 } );
})

test('Use timer features: Start, Stop, Reset', async () => {
    await homePage.click(homePage.startBtn)
    await homePage.driver.manage().setTimeouts( { implicit: 500 } );
    await homePage.click(homePage.stopBtn)
    await homePage.driver.manage().setTimeouts( { implicit: 500 } );
    await homePage.click(homePage.restartBtn)
    await homePage.driver.manage().setTimeouts( { implicit: 500 } );
})


afterAll(async () => {
    await homePage.driver.quit()
})