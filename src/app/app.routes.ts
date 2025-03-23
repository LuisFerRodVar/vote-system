import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { VotingComponent } from './voting/voting.component';
import { ResultVotingComponent } from './result-voting/result-voting.component';

export const routes: Routes = [
  {component: MainMenuComponent, path: "" },
  {component: VotingComponent, path: "vote"} ,
  {component: ResultVotingComponent, path: "result"}

];
