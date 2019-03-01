module.exports = function(controller) {
    controller.hears(['hi','hello','howdy','hey','aloha','hola','bonjour','oi'],['message_received'],function(bot,message) {
      
      bot.reply(message,'Oh hai!');

    });
}