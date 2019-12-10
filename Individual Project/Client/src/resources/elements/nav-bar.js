import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
@inject(Router)
export class NavBar {
constructor(router){
this.authenticated = false;
this.router = router;
this.email = "";
this.password = "";
}

attached(){
    $( '.navbar-nav a' ).on( 'click', function () {
    $( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $( this ).parent( 'li' ).addClass( 'active' );
    });
    }
    
login() {
console.log(this.email);
console.log(this.password);
this.authenticated = true;
this.router.navigate('home');
}

logout(){
this.authenticated = false;
this.router.navigate('landing');
}
}


login() {
    return this.auth.login(this.email, this.password)
    .then(response => {
    this.userObj = response.user;
    sessionStorage.setItem("userObj", JSON.stringify(this.userObj));
    this.loginError = "";
    this.authenticated = this.auth.isAuthenticated();
    this.router.navigate('home');
    })
    .catch(error => {
    console.log(error);
    this.authenticated = false;
    this.loginError = "Invalid credentials.";
    });
    };
    
logout() {
            this.auth.logout();
            sessionStorage.removeItem('user');
            this.authenticated = this.auth.isAuthenticated();
          }
        
        bind() {
            this.authenticated = this.auth.isAuthenticated();
        }
        