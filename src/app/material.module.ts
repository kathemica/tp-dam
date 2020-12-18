import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';


const materialComponents = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDividerModule,
  MatListModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatGridListModule
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }
