cd /var/www/trofimov/data/www/trofimov.web-kss.ru

# Старт работы
cmd: d:
cmd: cd D:\Homestead\homestead
cmd: vagrant up
git bash: ssh vagrant@127.0.0.1 -p 2222
git bash: cd /home/vagrant/Code/Laravel 
       or cd /home/vagrant/Code/laravel-angular 

# Завершение работы
cmd: vagrant up
git bash: ssh vagrant@127.0.0.1 -p 2222


# Добавление удаленного репозитория git
git config --global user.name "e92git"
git config --global user.email "web.kss.ru@gmail.com"

##variant 1
cd /var/www/trofimov/data/www/
git clone https://e92git@github.com/e92git/trofimov.git trofimov.web-kss.ru
git clone https://e92git@github.com/e92git/starter-laravel-angular.git angular-laravel.web-kss.ru
git clone https://e92_git@bitbucket.org/e92_git/btr.git btr.web-kss.ru
cd trofimov.web-kss.ru
chown -R trofimov.trofimov /var/www/trofimov/data/www/btr.web-kss.ru

##variant 2
git remote add server https://e92git@github.com/e92git/trofimov.git

git push server master:master
git config remote.origin.url https://e92git@github.com/e92git/trofimov.git
git pull
git add . 
git commit -a 
git push

# Что бы пароль не спрашивал больше от Git
git config --global credential.helper cache
git config --global credential.helper 'cache --timeout=3600000'

# Генерация helper'ov
php artisan ide-helper:generate - phpDoc generation for Laravel Facades
php artisan ide-helper:models - phpDocs for models
php artisan ide-helper:meta - PhpStorm Meta file

# Подключение к MySql
192.168.10.10
homestead
secret