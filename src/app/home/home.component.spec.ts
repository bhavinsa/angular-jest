import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { HomeComponent } from './home.component'
import { UtilityService } from '../utility.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  let service: UtilityService
  const http: HttpClient = null

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent],
    }).compileComponents()

    service = new UtilityService(http)
    component = new HomeComponent(service)
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it(`should return min`, async () => {
    expect(component.doMin(2, 1)).toEqual(1)
  })

  it(`should return sub`, async () => {
    expect(component.doSub(10, 2)).toEqual(5)
  })
})
