// #1
import {Component, signal}from '@angular/core';

@Component({
  selector:'app-user',
  template:'Username:{{username}}',

})
export class User{
  username='ashleyyoungTech';
}

@Component({
  selector:'app-root',
  template:`<section><app-user /></section>`
  ,
  imports:[User],
})
export class App{}

// #1.1

import {Component, signal}from '@angular/core';

@Component({
  selector:'app-root',
  template: `@if(isLoggedIn){
    <span> Yes the server is running</span>
  } `
})
export class App {
  isLoggedIn: boolean = true;
}

// #2
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `@if(isServerRunning){ <span>Yes, the server is running</span>
  }@else{
  <span>No, the server is not running</span>}`,

})
export class App {
  // add the boolean property here
  isServerRunning: boolean=true;
}

// #3
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
    }
  `,
})
export class App {
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
}


// #4
import {Component, input} from '@angular/core';

@Component({
  selector: 'app-user',
  template:`<p>The user's name is {{name()}}</p> `,
})
export class User {
  name= input<string>();
}

// #1
import {Component} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  template: ` <app-user name="Simran"></app-user> `,
  imports: [User],
})
export class App {}


// #5
import {Component} from '@angular/core';
import {Child} from './child'

@Component({
  selector: 'app-root',
  template: `
  <app-child (addItemEvent)="addItem($event)"/>
  <p>🐢 all the way down {{items.length}}</p>
  @for(item of items; track $index){
    <span>{{item}}</span>
  }
  `,
  imports: [Child],
})
export class App {
  items=new Array();
  addItem(item:string){
    this.items.push(item);
  }
}


// #6
import{Component, output} from '@angular/core';

@Component({
  selector:'app-child',
  styles:`
    .btn{
    padding: 5px;
}`,
  template:`<button class="btn" (click)="addItem()">Add Item</button>`,
})

export class Child {
  readonly addItemEvent=output<string>();

  addItem(){
    this.addItemEvent.emit('🐢');
  }
}

// #7
import {Component} from '@angular/core';
import {Comments} from './comments';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>Some content</article>
      @defer(on viewport){<comments />}
      @placeholder{
      <p>Future comments</p>
      }@loading(minimum 4s){
      <p>Loading commentss...</p>
      }
    </div>
  `,
  imports: [Comments],
})
export class App {}

// #8
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
  `,
  imports: [FormsModule],
})
export class User {
  favoriteFramework = '';
  username = 'youngTech';
}

// #9
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class User {
  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {
    alert(this.favoriteFramework);
  }
}


// #10

import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <input type="text" formControlName="name" />
      <input type="email" formControlName="email" />
      <button type="submit">Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
  imports: [ReactiveFormsModule],
})
export class App {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}

// #11
import {Component} from '@angular/core';
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: ` {{ username | lowercase }} `,
  imports: [LowerCasePipe],
})
export class App {
  username = 'yOunGTECh';
}

// #12
import {Component} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number: '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date: 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class App {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}


// #13
import {Component} from '@angular/core';
import {ReversePipe} from './reverse.pipe';

@Component({
  selector: 'app-root',
  template: ` Reverse Machine: {{ word }}<br>{{answer}} `,
  imports: [],
})
export class App {
  word = 'You are a champion';
  answer='I know';
}

