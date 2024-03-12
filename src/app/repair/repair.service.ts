import { Injectable } from '@angular/core';
import { Repair } from '../repair/repair'
import { HttpClient } from '@angular/common/http'
import { Form, FormBuilder} from '@angular/forms'
import { Response } from '../types/response.type';

@Injectable({
  providedIn: 'root'
})
export class RepairService {
  endpoint: string = 'https://api.github.com';

  url:string ='http://localhost:4200/api/?file=2'
  //url2:string ='http://KateLaptop:3000/api/?file=2'
  
 
  constructor(private http: HttpClient) { }

  getRepair() {
    //return this.http.get<Repair>(`  `)
    this.http.get(this.url,{})
    .subscribe((data)=>{console.log('subscribe:',data)})
    //  return this.http.get<Repair>(`http://KateLaptop:3000?file=file3`)
    //return this.http.get<Response>(`${this.endpoint}/repos/tanstack/query`);
  }

  

  putRepair(repair:Repair) {
    console.log('put repair service',repair)
     let output:any={}
    let junk=this.http.put(this.url,{'id':'456'})
    .subscribe((data)=>{console.log('subscribe:',data)})
    console.log('junk after',junk)
  }

  getRepos() {
    return this.http.get<Response>(`${this.endpoint}/repos/tanstack/query`);
  }
}
    
    //return this.http.put(this.url,repair)
  

