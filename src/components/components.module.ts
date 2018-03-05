import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results';
import {IonicModule} from 'ionic-angular';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [SearchResultsComponent],
	imports: [IonicModule,CommonModule],
	exports: [SearchResultsComponent]
})
export class ComponentsModule {}
