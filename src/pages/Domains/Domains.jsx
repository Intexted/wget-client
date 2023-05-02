import React from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonGroup,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Label,
  Row,
  Table,
  UncontrolledDropdown,
} from 'reactstrap';

function Domains() {
  return (
    <div className="page-content">
      <h3>Domains</h3>
      <div className="table-responsive" style={{ overflow: 'visible' }}>
        <Table className="table-striped table-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th scope="col">Domain</th>
              <th scope="col">Next Due</th>
              <th scope="col">Auto Renew</th>
              <th scope="col">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-medium">
                <a href="google.com">http://qdazedazeaze.com/</a>
              </td>
              <td>26/03/2023</td>
              <td>
                <div className="form-check form-switch p-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="SwitchCheck4"
                    defaultChecked=""
                  />
                </div>
              </td>
              <td>
                <span className="badge bg-success">Active</span>
              </td>
              <td>
                <ButtonGroup>
                  <UncontrolledDropdown>
                    <DropdownToggle tag="button" className="btn ">
                      <h4>...</h4>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Separated link</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Domains;
