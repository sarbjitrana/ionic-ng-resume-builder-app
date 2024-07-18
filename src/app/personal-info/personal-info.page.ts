import { Component } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { CreatePersonalInfoDto } from '../models/create-personal-info.dto';

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

  constructor(private resumeService: ResumeService) {}

  savePersonalInfo() {
    // Save personal info logic
  }
}
