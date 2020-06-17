import { NgModule } from '@angular/core'

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatDividerModule,
  MatProgressBarModule,
  MatStepperModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatOptionModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatSidenavModule,
  MatTabsModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatListModule,
  MatBottomSheetModule,
  MatChipsModule,
  MAT_CHIPS_DEFAULT_OPTIONS
} from '@angular/material'

import {
  MatSelectModule
} from '@angular/material/select'
import { ENTER, COMMA } from '@angular/cdk/keycodes'



@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatProgressBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTabsModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatListModule,
    MatBottomSheetModule,
    MatChipsModule,

  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatProgressBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTabsModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatListModule,
    MatBottomSheetModule,
    MatChipsModule

  ],
  providers:[{
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [ENTER, COMMA]
    }
  }]
})
export class MaterialModule { }
