import { Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { UsersComponent } from './components/users/users.component';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';

export const routes: Routes = [
  {
    path: 'playing',
    component: PlayingCardComponent,
  },
  {
    path: 'comments',
    component: CommentsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];
