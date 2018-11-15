import { Injectable } from '@angular/core';
import {Currency} from './Currency.class';
@Injectable({
  providedIn: 'root'
})
export class ConverterService {
currencies:Array<Currency>=[];
  constructor() {
     this.getCurrencies();
   }
    convert(from:Currency,to:Currency,sum:string){
      let req=to.id+'_'+from.id;
      let url='https://free.currencyconverterapi.com/api/v6/convert?q='+req+'&compact=y';
     return fetch(url).then(res=> 
      res.json()).then(res=>{
        return parseFloat(res[req].val)*parseFloat(sum);
      }
     )
   };
   getCurrency(country:string){
     return fetch('https://free.currencyconverterapi.com/api/v6/countries').then(res=>
     res.json()).then(data=>{
       Object.keys(data.results).forEach(key => {
         if(data.results[key].name===country){
           return new Currency(data.results[key].id,data.results[key].currencyName,data.results[key].currencySymbol);
         }
         throw 'undefined country'
       });
     }).catch(error=>
       console.log(error)
     )
   };
   getCurrencies(){
     return fetch('https://free.currencyconverterapi.com/api/v6/currencies').then(res=>
     res.json()).then(data=>{
      Object.keys(data.results).forEach(key => {
         this.currencies.push(new Currency(data.results[key].id,data.results[key].currencyName,data.results[key].currencySymbol))
       })
     })
   }
}
