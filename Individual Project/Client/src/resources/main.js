import environment from './environment';
import config from './auth-config';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
Promise.config({  warnings: {    wForgottenReturn: false  }});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-auth', (baseConfig)=>{
         baseConfig.configure(config);
    })
    .feature('resources'); 
