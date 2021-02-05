Blockly.Blocks['eventhandler'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["プレイヤーが参加", "PlayerJoinEvent"], ["プレイヤーが退出", "PlayerQuitEvent"], ["プレイヤーが移動", "PlayerMoveEvent"]]), "eventList")
      .appendField("したとき")
      .appendField(new Blockly.FieldVariable("event"), "event");
    this.appendStatementInput("doing")
      .setCheck(null);
    this.setColour("#f9d06f");
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
    this.setColour("#00bcd4");
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
      .setCheck(null);
    this.appendDummyInput()
      .appendField("という");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["メッセージ", "Message"], ["Tip", "Tip"], ["Popup", "Popup"], ["Form", "Form"]]), "send_type");
    this.appendDummyInput()
      .appendField("を送る");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("いろいろおくります");
    this.setHelpUrl("");
  }
};