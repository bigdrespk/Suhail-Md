const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22606149032";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_58_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2LFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDczLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICA2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIxLFxuICAgICAgICA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkwLFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEwLFxuICAgICAgICA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkkrK2xIOFVFeEMrNTRFWTVoRVpuS2lVV0ExSXRxTE9EZnhNMnVoaE9iUnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI2MDYxNDkwMzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVFQzdERjk1MDkyQTM3QTYzMEE3QjJCRjQ2N0VGRTI2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTY3ODI5OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNjA2MTQ5MDMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MjE2RDI0QTcyQjdEMkVDNDA4RDI5NzExRkUwRTZEQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2NzgyOThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWWNUeVZ4b3lUdHFoWFJ4NkhJbnV3UVwiLFxuICBcInBob25lSWRcIjogXCJkMjg5NmIxNy03NWNlLTRhMmMtYjc2MC1kZDIyNzc0MWQ2NTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICAxMzksXG4gICAgICA4NyxcbiAgICAgIDI0MCxcbiAgICAgIDIwMCxcbiAgICAgIDk3LFxuICAgICAgNzgsXG4gICAgICA1NixcbiAgICAgIDEyNyxcbiAgICAgIDE4OCxcbiAgICAgIDcxLFxuICAgICAgMTczLFxuICAgICAgNTksXG4gICAgICAxMjksXG4gICAgICAxMTksXG4gICAgICA2NSxcbiAgICAgIDcxLFxuICAgICAgMTUsXG4gICAgICAxMzEsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAxNDUsXG4gICAgICAyOSxcbiAgICAgIDE3OSxcbiAgICAgIDE4MSxcbiAgICAgIDE0NyxcbiAgICAgIDEzLFxuICAgICAgMjQyLFxuICAgICAgMTcxLFxuICAgICAgODcsXG4gICAgICAxNjEsXG4gICAgICA5NCxcbiAgICAgIDExNyxcbiAgICAgIDE5OCxcbiAgICAgIDE3MSxcbiAgICAgIDYsXG4gICAgICA0NyxcbiAgICAgIDEwNixcbiAgICAgIDIxMixcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlc5SDQ4Skg1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjYwNjE0OTAzMjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JKCnfCdl5vwnZeu8J2Xu/CdmIfwnZiCIPCdl6XwnZe88J2Xr/Cdl7LwnZe/8J2YgPCdl7zwnZe7IOS4gCDwnZec8J2Yh/CdmILwnZe68J2XtlwiLFxuICAgIFwibGlkXCI6IFwiMjY2MDk5NTMwNjkwNjUxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT09RcUhBUTBQUDZ0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVYWJUdmZXSlVMeUMrZklJRjRkNE4zcm96a0JQVUhKWktBbklsdFZzRkFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1uN0tvbjZ2djNBTVVkeEJqNWhvSnJZa3RZVW4rV0oxMitqZDhSOHo3YkJGWFd2Mzh2SzdIVC92UUJYL0Y1cXIyeC8yZE1KbWRvbkNwZ05BRXpMY0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZ0bGRDRmN0S3NZMFcwSS9NZmZhQUk2MUhES3pUTWtBTmZpUHJvQlZmL3BoK2x3eWdPMkxvb1RVUHJRaDRibVA5NGRMamw3eDArZmxqUTZTUjZjRkNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNjA2MTQ5MDMyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY3ODI5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFVZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQVVnLmpzb24iOiAie1wia2V5RGF0YVwiOlwidmw0REl1eWJaSkFIWnR0VVE3Sytma2IwMzJPcWZyWXk4VjB2OG5rNGRPaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzU1Mzg1MzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTY3ODI5NDk4M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝗧𝗵𝗲𒂝𝗛𝗮𝗻𝘇𝘂 𝗥𝗼𝗯𝗲𝗿𝘀𝗼𝗻
🍵",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "1",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
