import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Main} from './pages/main/main';
import {Page1} from './pages/page1/page1';
//import {Menu} from './pages/menu/menu';

//Import Models.
import {AdModels} from './models/ad_models';

//Import Services.
import {Test} from './services/app.services';
import {Ad_Submission} from './services/adIn.service';
import {Account_Service} from './services/account.service';
import {Login_Service} from './services/login.service';
import {Forget_Password} from './services/forget_password.service';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [Ad_Submission, Account_Service, Login_Service,Forget_Password],
  //directives:[Menu],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = Main;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
