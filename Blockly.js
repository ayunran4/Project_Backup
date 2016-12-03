goog.provide('Blockly.Blocks.custom');

goog.require('Blockly.Blocks');

Blockly.Blocks['base_delay_example'] = {
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    this.setColour(120);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField("Delay")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);  // 위 연결
    this.setNextStatement(true, null);  // 아래 연결
    this.setTooltip('Delay specific time');  // 설명
  }
};

Blockly.Blocks['shift'] = {
  init: function() {
    var OPERATORS = [['<<', 'LT'],['>>', 'RT']];
    this.setHelpUrl('https://google.com');
    this.setColour(210);
    this.setOutput(true, 'Number');
    this.appendValueInput('A');
    this.appendValueInput('B')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'LT': Blockly.Msg.CUSTOM_SHIFT_TOOLTIP_LT,
        'RT': Blockly.Msg.CUSTOM_SHIFT_TOOLTIP_RT
      };
      return TOOLTIPS[op];
    });
  }
};
