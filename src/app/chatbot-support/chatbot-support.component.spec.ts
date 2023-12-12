import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotSupportComponent } from './chatbot-support.component';

describe('ChatbotSupportComponent', () => {
  let component: ChatbotSupportComponent;
  let fixture: ComponentFixture<ChatbotSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
