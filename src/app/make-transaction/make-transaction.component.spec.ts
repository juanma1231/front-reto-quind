import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTransactionComponent } from './make-transaction.component';

describe('MakeTransactionComponent', () => {
  let component: MakeTransactionComponent;
  let fixture: ComponentFixture<MakeTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeTransactionComponent]
    });
    fixture = TestBed.createComponent(MakeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
