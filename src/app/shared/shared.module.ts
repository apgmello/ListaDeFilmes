import { StatusPipe } from './pipes/status.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [StatusPipe],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [StatusPipe],
})
export class SharedModule {}
