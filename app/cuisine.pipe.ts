import {Pipe, PipeTransform} from '@angular/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "cuisine",
  pure: false
})

export class CuisinePipe implements PipeTransform {
  transform(input: Restaurant[], desiredCuisine) {
    var output: Restaurant[] = [];
    if(desiredCuisine === "italian")
    {
      for (var i=0; i < input.length; i++)
      {
        if (input[i].cuisine === "Italian")
        {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredCuisine === "vietnamese")
      {
        for(var i=0; i<input.length; i++)
        {
          if(input[i].cuisine === "Vietnamese")
          {
            output.push(input[i]);
          }
        }
        return output;
    } else if(desiredCuisine === "korean")
      {
        for(var i=0; i<input.length; i++)
        {
          if(input[i].cuisine === "Korean")
          {
            output.push(input[i]);
          }
        }
        return output;
    } else if(desiredCuisine === "american")
      {
        for(var i=0; i<input.length; i++)
        {
          if(input[i].cuisine === "American")
          {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
  }
}
