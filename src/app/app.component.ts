import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public todos: Todo[] = [];
 public title : String = 'Minhas Tarefas ';
 //public name : String = 'Carlos';
 public form: FormGroup;
 /**
  *
  * ctor
  */


 constructor(private fb:FormBuilder) {
  this.form= this.fb.group({
    title: ['', Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(60),
      Validators.required,
    ])]
  });
   this.todos.push(new Todo(1, "Passear com a namoroda", false));
   this.todos.push(new Todo (2,"Corta cabelo",false));
   this.todos.push(new Todo(3,"Passear com Dog", true));
  //this.todos.push({mensagem:'json'});
  //this.todos.push(new Date());
  
 }


  // alterarTexto(){
  //   this.title=  'Test';
  // }
  // alterarNome(){
  //   this.name = 'AMANUEL';
  // }
  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
      if(index !== -1){
        this.todos.splice(index,1);
      }
  }

  markAsDone(Todo:Todo){
    Todo.done = true; 
  }
  markAsUndone(todo : Todo){
    todo.done= false;
  }
 
}
