module.exports = {
  url: 'https://the-internet.herokuapp.com/checkboxes',
  elements: {
    heading: 'h3',
    checkbox: 'input[type="checkbox"]'
  },
  commands: [{
    getHeadingText: async function() {
      return this.getText('@heading');
    },
    clickCheckBoxByIndex: async function(index = 0) {
      const selected = await this.isCheckBoxSelectedByIndex(index);
      if (selected) {
        console.log('Checkbox is already selected, deselecting.');
      } else {
        console.log('Checkbox is not selected, selecting.');
      }
      await this.click({ selector: '@checkbox', index });
      return selected;
    },
    isCheckBoxSelectedByIndex: async function(index) {
      return this.isSelected({ selector: '@checkbox', index });
    }
  }]
};
