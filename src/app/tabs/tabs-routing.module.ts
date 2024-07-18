import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// const routes: Routes = [
//   {
//     path: 'tabs',
//     component: TabsPage,
//     children: [
//       {
//         path: 'tab1',
//         loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
//       },
//       {
//         path: 'tab2',
//         loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
//       },
//       {
//         path: 'tab3',
//         loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
//       },
//       {
//         path: '',
//         redirectTo: '/tabs/tab1',
//         pathMatch: 'full'
//       }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/tabs/tab1',
//     pathMatch: 'full'
//   }
// ];

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'personal-info',
        loadChildren: () => import('../personal-info/personal-info.module').then(m => m.PersonalInfoPageModule)
      },
      {
        path: 'education',
        loadChildren: () => import('../education/education.module').then(m => m.EducationPageModule)
      },
      {
        path: 'experience',
        loadChildren: () => import('../experience/experience.module').then(m => m.ExperiencePageModule)
      },
      {
        path: 'skills',
        loadChildren: () => import('../skills/skills.module').then(m => m.SkillsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/personal-info',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/personal-info',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
