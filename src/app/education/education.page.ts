import { Component } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { CreateEducationDto } from '../models/create-education.dto';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage {
  education: CreateEducationDto[] = [
    { school: '', degree: '', fieldOfStudy: '', startYear: '', endYear: '' }
  ];

  constructor(private resumeService: ResumeService) {}

  addEducation() {
    this.education.push({ school: '', degree: '', fieldOfStudy: '', startYear: '', endYear: '' });
  }

  removeEducation(index: number) {
    this.education.splice(index, 1);
  }

  saveEducation() {
    // Save education logic
  }
}
