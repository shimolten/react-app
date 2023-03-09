import React from "react";
import '../App.css';
import Noimage from '../images/noImage.png';


const BookList = ({books}) =>{

    if(books ==null){
        console.log("bookありません");
    }

    return(
        <section className="book_section">
        <div className="book_list">
        
          {books.map((book)=>{
          let thamnails = "";
          if(book.volumeInfo.imageLinks === undefined){
            console.log("イメージリンクがありません");
            //画像がない場合はNoimage画像を表示
            thamnails = Noimage;

          }else{
            thamnails =  book.volumeInfo.imageLinks.thumbnail;
          }
          return(
            <div className="items" key={book.id}>
              <a className="booklink" href={book.volumeInfo.canonicalVolumeLink} target="_blank">
              <div className="image_area">
                <img src={thamnails} alt="書籍画像" />
              </div>
              </a>
              <p>{book.volumeInfo.title}</p>
              <p>著者： {book.volumeInfo.authors}</p>
            </div>
          )
        })
        }
        </div>
      </section>
    );
}

export default BookList;