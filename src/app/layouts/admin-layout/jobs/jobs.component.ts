import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {getNewJob, Job} from "../../../models/job.model";
import {Title} from "@angular/platform-browser";
import {UserService} from "../../../user.service";



@Component({
    selector: "app-jobs",
    templateUrl: "./jobs.component.html",
    styleUrls: ["./jobs.component.scss"]
})
export class JobsComponent implements OnInit {
    jobs: Job[];
    newJob: Job;
    minExperience: number;
    maxExperience: number;
    newMandatoryKnowledge: string = null;
    newOptionalKnowledge: string = null;
    constructor(
        private router: Router,
        private http: HttpClient,
        private title: Title,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.title.setTitle("Osiris - Jobs");
        this.newJob = getNewJob();
        this.minExperience = null;
        this.maxExperience = null;
        this.newMandatoryKnowledge = null;
        this.newOptionalKnowledge = null;
        this.http.get(`${environment.apiUrl}/jobs`, {
            headers: {
                Authorization: `Bearer ${this.userService.getAppJwtToken()}`
            }
        }).subscribe({
            next: (value: Job[]) => {
                this.jobs = value;
            },
            error: error => {
                console.error("API Error", error);
            }
        })
    }

    addMandatoryKnowledge() {
        if (!this.newMandatoryKnowledge) {
            console.log("No mandatory knowledge");
            alert("No mandatory knowledge");
            return;
        }
        this.newJob.mandatory_knowledge.push(this.newMandatoryKnowledge);
        this.newMandatoryKnowledge = null;
    }

    addOptionalKnowledge() {
        if (!this.newOptionalKnowledge) {
            console.log("No mandatory knowledge");
            alert("No mandatory knowledge");
            return;
        }
        this.newJob.optional_knowledge.push(this.newOptionalKnowledge);
        this.newOptionalKnowledge = null;
    }

    saveJob() {
        if (!this.newJob.title) {
            alert("Title not set");
            return;
        }

        if ((!this.minExperience && this.minExperience !== 0) || !this.maxExperience) {
            alert("Experience not set");
            return;
        }

        this.newJob.seniority = `${this.minExperience}-${this.maxExperience}`;

        this.http.post(`${environment.apiUrl}/jobs`, this.newJob, {
            headers: {
                Authorization: `Bearer ${this.userService.getAppJwtToken()}`
            }
        }).subscribe({
            next: (value: Job) => {
                this.jobs.push(value);
                this.newJob = getNewJob();
            },
            error: error => {
                console.error("API Error", error);
            }
        })
    }
}