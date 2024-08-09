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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/5099de19d4f0689ae5558.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "24102160302";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "log" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/3fd985d1948187ee6bdc6.jpg" // "https://telegra.ph/file/3fd985d1948187ee6bdc6.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_05_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3LFxuICAgICAgICA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMixcbiAgICAgICAgNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0OSxcbiAgICAgICAgODksXG4gICAgICAgIDUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDgzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBCc0lDZlVlRjUzUTg4WkQ2bFU4MzhDcnFvZ05Ua2lNR1VZZjA3YkkzMk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjQxMDIxNjAzMDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZGRDFBMTIyRTIxRjIyNUQwQjk0RENDM0ZEMjcyMUFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzIyMzEyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0MTAyMTYwMzAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NTU3Q0I4QTU4Mzg4N0Y0NjM5MkYwMTNCNjI0MTZEMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMyMjMxMjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWEJiUDl0LW9SRWlzeFB3SHRpYTRJZ1wiLFxuICBcInBob25lSWRcIjogXCIxMTczNmY5YS05MTZkLTQwZDgtOGU1Ny1hODI4NDI3N2VlZDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA2LFxuICAgICAgMTE2LFxuICAgICAgMTQ4LFxuICAgICAgMjQyLFxuICAgICAgMTI4LFxuICAgICAgMTU2LFxuICAgICAgMTU4LFxuICAgICAgNTMsXG4gICAgICAyNCxcbiAgICAgIDc2LFxuICAgICAgMjYsXG4gICAgICA4NixcbiAgICAgIDMsXG4gICAgICA2MSxcbiAgICAgIDEwOCxcbiAgICAgIDk3LFxuICAgICAgNzQsXG4gICAgICAxOTcsXG4gICAgICAxNjQsXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxNjEsXG4gICAgICA2NyxcbiAgICAgIDE5OCxcbiAgICAgIDI0NyxcbiAgICAgIDE3NCxcbiAgICAgIDI1NSxcbiAgICAgIDU2LFxuICAgICAgNDAsXG4gICAgICAyMTYsXG4gICAgICAxMzIsXG4gICAgICA2NSxcbiAgICAgIDIwMixcbiAgICAgIDU5LFxuICAgICAgMTg0LFxuICAgICAgMTIzLFxuICAgICAgODUsXG4gICAgICAxMzMsXG4gICAgICAxNjYsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKVERUTVQ1UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQxMDIxNjAzMDI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQyNTU0MjkzMTAwNTUwOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTHVpcyBZc3NpbmUgRXJuZXN0byBQZWRyb1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xENC91d0RFTXlZMmJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid0VJc0dKTUViYnkwdytsWEtHaTNZa2FYZEpzeWJVRERxbkE3cXZWMDkyZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjZDllekpNc3NIVFg2cWlFNFpycmtFcTFCcGlKZ1FFUHF6UkpMOXpscElmUGZsSEFGakFrV3JlcmRVa3VQMjVibEpCZWtXOGJoWU1wb3ZRcUpNRThCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYYnF2TkFQd0k1c1hKRzJ3dzdiaEZnRy9LQnRHa1RLM2Z1dThiSkhDR0pqWk9BN29aQmtyZVZlSit5cmFiZXNsRm9seGlwREhEWmJXT2lkVXVHUGJpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDEwMjE2MDMwMjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMjIzMTIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1dEXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPV0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHRjZjLy9UT2xnZFphM2luNWwwNUUxZklvNFpRdWhHS3MrQm9qQjM2Mm5BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMzM4Nzg1NzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzIyMzEyNDE3OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝙠𝙞𝙣𝙮 𝙚𝙧𝙣𝙚𝙨𝙩 𝙡𝙚𝙜𝙤𝙖𝙩",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
  //userImages:process.env.USER_IMAGES|| "",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
