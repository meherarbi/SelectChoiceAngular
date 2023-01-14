import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedSituation = 'Biparental';
  selectedChoice :string='choix 1';
  choices = ['choix 1', 'choix 2', 'choix 3'];
  enabledChoices :{[key:string]:{[key:string]:boolean}} = {
    'Biparental': {'choix 1': true, 'choix 2': true, 'choix 3': false},
    'Monoparental': {'choix 1': false, 'choix 2': false, 'choix 3': true},
  };
  choiceDisabled = false;
  updateChoices() {
    this.choices = Object.entries(this.enabledChoices[this.selectedSituation])
    .filter(([choice,enabled]) => enabled)
    .map(([choice,enabled]) => choice);
    this.choiceDisabled = !Object.values(this.enabledChoices[this.selectedSituation]).some(value => value);
  }
}






