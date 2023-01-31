import { useState } from "react";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
import booksData from "../../fakedb/index.json";

function HooksUseState() {
  const [booksArr, setBookArr] = useState(booksData);
  // let a = 0;

  const [a, setA] = useState(0);
  const [isCreate, setIsCreate] = useState(false);
  const [id, setId] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookAvailibility, setbookAvailibility] = useState(true);
  const [recommended, setRecommended] = useState("");
  const deleteHandler = (id) => {
    console.log(id);
    const deletedBook = booksArr.filter((book) => {
      return book.book_id !== id;
    });
    // booksData = ;
    setBookArr(deletedBook);
    // console.log(deletedBook);
  };
  const handleSubmit = () => {
    console.log(id, bookName, bookAvailibility, recommended);
    let obj = {
      book_id: id,
      book_name: bookName,
      availability: bookAvailibility,
      recomended_for: recommended,
      assigned_students: ["Kamal", "Priyanka", "Anuj"],
    };
    setBookArr([...booksArr, obj]);
    setIsCreate(false);
  };
  return (
    <>
      {/* <Card className="my-2" style={{ width: "18rem" }}>
        <CardHeader>
          <CardTitle>Counter Example</CardTitle>
        </CardHeader>
        <CardBody>
          <h2 className="d-flex justify-content-center">{a}</h2>
          <Row sm={2}>
            <Col>
              <Button
                color="primary"
                onClick={() => {
                  // a = a + 1;
                  // console.log(a);
                  setA(a + 1);
                }}
              >
                Increment
              </Button>
            </Col>
            <Col>
              <Button color="secondary">Decrement</Button>
            </Col>
          </Row>
        </CardBody>
      </Card> */}
      <Button
        color="primary"
        style={{ marginBottom: "10px", marginLeft: "10px" }}
        onClick={() => {
          setIsCreate(!isCreate);
        }}
      >
        {isCreate ? "Back" : "Create"}
      </Button>
      {isCreate ? (
        <Card>
          <CardHeader>
            <CardTitle>Create Page</CardTitle>
            <CardBody>
              <Row sm={2}>
                <Col>
                  <Label>ID</Label>
                  <Input
                    placeholder="Please enter your Id"
                    value={id}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setId(e.target.value);
                    }}
                  />
                </Col>
                <Col>
                  <Label>Book Name</Label>
                  <Input
                    placeholder="Please enter Book name"
                    value={bookName}
                    onChange={(e) => {
                      setBookName(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row sm={2}>
                <Col>
                  <Label>Book Availibility</Label>
                  <Select
                    options={[
                      { label: "true", value: true },
                      { label: "false", value: false },
                    ]}
                    defaultInputValue={bookAvailibility}
                    onChange={(val) => {
                      console.log(val);
                      setbookAvailibility(val.value);
                    }}
                    // placeholder="book availibility"
                    // value={bookAvailibility}
                    // onChange={(e) => {
                    //   setbookAvailibility(e.target.value);
                    // }}
                  />
                </Col>
                <Col>
                  <Label>Recommended For</Label>
                  <Input
                    placeholder="recommended for"
                    value={recommended}
                    onChange={(e) => {
                      setRecommended(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button color="primary" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    setIsCreate(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </CardBody>
          </CardHeader>
        </Card>
      ) : (
        <>
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th>SNo.</th>
                <th>Book Id</th>
                <th>Book Name</th>
                <th>Book Availablity</th>
                <th>Recomended For</th>
                <th>Assigned Students</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {booksArr.map((book, i) => {
                return (
                  <tr key={book?.book_id}>
                    <td>{i + 1}</td>
                    <td>{book.book_id}</td>
                    <td>{book.book_name}</td>
                    <td>
                      {book.availability ? (
                        <span style={{ color: "green" }}>Available</span>
                      ) : (
                        <span style={{ color: "red" }}>Not Available</span>
                      )}
                    </td>
                    <td>{book.recomended_for}</td>
                    <td>
                      <select name="" id="">
                        {book.assigned_students.map((student, i) => {
                          return <option key={i}>{student}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteHandler(book.book_id);
                        }}
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
export default HooksUseState;
