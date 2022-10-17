import { NewPage } from '../Page-Objects/newsWeatherPage'


const newsWeatherPage = new NewPage

jest.setTimeout(10000)


test('navigate to url and go to News & Weather page', async () => {

    await newsWeatherPage.navigate()
    await newsWeatherPage.navigate(newsWeatherPage.newsWeatherPage)
    await newsWeatherPage.driver.manage().setTimeouts({ implicit: 100 });
    await newsWeatherPage.click(newsWeatherPage.cityInput)
    await newsWeatherPage.driver.manage().setTimeouts({ implicit: 100 });
    let value = await newsWeatherPage.driver.getCurrentUrl()
    expect(value).toBe(newsWeatherPage.newsWeatherPage)

})


test('insert city name and submit', async () => {

    await (await newsWeatherPage.getElement(newsWeatherPage.cityInput)).sendKeys('Barcelona')
    await newsWeatherPage.driver.manage().setTimeouts({ implicit: 100 });
    await newsWeatherPage.click(newsWeatherPage.submitBtn)
    let value = await newsWeatherPage.driver.getCurrentUrl()
    expect(value).toBe(newsWeatherPage.newsWeatherPage)
})


test('navigate to article link', async () => {

    await newsWeatherPage.click(newsWeatherPage.articleBtn)
    let value = await newsWeatherPage.driver.getCurrentUrl()
    expect(value).toBe(newsWeatherPage.newsWeatherPage)

})

afterAll(async () => {
    await newsWeatherPage.driver.quit()
})