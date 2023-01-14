import { Component } from '@angular/core';
import { ChoicesFilterPipe } from './choices-filter.pipe';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
providers: [ChoicesFilterPipe]
})

export class AppComponent {
  selectedSituation = 'Biparental';
  selectedChoice :string='Divorcé(e)';
  choices = ['Divorcé(e)', 'Célibataire', 'Séparé(e)','Marié(e)','Concubin(e)','PACS'];
  situations = ['Biparental', 'Monoparental'];
  enabledChoices :{[key:string]:{[key:string]:boolean}} = {
    'Biparental': {'Divorcé(e)': true, 'Célibataire': true, 'Séparé(e)': true},
    'Monoparental': {'Marié(e)': true, 'Concubin(e)': true, 'PACS': true},
  };


  updateChoices() {
    this.choices.forEach(choice => {
      if(choice !== this.selectedChoice)
      this.enabledChoices[this.selectedSituation][choice] = false;
    });
  }}