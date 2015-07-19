class { "::nodejs":
  manage_package_repo       => false,
  nodejs_dev_package_ensure => "present",
  npm_package_ensure        => "present",
}

class {"::mongodb::server":
  port    => 27017,
  verbose => true,
}
