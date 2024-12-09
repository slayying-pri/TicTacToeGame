import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent 
{
  displayValue:string="";

  head:string="cal";
  

  onButtonClick(value:string)
  {
    this.displayValue=this.displayValue+value;
  }

  onButtonClickClr()
  {
    this.displayValue="";
  }

  onButtonClickAns()
  {
     let result:string="";
     try
     {
        result=eval(this.displayValue);
        this.displayValue=result;
     }
     catch(error)
     {
      this.displayValue="invalidinput";
     }

  }

}
