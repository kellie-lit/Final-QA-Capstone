import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
const chromedriver = require('chromedriver')

interface Options {
    driver?: WebDriver;
    url?: string;
}

export class HomePage {
    driver: WebDriver
    url: string = 'https://bp-foundations-capstone.herokuapp.com/index.html'
    quoteBtn: By = By.id('quoteBtn')
    pictureBtn: By = By.id('dogPicBtn')
    startBtn: By = By.id('start-timer')
    stopBtn: By = By.id('stop-timer')
    restartBtn: By = By.id('reset-timer')
    timer: By = By.id('timerCircle')
    

    constructor(options?: Options) {
        if(options && options.driver) this.driver = options.driver
        else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
        if(options && options.url) this.url = options.url
    }
    async navigate(url?: string): Promise<void> {
        if (url) return await this.driver.get(url)
        else if (this.url) return await this.driver.get(this.url)
        else return Promise.reject('You need a url to visit the page please add one in the page objects or in your test')
    }

    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }

    async click(elementBy: By): Promise<void> {
        return(await this.getElement(elementBy)).click()
    }

    async setInput(elementBy:By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys)
    }

    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText()
    }

    async getAttribute(elementBy: By, attribute: string) {
        return (await this.getElement(elementBy)).getAttribute(attribute)
    }
}
