  
 
 var express = require('express'),
	 router = express.Router(),
	 logger = require('../../config/logger');
	 Gadgets = require('User'),
	 User = Gadgets.module('User');

module.exports = function (app, config) {
	app.use('api', router);


 

//post
 router.route('/users').post((req, res,next) => {
	 logger.log('info', 'Creat user');
	 var user = new User(req.body);
	 user.save()
	 .then(result => {
		 res.status(201).json(result);
	 })
	 .catch((err) => {
		 return next(err);
	 });
 });


// get all user
 router.route('/users').get((req, res,next) => {
	logger.log('info', 'Get all users');
	var query = User.find()
	.sort(req.query.order)
	.exec()
	.then(result => {
		if (result && result.length) {
			res.status(200).json(result);
		} else {
			res.status(400).json({ message: 'No users'});
		}
	})
	.catch((err) => {
		return next(err);
	});
});


//get user id
router.route('/users/:id').get((req, res,next) => {
	logger.log('info', 'Get user %s', req.params.id);
	User.findById(req.params.id)
	.then(result => {
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ message: 'No user found'});
		}
	})
	.catch((err) => {
		return next(err);
	});
});


//log in
router.route('/users/:id').get((req, res,next) => {
	logger.log('info', '%s logging in', req.body.email);
	var email = req.body.email
	var password = req.body.password;

	var obj = { 'email': email, 'password': password };
	res.status(201).json(obj);
	});


//put
router.route('/users/:id').post((req, res,next) => {
	logger.log('info', 'Updated user %s', req.params.id);
	User.findOneAndUpdate({_id:req.params.id}, req.body, { new:true, multi: false })
	.then(user => {
			res.status(200).json(user);
	})
	.catch((err) => {
		return next(err);
	});
});


//delete
router.route('/users/:id').delete((req, res,next) => {
	logger.log('info', 'Deleted user %s', req.params.id);
	User.remove({_id:req.params.id})
	.then(user => {
			res.status(200).json({ meg: 'User Deleted' });
	})
	.catch((err) => {
		return next(err);
	});
});

};