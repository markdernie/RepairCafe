import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { FormGroup, FormControl } from '@angular/forms';
import { Repair } from '../repair'
import { Observable, interval, map, of } from 'rxjs'
import { RepairService } from '../repair.service';
import { HttpClient } from '@angular/common/http'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule],
  templateUrl: './repair.component.html',
  styleUrl: './repair.component.scss',
  providers: [HttpClient]
})
export class RepairComponent {


  //currentTime$:Observable<Date>

  obs: { name: string }[] = [];
  obs$ = of([{ name: 'Louie' }, { name: 'Tess' }])

  repairlist: Repair[] = [];
  repair: Repair= new Repair()
  repair$ = of([{ id: '1' }])
  //myData$:Observable<any>= of(new Repair)
  myData$: Observable<any> = of({})
  repairform = this.formsbuilder.group({
    // id: ['',Validators.required],
    // age: 0,
    description: ['',Validators.required]
  })
  //.subscribe((result: any) => this.obs = result);
  constructor(private repairService: RepairService, private formsbuilder: FormBuilder) { 
    console.log('newrepair',this.repair)
  }

  ngOnInit() {
    console.log('running ngOnInit')
    this.myData$ = this.repairService.getRepair()
    console.log("myData:", this.myData$)
    //this.currentTime$=interval(1000).pipe(map(()=> new Date()))
  }

  save(repairform: FormGroup) {
    // console.log('Click Save', repairform.value)
    // console.log('New repair:',this.newrepair)
    this.repair.description=repairform.value.description
    console.log('put repair:',this.repair)
    this.repairService.putRepair(this.repair)
  }

  

  // new (){
  //   repair=new Repair
  // }

}
