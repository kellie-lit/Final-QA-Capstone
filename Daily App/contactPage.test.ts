import { ContactPage } from '../Page-Objects/contactPage'


const contactPage = new ContactPage

jest.setTimeout(10000)


test('navigate to url and contact page', async () => {
    await contactPage.navigate()
    await contactPage.navigate(contactPage.contactPage)
    await contactPage.driver.manage().setTimeouts({ implicit: 100 });
    await contactPage.click(contactPage.submitBtn)
    await contactPage.driver.manage().setTimeouts({ implicit: 100 });
    let value = await contactPage.driver.getCurrentUrl()
    expect(value).toBe(contactPage.contactPage)
})

// Test contact page with proper input information 

test('contact page input and submit information', async () => {
    await (await contactPage.getElement(contactPage.firstNameInput)).sendKeys('testFirst')
    await contactPage.driver.manage().setTimeouts({ implicit: 100 });
    await (await contactPage.getElement(contactPage.lastNameInput)).sendKeys('testLast')
    await contactPage.driver.manage().setTimeouts({ implicit: 100 });
    await (await contactPage.getElement(contactPage.emailInput)).sendKeys('test@email.com')
    await (await contactPage.getElement(contactPage.messageInput)).sendKeys('Hello World')
    await contactPage.click(contactPage.submitBtn)
    let value = await contactPage.driver.getCurrentUrl()
    expect(value).toBe(contactPage.contactPage)
})

afterAll(async () => {
    await contactPage.driver.quit()
})