import { Component,ViewChild} from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { BadgesPage } from '../pages/badges/badges';
import { FormPage } from '../pages/form/form';
import { ListPage } from '../pages/list/list';
import { ModalsPage } from '../pages/modals/modals';
import { NavPage } from '../pages/navigation/navigation';
import { SearchPage } from '../pages/searchbar/searchbar';
import { SegmentPage } from '../pages/segment/segment';
import { IconTextPage } from '../pages/tabs/tab';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{ title: string, component: any }>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Badges', component: BadgesPage },
      { title: 'Form', component: FormPage },
      { title: 'List', component: ListPage },
      { title: 'Modals', component: ModalsPage },
      { title: 'Navigation', component: NavPage },
      { title: 'SearchBar', component: SearchPage },
      { title: 'Segment', component: SegmentPage },
      { title: 'Tab', component: IconTextPage}
    ];
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

