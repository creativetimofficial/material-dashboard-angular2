import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: "app-ideal-answer",
    templateUrl: "./ideal-answer.component.html",
    styleUrls: ["./ideal-answer.component.scss"]
})
export class IdealAnswerComponent implements OnInit {
    question: string;
    answer: string;
    constructor(
        private dialogRef: MatDialogRef<IdealAnswerComponent>,
        @Inject(MAT_DIALOG_DATA) data
    ) {
        this.question = data.question;
        // this.answer = data.answer.replace(/\n/g, "<br />");
        this.answer = data.answer;
    }

    ngOnInit() {}

    close() {
        this.dialogRef.close();
    }
}