@echo off

set CHROME_EXE=c:\Program Files (x86)\Google\Chrome\Application\chrome.exe

set CHROME_SETTINGS=
set CHROME_SETTINGS=%CHROME_SETTINGS% --window-position=-1928,-30
set CHROME_SETTINGS=%CHROME_SETTINGS% --window-size=480,640
set CHROME_SETTINGS=%CHROME_SETTINGS% --app=C:\Users\Knight\Documents\nodejs\idi-dug-ui\index.html

start "" "%CHROME_EXE%" %CHROME_SETTINGS%