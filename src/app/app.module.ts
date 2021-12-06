import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfig } from './credentials';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { ChatState } from './stores/chat/chat.store';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    NgxsModule.forRoot([ChatState], {
      developmentMode: !environment.production,
    }),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ImagePicker],
  bootstrap: [AppComponent],
})
export class AppModule {}
