import { Component, OnInit,ViewChild } from '@angular/core';
import {Currency} from '../Currency.class';
import {ConverterService} from '../converter.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  providers:[ConverterService]
})
export class CurrencyComponent implements OnInit {
  @ViewChild('form') form:NgForm;
private from:Currency;
private to:Currency;
private sum:string='';
private result:string='';
  constructor(private converter:ConverterService) { }

  ngOnInit() {  }
  convert(form:NgForm){
    this.from=this.converter.currencies.find(curr=>curr.id===form.value.from);
    this.to=this.converter.currencies.find(curr=>curr.id===form.value.to);
    this.sum=form.value.sum;
    this.converter.convert(this.from,this.to,this.sum).then(res=>
    this.result=res.toString()
    );
  }
}
