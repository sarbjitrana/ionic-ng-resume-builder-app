// import { CreatePersonalInfoDto } from './create-personal-info.dto';
// import { CreateEducationDto } from './create-education.dto';
// import { CreateExperienceDto } from './create-experience.dto';
// import { CreateSkillDto } from './create-skill.dto';

import { CreateEducationDto } from "./create-education.dto";
import { CreateExperienceDto } from "./create-experience.dto";
import { CreatePersonalInfoDto } from "./create-personal-info.dto";
import { CreateSkillDto } from "./create-skill.dto";

export class CreateResumeDto {
  personalInfo: CreatePersonalInfoDto;
  education: CreateEducationDto[];
  experience: CreateExperienceDto[];
  skills: CreateSkillDto[];
}
