import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  // {
  //   path: 'personal-info',
  //   loadChildren: () => import('./personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  // },
  // {
  //   path: 'education',
  //   loadChildren: () => import('./education/education.module').then( m => m.EducationPageModule)
  // },
  // {
  //   path: 'experience',
  //   loadChildren: () => import('./experience/experience.module').then( m => m.ExperiencePageModule)
  // },
  // {
  //   path: 'skills',
  //   loadChildren: () => import('./skills/skills.module').then( m => m.SkillsPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
