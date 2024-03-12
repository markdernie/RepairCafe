import { Component, OnInit,inject,ChangeDetectionStrategy } from '@angular/core';
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
import { injectQuery } from '@tanstack/angular-query-experimental';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';
import { lastValueFrom } from 'rxjs';
import { ReposService } from '../../repos.service';

@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, AngularQueryDevtools],
  templateUrl: './repair.component.html',
  styleUrl: './repair.component.scss',
  providers: [HttpClient]
})
export class RepairComponent {


  //currentTime$:Observable<Date>
  reposService = inject(ReposService);
  repairService = inject(RepairService);
  repairexample={'description':'kettle','id':'123','age':1}
  // repair = injectQuery(() => ({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     lastValueFrom(
  //       this.repairService.getRepair()
  //     ),
  // }))

  // query = injectQuery(() => ({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     lastValueFrom(
  //       this.reposService.getRepos()
  //     ),
  // }))

 // obs: { name: string }[] = [];
 // myPut:any
 // obs$ = of([{ name: 'Louie' }, { name: 'Tess' }])

  repairlist: Repair[] = [];
 // repair: Repair= new Repair()
  repair$ = of([{ id: '1' }])
  //myData$:Observable<any>= of(new Repair)
  myData$: Observable<any> = of({})
  repairform = this.formsbuilder.group({
    // id: ['',Validators.required],
    // age: 0,
    description: ['',Validators.required]
  })
  //.subscribe((result: any) => this.obs = result);
  //constructor(private repairService: RepairService, private formsbuilder: FormBuilder) { 
    constructor( private formsbuilder: FormBuilder) {   
  //console.log('newrepair',this.repair)
  }

 // ngOnInit() {
 //   console.log('running ngOnInit')
   //repairexample={'id}
   // this.myData$ = this.repairService.getRepair()
   //let myPut$
   //myPut$ = this.repairService.putRepair(this.repairexample)
   
  //console.log("myPut$:", myPut$)
    //this.currentTime$=interval(1000).pipe(map(()=> new Date()))
  //}

  //save(repairform: FormGroup) {
   //console.log('Click Save', repairform.value)
     //console.log('New repair:',this.newrepair)
    // this.repair.description=repairform.value.description
    // console.log('put repair:',this.repair)
    // this.repairService.putRepair(this.repair)
 // }

  put(repairform: any) {
    console.log('Click put',repairform)
    this.repairService.putRepair(repairform)
  }

  get() {
    console.log('get')
    this.repairService.getRepair()
  }

  

  // new (){
  //   repair=new Repair
  // }

}
