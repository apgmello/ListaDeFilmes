import { StatusPipe } from './../shared/pipes/status.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageNotFoundComponent, StatusPipe],
  imports: [CommonModule, MaterialModule, SharedModule],
})
export class PagesModule {}
