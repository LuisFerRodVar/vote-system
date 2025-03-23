import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip'


@Component({
  selector: 'app-main-menu',
  imports: [MatCardModule, MatTooltipModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
