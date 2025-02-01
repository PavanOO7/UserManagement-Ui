import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import {MatSidenavModule} from '@angular/material/sidenav';

import { ProjectHeaderComponent } from './project-header/project-header.component';

@NgModule({
  declarations: [
    ProjectHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSidenavModule
  ],

})
export class SharedModule { }
