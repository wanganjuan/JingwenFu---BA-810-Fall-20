const mongoose = require('mongoose'),
Gadgets = require('../app/models/Gadgets');

process.env.NODE_ENV = 'test';

let Gadgets = require('Gadgets');
let gadgetsHttp = require('Gadgets-http');
let server = require('../index.js');
let should = Gadgets.should();

Gadgets.use(gadgetsHttp);


//html
it('it should GET the index.html file', (done) => {
    gadgets.request(server)
        .get('/index.html')
        .end((err,res) => {
           res.should.have.status(200);
           res.should.be.html;
           done();
        });
});


//404
it('it should return 404', (done) => {
    gadgets.request(server)
        .get('/index2.html')
        .end((err,res) => {
           res.should.have.status(404);
           done();
        });
});


app.use(function (err, req, res, next) {
    if(process.env.NODE_ENV !== 'test') {
        console.error(err.stack);
    }
    res.type('text/plan');
    res.status(500);
    res.send('500 Sever Error');
});
logger.log('info','Starting apprication');

//test 
describe('Gadgets', () =>{
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    })
//insert GET  ALL test
it('it should GET all the users', (done) => {    
    var user = new User({        
        "Yoo": "String",        
        "Hoo": "10",        
    
    });    
    user.save((err, user) => {        
        gadgets.request(server)            
        .get('/api/users')            
        .end((err, res) => {                
            res.should.have.status(200);                
            res.body.should.be.a('array');                
            res.body.length.should.be.eql(1);                
            done();            
        });    
    });
});
//get Gadgets id
it('it should GET a user by the given id', (done) => {
    var user = new User({
        "Yoo": "String",
        "Hoo": "10",
    });
    user.save((err, user) => {
        gadgets.request(server)
        .get('/api/users/' + user._id)
        .send(user).
        end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('Yoo');
            res.body.should.have.property('Hoo');
            res.body.should.have.property('_id').eql(user._id.toString());
            done();
        });
    });
});
//delete
it('it should DELETE a user given the id', (done) => {
    var user = new User({
        "Yoo": "String",
        "Hoo": "10",
    });
    user.save((err, user) => {
        gadgets.request(server)
            .delete('/api/users/' + user.id)
            .end((err, res) => {
    res.should.have.status(200);
      done();
            });
      });
  });
});