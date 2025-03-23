import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'

@Component({
  selector: 'app-create-voting',
  imports: [MatSelectModule,MatInputModule, MatFormFieldModule],
  templateUrl: './create-voting.component.html',
  styleUrl: './create-voting.component.css'
})
export class CreateVotingComponent {

}
