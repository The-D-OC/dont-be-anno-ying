

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import zapierMockJson from './zapier-mock.json';


import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  constructor(private http: HttpClient) {}



  triggerZapier(data: any): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    this.http.post('https://hooks.zapier.com/hooks/catch/17197620/3fjqsab/', formData, { headers }).subscribe(
      (response: any) => {
        console.log('Zapier Triggered!', response);
        // Handle successful Zapier trigger
      },
      (error: any) => {
        console.error('Error triggering Zapier:', error);
        // Handle error case
      }
    );
  }



// interface Response {
//   type: string;
//   responses?: {
//     delay: number;
//     type: string;
//     message?: string;
//     title?: string;
//     buttons?: {
//       title: string;
//       type: string;
//       value: string;
//       id: string;
//     }[];
//   }[];
// }


// @Injectable({
//   providedIn: 'root',
// })
// export class ChatbotService {

//   private chatHistory = zapierMockJson;
//   sendMessage(message: string): Observable<any> {
//     // Simulate backend service response
//     const response = this.chatHistory.responses.find((entry: Response) =>{
//      // console.log(entry)
//       entry.responses?.find(
//       (resp) =>
//       {
//         console.log(resp,'testtttt')
//         resp?.type === 'text' && resp.message?.toLowerCase() === message.toLowerCase()
//       }
//     )

//     }
//   );
//   console.log(response)

//     return of(response);

//   }

}

// chatbot-loader.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class ChatbotLoaderService {

//   constructor(private http: HttpClient) { }

//   loadScript(): void {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.async = true;
//     script.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';

//     // Optional: Set additional properties if needed
//     script.setAttribute('data-id', '657887a14118780006ff4431');

//     const firstScript = document.getElementsByTagName('script')[0];
//     if (firstScript && firstScript.parentNode) {
//       firstScript.parentNode.insertBefore(script, firstScript);
//     } else {
//       // Handle the case where the parent node doesn't exist or firstScript is null
//       // For example, append it to the document body instead:
//       document.body.appendChild(script);
//     }
//   }
// }
