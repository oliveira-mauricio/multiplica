import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiplica } from './multiplica';

describe('Multiplica', () => {
  let component: Multiplica;
  let fixture: ComponentFixture<Multiplica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Multiplica],
    }).compileComponents();

    fixture = TestBed.createComponent(Multiplica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
