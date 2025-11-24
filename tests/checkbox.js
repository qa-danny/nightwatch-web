module.exports = {
  'Go to Checkbox Page and Verify Elements': async function (browser) {
    const checkboxPage = browser.page.checkbox();
    
    await checkboxPage.navigate();
    const headingText = await checkboxPage.getHeadingText();
    await browser.assert.equal(headingText, 'Checkboxes');
  },
  'Click Checkbox, Verify Change': async function (browser) {
    const checkboxPage = browser.page.checkbox();
    
    const originalState = await checkboxPage.clickCheckBoxByIndex(0);
    console.log('Original state was: ' + originalState + ', new state should be: ' + !originalState);
    await browser.expect(await checkboxPage.isCheckBoxSelectedByIndex(0)).to.equal(!originalState);
  }
}
