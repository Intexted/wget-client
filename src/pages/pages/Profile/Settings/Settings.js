import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import {
  updatePassword,
  updateProfile,
} from '../../../../store/auth/update/actions';

// Formik Validation
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Settings = () => {
  document.title = 'Profile Settings | WGet - Dashboard Template';
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('authUser')).user);
  }, []);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Please Enter Your Email'),
    }),
    onSubmit: (values) => {
      dispatch();
    },
  });

  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('1');

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    dispatch(
      updatePassword({
        password: '',
        newPassword: '',
        id: user._id,
      })
    );
  };
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile({
        first_name: '',
        last_name: '',
        phone: '',
        address: '',
        country: '',
        id: user._id,
      })
    );
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h3 style={{ marginBottom: '15px' }}>Mon Profile</h3>
          <Row>
            <Col xxl={9}>
              <Card className="mt-xxl-n5">
                <CardHeader>
                  <Nav
                    className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        role="button"
                        className={`${
                          activeTab === '1' ? 'text-primary' : 'text-muted'
                        }`}
                        // className={classnames({ active: activeTab === '1' })}
                        onClick={() => {
                          tabChange('1');
                        }}
                      >
                        <i className="fas fa-home"></i>
                        Personal Details
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        // className={classnames({ active: activeTab === '2' })}
                        className={`${
                          activeTab === '2' ? 'text-primary' : 'text-muted'
                        }`}
                        onClick={() => {
                          tabChange('2');
                        }}
                        type="button"
                      >
                        <i className="far fa-user"></i>
                        Change Password
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody className="p-4">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <Form onSubmit={handleUpdateProfile}>
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor="firstnameInput"
                                className="form-label"
                              >
                                First Name
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="firstnameInput"
                                placeholder="Enter your firstname"
                                defaultValue={user?.first_name}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor="lastnameInput"
                                className="form-label"
                              >
                                Last Name
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="lastnameInput"
                                placeholder="Enter your lastname"
                                defaultValue={user.last_name}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor="phonenumberInput"
                                className="form-label"
                              >
                                Phone Number
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="phonenumberInput"
                                placeholder="Enter your phone number"
                                defaultValue="+(1) 987 6543"
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor="emailInput"
                                className="form-label"
                              >
                                Email Address
                              </Label>
                              <Input
                                disabled
                                type="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="Enter your email"
                                defaultValue={user.email}
                              />
                            </div>
                          </Col>

                          <Col lg={4}>
                            <div className="mb-3">
                              <Label htmlFor="cityInput" className="form-label">
                                City
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="cityInput"
                                placeholder="City"
                                defaultValue="California"
                              />
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="mb-3">
                              <Label
                                htmlFor="countryInput"
                                className="form-label"
                              >
                                Country
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="countryInput"
                                placeholder="Country"
                                defaultValue="United States"
                              />
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="mb-3">
                              <Label
                                htmlFor="zipcodeInput"
                                className="form-label"
                              >
                                Zip Code
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                minLength="5"
                                maxLength="6"
                                id="zipcodeInput"
                                placeholder="Enter zipcode"
                                defaultValue="90011"
                              />
                            </div>
                          </Col>

                          <Col lg={12}>
                            <div className="hstack gap-2 justify-content-end">
                              <button type="submit" className="btn btn-primary">
                                Updates
                              </button>
                              <button
                                type="button"
                                className="btn btn-soft-success"
                              >
                                Cancel
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </TabPane>

                    <TabPane tabId="2">
                      <Form onSubmit={handleChangePassword}>
                        <Row className="g-2">
                          <Col lg={4}>
                            <div>
                              <Label
                                htmlFor="oldpasswordInput"
                                className="form-label"
                              >
                                Old Password*
                              </Label>
                              <Input
                                type="password"
                                className="form-control"
                                id="oldpasswordInput"
                                placeholder="Enter current password"
                                defaultValue=""
                              />
                            </div>
                          </Col>

                          <Col lg={4}>
                            <div>
                              <Label
                                htmlFor="newpasswordInput"
                                className="form-label"
                              >
                                New Password*
                              </Label>
                              <Input
                                type="password"
                                className="form-control"
                                id="newpasswordInput"
                                placeholder="Enter new password"
                              />
                            </div>
                          </Col>

                          <Col lg={4}>
                            <div>
                              <Label
                                htmlFor="confirmpasswordInput"
                                className="form-label"
                              >
                                Confirm Password*
                              </Label>
                              <Input
                                type="password"
                                className="form-control"
                                id="confirmpasswordInput"
                                placeholder="Confirm password"
                              />
                            </div>
                          </Col>

                          <Col lg={12}>
                            <div className="mb-3">
                              <Link
                                to="/forgot-password"
                                className="link-primary text-decoration-underline"
                              >
                                Forgot Password ?
                              </Link>
                            </div>
                          </Col>

                          <Col lg={12}>
                            <div className="text-end">
                              <button type="submit" className="btn btn-success">
                                Change Password
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Settings;
