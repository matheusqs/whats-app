import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal-home-options',
  templateUrl: './modal-home-options.component.html',
  styleUrls: ['./modal-home-options.component.scss'],
})
export class ModalHomeOptionsComponent implements OnInit {
  constructor(
    private modalController: ModalController,
    private imagePicker: ImagePicker,
    public userService: UserService
  ) { }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

  onUpdateProfileImageClick(): void {
    this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 1 }).then((results) => {
      this.userService.profileImage = 'data:image/jpeg;base64,' + results[0];
    }, (err) => { });
  }
}
