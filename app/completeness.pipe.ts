import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe ({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Keg[]){
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
    }
    return output;
  }
}
