import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar'
import { RepairComponent } from './repair/repair/repair.component'
import { HeaderComponent} from './common/header/header.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, HeaderComponent,RepairComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RepairCafe';
}
