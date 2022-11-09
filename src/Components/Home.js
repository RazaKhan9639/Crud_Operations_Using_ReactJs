import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("id", id);
  };

  const handleDelete = (id) => {
    var index = Employees.map((e) => e.id).indexOf(id);
    Employees.splice(index, 1);
    navigate("/");
  };

  return (
    <>
      <Fragment>
        <div style={{ margin: "10rem" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                {/* <th>Id</th> */}
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Employees && Employees.length > 0
                ? Employees.map((employee) => {
                    return (
                      <tr key={employee.id}>
                        {/* <td>{employee.id}</td> */}
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>
                          <Link to={`/edit`}>
                            <Button
                              variant="primary"
                              onClick={() =>
                                handleEdit(
                                  employee.id,
                                  employee.name,
                                  employee.age
                                )
                              }
                            >
                              Edit
                            </Button>
                          </Link>
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(employee.id)}
                            style={{ marginLeft: "1rem" }}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </Table>
          <br />
          <br />
          <Link className="d-grid gap-2" to="/add">
            <Button variant="success">Add Employee</Button>
          </Link>
        </div>
      </Fragment>
    </>
  );
};

export default Home;
