import { ChangeDetectionStrategy, Component, inject, model, ModelSignal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-create-voting',
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatListModule,
    MatSlideToggleModule
  ],
  templateUrl: './create-voting.component.html',
  styleUrls: ['./create-voting.component.css'],
})
export class CreateVotingComponent {
  private _snackBar = inject(MatSnackBar);
  currentOption: ModelSignal<string> = model<string>("");
  currentOption1: ModelSignal<string> = model<string>("");
  needExtraOptions: ModelSignal<boolean> = model<boolean>(false);
  privateVoting: ModelSignal<boolean> = model<boolean>(false);
  options: string[] = [];
  options1: string[] = [];

  addOption() {
    if (this.currentOption() !== "") {
      if(this.options.includes(this.currentOption())){
        this.openSnackBar("Opción duplicada","Cerrar");
        return
      }
      this.options.push(this.currentOption());
      this.currentOption.set("");
    }
  }

  addOption1() {
    if (this.currentOption1() !== "") {
      if(this.options1.includes(this.currentOption1())){
        this.openSnackBar("Opción duplicada","Cerrar");
        return
      }
      this.options1.push(this.currentOption1());
      this.currentOption1.set("");
    }
  }

  toggleExtraOptions() {
    this.needExtraOptions.set(!this.needExtraOptions());
  }

  togglePrivateVoting() {
    this.privateVoting.set(!this.privateVoting());
  }

  deleteOption(index: number) {
    this.options.splice(index, 1);
  }

  deleteOption1(index: number) {
    this.options1.splice(index, 1);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message,action, {duration: 2000});
  }
}

