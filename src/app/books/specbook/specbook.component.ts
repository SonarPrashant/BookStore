import { Component, OnInit, Input } from '@angular/core';
import { BooksService, Ibooks } from 'src/app/shared/service/books.service';
import { Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-specbook',
  templateUrl: './specbook.component.html',
  styleUrls: ['./specbook.component.css']
})
export class SpecbookComponent implements OnInit {

  books : Ibooks[];
 bookType : string;
  constructor(private bookservice: BooksService, private router: Router,
    private route: ActivatedRoute) { 
      this.route.data.subscribe(data => 
        this.bookType= data.bookType);
    }

  ngOnInit() {
    
    
    this.books= this.bookservice.getSpecificBooks(this.bookType);
  }

  ngOnChanges() {
    
    this.books= this.bookservice.getSpecificBooks(this.bookType);
  }

}
