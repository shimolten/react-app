import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import BookList from "./BookList";


const SearchButton = () =>{
 

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


    return(
        <>
        <section className="book_search">
        <input type="text" className="searchInput" name="searchInput" value={searchTerm} onChange={handleChange} placeholder="書籍名を入力"/>
        <button type="submit" className="btn_search" onClick={handleSubmit}>Search</button>
        </section>
       <BookList books={books} />
       </>
    );

}

export default SearchButton;