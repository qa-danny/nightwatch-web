module.exports = {
  'Go to Home Page and Verify Elements': async function (browser) {
    const homePage = browser.page.homepage();
    
    await homePage.navigate();
    const headingText = await homePage.getHeadingText();
    await browser.assert.equal(headingText, 'Welcome to the-internet');
  },
  'Get All Link Texts': async function (browser) {
    const homePage = browser.page.homepage();
    
    this.linkTexts = await homePage.getAllLinkTexts();
    await browser.expect(this.linkTexts).length.to.be.above(30);
  },
  'Click on a Random Link, verify page header text matches link text': async function (browser) {
    const homePage = browser.page.homepage();
    
    const randomIndex = Math.floor(Math.random() * this.linkTexts.length);
    const randomLinkText = this.linkTexts[randomIndex];
    
    await homePage.clickLinkByText(randomLinkText);
    
    // Should be broken out into a different page object, such as genericSubPage.js,
    // but for demo purposes, this'll be fine:
    const pageHeaderText = await browser.getText('h3');
    await browser.assert.equal(pageHeaderText, randomLinkText);
  }
}
