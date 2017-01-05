goog.provide('Blockly.Arduino.jeongyeon');

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

Blockly.Arduino.calculate_bit = function() {
  // Comparison operator.
  var operator = (this.getFieldValue('OP') == 'AND') ? '&' : '|';
  var order = (operator == '&') ? Blockly.Arduino.ORDER_BITWISE_AND :
    Blockly.Arduino.ORDER_BITWISE_OR;
  var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Arduino.setup_wire = function() {
  Blockly.Arduino.definitions_['define_wiringPi'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['MPU'] = 'const int MPU=0x68;\n';
  Blockly.Arduino.setups_['setup_wiringPi'] = 'Wire.begin();';
  Blockly.Arduino.setups_['setup_begT'] = 'Wire.beginTransmission(MPU);';
  Blockly.Arduino.setups_['setup_pwr_mgmt_1'] = 'Wire.write(0x6B);';
  Blockly.Arduino.setups_['setup_write'] = 'Wire.write(0);';
  Blockly.Arduino.setups_['setup_endT'] = 'Wire.endTransmission(true);\n';
  //var set_mpu = Blockly.Arduino.valueToCode(this,'MPU',Blockly.Arduino.ORDER_ATOMIC) || '104';
  var code = 'Wire.beginTransmission(MPU);\nWire.write(0x3B);\nWire.endTransmission(false);\nWire.requestFrom(MPU,14,true);\n\n';
  return code;
};

Blockly.Arduino.wire_read = function() {
  var code = 'Wire.read()';
  return [code,Blockly.Arduino.ORDER_ATOMIC];
};
