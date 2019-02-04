
import { Injectable } from '@angular/core';


export interface Ibooks{
    id : number,
    bookname : string,
    author : string,
    price : number,
    booktype : string
}

@Injectable()
export class BooksService {

    private books : Ibooks[]=[
        {id:1, bookname: 'You can win', author: 'Shiv Khera', price : 40, booktype :'Inspirational'  },
        {id:1, bookname: 'Win friends and people', author: 'Dale Carnegiw', price : 340, booktype :'Selfhelp'  },
    ];

    getBooks() : Ibooks[]{
        return this.books;
    }

    getSpecificBooks(booktype: string): Ibooks[]{
       return this.books.filter(b => b.booktype===booktype);

    }


}