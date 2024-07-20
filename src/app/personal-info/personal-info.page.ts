import { Component } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { CreatePersonalInfoDto } from '../models/create-personal-info.dto';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage {
  personalInfo: CreatePersonalInfoDto = {
    name: '',
    email: '',
    phone: ''
  };
  photo: SafeUrl;

  constructor(private sanitizer: DomSanitizer,private resumeService: ResumeService) {}
  async selectImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos // Or use CameraSource.Prompt to give the user an option
    });

    if (image.webPath) {
      this.photo = this.sanitizer.bypassSecurityTrustUrl(image.webPath);
    }
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    if (image.webPath) {
      this.photo = this.sanitizer.bypassSecurityTrustUrl(image.webPath);
    }
  }

  async saveImage(base64Data: string, fileName: string) {
    await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });
  }
  savePersonalInfo() {
    // Save personal info logic
  }
}
