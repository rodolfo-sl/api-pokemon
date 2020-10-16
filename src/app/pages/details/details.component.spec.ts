import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ApiPokemonService } from 'src/app/services/api-pokemon.service';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let service: ApiPokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: {}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ApiPokemonService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
