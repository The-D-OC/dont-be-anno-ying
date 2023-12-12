import { Component, OnInit } from '@angular/core';
import { ChatbotService} from './chatbot.service';
import { ThisReceiver } from '@angular/compiler';
  //import { ChatbotMockService } from './chatbot-mock.service';
import { HttpClient } from '@angular/common/http';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent implements OnInit {

    constructor(private http: HttpClient, private chatbotService: ChatbotService) {}



    triggerZapier(){
          const dataToSend = { name: 'Test 4', otherData: 'Testing' };
    this.chatbotService.triggerZapier(dataToSend);
    }

    ngOnInit(): void {
      //this.chatbotLoaderService.loadScript();

    }
    }












    // userInput: string = '';
    // chatHistory: string[] = [];
    // constructor(private chatbotService: ChatbotService) {}
    // ngOnInit(){
    //   this.sendMessage()
    // }
    // sendMessage() {
    //   this.userInput= 'What are the device that you are having issue with?'
    //   this.chatHistory.push(`User: ${this.userInput}`);
    //   this.chatbotService.sendMessage(this.userInput).subscribe((response) => {
    //     console.log(response,"eljona")
    //     this.chatHistory.push(`Chatbot: ${response}`);
    //   });
    //   this.userInput = '';
    // }
  //}

