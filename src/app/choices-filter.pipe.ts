import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'choicesFilter'
})
export class ChoicesFilterPipe implements PipeTransform {

  transform(choices: string[], selectedSituation: string, enabledChoices: {[key:string]:{[key:string]:boolean}}): any {
    return choices.filter(choice => enabledChoices[selectedSituation][choice]);
  }

}
