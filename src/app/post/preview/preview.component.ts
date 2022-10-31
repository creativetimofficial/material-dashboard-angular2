import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { postData } from 'app/components/models/postData';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private dialogref:MatDialogRef<PreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data:postData) { }

  ngOnInit(): void {
    console.log(this.data.data)
  }
  onNoClick(){
    this.dialogref.close()
  }

}
