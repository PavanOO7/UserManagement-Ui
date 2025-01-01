import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksModule } from './tasks/tasks.module';
import { SprintManagementModule } from './sprint-management/sprint-management.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    TasksModule,
    SprintManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
