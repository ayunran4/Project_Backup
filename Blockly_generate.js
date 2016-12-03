goog.provide('Blockly.Arduino.custom');

goog.require('Blockly.Arduino');


Blockly.Arduino.base_delay_example = function() {
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  var code = 'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino.shift = function() {
  // Comparison operator.
  var operator = (this.getFieldValue('OP') == 'LT') ? '<<' : '>>';
  var order = Blockly.Arduino.ORDER_SHIFT;
  var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};
