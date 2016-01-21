# добавление удаленного репозитория git
git remote add server https://e92git@github.com/e92git/trofimov.git
git push server master:master
git config remote.origin.url https://e92git@github.com/e92git/trofimov.git
git pull
git add . 
git commit -a 
git push