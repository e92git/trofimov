# Добавление удаленного репозитория git
* git config --global user.name "e92git"
* git config --global user.email "web.kss.ru@gmail.com"
* git remote add server https://e92git@github.com/e92git/trofimov.git
* git push server master:master
* git config remote.origin.url https://e92git@github.com/e92git/trofimov.git
* git pull
* git add . 
* git commit -a 
* git push
 
# Что бы пароль не спрашивал больше от Git
* git config --global credential.helper cache
* git config --global credential.helper 'cache --timeout=3600000'