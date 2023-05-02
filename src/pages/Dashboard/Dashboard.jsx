import React from 'react';
import {
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import CountUp from 'react-countup';

//Import Icons
import FeatherIcon from 'feather-icons-react';

import { tileBoxs1 } from '../../common/data/index';

function Dashboard() {
  return (
    <div className="page-content">
      <h3>Dashboard</h3>
      <Row>
        {(tileBoxs1 || []).map((item, key) => (
          <Col xl={3} md={6} key={key}>
            <Card className={'card-animate ' + item.bgColor}>
              <CardBody>
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1">
                    <p
                      className={
                        'text-uppercase fw-medium mb-0 text-' + item.labelClass
                      }
                    >
                      {item.label}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <h5 className={'fs-14 mb-0 text-' + item.percentageClass}>
                      <i
                        className={'fs-13 align-middle ' + item.percentageIcon}
                      ></i>{' '}
                      {item.percentage}
                    </h5>
                  </div>
                </div>
                <div className="d-flex align-items-end justify-content-between mt-4">
                  <div>
                    <h4
                      className={
                        'fs-22 fw-semibold ff-secondary mb-4 ' +
                        item.counterClass
                      }
                    >
                      <span className="counter-value" data-target="559.25">
                        <CountUp
                          start={0}
                          prefix={item.prefix}
                          suffix={item.suffix}
                          separator={item.separator}
                          end={item.counter}
                          decimals={item.decimals}
                          duration={4}
                        />
                      </span>
                    </h4>
                    <Link
                      to="#"
                      className={
                        'text-decoration-underline ' + item.captionClass
                      }
                    >
                      {item.caption}
                    </Link>
                  </div>
                  <div className="avatar-sm flex-shrink-0">
                    <span
                      className={
                        'avatar-title rounded fs-3 bg-soft-' + item.iconClass
                      }
                    >
                      <i className={item.icon + ' text-' + item.iconClass}></i>
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {/* 
      <Row>
        <Col xl={12}>
          <Card className="crm-widget">
            <CardBody className="p-0">
              <Row className="row-cols-md-3 row-cols-1">
                {(tileBoxs2 || []).map((item, key) => (
                  <Col
                    className={item.id === 4 ? 'col-lg' : 'col-lg border-end'}
                    key={key}
                  >
                    <div className="mt-3 mt-md-0 py-4 px-3">
                      <h5 className="text-muted text-uppercase fs-13">
                        {item.label}{' '}
                        <i
                          className={
                            'fs-18 float-end align-middle ' + item.badge
                          }
                        ></i>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <i
                            className={'display-6 text-muted ' + item.icon}
                          ></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h2 className="mb-0">
                            <span className="counter-value">
                              <CountUp
                                start={0}
                                prefix={item.prefix}
                                suffix={item.suffix}
                                separator={item.separator}
                                end={item.counter}
                                decimals={item.decimals}
                                duration={4}
                              />
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row> */}
    </div>
  );
}

export default Dashboard;
