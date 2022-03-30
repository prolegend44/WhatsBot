//jshint esversion:6

const execute = (client,msg) => msg.reply('Pong');

module.exports = {
    name: 'Ping',
    description: 'responds with Pong',
    command: '!ping',
    commandType: 'info',
    isDependent: false,
    help: undefined,
    execute};
