import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { BlogService } from './services/blog.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'new', component: NewComponent },
    ],
  },
];

@NgModule({
  declarations: [AppComponent, MenuComponent, IndexComponent, NewComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
