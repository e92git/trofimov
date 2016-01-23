cd /var/www/trofimov/data/www/trofimov.web-kss.ru

# Старт работы
cmd: vagrant up
git bash: ssh vagrant@127.0.0.1 -p 2222
git bash: cd /home/vagrant/Code/Laravel

# Завершение работы
cmd: vagrant up
git bash: ssh vagrant@127.0.0.1 -p 2222


# Добавление удаленного репозитория git
* git config --global user.name "e92git"
* git config --global user.email "web.kss.ru@gmail.com"

##variant 1
* cd /var/www/trofimov/data/www/
* git clone https://e92git@github.com/e92git/trofimov.git trofimov.web-kss.ru
* cd trofimov.web-kss.ru

##variant 2
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