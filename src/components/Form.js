import React, { useState } from "react";
import { useFormik } from "formik";
import {predictorSchema} from "../schemas"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const initialValues = {
  ci_water: "CI water",
  citric: "Citric",
  citric_acid: "Citric Acid",
  aarbopol: "Aarbopol",
  capb: "Capb",
  silicon: "Silicon",
  sles: "Sles",
  salt1: "Salt 1",
  salt2: "Salt 2",
  viscosity: "Viscosity",
  pH: "PH",
};

const Form = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    localStorage.removeItem('formData');
    setShow(false);
  };



  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    validationSchema: predictorSchema,
    initialValues: Object.keys(initialValues).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {}),
    onSubmit: (values, action) => {
      console.log(values);
      localStorage.setItem('formData', JSON.stringify(values));
      action.resetForm();
      let saveData = localStorage.getItem('formData');
      if (saveData) {
        setShow(true);
      }
    },
  });

  const renderInputFields = () => {
    return Object.keys(initialValues).map((key) => (
      <div key={key}>
        <label htmlFor={key}>{initialValues[key]}</label>
        <br />
        <input
          type="text"
          id={key}
          name={key}
          // placeholder={initialValues[key]}
          className="w-[94%] h-[41px] mt-[6px] pl-[10px] border-[1px] border-solid border-[#E2E6EB] rounded focus:outline-none"
          value={values[key]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors[key] && touched[key] ? (<p className="text-xs mt-[2px] text-rose-400 font-semibold">{errors[key]}</p>) : null}
      </div>
    ));
  };

  return (
    <div className="border-[1px] border-solid border-[#E2E6EB] rounded-md w-[97%] h-auto bg-[#fff] mt-[20px] ml-[20px] font-poppins">
      <form
        action=""
        className="ml-[40px] mt-[20px] block md:grid md:grid-cols-2 gap-4 text-[#002046] mb-[20px]"
        onSubmit={handleSubmit}
      >
        {renderInputFields()}

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#101B32] rounded text-white w-[173px] mt-[20px] md:mt-[35px] h-[41px] ml-[35%] md:ml-[40%] font-medium"
        >
          Submit
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Predictor</Modal.Title>
          </Modal.Header>
          <Modal.Body>Value will GET here after POST </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </form>
    </div>
  );
};

export default Form;
