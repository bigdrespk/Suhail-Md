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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237621329027";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "log" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/5099de19d4f0689ae5558.jpg" // "https://telegra.ph/file/5099de19d4f0689ae5558.jpg" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_22_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MixcbiAgICAgICAgMTk0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDgzLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MixcbiAgICAgICAgMTA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgMjM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0LFxuICAgICAgICA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMixcbiAgICAgICAgODUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInRIK3JEblhkdlJURzJLYXZkelhZUGtDbzZ6OVBPbHRXZjB0NlBPM25KWlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhIbFhPbjNWVFZ1aVIyaF9aNVVOWUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTk1OWQyYjktZTY0NC00MWYwLTliYTQtZGRmZDNhOWYxOWQ2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDEyLFxuICAgICAgMjIyLFxuICAgICAgNjQsXG4gICAgICAzOSxcbiAgICAgIDI1MixcbiAgICAgIDE0LFxuICAgICAgMjUsXG4gICAgICAxNDAsXG4gICAgICAxNTIsXG4gICAgICAxNDMsXG4gICAgICAyNixcbiAgICAgIDEzMSxcbiAgICAgIDM0LFxuICAgICAgMTk5LFxuICAgICAgMTY2LFxuICAgICAgMjIsXG4gICAgICAxNTAsXG4gICAgICAyMTksXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTU5LFxuICAgICAgMTExLFxuICAgICAgOTksXG4gICAgICAxOSxcbiAgICAgIDEzMCxcbiAgICAgIDExNSxcbiAgICAgIDE1NCxcbiAgICAgIDE0MSxcbiAgICAgIDE4MSxcbiAgICAgIDE5NCxcbiAgICAgIDExMCxcbiAgICAgIDIxOCxcbiAgICAgIDYzLFxuICAgICAgODYsXG4gICAgICA0NSxcbiAgICAgIDIyOSxcbiAgICAgIDIsXG4gICAgICAxOTQsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlBaSEhHS0pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzYyMTMyOTAyNzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDgyMTIwMzY2MTIyMDQ6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcTZpcVFHRUtqbXhyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1NUU4yVFNnbWdGWDFTZmdQVGZ1ZFVhV3hhZ2crNHgxMlZqNTBkeDF1VUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNWdLMnFmeURIZDJMVGkxbUU1SG4yVkxYdXFLL0d3N20ydlFJRHZLUnlMN2ZMVWhLQS9paGVnR3lZWjRZOGxqaW81YTdzZkkxcnBXTFdDblpPQ0JSRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiamlqUFd1QVhnTWJNWDUxRkRFN2Y1SWF1MFlJRHFaSUxQUlZIN015SjZpZFJTUGwvVXFRaDY0ZGR1b0ZFQjBPVDM0c2VMLzM1OHpSeVNUWXJob0pCQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjIxMzI5MDI3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjkyMTc3MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "༒✧༺𝕵𝖎𝖓☄️𝖒𝖚𝖜𝖔𝖓༻✧༒",


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
