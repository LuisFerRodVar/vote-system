import { Routes } from '@angular/router';
import { MainMenuComponent } from './features/main-menu/main-menu.component';
import { VotingComponent } from './features/voting/voting.component';
import { ResultVotingComponent } from './features/result-voting/result-voting.component';
import { CreateVotingComponent } from './features/create-voting/create-voting.component';
export const routes: Routes = [
  {component: MainMenuComponent, path: "" },
  {component: VotingComponent, path: "vote"} ,
  {component: CreateVotingComponent, path: "create"},
  {component: ResultVotingComponent, path: "result"}

];
