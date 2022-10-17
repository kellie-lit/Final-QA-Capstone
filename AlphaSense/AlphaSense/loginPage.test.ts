import { LoginPage } from '../../Page-Objects/loginPage'


const loginPage = new LoginPage

jest.setTimeout(10000)


test('navigate to url and sign in page', async () => {
    await loginPage.navigate()
    await loginPage.click(loginPage.signIn)
    await loginPage.driver.manage().setTimeouts({ implicit: 100 });
    await loginPage.click(loginPage.nextBtn)
    await loginPage.driver.manage().setTimeouts({ implicit: 100 });
    let value = await loginPage.driver.getCurrentUrl()
    expect(value).toBe(loginPage.signIn)
})

test('sign in', async () => {
    await (await loginPage.getElement(loginPage.userInput)).sendKeys('test@gmail.com')
    await loginPage.driver.manage().setTimeouts({ implicit: 100 });
    await loginPage.click(loginPage.nextBtn)
    await (await loginPage.getElement(loginPage.pwInput)).sendKeys('passsword1')
    await loginPage.driver.manage().setTimeouts({ implicit: 100 });
    await loginPage.click(loginPage.signInBtn)
    let value = await loginPage.driver.getCurrentUrl()
    expect(value).toBe(loginPage.loginPage)
})

afterAll(async () => {
    await loginPage.driver.quit()
})