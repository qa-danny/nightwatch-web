module.exports = {
  url: 'https://the-internet.herokuapp.com/',
  elements: {
    heading: 'h1',
    subheading: 'h2',
    links: 'ul li a'
  },
  commands: [
    {
      getHeadingText: async function() {
        return this.getText('@heading');
      },
      getSubheadingText: async function() {
        return this.getText('@subheading');
      },
      clickLinkByText: async function(linkText) {
        return this.api.useXpath()
          .click(`//a[text()="${linkText}"]`)
          .useCss();
      },
      getAllLinkTexts: async function() {
        const linkTexts = [];
        const elements = await this.api.elements('@links');
        for (let e of elements) {
          const text = await this.api.getText(e);
          linkTexts.push(text);
        }
        return linkTexts;
      }
    }
  ]
};
