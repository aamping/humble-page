import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }

  getPost(id: number): Observable<Post> {
    return <Observable<Post>>of(POSTS.find(post => post.id === id));
  }
}
