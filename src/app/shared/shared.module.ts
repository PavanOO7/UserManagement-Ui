import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavContainerComponent } from './side-nav-container/side-nav-container.component';
import { ProjectHeaderComponent } from './project-header/project-header.component';

@NgModule({
  declarations: [
    SideNavComponent,
    SideNavContainerComponent,
    ProjectHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSidenavModule
  ],
  exports:[SideNavComponent,SideNavContainerComponent]
})
export class SharedModule { }
