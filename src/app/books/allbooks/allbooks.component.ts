import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { Ibooks, BooksService } from "src/app/shared/service/books.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBookComponent } from "../add-book/add-book.component";

@Component({
  standalone: false,
  selector: "app-allbooks",
  templateUrl: "./allbooks.component.html",
  styleUrls: ["./allbooks.component.css"]
})
export class AllbooksComponent implements OnInit {
  books: Ibooks[];
  sequence: number;

  constructor(
    private bookservice: BooksService, 
    private modalService: NgbModal, 
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.books = this.bookservice.getBooks();
    this.sequence = 2;
  }

  delete(book: Ibooks) {
    this.books.splice(this.books.indexOf(book), 1);
  }

  add() {
    const modalRef = this.modalService.open(AddBookComponent);
    modalRef.result.then(() => {
      this.zone.run(() => {
        this.books = [...this.bookservice.getBooks()];
        this.cdr.detectChanges();
      });
    }).catch(() => {});
  }

  edit(book: Ibooks) {
    const modalRef = this.modalService.open(AddBookComponent);
    modalRef.componentInstance.id = book.id;
    modalRef.componentInstance.bookname = book.bookname;
    modalRef.componentInstance.author = book.author;
    modalRef.componentInstance.price = book.price;
    modalRef.componentInstance.booktype = book.booktype;
    
    modalRef.result.then(() => {
      this.zone.run(() => {
        this.books = [...this.bookservice.getBooks()];
        this.cdr.detectChanges();
      });
    }).catch(() => {});
  }
}
