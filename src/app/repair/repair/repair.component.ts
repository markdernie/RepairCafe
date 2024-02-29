import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder} from '@angular/forms'
import {Repair} from '../repair'
import {Observable,interval,map,of} from 'rxjs'


@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repair.component.html',
  styleUrl: './repair.component.scss'
})
export class RepairComponent {


//currentTime$:Observable<Date>

obs: { name: string }[] = [];
obs$ = of([{ name: 'Louie' }, { name: 'Tess' }])
  //.subscribe((result: any) => this.obs = result);

ngOnInit() {
  //this.currentTime$=interval(1000).pipe(map(()=> new Date()))
}
}
