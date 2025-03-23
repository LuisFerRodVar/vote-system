import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip'
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-main-menu',
  imports: [MatCardModule, MatTooltipModule, MatButtonModule, RouterLink],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
