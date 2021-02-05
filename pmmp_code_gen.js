Blockly.PHP['eventhandler'] = function (block) {
  var dropdown_eventlist = block.getFieldValue('eventList');
  var variable_event = Blockly.PHP.variableDB_.getName(block.getFieldValue('event'), Blockly.Variables.NAME_TYPE);
  var statements_doing = Blockly.PHP.statementToCode(block, 'doing');
  // TODO: Assemble PHP into code variable.
  var code = 'public function eventhandler_' + getUniqueStr() + '(' + dropdown_eventlist + ' ' + variable_event + '){\n';
  code = code + statements_doing + '\n}\n';
  return code;
};
Blockly.PHP['getter'] = function (block) {
  var value_object = Blockly.PHP.valueToCode(block, 'objects', Blockly.PHP.ORDER_ATOMIC);
  var value_value = Blockly.PHP.valueToCode(block, 'value', Blockly.PHP.ORDER_ATOMIC);
  value_value = value_value.replace(/\'/g, "");
  // TODO: Assemble JavaScript into code variable.
  var code = value_object + '->get' + value_value + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};

/*Blockly.PHP['sendmessage'] = function (block) {
  var value_value = Blockly.PHP.valueToCode(block, 'value', Blockly.PHP.ORDER_ATOMIC);
  var value_message = Blockly.PHP.valueToCode(block, 'message', Blockly.PHP.ORDER_ATOMIC);
  // TODO: Assemble PHP into code variable.
  var code = value_value + '->sendMessage(' + value_message + ');\n';
  return code;
};*/

Blockly.PHP['sendmessage'] = function (block) {
  var value_value = Blockly.PHP.valueToCode(block, 'value', Blockly.PHP.ORDER_ATOMIC);
  var value_message = Blockly.PHP.valueToCode(block, 'message', Blockly.PHP.ORDER_ATOMIC);
  var dropdown_send_type = block.getFieldValue('send_type'); //Message, Tip, Popup, Form
  // TODO: Assemble JavaScript into code variable.
  var code = value_value + '->send' + dropdown_send_type.replace(/\'/g, "") + '(' + value_message + ');\n';
  return code;
};

function getUniqueStr(myStrong) {
  var strong = 100000;
  if (myStrong) strong = myStrong;
  return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
}