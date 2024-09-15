import React from 'react';
import { Formik, Form, Field } from 'formik';
import './index.scss';
import { Button } from '../../components/Button';

export const EditUsers = () => {

  const initialValues = {
    user: '',
    fullName: '',
    country: '',
    department: '',
    status: ''
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <section className='edit-users'>
      <div className="container">
        <div className="edit-users__form">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="dropdown-body">
                <h4 className='edit-users__form-title'>User</h4>
                <Field
                  as="select"
                  name="user"
                  className="dropdown-select"
                >
                </Field>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="edit-users__information">
          <h3 className='edit-users__information-title'>User Information</h3>
          <div className="edit-users__information-forms">
            <div className="form-column">
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="dropdown-body">
                    <h4 className='edit-users__form-title'>Full Name</h4>
                    <Field
                      as="input"
                      type="text"
                      name="fullName"
                      className="dropdown-select"
                    />
                  </div>
                  <div className="dropdown-body">
                    <h4 className='edit-users__form-title'>Country</h4>
                    <Field
                      as="select"
                      name="country"
                      className="dropdown-select"
                    >
                    </Field>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="form-column">
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="dropdown-body">
                    <h4 className='edit-users__form-title'>Department</h4>
                    <Field
                      as="select"
                      name="department"
                      className="dropdown-select"
                    >
                    </Field>
                  </div>
                  <div className="dropdown-body">
                    <h4 className='edit-users__form-title'>Status</h4>
                    <Field
                      as="select"
                      name="status"
                      className="dropdown-select"
                    >
                    </Field>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <div className="edit-users__buttons">
          <Button
            style={{
              width: '100px',
              height: '40px',

            }}
            text={"Undo"}
          />
          <Button
            style={{
              width: '200px',
              height: '40px',
            }}
            text={"Save"}
          />
        </div>
      </div>
    </section >
  );
};
