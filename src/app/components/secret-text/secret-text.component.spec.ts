import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretTextComponent } from './secret-text.component';

describe('SecretTextComponent', () => {
  let component: SecretTextComponent;
  let fixture: ComponentFixture<SecretTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
