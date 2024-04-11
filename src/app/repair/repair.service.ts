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
 file:string='notsetcorrectly'
  //url:string ='http://localhost:4200/api/?file='+this.file
 //url:string ='http://localhost:4200/api/?file='+this.file
  
 url:string ='http://localhost:4200/api/?file='
  urlroot:string='http://localhost:4200/'
  //url2:string ='http://KateLaptop:3000/api/?file=2'
  //url:string='http://localhost:3000/?file='
  
 
  constructor(private http: HttpClient) { }

  getRepair(file:string) {
    //return this.http.get<Repair>(`  `)
    this.file=file  
    console.log("file",this.file)
    //let url=this.urlroot+'api/file=78be4e57-0c4a-4011-9f97-0d698648da34'
    let url='http://localhost:4200/api/?file='+file
    //this.http.get(this.urlroot+'api/file=78be4e57-0c4a-4011-9f97-0d698648da34',{})
   // console.log('this.url', this.url)
   // console.log('xxxx.url', url)
   //this.http.get(url,{})
    //.subscribe((data)=>{console.log('subscribe data:',data)})
      return this.http.get<Repair>(url)
    //return this.http.get<Response>(`${this.endpoint}/repos/tanstack/query`);
  }

  

  putRepair(repair:Repair) {
    console.log('put repair service',repair)
    this.file=repair.id
    // console.log('file from id',repair.id)
    // console.log("file is should not be notsetcorrectly",this.file)
    // console.log("repair.ids",repair.id)
    //this.file=repair.id
    // console.log('this.file=',this.file)
    // console.log('put url with file added=',this.url+this.file)
    //console.log('put repair=',this.url,repair)
    
    this.file=repair.id
     
    this.http.put(this.url+repair.id,repair)
      .subscribe((data)=>{console.log('data:',data)})

      //dont remove the subscribe line off put unless you really   know what is happening, stops creating files
    
  }

  getRepos() {
    return this.http.get<Response>(`${this.endpoint}/repos/tanstack/query`);
  }
}
    
    //return this.http.put(this.url,repair)
  

