import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCustomerIdComponent } from './by-customer-id.component';

describe('ByCustomerIdComponent', () => {
  let component: ByCustomerIdComponent;
  let fixture: ComponentFixture<ByCustomerIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByCustomerIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCustomerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
