import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCardsModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, NgxCardsModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}