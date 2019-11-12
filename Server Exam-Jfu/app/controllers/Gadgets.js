  
 
 var express = require('express'),
	 router = express.Router(),
	 logger = require('../../config/logger');
	 mongoose = require('Gadgets'),
	 Gadgets = mongoose.module('Gadgets');

module.exports = function (app, config) {
	app.use('api', router);


 

//post
 router.route('/Gadgets').post((req, res,next) => {
	 logger.log('info', 'Creat Gadgets');
	 var Gadgets = new Gadgets(req.body);
	 Gadgets.save()
	 .then(result => {
		 res.status(201).json(result);
	 })
	 .catch((err) => {
		 return next(err);
	 });
 });


// get all 
 router.route('/Gadgets').get((req, res,next) => {
	logger.log('info', 'Get all Gadgets');
	var query = Gadgets.find()
	.sort(req.query.order)
	.exec()
	.then(result => {
		if (result && result.length) {
			res.status(200).json(result);
		} else {
			res.status(400).json({ message: 'No Yoo'});
		}
	})
	.catch((err) => {
		return next(err);
	});
});


//get 
router.route('/Gadgets/:id').get((req, res,next) => {
	logger.log('info', 'Get Gadgets %s', req.params.id);
	User.findById(req.params.id)
	.then(result => {
		if (Gadgets) {
			res.status(200).json(Gadgets);
		} else {
			res.status(400).json({ message: 'No Gadgets found'});
		}
	})
	.catch((err) => {
		return next(err);
	});
});


//log in
router.route('/Gadgets/:id').get((req, res,next) => {
	logger.log('info', '%s logging in', req.body.email);
	var email = req.body.email
	var password = req.body.password;

	var obj = { 'email': email, 'password': password };
	res.status(201).json(obj);
	});


//put
router.route('/Gadgets/:id').post((req, res,next) => {
	logger.log('info', 'Updated Gadgets %s', req.params.id);
	Gadgets.findOneAndUpdate({_id:req.params.id}, req.body, { new:true, multi: false })
	.then(Gadgets => {
			res.status(200).json(Gadgets);
	})
	.catch((err) => {
		return next(err);
	});
});


//delete
router.route('/Gadgets/:id').delete((req, res,next) => {
	logger.log('info', 'Deleted Gadgets %s', req.params.id);
	Gadgets.remove({_id:req.params.id})
	.then(Gadgets => {
			res.status(200).json({ meg: 'Gadgets Deleted' });
	})
	.catch((err) => {
		return next(err);
	});
});

};