import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatExpansionModule, 
    MatTableModule, 
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule, 
    MatExpansionModule, 
    MatTableModule, 
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
})
export class MaterialModule {}
