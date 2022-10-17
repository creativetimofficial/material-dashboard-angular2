import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; 
import { MyUploadAdapter } from 'plugin/MyUploadAdapter';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit  {
  editor = ClassicEditor;
  editorConfig = {
    placeholder:'Type something ...',
  //  toolbar: [ [ 'Bold' ] ]
  }
  
  constructor() {    
   }

  ngOnInit(): void {
    ClassicEditor
    .create( document.querySelector( '#editor' ),{
      extraPlugins: [this.UploadAdapterPlugin,'html5video'],
   //   toolbar: [ 'heading', 'bold', 'italic', 'numberedList', 'bulletedList' ],
    })
    
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
