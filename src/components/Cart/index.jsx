import { Button, Card } from "react-bootstrap";
import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import "./styles.css";

const Cart = () => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary"> <FaEdit /> Edit </Button> <Button variant="danger">Delete <FaTrashAlt /> </Button>
            </Card.Body>
        </Card>
    )
}

export default Cart;