import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import { useFirebase } from "../context/Firebase";
import Card from "../components/Card";
import CardGroup from 'react-bootstrap/CardGroup';


const HomePage = () => {
    const [books, setBooks] = useState([]);

    const firebase = useFirebase();
    useEffect(() => {
      firebase.listAllBooks().then((books) => setBooks(books.docs));
    }, []);



  return (
    <div className="container">
      <CardGroup>
        {books.map((book) => (
          <Card key={book.id} id={book.id} {...book.data()} />
        ))}
      </CardGroup>
    </div>
  );
};

export default HomePage;
