import { TestBed, async, inject } from '@angular/core/testing';
import { UtilityService } from './utility.service';
import { Posts } from "../app/model/post";
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';


describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UtilityService]
    });
  });

  it('should get users',inject([HttpTestingController, UtilityService],(httpMock: HttpTestingController, dataService: UtilityService) => {
        const dummyPosts: Posts[] = [{
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }]

        dataService.getPosts().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(dummyPosts);
          }
        });
        const mockReq = httpMock.expectOne(dataService.ROOT_URL + '/posts');
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(dummyPosts);
        httpMock.verify();
      }
    )
  );
});
