import { Component } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { CreateSkillDto } from '../models/create-skill.dto';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage {
  skills: CreateSkillDto[] = [
    { skill: '' }
  ];

  constructor(private resumeService: ResumeService) {}

  addSkill() {
    this.skills.push({ skill: '' });
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }

  saveSkills() {
    // Save skills logic
  }
}
