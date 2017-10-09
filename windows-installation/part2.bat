@echo off
title "BOT SETUP PART 2"
echo "If this installation fails, please run part1.bat first"
npm install discord.js --save
if %errorlevel%==9009 echo Command Not Found, please install Node.js
pause