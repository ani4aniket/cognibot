

module.exports = function(webserver, controller) {
var passport = require('passport'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    User = require('../../models/user');

webserver.post('/cypher', (req, res) => {
	User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
		if (err) {
			console.log(err);
			return res.render('register');
		}
		passport.authenticate('local')(req, res, () => {
			res.redirect('/dashboard');
		})
	});
});

// Signin routes
webserver.post('/admin', passport.authenticate('local', {
	successRedirect: '/dashboard',
	failureRedirect: '/admin'
}), (req, res) => {

});

webserver.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/admin');
};




// add custom routes for your web server here.

webserver.get('/admin', function(req,res) {
  
    res.render('login');
  
});

webserver.get('/cypher', function(req, res) {

	res.render('register')

});

webserver.get('/dashboard', isLoggedIn , function(req, res) {

	res.render('dashboard')

})


}
