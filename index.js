const telegraf = require("telegraf");
const app = new telegraf("829158911:AAFtDnA-UrxyVEWjWnW4QeE0_oImK70vBsw");

app.start(ctx => {
    ctx.reply("Welcome");
});

app.hears('hi', ctx => {
    return ctx.reply("Hello");
});

app.startPolling();