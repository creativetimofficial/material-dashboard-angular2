import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HaneditorComponent } from 'app/components/haneditor/haneditor.component';
import { MatDialog} from '@angular/material/dialog';
import { PreviewComponent } from './preview/preview.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PostComponent implements OnInit {
@ViewChild ('editor') editor:HaneditorComponent
title:string=''
  constructor(private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {   
  }
  post(){    
  }
  preview(){ 
    const data = {
      title:this.title,
      data:this.editor.getData()
    }
    localStorage.setItem('tmppost',JSON.stringify(data))
    const url = this.router.serializeUrl(this.router.createUrlTree([`/typography/preview`]))
    console.log(url)
    window.open(url,'_blank')
  }
}
