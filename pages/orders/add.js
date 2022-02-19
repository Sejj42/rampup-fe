import styles from "@/styles/AddOrderPage.module.css";
import { Button, Form, FormGroup } from "react-bootstrap";
const AddOrderPage = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <h3>Log your order info here!</h3>
        <Form>
          <Form.Group
            className={styles.formItem}
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Customer First Name</Form.Label>
            <Form.Control type="text" placeholder="Customer First Name" />
          </Form.Group>
          <Form.Group
            className={styles.formItem}
            controlId="exampleForm.ControlInput2"
          >
            <Form.Label>Customer Last Name</Form.Label>
            <Form.Control type="text" placeholder="Customer Last Name" />
          </Form.Group>
          <Form.Group
            className={styles.formItem}
            controlId="exampleForm.ControlInput3"
          >
            <Form.Label>Total Qty</Form.Label>
            <Form.Control type="number" placeholder="Total Quantity" />
          </Form.Group>
          <Form.Group
            className={styles.formItem}
            controlId="exampleForm.ControlInput3"
          >
            <Form.Label>Total Items Sum</Form.Label>
            <Form.Control type="price" placeholder="Total Items Sum" />
          </Form.Group>
          <Form.Group
            className={styles.formItem}
            controlId="exampleForm.ControlInput3"
          >
            <Form.Label>Shipping Cost</Form.Label>
            <Form.Control type="price" placeholder="Shipping Cost" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log Order to system
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddOrderPage;
