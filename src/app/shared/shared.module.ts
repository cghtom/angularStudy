import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdAutocomplete, MdAutocompleteModule,
  MdButtonModule, MdCardModule, MdCheckboxModule, MdDatepickerModule, MdDialogModule, MdGridListModule, MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule, MdNativeDateModule, MdRadioModule, MdSelectionModule, MdSelectModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdToolbarModule, MdTooltipModule
} from "@angular/material";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
const modules=[CommonModule,
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdListModule,
  MdSlideToggleModule,
  MdGridListModule,
  MdDialogModule,
  MdAutocompleteModule,
  MdMenuModule,
  MdCheckboxModule,
  MdTooltipModule,
  MdRadioModule,
  MdDatepickerModule,
  MdNativeDateModule,
   MdSelectModule,
  AppRoutingModule,
  BrowserAnimationsModule,
]
@NgModule({
  imports: modules,
  exports: modules,
  declarations: [ConfirmDialogComponent],
  entryComponents:[ConfirmDialogComponent]
})
export class SharedModule {
}
