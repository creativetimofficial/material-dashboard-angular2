import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: Question = new Question();

  questions!: any[];
  users!: any[];

  constructor(private questionService: QuestionService, private utilisateurService: UtilisateurService, private router: Router) {

  }

  ngOnInit(): void {
    this.findAllQuestion();
    this.findAllUtilisateurs();
  }

  findAllQuestion() {
    this.questionService.findAll().subscribe(data => { this.questions = data; });
  }

  findAllUtilisateurs() {
    this.utilisateurService.findAll().subscribe(data => { this.users = data; });
  }

  saveQuestion() {
    this.questionService.save(this.question).subscribe(
      () => {
        this.findAllQuestion();
        this.question = new Question();
      }
    )
  }
  deleteQuestion(id: number) {
    this.questionService.delete(id).subscribe(
      () => {
        this.findAllQuestion();
      }
    )
  }

}
