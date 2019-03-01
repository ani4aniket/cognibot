// var passport = require('passport'),
// 	LocalStrategy = require('passport-local'),
// 	passportLocalMongoose = require('passport-local-mongoose'),
// 	bodyParser = require('body-parser'),
// 	{User} = require('../database.js')	;

// webserver.use(bodyParser.urlencoded({ extended: true }));
// webserver.use(require('express-session')({
// 	secret: 'This is the secret',
// 	resave: false,
// 	saveUninitialized: false
// }));

// webserver.use(passport.initialize());
// webserver.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


module.exports = function(webserver, controller) {



// add custom routes for your web server here.

webserver.get('/admin', function(req,res) {
  
    res.render('login');
  
});

webserver.get('/cypher', function(req, res) {

	res.render('register')

});

webserver.get('/dashboard', function(req, res) {

	res.render('dashboard')

})

// webserver.post('/cypher', (req, res) => {
// 	User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
// 		if (err) {
// 			console.log(err);
// 			return res.render('cypher');
// 		}
// 		passport.authenticate('local')(req, res, () => {
// 			res.redirect('/dashboard');
// 		})
// 	});
// });

// webserver.post('/admin', passport.authenticate('local', {
// 	successRedirect: '/dashboard',
// 	failureRedirect: '/admin'
// }), (req, res) => {

// });

// webserver.get('/admin/logout', (req, res) => {
// 	req.logout();
// 	res.redirect('/admin');
// });

// function isLoggedIn(req, res, next) {
// 	if (req.isAuthenticated()) {
// 		return next();
// 	}
// 	res.redirect('/admin');
// };


}
