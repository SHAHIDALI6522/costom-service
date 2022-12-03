import { Component, OnInit } from '@angular/core';
import { BookModel } from './models/book.model';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-next-function',
  templateUrl: './book.html',
  styleUrls: ['./book.css'],
  providers: [BookService],
})
export class Book implements OnInit {
  public books: BookModel[] = [];
  counter = 0;
  nestedB: string[] = [];
  users: any[] = [];
  searchText = '';

  constructor(public bookservice: BookService) {
    // this.users.push(this.user.userData);
    // this.users.push(this.user.user);
    // how to add backslash its mein create new line
    // for (let i = 1; i <= 100; i = i + 10) {
    //   for (let b = i; b < i + 3; b++) {
    //     this.nestedB.push('\n');
    //     this.nestedB.push(b.toString());
    //   }
    // }
  }

  ngOnInit(): void {
    this.books = this.bookservice.getbook();
    // console.log(this.books);
  }

  addNumber(nu: string, nut: string) {
    if (nu === 'add' && this.counter < 5) {
      this.counter += 1;
    } else if (nut === 'minus' && this.counter > 0) {
      this.counter -= 1;
    }
  }
}
