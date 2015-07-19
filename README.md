# LifeSource API

Node.js powered back-end for the lifesource.com.ua

### Installation

  - Pull this repository and install all node requirements

```sh
$ npm install
```

  - Make sure you have [Vagrant] and [vagrant-dns] plugin installed
  - Run the box

```sh
$ vagrant up
```

  - SSH to vagrant box

```sh
$ vagrant ssh
```

  - Start app

```sh
vagrant@lifesource-api.dev$ cd /usr/src/lifesource/lifesource-api && nodejs .
```

  - Make sure you reach API http://lifesource-api.dev:3000

[Vagrant]:https://www.vagrantup.com
[vagrant-dns]:https://github.com/BerlinVagrant/vagrant-dns
