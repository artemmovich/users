import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/reducers/userSlice';
import './index.scss';
import { Button } from '../Button';

const AddUserPopup = ({ onClose }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    department: Yup.string().required('Department is required'),
    country: Yup.string().required('Country is required'),
    status: Yup.string().required('Status is required'),
  });

  return (
    <div className="form-container">
      <h2 className="form-container__title">Add User</h2>
      <Formik
        initialValues={{
          fullName: '',
          department: '',
          country: '',
          status: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addUser(values));
          resetForm();
          onClose();
        }}
      >
        {({ isValid, dirty }) => (
          <Form className="form-container__form" >
            <div className="form-container__form-row">
              <div className="form-column form-column--half">
                <label className="form-column__label" htmlFor="fullName">
                  Full Name
                </label>
                <Field
                  id="fullName"
                  name="fullName"
                  placeholder="Enter full name"
                  className="form-column__input-fullname"
                />
                <ErrorMessage name="fullName" component="div" className="error-message" />
              </div>
              <div className="form-column form-column--half">
                <label className="form-column__label" htmlFor="department">
                  Department
                </label>
                <Field
                  as="select"
                  id="department"
                  name="department"
                  className="form-column__input"
                >
                  <option value="" label="Select department" />
                  <option value="HR" label="HR" />
                  <option value="Engineering" label="Engineering" />
                  <option value="Marketing" label="Marketing" />
                </Field>
                <ErrorMessage name="department" component="div" className="error-message" />
              </div>
            </div>

            <div className="form-container__form-row form-container__form-row--bottom">
              <div className="form-column form-column--half">
                <label className="form-column__label" htmlFor="country">
                  Country
                </label>
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="form-column__input"
                >
                  <option value="" label="Select country" />
                  <option value="USA" label="USA" />
                  <option value="Canada" label="Canada" />
                  <option value="UK" label="UK" />
                </Field>
                <ErrorMessage name="country" component="div" className="error-message" />
              </div>
              <div className="form-column form-column--half">
                <label className="form-column__label" htmlFor="status">
                  Status
                </label>
                <Field
                  as="select"
                  id="status"
                  name="status"
                  className="form-column__input"
                >
                  <option value="" label="Select status" />
                  <option value="Active" label="Active" />
                  <option value="Inactive" label="Inactive" />
                </Field>
                <ErrorMessage name="status" component="div" className="error-message" />
              </div>
            </div>

            <div className="form-container__buttons">
              <Button text="Cancel" onClick={onClose} style={{ width: '100px', height: '48px' }} />
              <Button
                text="Add"
                type="submit"
                disabled={!(dirty && isValid)}
                style={{
                  width: '150px',
                  height: '48px',
                  cursor: !(dirty && isValid) ? 'not-allowed' : 'pointer',
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUserPopup;
