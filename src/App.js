import React, { useState, useEffect } from 'react';
import Header from "./component/Header";
import SerchButoon from "./component/SearchButton";
import axios from 'axios';
import './App.css';
import Noimage from './images/noImage.png';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("java");
  const [SearchSubmit,searchFlg] = useState(false);

  //書籍名取得
  const handleChange =(event)=>{
      setSearchTerm(event.target.value);
  }
  
  //ボタン押下時
  const handleSubmit =()=>{
      searchFlg(true);
  }

  //書籍検索実行
  useEffect(() => {

    const fetchData = async () => {
      try{
        const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`+'&maxResults=10');
        setBooks(result.data.items);
      } catch(eve) {
        console.log("エラー発生");
      }
    };

    fetchData();
    searchFlg(false);

  }, [SearchSubmit]);

  return (
    <>
    <div className="container">
      <Header/>
      <SerchButoon/>
      {/*
      <section className="book_search">
        <input type="text" className="searchInput" name="searchInput" value={searchTerm} onChange={handleChange} placeholder="書籍名を入力"/>
        <button type="submit" className="btn_search" onClick={handleSubmit}>Search</button>
      </section>
      */}
       {/*
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
              <div className="image_area"　>
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
      */}
    </div>
     </>
  );
}

export default App;