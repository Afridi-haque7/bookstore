import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const BookDetail = () => {
  const params = useParams();
  const firebase = useFirebase();
  // console.log(params);

  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    firebase.getBookById(params.bookId).then((book) => setData(book.data()));
  }, []);
  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase.getImageURL(imageURL).then((url) => setURL(url));
    }
  }, [data]);

  if (data == null) {
    return <h1>Loading...</h1>;
  }

  const placeOrder = async () => {
    const result = await firebase.placeOrder(params.bookId, qty);
    console.log("Order Placed", result);
  }
  console.log(data);

  return (
    <Container fluid className="p-5">
      <Row className="gap-2">
        <Col s md="6" >
          <img
            src={url}
            alt="book_image"
            width="100%"
            style={{ borderRadius: "10px", boxShadow: "4px 4px 4px" }}
          />
        </Col>
        <Col className="ml-5">
          <h1>{data.name}</h1>
          <h5>Price: {data.price}</h5>
          <h5>ISBN No: {data.isbn}</h5>
          <h3>Owner Details:</h3>
          <p>Author: {data.displayName}</p>
          <p>Email: {data.userEmail}</p>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              onChange={(e) => setQty(e.target.value)}
              value={qty}
              type="number"
            />
          </Form.Group>

          <Button onClick={placeOrder} variant="success">Buy Now</Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Description:</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            sed, mollitia ipsa itaque laborum quas ipsum neque laudantium
            distinctio suscipit sit porro dolore labore corporis ullam,
            excepturi, vel quos aperiam? Placeat quasi tempora voluptate fugiat
            dolor quisquam, impedit nihil itaque recusandae minus. Amet, quis!
            Commodi itaque nulla fugit mollitia cum nesciunt, temporibus
            delectus eum officiis ipsa placeat dolores consequatur a? Iusto eos
            laboriosam, nesciunt quidem aperiam dolore vero, nulla repudiandae
            voluptas, ea veritatis. Recusandae, ratione excepturi quas sequi
            blanditiis minima, ipsa, unde ex aperiam similique illum delectus
            voluptate placeat error! Nostrum perspiciatis illo tenetur illum
            obcaecati qui excepturi eius nam! Cupiditate sit maiores earum,
            provident ut aperiam blanditiis id eligendi facilis veniam possimus
            quos tempore veritatis reprehenderit, laboriosam ea. Iste? Repellat
            asperiores unde eius, quo tempore eveniet cupiditate possimus at
            delectus eligendi ratione aut quos? Culpa eum quaerat soluta veniam!
            Cumque esse debitis eius! Delectus mollitia soluta commodi quasi
            blanditiis.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetail;
