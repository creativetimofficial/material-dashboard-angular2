import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { Question } from 'app/model/question';
import { QuestionService } from 'app/services/question.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {
  // Déclaration d'un tableau d'utilisateur 
  // any : n'importe quel type de données 
  // ! ==> le tableau n'est pas initialisé 
  questions!: any[];
  question: Question = new Question();
  // DI  : par constructeur  
  constructor(private questionService: QuestionService, private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.saveQuestion();
  }

  findAllQuestion() {
    // Utilisation de l'expression lambde dans le subscribe  
    // data => {this.users = data}   
    this.questionService.findAll().subscribe(data => { this.questions = data; });
  }

  saveQuestion() {
    this.questionService.save(this.question).subscribe(
      () => {
        this.findAllQuestion();
        this.question = new Question();
      }
    )
  }
  deleteOffre(id: number) {
    this.questionService.delete(id).subscribe(() => { this.findAllQuestion(); })
  }

  editQuestion(question: Question) {
    // localStorage : créer un attribut (name="editUserId") dans le navigateur et lui affecter une valeur (ediUserId= idUtilisateur)   
    // étape 1 : MAJ du composant   
    localStorage.removeItem("editQuestionId");
    // étape 2 : Séleectionner une ligne    
    localStorage.setItem("editQuestionId", question.idQuestion.toString());
    this.router.navigate(['/editQuestionId', question.idQuestion]);
  }
}