import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

numberGroup:FormGroup;
arr:number[]=[];
num:number=2;

constructor(private fb:FormBuilder)
{

}
  ngOnInit() {

    this.numberGroup=this.fb.group({
       number:[''],
       alternateNumbers:this.fb.array([])
    })
    
  }

  get alternateNumbers() {
    return this.numberGroup.get('alternateNumbers') as FormArray;
  }

  addAlternateNumber() {
    this.alternateNumbers.push(this.fb.control(''));
  }
  deleteAlternateNumber(i)
  {
     this.alternateNumbers.removeAt(i);
  }

  submit(numberGroup:FormGroup)
  {
     this.arr[0]=numberGroup.value.number;
     console.log('[');
     console.log('{phoneNumber1:'+this.arr[0]+'},');
     
     let numarr=this.numberGroup.controls.alternateNumbers as FormArray;
     let arrlen=numarr.length;
     for(let i=0;i<arrlen;i++)
     {
      this.arr[i+1]=numberGroup.value.alternateNumbers[i];
      console.log('{phoneNumber'+this.num+':'+this.arr[i+1]+'},');
      this.num++;
     }
     console.log(']');

     
  }
}
