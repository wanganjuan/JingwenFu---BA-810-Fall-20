const mongoose = require('mongoose'),
Gadgets = require('../app/models/Gadgets');

process.env.NODE_ENV = 'test';

let Gadgets = require('Gadgets');
let GadgetsHttp = require('Gadgets-http');
let server = require('../index.js');
let should = Gadgets.should();

Gadgets.use(GadgetsHttp);


//html
it('it should GET the index.html file', (done) => {
    Gadgets.request(server)
        .get('/index.html')
        .end((err,res) => {
           res.should.have.status(200);
           res.should.be.html;
           done();
        });
});


//404
it('it should return 404', (done) => {
    Gadgets.request(server)
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
        Gadgets.remove({}, (err) => {
            done();
        });
    })
//insert GET test here
it('it should GET all the Gadgets', (done) => {    
    var Gadgets = new Gadgets({        
        "Yoo": "String",        
        "Hoo": "10",        
        "email": "String10@hoo.com",        
        "password": "pass"    
    });    
    Gadgets.save((err, Gadgets) => {        
        Gadgets.request(server)            
        .get('/api/Gadgets')            
        .end((err, res) => {                
            res.should.have.status(200);                
            res.body.should.be.a('array');                
            res.body.length.should.be.eql(1);                
            done();            
        });    
    });
});
//get Gadgets id
it('it should GET a Gadgets by the given id', (done) => {
    var Gadgets = new Gadgets({
        "Yoo": "String",        
        "Hoo": "10",        
        "email": "String10@hoo.com",        
        "password": "pass"  
    });
    Gadgets.save((err, Gadgets) => {
        Gadgets.request(server)
        .get('/api/Gadgets/' + Gadgets._id)
        .send(Gadgets).
        end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('Yoo');
            res.body.should.have.property('Hoo');
            res.body.should.have.property('email');
            res.body.should.have.property('password');
            res.body.should.have.property('_id').eql(user._id.toString());
            done();
        });
    });
});
//delete
it('it should DELETE a Gadgets given the id', (done) => {
    var Gadgets = new Gadgets({
        "Yoo": "String",        
        "Hoo": "10",        
        "email": "String10@hoo.com",        
        "password": "pass"  
    });
    Gadgets.save((err, Gadgets) => {
        Gadgets.request(server)
            .delete('/api/Gadgets/' + user.id)
            .end((err, res) => {
    res.should.have.status(200);
      done();
            });
      });
  });





});