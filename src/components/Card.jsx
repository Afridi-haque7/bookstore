import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFirebase } from '../context/Firebase';

const BookCard = (props) => {
    const firebase = useFirebase();
    const [url, setURL] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        firebase.getImageURL(props.imageURL).then((url) => setURL(url));
    }, []);

  return (
    <div className="m-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} style={{ height:"10rem" }} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            This book has a title {props.name} and is sold by{" "}
            {props.displayName} ans this book costs Rs. {props.price}
          </Card.Text>
          <Button onClick={(e) => navigate(`/book/view/${props.id}`)} variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookCard
