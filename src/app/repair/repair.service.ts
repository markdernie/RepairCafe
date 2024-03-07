import { Injectable } from '@angular/core';
import { Repair } from '../repair/repair'
import { HttpClient } from '@angular/common/http'
import { Form, FormBuilder} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  url:string ='http://KateLaptop:3000'
  

  constructor(private http: HttpClient) { }

  getRepair() {
    return this.http.get(`http://KateLaptop:3000`)
  }
  putRepair(repair:Repair) {

    let junk=this.http.put(this.url,repair)
    .subscribe((data)=>{console.log('Here')})
    console.log('junk',junk)
  }
    
    //return this.http.put(this.url,repair)
  
}
