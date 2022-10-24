import { Component, OnInit } from "@angular/core";
import { MyUploadAdapter } from "plugin/MyUploadAdapter";
declare var CKEDITOR: any;
@Component({
  selector: "app-haneditor",
  templateUrl: "./haneditor.component.html",
  styleUrls: ["./haneditor.component.css"],
})
export class HaneditorComponent implements OnInit {
  constructor() {}
  editorConfig = {
    toolbarGroups: [
      { name: "basicstyles", groups: ["basicstyles"] },
      {
        name: "paragraph",
        groups: ["list", "indent", "blocks", "align", "paragraph"],
      },
      { name: "links", groups: ["links"] },
      { name: "insert", groups: ["insert"] },
      { name: "styles", groups: ["styles"] },
      { name: "colors", groups: ["colors"] },
      { name: "tools", groups: ["tools"] },
    ],
    height: "40vh",
    skin: "moono",
    extraPlugins: "easyimage,filebrowser,nsvideo,font,justify",
    removePlugins: "image",
    cloudServices_tokenUrl:
      "https://93202.cke-cs.com/token/dev/84a3eeb66108675569194fea0862cc962b7b6df47776938da8da9f2ba0ce?limit=10",
    cloudServices_uploadUrl: "https://93202.cke-cs.com/easyimage/upload/",
  };
  ngOnInit(): void {
    setTimeout(() => this.init(), 1000);
  }
  init() {
    const editor = CKEDITOR.instances.editor1;
  }
  getData(){
    const editor = CKEDITOR.instances.editor1;
    return editor.getData()
  }
  UploadAdapterPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader);
    };
  }
  onReady($event) {
    $event.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader);
    };
  }
}
