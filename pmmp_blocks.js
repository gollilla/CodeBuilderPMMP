Blockly.Blocks['eventhandler'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["プレイヤーが参加", "PlayerJoinEvent"], ["プレイヤーが退出", "PlayerQuitEvent"], ["プレイヤーが移動", "PlayerMoveEvent"]]), "eventList")
      .appendField("したとき")
      .appendField(new Blockly.FieldVariable("event"), "event");
    this.appendStatementInput("doing")
      .setCheck(null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['getter'] = {
  init: function () {
    this.appendValueInput("objects")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("から");
    this.appendValueInput("value")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("を取得");
    this.setOutput(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sendmessage'] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("に");
    this.appendValueInput("message")
      .setCheck("String");
    this.appendDummyInput()
      .appendField("と送る");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};