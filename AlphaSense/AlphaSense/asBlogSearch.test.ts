import { SearchPage } from '../../Page-Objects/asBlogSearch'
import { Builder, By, Capabilities, WebDriver, until } from 'selenium-webdriver'


const searchPage = new SearchPage

jest.setTimeout(10000)



test('navigate to url accept cookies', async () => {
    await searchPage.navigate()
    await searchPage.driver.manage().setTimeouts({ implicit: 100 });

    // accept cookies
    await searchPage.click(searchPage.cookiesBtn)
})

test('navigate to Blog Search', async () => {
    // nav to resources page
    await searchPage.click(searchPage.navLink)
    await searchPage.driver.manage().setTimeouts({ implicit: 100 });
    await searchPage.click(searchPage.resourceLink)
    await searchPage.driver.manage().setTimeouts({ implicit: 100 });
    await searchPage.click(searchPage.subMenu)
    await searchPage.navigate(searchPage.blogSearch)
})
    


test('search for Tesla articles', async () => {
    await searchPage.click(searchPage.searchInput)
    await (await searchPage.getElement(searchPage.searchInput)).sendKeys('Tesla')
    await searchPage.driver.manage().setTimeouts({ implicit: 100 });
    await searchPage.click(searchPage.searchBtn)
    
})

test('Test Tesla article', async () => {
    await searchPage.driver.manage().setTimeouts({ implicit: 100 });
    await searchPage.click(searchPage.articleLink)
    let value = await searchPage.driver.getCurrentUrl()
   expect(value).toBe('https://www.alpha-sense.com/blog/treat-tesla-as-a-tech/')

})

afterAll(async () => {
    await searchPage.driver.quit()
})