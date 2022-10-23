import { Component, OnInit, Pipe, PipeTransform, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//import { CKEditor4 } from 'ckeditor4-angular/ckeditor';
import { MyUploadAdapter } from 'plugin/MyUploadAdapter';

declare var CKEDITOR: any;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  editorConfig = {
    skin: 'moono',
    extraPlugins: 'easyimage,filebrowser,nsvideo,font,justify',
    removePlugins: 'image',
    //filebrowserBrowseUrl: '/ckfinder/ckfinder.html?resourceType=Files',
    //filebrowserUploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
    cloudServices_tokenUrl: 'https://93202.cke-cs.com/token/dev/84a3eeb66108675569194fea0862cc962b7b6df47776938da8da9f2ba0ce?limit=10',
    cloudServices_uploadUrl: 'https://93202.cke-cs.com/easyimage/upload/'
  }
  data = `<p style="text-align: center;">dgdfg</p>`
  content = ''
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.init(), 1000);
  }
  init() {
    const editor = CKEDITOR.instances.editor1
   
  }
  post(){
    const editor = CKEDITOR.instances.editor1
    this.content = editor.getData()

    console.log(this.content)
    
  }
 // onChange(e: CKEditor4.EventInfo) {
   // console.log(e)
//  }
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
@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}