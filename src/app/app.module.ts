import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialExampleModule } from './material.module';
import { ChangePassComponent } from './Screens/change-pass/change-pass.component';
import { EditProfileComponent } from './Screens/edit-profile/edit-profile.component';
import { HomeComponent } from './Screens/home/home.component';
import { LoginComponent } from './Screens/login/login.component';
import { RegisterComponent } from './Screens/register/register.component';
import { TransferComponent } from './Screens/transfer/transfer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './Screens/components/cart/loader/loader.component';
import { CartComponent } from './Screens/components/cart/cart.component';
import { ActionsComponent } from './Screens/actions/actions.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TransferComponent,
    EditProfileComponent,
    ChangePassComponent,
    LoaderComponent,
    CartComponent,
    ActionsComponent,
    NavComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
       
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
