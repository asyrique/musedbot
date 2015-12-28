// Description:
//   <description of the scripts functionality>
//
// Dependencies:
//   "<module name>": "<module version>"
//
// Configuration:
//   LIST_OF_ENV_VARS_TO_SET
//
// Commands:
//   musedbot standup HH:MM - Set's time of day for standup
//   musedbot standup <user> - Returns if user has already stood up.
//   <trigger> - <what the hear trigger does>
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   asyrique <asyrique@gmail.com>

'use strict';

module.exports = function(robot) {
  const getUsername = function(msg) {
    return "@" + msg.message.user.name;
  };
  const getChannel = function(msg) {
    if (response.message.room === response.message.user.name) {
      return "@" + response.message.room;
    } else {
      return "#" + response.message.room;
    }
  };

  const isPrivateMsg = function(msg) {
    return msg.message.room === msg.message.user.name;
  };

  robot.hear(/standup (\d+):(\d+)/i, function(msg) {
    if (isPrivateMsg(msg)) {
      robot.adapter.customMessage({
        channel: msg.message.room,
        content: [
          {
            color: '#cccccc',
            title: 'Location',
            text: 'Someplace',
          },
          {
            color: 'good',
            title: 'Yesterday',
            text: 'Did blah blah',
          },
          {
            color: '#0099CC',
            title: 'Today',
            text: 'Gonna do',
          },
          {
            color: 'danger',
            title: 'Blockers',
            text: 'Boo boo :(',
          },
        ],
        username: 'musedbot',
        text: '_Check-in from ' + getUsername(msg) + ' _',
      });
    } else {
      msg.send("I'm sorry, I can't do that " + getUsername(msg) + '.');
    }
  });
};
