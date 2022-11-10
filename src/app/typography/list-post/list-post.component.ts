import { Component, OnInit } from '@angular/core';
import { PostApi } from 'app/api/postApi';
import { postData } from 'app/models/postData';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  id = 'defaultID'
  posts:postData[] = []

  constructor(private postApi:PostApi) { }

  ngOnInit(): void {
    this.postApi.getAllPost().subscribe((res:postData[])=>{
      this.posts = res
    })
  }

}