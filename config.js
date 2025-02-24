const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "wCkCFTxY#rMQfPijL35nkxUwwjDnD0nOiWWQya9uPnlii8NJYbY0",
    CAPTION: process.env.CAPTION || "𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐕2",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/nWJqfPb/mrgmax.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M 𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐕2 WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    DEV: process.env.DEV || "94764703165",//replace with your whatsapp number        
    ANTI_VV: process.env.ANTI_VV || "true",// true for anti once view 
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // change it to 'same' if you want to resend deleted message in same chat
    OWNER_REACT: process.env.OWNER_REACT || "true",
    READ_CMD: process.env.READ_CMD || "true",
    BOT_NAME: process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐕2",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺үσυя sтαтυs sεεη נυsт ησω вү -sσвia-м∂`",
    STATUS_REACT: process.env.STATUS_REACT || "true",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
