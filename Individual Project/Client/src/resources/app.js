export class App {
      configureRouter(config, router) {
        this.router = router;
        config.title = 'Things ToDo';
        config.map([
          { 
            route: ['', 'home'],
            name: 'home',       
            moduleId: 'modules/home' ,
            title: 'Home'
          },
          { 
            route: 'users',            
            name: 'users',      
            moduleId: 'modules/users', 
            title: 'Users' }
     { 
                route: 'todos',            
                name: 'todos',      
                moduleId: 'modules/todos', 
                title: 'Todos' }
        ]);
      }
    }

    import {AuthorizeStep} from 'aurelia-auth';
export class App {
configureRouter(config, router) {
this.router = router;
config.addPipelineStep('authorize', AuthorizeStep); 
config.map([
{
route: ['', ‘home'],
moduleId: './modules/landing',
name: 'Landing',
auth: false
},
{
route: ‘todos',
moduleId: './modules/todos',
name: ‘Todos',
auth: true 
},
…



import {AuthorizeStep} from 'aurelia-auth';
export class App {
configureRouter(config, router) {
this.router = router;
config.addPipelineStep('authorize', AuthorizeStep); 
config.map([
{
route: ['', ‘home'],
moduleId: './modules/landing',
name: 'Landing',
auth: false
},
{
route: ‘todos',
moduleId: './modules/todos',
name: ‘Todos',
auth: true 
},
