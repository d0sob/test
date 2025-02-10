@echo off
REM Prompt the user for a commit message
set /p commitMessage="Enter commit message: "

REM Stage all changes
git add .

REM Commit the changes with the provided commit message
git commit -m "%commitMessage%"

REM Push the commit to the main branch
git push origin main

REM Build the project
npm run build

REM Deploy the project
npm run deploy

pause
