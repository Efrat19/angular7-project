import { Component, OnInit } from '@angular/core';
import {Currency} from '../Currency.class';
import {ConverterService} from '../converter.service'
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
  providers:[ConverterService]
})
export class ReactiveFormComponent implements OnInit {
  form:FormGroup;
private from:Currency;
private to:Currency;
private sum:string='';
private result:string='';
  constructor(private converter:ConverterService) { }

  ngOnInit() {
    this.form=new FormGroup({
      from:new FormControl(null),
      to:new FormControl(null),
      sum:new FormControl(null),
    })
  }
  async convert(){
    this.from=this.converter.currencies.find(curr=>curr.id===this.form.value.from);
    this.to=this.converter.currencies.find(curr=>curr.id===this.form.value.to);
this.sum=this.form.value.sum
   await this.converter.convert(this.from,this.to,this.sum).then(res=>
    this.result=res.toString()
    );
  }
}
