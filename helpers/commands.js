// Commands => start, help, about.

startMsg = async (ctx) =>
{
    ctx.reply(`👋 Hey ${ctx.from.first_name} ..\n\nWith me you can convert TORRENT file to MAGNET Link & vice versa.\nI can handle groups also.\n\nCommands: /help /about\n`,
    {
        parse_mode: "HTML",
        reply_to_message_id: ctx.message.message_id,
        reply_markup:{
            inline_keyboard: [
                [
                    {text: 'Owner', url:'https://t.me/zekxtreme'},
                    {text: 'Source Code 🌟', url:'https://github.com/JinsoRaj/TorrentConverter'}
                ]
            ]
        } 
    })
};

helpMsg = async (ctx) =>
{
    ctx.reply(`I can convert magnet links to torrent files and vice versa.\nI can manage your torrent / leech groups also. <a href="https://t.me/TorrentConvertBot?startgroup=start">Add me to your groups.</a>`,
    {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_to_message_id: ctx.message.message_id 
    })
};

aboutMsg = async (ctx) =>
{
    ctx.reply(`Owner: @Zekxtreme\nFramework: <a href="https://grammy.dev">grammY</a> �`,
    {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_to_message_id: ctx.message.message_id,
        reply_markup:{
            inline_keyboard: [
                [
                    {text: '🌟 Rate Me 🌟', url:'https://t.me/tlgrmcbot?start=torrenttomagnetrobot-review'}
                ]
            ]
        } 
    })
};

module.exports = { startMsg, helpMsg, aboutMsg }
