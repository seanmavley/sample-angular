import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

interface IPost {
  id?: string;
  date: string;
  title: string;
  body: string;
  author: string;
}
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  posts: IPost;

  constructor(private blog: BlogService) { }

  ngOnInit(): void {

    const fromStorage = localStorage.getItem('posts');

    if(fromStorage) {
      this.posts = JSON.parse(fromStorage);
      return;
    }

    this.blog.loadPosts()
      .subscribe((res: IPost) => {
        this.posts = res['posts'];
        localStorage.setItem('posts', JSON.stringify(res['posts']))
      })

  }
  

}
