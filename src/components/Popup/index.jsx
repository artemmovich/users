import React from "react";
import { Formik, Form, Field } from "formik";
import "./index.scss"
import { Button } from "../Button";

const AddUserPopup = ({ isOpen, onClose }) => {
  return (
    <div className="form-container">
      <h2 className="form-container__title">Add User</h2>
      <Formik
        initialValues={{
          fullName: "",
          department: "",
          country: "",
          status: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="form-container__form">
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
              </div>
            </div>

            <div className="form-container__buttons">
              <Button text={"Cancel"} onClick={onClose} style={{
                width: '100px',
                height: '48px'
              }} />
              <Button text={"Add"} style={{
                width: '150px',
                height: '48px'
              }} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUserPopup;
