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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "24176351632";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "log" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_48_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDU4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDYzLFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAzMixcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgODcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICA2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICA3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MixcbiAgICAgICAgMTYyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDg1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic3Jta0JEckhwSkgveTIzZEl6OEphd25xZ1Y4ekQ0VXlVVWJnWGlnTFg0VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZW4zeHhleGdTR21GWnh1dkZMazd0QVwiLFxuICBcInBob25lSWRcIjogXCIzZDdmZWRjZC01ZWM3LTQ4MjItYmQ0ZC00NzFjNDkyMjJkOGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgMTAzLFxuICAgICAgMTE4LFxuICAgICAgMjA4LFxuICAgICAgMTEzLFxuICAgICAgMjI2LFxuICAgICAgMjQzLFxuICAgICAgMTUwLFxuICAgICAgOTMsXG4gICAgICAyMDMsXG4gICAgICAxNDMsXG4gICAgICAxMCxcbiAgICAgIDEwMSxcbiAgICAgIDEwNixcbiAgICAgIDIxOSxcbiAgICAgIDMsXG4gICAgICAwLFxuICAgICAgMTc2LFxuICAgICAgODMsXG4gICAgICA2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICAyLFxuICAgICAgNTcsXG4gICAgICAxMzUsXG4gICAgICAxMzUsXG4gICAgICAxMzMsXG4gICAgICAxNTIsXG4gICAgICAyNyxcbiAgICAgIDkwLFxuICAgICAgNDYsXG4gICAgICAxODMsXG4gICAgICAxNjUsXG4gICAgICAyMTcsXG4gICAgICAxOTQsXG4gICAgICAyMDEsXG4gICAgICAyMjYsXG4gICAgICAxMTYsXG4gICAgICAxOTMsXG4gICAgICA1OCxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGTjZSQ0w2OVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQxNzYzNTE2MzI6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYzNjYwNTQyMTM2NDc2OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05uSXl3RVFtL21hdFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYjl4OWZmZzJLSHl3cVhjeWhDdFlJbENDeU1OT1F5YmdBSUZNQXV2N09VTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTRDlUa1YwNGg3RndzWHY2SXFnSGVlQ2lYcEJmS0UwNWxHcVZiTzBZeWFWcTk3RndQZWRWMG5hOUVJQ0hjbVFjcEdrcy8wWlpDcEtUK3V2b1NnTW5EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlMmx1VE5oRkpROElkYlNGNFhGZlFRRFBaM2xiWGpCNGxNaGZkMjlXUnNSVEx5MDdLOS9TcktIaUYyaGhXendOS0VvS2xBYU9Oa1BXRzMraG94d2ZEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDE3NjM1MTYzMjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyMDMyOTZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "🩸ᬊᬁ𝑻𝒐𝒃𝒊🎭⁖℘:",


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
