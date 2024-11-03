import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuesAndExpensesComponent } from './revenues-and-expenses.component';

describe('RevenuesAndExpensesComponent', () => {
  let component: RevenuesAndExpensesComponent;
  let fixture: ComponentFixture<RevenuesAndExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenuesAndExpensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenuesAndExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
