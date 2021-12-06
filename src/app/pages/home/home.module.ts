import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ModalHomeOptionsComponent } from './modal-home-options/modal-home-options.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [HomePage, ModalHomeOptionsComponent],
})
export class HomeModule { }
