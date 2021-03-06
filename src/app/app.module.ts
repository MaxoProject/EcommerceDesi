// Importing modules from the library 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatCardModule} from '@angular/material';
// import {MatSnackBarModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
// import { AppRoutingModule } from './app-routing.module';

//importing reactive library into the application
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//Importing the components into the module to make it avaible all over the application 
import { AppComponent } from './app.component';
import { LocationPipe } from './restaurant-fol/category.pipe';
import { RestaurantsSortComponent } from './restaurant-fol/restaurant-sort.component';
import {MenuComponent} from './restaurant-fol/menu.component';
//import{PizzaPartyComponent} from './components/product/product.component'
// import { COMPONENTS } from './components';
import { SERVICES } from './services';
import { ACTIONS } from './store/actions';
import { reducers, metaReducers } from './store/reducers';
import { AllEffects } from './store/effects';
import { routing } from './app.routing';

//importing firebase Config
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
export const firebaseConfig = environment.firebaseConfig;
// import { AngularFirestoreModule } from 'angularfire2/firestore';

// 
// import {MdButtonModule, 
//   MdCheckboxModule,
  
//   MdCardModule,
// MdToolbarModule,
// MdDatepickerModule,
// MdInputModule,
// MdNativeDateModule,
// MdGridListModule} from '@angular/material';
// import {MatSidenavModule} from '@angular/material';
// import {MatGridListModule} from '@angular/material';

// Importing the pipe 
import{KeysPipe} from './productfilter.pipe';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { HomeComponent } from './home/home.component'
import {ContactusComponent} from './contactus.component';
import{LogindashComponent}from './login/logindash.component';
import{LoginComponent} from './login/login.component';
import {GuestComponent} from './login/guest.component';
import {RestaurantsdisplayComponent} from './restaurant-fol/restaurantdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    RestaurantsComponent,
    ContactusComponent,
    LoginComponent,
    RestaurantsSortComponent,
    MenuComponent,
    LogindashComponent,
    GuestComponent,
     LocationPipe,
     RestaurantsdisplayComponent,
  //  PizzaPartyComponent
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    HttpModule,
    MatCardModule,
    // MatSnackBarModule,
   
   
  //   MdButtonModule,
  //   MatSidenavModule,
  //   MdButtonModule, 
  //   MdCheckboxModule,
  //   MdCardModule,
  // MdToolbarModule,
  // MdDatepickerModule,
  // MdInputModule,
  // MdNativeDateModule,
  // MdGridListModule ,
  // MatGridListModule,

  //firebase
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,

    //To register the reducers at the application level. for registering the reducers to the feature modules which are lazy loaded use for feature module 
    StoreModule.forRoot(reducers, 
      // { metaReducers }
    ),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25 //  Retains last 25 states
    // }),
    AllEffects,
    
  ],
  providers: [ SERVICES, ACTIONS, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
