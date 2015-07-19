SYNC_FOLDER = ENV["SYNC_FOLDER"] || File.dirname(__FILE__)

Vagrant.configure(2) do |config|

  config.vm.define :server do |vmconfig|
    vmconfig.dns.tld = "dev"
    vmconfig.vm.box = "ubuntu/trusty64"
    vmconfig.vm.hostname = "lifesource-api"
    vmconfig.vm.network "forwarded_port", guest: 3000, host: 3000
    vmconfig.vm.synced_folder SYNC_FOLDER, "/usr/src/lifesource/lifesource-api", create: true
    vmconfig.vm.network :private_network, ip: "7.7.7.1"

    vmconfig.vm.provision :shell do |shell|
      shell.inline = "mkdir -p /etc/puppet/modules;
                      puppet module install puppetlabs/mongodb;
                      puppet module install puppetlabs/nodejs;"
    end

    vmconfig.vm.provision "puppet" do |puppet|
      puppet.options = "--verbose --debug"
      puppet.manifests_path = "manifests"
      puppet.manifest_file = "lifesource-api.pp"
    end
  end
end
