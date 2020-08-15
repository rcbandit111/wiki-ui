import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatDialogModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MatStepperModule, MatCardModule, MatOptionModule, MatSelectModule } from '@angular/material';

const materialComponents = [
  MatSidenavModule,
  FormsModule,
  ReactiveFormsModule,
  MatRadioModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatCardModule,
  MatOptionModule,
  MatSelectModule
];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
