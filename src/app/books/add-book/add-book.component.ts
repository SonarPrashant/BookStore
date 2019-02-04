import { Component, OnInit, Input   } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ibooks, BooksService } from "src/app/shared/service/books.service";


@Component({
  selector: 'app-add-book',
  template: 
  `<div class="modal-header">
  <h1>Add Book</h1>
  <button
    type="button"
    class="close"
    aria-label="Close"
    (click)="activeModal.dismiss('Cross click')"
  >
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <input [hidden]="true" #id [value] = "getId()" placeholder="ID" />
  <input  class="form-control" #bookname [value] = "getbookname()" placeholder="Book Name"  required/>
  <input class="form-control" #author [value] = "getAuthor()" placeholder="Author" required/>
  <input   class="form-control" #price [value] = "getPrice()" placeholder="Price" required/>
  <input   class="form-control" #booktype [value] = "getBooktype()" placeholder="Book Type" required/>
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
      id : id.value
    })">
    Save
  </button>
  <button
    type="button"
    class="btn btn-primary"
    (click)="activeModal.close('Close click')"
  >
    Close
  </button>
</div>`
 
})
export class AddBookComponent implements OnInit {
  @Input() id: number ;
  @Input() bookname: string = "";
  @Input() author: string = "";
  @Input() price: number = 0;
  @Input() booktype: string = "";

  books: Ibooks[];
  sequence: number;

  constructor(
    public activeModal: NgbActiveModal,
    private bookservice: BooksService
  ) {}

  ngOnInit() {
    this.books = this.bookservice.getBooks();
    this.sequence = 2;
    console.log(this.bookname);
  }
  save(book) {
    if (book.id === null || book.id=== 'undefined') {
      this.sequence = this.sequence + 1;
      book.id = this.sequence;
      this.books.push(book);
      this.activeModal.close("Close click");
    } else {
      let bk = this.books.find(function(v) {
        return v.id == +book.id;
      });

      bk.bookname = book.bookname;
      bk.author = book.author;
      bk.price = book.price;
      bk.booktype = book.booktype;
      this.activeModal.close("Close click");
    }
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
