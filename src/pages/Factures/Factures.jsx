import React from 'react';
import {
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Table,
  UncontrolledDropdown,
} from 'reactstrap';

function Factures() {
  return (
    <div className="page-content">
      <h3>Domains</h3>
      <div className="table-responsive" style={{ overflow: 'visible' }}>
        <Table className="table-striped table-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th scope="col">Invoice</th>
              <th scope="col">Invoice Date</th>
              <th scope="col">Next Due</th>
              <th scope="col">Total</th>
              <th scope="col">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-medium">1</td>
              <td>26/03/2023</td>
              <td>26/03/2024</td>
              <td>$514.95 USD</td>
              <td>
                <span className="badge bg-success">Paid</span>
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
              <td className="fw-medium">2</td>
              <td>26/03/2023</td>
              <td>26/03/2024</td>
              <td>$514.95 USD</td>
              <td>
                <span className="badge bg-danger">Unpaid</span>
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
              <td className="fw-medium">3</td>
              <td>26/03/2023</td>
              <td>26/03/2024</td>
              <td>$514.95 USD</td>
              <td>
                <span className="badge bg-success">Paid</span>
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

export default Factures;
