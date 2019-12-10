import {AuthorizeStep} from 'aurelia-auth';

export class App {
      configureRouter(config, router) {
        this.router = router;
        config.title = 'widget';
        config.map([
          { 
                route: 'widgets',            
                name: 'widgets',      
                moduleId: 'modules/widgets', 
                title: 'Widgets' }
        ]);
      }
    }


export class App {
configureRouter(config, router) {
this.router = router;
config.addPipelineStep('authorize', AuthorizeStep); 
config.map([
{
route: ['', 'widget'],
moduleId: './modules/Widget',
name: 'Widget',
auth: false }
    ]);
  }
}