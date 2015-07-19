module.exports = function(app){
  var User = app.models.user;
  User.create({email: "lim.vitaliy@gmail.com", password: "123"}, function (err, user) {
    console.log(user);
  });
};
