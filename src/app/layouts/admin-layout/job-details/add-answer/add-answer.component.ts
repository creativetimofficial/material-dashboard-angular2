import {Component, Inject, OnInit} from "@angular/core";
import {Question} from "../../../../models/question.model";
import {Candidate} from "../../../../models/candidate.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: "app-add-answer",
    templateUrl: "./add-answer.component.html",
    styleUrls: ["./add-answer.component.scss"]
})
export class AddAnswerComponent implements OnInit {
    question: Question;
    candidate: Candidate;
    answer: string = null;
    constructor(
        private dialogRef: MatDialogRef<AddAnswerComponent>,
        @Inject(MAT_DIALOG_DATA) data
    ) {
        this.question = data.question;
        this.candidate = data.candidate;
    }

    ngOnInit() {
        this.answer = null;
    }

    save() {
        this.dialogRef.close({ answer: this.answer })
    }

    close() {
        this.dialogRef.close();
    }
}