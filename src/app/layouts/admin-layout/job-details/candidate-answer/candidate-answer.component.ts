import {Component, Inject, OnInit} from "@angular/core";
import {Question} from "../../../../models/question.model";
import {Answer} from "../../../../models/answer.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: "app-candidate-answer",
    templateUrl: "./candidate-answer.component.html",
    styleUrls: ["./candidate-answer.component.scss"]
})
export class CandidateAnswerComponent implements OnInit {
    question: Question;
    answer: Answer;
    constructor(
        private dialogRef: MatDialogRef<CandidateAnswerComponent>,
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