@echo off
title "BOT SETUP PART 1"
echo "If this installation fails, please install NPM and try again!"
npm init
if %errorlevel%=9009 echo "Please install Node.js!"
pause