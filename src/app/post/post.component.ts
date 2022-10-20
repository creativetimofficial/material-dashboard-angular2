import { Component, OnInit } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular/ckeditor';
import { MyUploadAdapter } from 'plugin/MyUploadAdapter';

declare var CKEDITOR: any;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  editorConfig = {
    skin: 'moono',
    extraPlugins: 'easyimage,filebrowser,nsvideo',
    removePlugins: 'image',
    filebrowserBrowseUrl: '/browser/browse.php',
    filebrowserUploadUrl: '/uploader/upload.php',
    cloudServices_tokenUrl: 'https://93202.cke-cs.com/token/dev/84a3eeb66108675569194fea0862cc962b7b6df47776938da8da9f2ba0ce?limit=10',
    cloudServices_uploadUrl: 'https://93202.cke-cs.com/easyimage/upload/'
  }
  data = ''
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.init(), 1000);
  }
  init() {
    const editor = CKEDITOR.instances.editor1
   
  }
  onChange(e: CKEditor4.EventInfo) {
   // console.log(e)
  }
  UploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader);
    }
  }
  onReady($event) {
    $event.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader);
    }
  }

}
