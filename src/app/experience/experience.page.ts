import { Component } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { CreateExperienceDto } from '../models/create-experience.dto';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage {
  experience: CreateExperienceDto[] = [
    { company: '', position: '', startYear: '', endYear: '' }
  ];

  constructor(private resumeService: ResumeService) {}

  addExperience() {
    this.experience.push({ company: '', position: '', startYear: '', endYear: '' });
  }

  removeExperience(index: number) {
    this.experience.splice(index, 1);
  }

  saveExperience() {
    // Save experience logic
  }
}
