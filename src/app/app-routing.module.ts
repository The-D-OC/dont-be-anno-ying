import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotSupportComponent } from './chatbot-support/chatbot-support.component';

const routes: Routes = [
  {
    path: '',
    component: ChatbotSupportComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
