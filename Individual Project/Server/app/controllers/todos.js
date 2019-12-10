var express = require('express'),
async = require('async'),
router = express.Router(),
logger = require('../../config/logger');
Gadgets = require('User'),
Todo = Gadgets.module('Todos');

module.exports = function (app, config) {
app.use('api', router);

//post
router.route('/todos').post((req, res,next) => {
	logger.log('info', 'Creat todos');
	var todo = new Todo(req.body);
	user.save()
	.then(result => {
		res.status(201).json(result);
	})
	.catch((err) => {
		return next(err);
	});
});


// get all todo
router.route('/todos').get((req, res,next) => {
	logger.log('info', 'Get all todos');
	var query = Todo.find()
	.sort(req.query.order)
	.exec()
	.then(result => {
		if (result && result.length) {
			res.status(200).json(result);
		} else {
			res.status(400).json({ message: 'No todos'});
		}
	})
	.catch((err) => {
		return next(err);
	});
})};


//get a user todos
router.route('/todos/users/:id').get((req, res,next) => {
	logger.log('info', 'Get all a users todos');
	var query = Todo.find({userId: req.params.id})
	.sort(req.query.order)
	.exec()
	.then(result => {
		if (result && result.length) {
			res.status(200).json(result);
		} else {
			res.status(400).json({ message: 'No todos'});
		}
	})
	.catch((err) => {
		return next(err);
	});
});

//put
router.route('/todos/:id').post((req, res,next) => {
	logger.log('info', 'Updated todos', req.params.id);
	User.findOneAndUpdate({_id:req.params.id}, req.body, { new:true, multi: false })
	.then(todo => {
			res.status(200).json(todo);
	})
	.catch((err) => {
		return next(err);
	});
});


//delete
router.route('/todos/:id').delete((req, res,next) => {
	logger.log('info', 'Deleted todo ' + req.params.id);
	Todo.remove({_id:req.params.id})
	.then(todo => {
			res.status(200).json({ meg: 'Todo Deleted' });
	})
	.catch((err) => {
		return next(err);
	});
});
