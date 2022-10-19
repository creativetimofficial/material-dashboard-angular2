import { Component, OnInit } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular/ckeditor';
import { MyUploadAdapter } from 'plugin/MyUploadAdapter';

declare var CKEDITOR: any;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit  {

  editorConfig = {
  skin:'moono',
  extraPlugins:'easyimage,filebrowser',
  removePlugins: 'image',
  filebrowserBrowseUrl: '/browser/browse.php',
  filebrowserUploadUrl: '/uploader/upload.php',
  //  cloudServices_tokenUrl: 'https://example.com/cs-token-endpoint',
  //  cloudServices_uploadUrl: 'https://your-organization-id.cke-cs.com/easyimage/upload/'
  }
  data = ''
  constructor() {}

  ngOnInit(): void { }
  onChange(e:CKEditor4.EventInfo){
    console.log(e)
  }
  UploadAdapterPlugin( editor ) {
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
