import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsRayadosComponent } from './questions-rayados.component';

describe('QuestionsRayadosComponent', () => {
  let component: QuestionsRayadosComponent;
  let fixture: ComponentFixture<QuestionsRayadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsRayadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsRayadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
