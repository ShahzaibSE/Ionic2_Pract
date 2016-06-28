import {App, Platform,MenuController,IonicApp} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

//Import Components.
import {HomePage} from './pages/home/home';
import {Login} from './pages/login/login';
import {SignUp} from './pages/signUp/signUp';

@App({
  template: `  <ion-menu [content]="content">
               <ion-toolbar>
                   <ion-title>Pages</ion-title>
               </ion-toolbar>
                <ion-content>
                     <ion-list>
                        <button ion-item (click)="openPage(loginPage)">
                               Login
                         </button>
                         <button ion-item (click)="openPage(signupPage)">
                                Signup
                          </button>
                       </ion-list>
                     </ion-content>
                   </ion-menu>
                <ion-nav #content [root]="rootPage"></ion-nav>`,
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  //rootPage: any = HomePage;
  rootPage;
  
  login;
  signUp;

  constructor(platform: Platform , public menu:MenuController ,public app:IonicApp) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
    
      //Components specified for the menu , where our root component is "Login" Page.
      this.rootPage = Login;  
      this.app = app;
      this.menu = menu;
      this.login = Login;
      this.signUp = SignUp;
  }
  
  openPage(page)
  {
    this.rootPage = page;
    
    this.menu.close();
  }
  
  //While using NavController to clear navigation stack we can use "setRoot" function.
  
}
