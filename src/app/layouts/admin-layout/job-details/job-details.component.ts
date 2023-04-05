import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Job} from "../../../models/job.model";
import {Question} from "../../../models/question.model";
import {Candidate} from "../../../models/candidate.model";
import {Answer} from "../../../models/answer.model";
import {MatDialog} from "@angular/material/dialog";
import {IdealAnswerComponent} from "./ideal-answer/ideal-answer.component";
import {CandidateAnswerComponent} from "./candidate-answer/candidate-answer.component";
import {AddAnswerComponent} from "./add-answer/add-answer.component";
import {Title} from "@angular/platform-browser";

@Component({
    selector: "app-job-details",
    templateUrl: "./job-details.component.html",
    styleUrls: ["./job-details.component.scss"]
})
export class JobDetailsComponent implements OnInit, OnChanges {
    job: Job = null;
    questions: Question[];
    candidates: Candidate[];
    noQuestions = 8;
    newCandidateName = null;
    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private dialog: MatDialog,
        private title: Title
    ) { }

    ngOnInit() {
        this.title.setTitle("Osiris - Job");
        console.log("Environment", environment);
        this.noQuestions = 8;
        this.newCandidateName = null;
        this.displayJob();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.newCandidateName = null;
        this.noQuestions = 8;
        this.displayJob();
    }

    private getToken() {
        return localStorage.getItem("token");
    }

    displayJob() {
        this.job = null;
        this.questions = [];
        this.candidates = [];

        const jobId = this.route.snapshot.paramMap.get("id");
        this.http.get(`${environment.apiUrl}/jobs/${jobId}`, {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            }
        }).subscribe({
            next: (value: Job) => {
                console.log("Got job", value)
                this.job = value;
                this.title.setTitle(`Osiris - ${this.job.title}`)
                this.listQuestions();
                this.listCandidates();
            },
            error: error => {
                console.error("API Error", error);
            }
        })
    }

    listQuestions() {
        this.http.get(`${environment.apiUrl}/jobs/${this.job._id}/questions`, {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            }
        }).subscribe({
            next: (value: Question[]) => {
                console.log("Got questions", value);
                this.questions = value;
            },
            error: error => {
                console.error("API Error", error);
            }
        });
    }

    listCandidates() {
        this.http.get(`${environment.apiUrl}/jobs/${this.job._id}/candidates`, {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            }
        }).subscribe({
            next: (value: Candidate[]) => {
                console.log("Received candidates", value);
                this.candidates = value;
            },
            error: error => {
                console.error("API Error", error);
            }
        })
    }

    generateQuestions() {
        this.http.post(`${environment.apiUrl}/jobs/${this.job._id}/generate-questions`, {
            number: this.noQuestions
        }, {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            }
        }).subscribe({
            next: (value: Question[]) => {
                this.questions = value;
            },
            error: error => {
                console.error("API Error", error);
            }
        })
    }

    showCandidateAnswer(question: Question, answer: Answer) {
        this.dialog.open(CandidateAnswerComponent, {
            disableClose: false,
            autoFocus: true,
            data: {
                question: question,
                answer: answer
            }
        });
    }

    showIdealAnswer(question: Question) {
        if (question.ideal_answer) {
            this.displayIdealAnswer(question);
            return;
        }

        this.http.post(`${environment.apiUrl}/jobs/${this.job._id}/questions/${question._id}/generate-ideal-answer`, {}, {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            }
        }).subscribe({
            next: (value: Question) => {
                console.log("Received question with ideal answer", value);
                question.ideal_answer = value.ideal_answer;
                this.displayIdealAnswer(question);
            },
            error: error => {
                console.error("API Error", error);
            }
        })
    }
    
    private displayIdealAnswer(question: Question) {
        this.dialog.open(IdealAnswerComponent, {
            disableClose: false,
            autoFocus: true,
            data: {
                question: question.text,
                answer: question.ideal_answer
            }
        });
    }

    addAnswer(question: Question, candidate: Candidate) {
        const dialogRef = this.dialog.open(AddAnswerComponent, {
            disableClose: true,
            autoFocus: true,
            data: {
                question: question,
                candidate: candidate
            }
        });

        dialogRef.afterClosed().subscribe(data => {
            this.saveAnswer(question, candidate, data.answer);
        })
    }

    private saveAnswer(question: Question, candidate: Candidate, answer: string) {
        this.http.post(`${environment.apiUrl}/jobs/${this.job._id}/questions/${question._id}/answer`, {
            candidate_id: candidate._id,
            text: answer
        }, {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            }
        }).subscribe({
            next: (value: Answer) => {
                candidate.answers[question._id] = value;
                this.questions = [...this.questions]
            },
            error: error => {
                console.error("API Error", error);
            }
        })
    }

    addCandidate() {
        if (!this.newCandidateName) {
            return;
        }

        this.http.post(`${environment.apiUrl}/jobs/${this.job._id}/candidates`, {
            name: this.newCandidateName
        }, {
            headers: {
                Authorization: `Bearer ${this.getToken()}`
            }
        }).subscribe({
            next: (value: Candidate) => {
                value.answers = {};
                this.candidates.push(value);
                this.newCandidateName = null;
            },
            error: error => {
                console.error("API Error", error);
            }
        })
    }
}