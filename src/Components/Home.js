import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link,useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const handleDelete = (id) => {
        console.log(id);
        var index = Employees.map((e) => e.id).indexOf(id);
        Employees.splice(index, 1);
        console.log(Employees);
        navigate("/");
    };
  return (
    <>
      <Fragment>
        <div style={{ margin: "10rem" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Id</th>
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
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>
                          <Button
                            variant="primary"
                            onClick={() => alert(employee.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(employee.id)}
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
        </div>
      </Fragment>
    </>
  );
};

export default Home;
