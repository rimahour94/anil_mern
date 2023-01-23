import booksData from "../../fakedb/index.json";
function HooksUseState() {
  console.log(booksData);
  return (
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
          {booksData.map((book, i) => {
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
                    {book.assigned_students.map((student) => {
                      return <option>{student}</option>;
                    })}
                  </select>
                </td>
                <td>
                  {" "}
                  <button className="btn btn-danger">Delete</button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default HooksUseState;
