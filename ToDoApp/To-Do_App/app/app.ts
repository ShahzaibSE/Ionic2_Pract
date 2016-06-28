import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Main} from './pages/main/main';

//Import Service.
import {Todo_Service,Todo} from './services/todo.service';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers : [Todo_Service],
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
