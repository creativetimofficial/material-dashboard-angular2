import { Component, OnInit } from '@angular/core';
import { postData } from 'app/models/postData';
const defaultData:postData = {
  title:'default title',
  data:'<p>hello world</p>'
}
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

title:string
data:any
  constructor() { }

  ngOnInit(): void {
    const data =JSON.parse(localStorage.getItem('tmppost'))||defaultData
    this.title = data.title
    this.data = data.data
  }
}

