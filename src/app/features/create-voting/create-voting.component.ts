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
import {  provideNativeDateAdapter } from '@angular/material/core';

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
  ],
  templateUrl: './create-voting.component.html',
  styleUrls: ['./create-voting.component.css'],
})
export class CreateVotingComponent {
  private _snackBar = inject(MatSnackBar);
  currentOption: ModelSignal<string> = model<string>("");
  options: string[] = [];

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
  deleteOption(index: number) {
    this.options.splice(index, 1);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message,action, {duration: 2000});
  }
}

