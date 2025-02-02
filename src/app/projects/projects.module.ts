import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectHeaderComponent } from './project-header/project-header.component';
import { SprintManagementComponent } from './sprint-management/sprint-management.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TakDetailsComponent } from './tak-details/tak-details.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectHeaderComponent,
    SprintManagementComponent,
    TakDetailsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ButtonModule,
    AccordionModule,
    DragDropModule  
  ],
  exports:[ProjectHeaderComponent,ProjectsComponent]
})
export class ProjectsModule { }
