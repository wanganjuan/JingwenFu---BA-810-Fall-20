import environment from './environment';
import config from './auth-config';

Promise.config({  warnings: {    wForgottenReturn: false  }});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-auth', (baseConfig)=>{
         baseConfig.configure(config);
    })
    .feature('resources'); }
