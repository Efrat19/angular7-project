import { Component, OnInit } from '@angular/core';
import {Currency} from '../Currency.class';
import {ConverterService} from '../converter.service'
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  providers:[ConverterService]
})
export class CurrencyComponent implements OnInit {
private from:Currency;
private to:Currency;
private sum:string='';
private result:string='';
  constructor(private converter:ConverterService) { }

  ngOnInit() {
   this.from=new Currency('','','');
   this.to= new Currency('','','');

  }
  async convert(){
    this.from=this.converter.currencies.find(curr=>curr.id===this.from.id);
    this.to=this.converter.currencies.find(curr=>curr.id===this.to.id);

   await this.converter.convert(this.from,this.to,this.sum).then(res=>
    this.result=res.toString()
    );
  }
}
