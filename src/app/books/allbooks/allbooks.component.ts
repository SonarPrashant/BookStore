import { Component, OnInit } from "@angular/core";
import { Ibooks, BooksService } from "src/app/shared/service/books.service";
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBookComponent } from "../add-book/add-book.component";
import { Promise } from 'q';

@Component({
  selector: "app-allbooks",
  templateUrl: "./allbooks.component.html",
  styleUrls: ["./allbooks.component.css"]
})
export class AllbooksComponent implements OnInit {
  books: Ibooks[];
  sequence: number;
  
  constructor(private bookservice: BooksService, private modalService: NgbModal) {}

  ngOnInit() {
    this.books = this.bookservice.getBooks();
    this.sequence = 2;
  }

  delete(book) {
    this.books.splice(this.books.indexOf(book), 1);
  }


  add() {
    const modalRef = this.modalService.open(AddBookComponent);
  
  }
  
   edit(book){
    const modalRef = this.modalService.open(AddBookComponent);

    modalRef.componentInstance.id=book.id;
    modalRef.componentInstance.bookname=book.bookname;
    modalRef.componentInstance.author=book.author;
    modalRef.componentInstance.price=book.price;
    modalRef.componentInstance.booktype=book.booktype;
   }
}
