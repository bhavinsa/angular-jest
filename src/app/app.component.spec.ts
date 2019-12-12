import { TestBed, async, inject } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { UtilityService } from './utility.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'

describe('AppComponent', () => {
  let component: AppComponent
  let service: UtilityService
  const http: HttpClient = null

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [],
    }).compileComponents()

    service = new UtilityService(http)
    component = new AppComponent(service)
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'angular-jest'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('angular-jest')
  })

  it(`should return sum`, () => {
    expect(component.doSum(1, 2)).toEqual(3)
  })

  it(`should return mul`, () => {
    expect(component.doMul(1, 2)).toEqual(2)
  })
})
