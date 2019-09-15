const telegraf = require("telegraf");
const data = require("./getData");

const app = new telegraf("829158911:AAFtDnA-UrxyVEWjWnW4QeE0_oImK70vBsw");

app.start(ctx => {
    ctx.reply("Welcome");
});

app.hears('data', ctx => {
    let res = data.data();
    return ctx.reply(res);
});

app.startPolling();