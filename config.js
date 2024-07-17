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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "24174671111";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_01_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0LFxuICAgICAgICAzNixcbiAgICAgICAgMjksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NixcbiAgICAgICAgMTgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTksXG4gICAgICAgIDQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICA2MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTExLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICA2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NixcbiAgICAgICAgODgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImgwZTRRK2M1aFVNZGd4anQzbjdFSlVuMHBDbHA0NlBQM1FJckMwdnRoVzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjQxMDQ2NzExMTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA2NEJGNjMzREJFMkMyQkYzRjA0QzhFRkU3NDFCQUMwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIyODQ1N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0MTA0NjcxMTExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRjI3Q0Y3MUY1REMyMzU2RUE0Mzg4MDlGNUMzRjJCOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyMjg0NTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNGlvSTdYaEZUQXVrSDFwaEc1N01FUVwiLFxuICBcInBob25lSWRcIjogXCJjOGQ3NTJjMS1iYjM2LTRhM2QtYTVlMC04ODJlN2EyZTNmNjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgMjgsXG4gICAgICAxNjEsXG4gICAgICAxODksXG4gICAgICA2MSxcbiAgICAgIDE4MSxcbiAgICAgIDE5NyxcbiAgICAgIDE1NixcbiAgICAgIDIyMCxcbiAgICAgIDYzLFxuICAgICAgNzIsXG4gICAgICAxOCxcbiAgICAgIDI2LFxuICAgICAgMTk5LFxuICAgICAgMTM1LFxuICAgICAgMTYwLFxuICAgICAgMTM2LFxuICAgICAgMTkzLFxuICAgICAgMTg4LFxuICAgICAgNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgNSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NCxcbiAgICAgIDE3NyxcbiAgICAgIDE4MyxcbiAgICAgIDU1LFxuICAgICAgMjEzLFxuICAgICAgMjE5LFxuICAgICAgNDEsXG4gICAgICA0NyxcbiAgICAgIDYxLFxuICAgICAgODcsXG4gICAgICAxMTYsXG4gICAgICAxOTEsXG4gICAgICAzNyxcbiAgICAgIDY3LFxuICAgICAgNSxcbiAgICAgIDIzMyxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSNExaNkhDNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQxMDQ2NzExMTE6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLljY3FguKCteKxp8WC4oKyw5gg4oKz4rGg4oKxxYLisaTJjtO+IOKCrsmO4rGk4oKz4oKm4oKu5Y2NXCIsXG4gICAgXCJsaWRcIjogXCIxNTk5NzUxMTY2OTc2OTE6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3pEMFowREVLRzUzN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCYkJZaFI1RWllQnFjYlpmRUQ2dkxMMll4bnU4N2srQll4Z3YrbW5ZdHhJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlZSUV0ZmpSMmg3VUkzTXpUR2R1UDdVT25mbmFoU3VJckRRVmVrK1BjeENUQ21ERW9zUnRONzF0RXFRQktMSlRUTk9PZnRFLzdpVU5pcGhnL3J4Q0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktTa1MvaHo2QThLd21pNTJyVXN3VlhGVWdmZlBPWllnaHZRczFUdThjYThIWVlhWEZLNGNiNkl2TU5uZzNmOEtnZXV1ZHVjdmtvTElEQTU1MlVGakNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MTA0NjcxMTExOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTIyODQ1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUc4NFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzg0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTU54SHBPTjJ0RTZWQ1ZuTGhjcE8rdjFUTi9LcE1XSkpqOW8wRUVMWHdzUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4Njc0NTk1NjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTIyODQ1NzI1OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝙄𝘾𝙃𝙄𝙂𝙊 𝘼𝙇𝙋𝙄𝙍𝙔𝙓 𝙏𝙔𝙍𝘼𝙉𝙏",


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
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
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
