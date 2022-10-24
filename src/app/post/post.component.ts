import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HaneditorComponent } from 'app/components/haneditor/haneditor.component';
import { MyUploadAdapter } from 'plugin/MyUploadAdapter';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PostComponent implements OnInit {
@ViewChild ('editor') editor:HaneditorComponent
  constructor() { }

  ngOnInit(): void {   
  }
  post(){    
  }
  preview(){
    console.log(this.editor.getData())    
  }
}
