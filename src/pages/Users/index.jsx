import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './index.scss';
import trashIcon from "../../assets/img/trashIcon.svg";
import { Button } from '../../components/Button';
import AddUserPopup from '../../components/Popup';

export const Users = () => {
  const [isAddUserOpen, setAddUserOpen] = useState(false);

  const handleCloseAddUser = () => setAddUserOpen(false);
  const handleAddUserToggle = () => setAddUserOpen(!isAddUserOpen);

  const initialValues = {
    department: '',
    country: '',
    status: ''
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const options = {
    department: [
      { value: 'HR', label: 'HR' },
      { value: 'Engineering', label: 'Engineering' },
      { value: 'Sales', label: 'Sales' },
    ],
    country: [
      { value: 'USA', label: 'USA' },
      { value: 'Canada', label: 'Canada' },
      { value: 'UK', label: 'UK' },
    ],
    status: [
      { value: 'Active', label: 'Active' },
      { value: 'Inactive', label: 'Inactive' },
      { value: 'Pending', label: 'Pending' },
    ]
  };

  return (
    <section className='users'>
      <div className="container">
        <h1 className='users__title'>Users</h1>
        <div className="users__form-wrapper">
          <div className="users__form">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="users__form">
                  {Object.keys(options).map((key) => (
                    <div className="users__form-dropdown" key={key}>
                      <Field as="select" name={key} className="users__form-select">
                        <option value="" label={`Select ${key}`} />
                        {options[key].map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Field>
                    </div>
                  ))}
                  <button type="button" className="users__clear-button">
                    <img src={trashIcon} className="users__clear-icon" />
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <Button onClick={handleAddUserToggle} style={{
            width: '150px',
            height: '48px',
          }} text={"Add user"} />
        </div>
        <table className="users__table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Department</th>
              <th>Country</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>HR</td>
              <td>USA</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>Engineering</td>
              <td>Canada</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      {isAddUserOpen && (
        
        <div className="popup-overlay">

          <AddUserPopup onClose={handleCloseAddUser} />
        </div>
      )}
    </section>
  );
};
