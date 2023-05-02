import React from 'react';
import {
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
  UncontrolledDropdown,
} from 'reactstrap';

function Services() {
  return (
    <div className="page-content">
      <h3>Services</h3>
      <div className="table-responsive" style={{ overflow: 'visible' }}>
        <Table className="table-striped table-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th scope="col">Product/Service</th>
              <th scope="col">Pricing</th>
              <th scope="col">Next Due Date</th>
              <th scope="col">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-medium">
                Shared Hosting - New User
                <br />
                <a href="google.com">http://qdazedazeaze.com/</a>
              </td>
              <td>$514.95 USD</td>
              <td>26/03/2023</td>
              <td>
                <span className="badge bg-success">Terminated</span>
              </td>
              <td>
                <ButtonGroup>
                  <UncontrolledDropdown>
                    <DropdownToggle tag="button" className="btn">
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
            <tr>
              <td className="fw-medium">
                Shared Hosting - New User
                <br />
                <a href="google.com">http://qdazedazeaze.com/</a>
              </td>
              <td>$514.95 USD</td>
              <td>26/03/2023</td>
              <td>
                <span className="badge bg-success">Terminated</span>
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
            <tr>
              <td className="fw-medium">
                Shared Hosting - New User
                <br />
                <a href="google.com">http://qdazedazeaze.com/</a>
              </td>
              <td>$514.95 USD</td>
              <td>26/03/2023</td>
              <td>
                <span className="badge bg-success">Terminated</span>
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

export default Services;
