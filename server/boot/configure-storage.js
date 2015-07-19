var Hashids = require("hashids"),
    hashids = new Hashids("lifesource-api", 32);

module.exports = function(app) {
  app.dataSources.file.connector.getFilename = function(fileInfo, req, res) {
      return hashids.encode(new Date().getTime()) + "_" + fileInfo.name;
  };
};

