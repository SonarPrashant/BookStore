import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ibooks, BooksService } from "src/app/shared/service/books.service";


import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-add-book',
  template:
  `<div class="modal-header">
  <h5 class="modal-title">{{ id ? 'Edit Book' : 'Add Book' }}</h5>
  <button
    type="button"
    class="btn-close"
    aria-label="Close"
    (click)="activeModal.dismiss('Cross click')"
  ></button>
</div>
<div class="modal-body">
  <!-- Hidden ID input removed as the property can be directly passed -->
  <input class="form-control mb-2" #bookname [value]="getbookname()" placeholder="Book Name" required/>
  <input class="form-control mb-2" #author [value]="getAuthor()" placeholder="Author" required/>
  <input class="form-control mb-2" #price [value]="getPrice()" placeholder="Price" required/>
  <input class="form-control mb-2" #booktype [value]="getBooktype()" placeholder="Book Type" required/>
</div>
<div class="modal-footer">
<button
    type="button"
    class="btn btn-primary"
    (click)="save({
      bookname: bookname.value,
      author: author.value,
      price: price.value,
      booktype: booktype.value,
      id : id
    })">
    Save
  </button>
  <button
    type="button"
    class="btn btn-secondary"
    (click)="activeModal.close('Close click')"
  >
    Close
  </button>
</div>`

})
export class AddBookComponent implements OnInit {
  @Input() id: number;
  @Input() bookname: string = "";
  @Input() author: string = "";
  @Input() price: number = 0;
  @Input() booktype: string = "";

  books: Ibooks[];

  constructor(
    public activeModal: NgbActiveModal,
    private bookservice: BooksService,
    private router: Router
  ) {}

  ngOnInit() {
    this.books = this.bookservice.getBooks();
  }

  save(book: any) {
    if (!book.id) {
      // Find highest existing ID and increment by 1
      const highestId = this.books.length ? Math.max(...this.books.map(b => b.id)) : 0;
      book.id = highestId + 1;
      this.books.push(book);
    } else {
      let bk = this.books.find(function(v) {
        return v.id == +book.id;
      });

      if (bk) {
        bk.bookname = book.bookname;
        bk.author = book.author;
        bk.price = book.price;
        bk.booktype = book.booktype;
      }
    }
    this.activeModal.close("Close click");
  }

  getbookname() {
    return this.bookname;
  }

  getAuthor() {
    return this.author;
  }

  getPrice() {
    return this.price;
  }

  getBooktype() {
    return this.booktype;
  }

  getId() {
    return this.id;
  }
}
