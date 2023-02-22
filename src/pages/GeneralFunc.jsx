import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { useStore } from '../store/generalStore';
import secondGrade from '../functions/calculator';

function GeneralFunc() {

  const formValues = useStore((state) => state.general);
  const { onSaveValues } = useStore();

  function onSave(values) {
    onSaveValues(values.a, values.b, values.c);
  }

  function validator(values) {
    const errors = {};
    if (!values.a) errors.a = 'Required';
    if (!values.b) errors.b = 'Required';
    if (!values.c) errors.c = 'Required';

    return errors;
  }

  const { x1, x2 } = secondGrade(formValues.a, formValues.b, formValues.c);

  return (
    <div className='container mt-5'>
      <h1 className='animate__animated animate__fadeInUp'>Quadratic Equations</h1>
      <Formik
        initialValues={{ a: undefined, b: undefined, c: undefined }}
        onSubmit={onSave}
        validate={validator}
      >
        <Form className='animate__animated animate__fadeIn'>
          <div className='form-control p-3 my-3'>
            <label className='form-label mt-3'>A {'(First variable)'}</label>
            <Field name='a' type='number' className='form-control' />
            <label className='form-label mt-3'>B {'(Second variable)'}</label>
            <Field name='b' type='number' className='form-control' />
            <label className='form-label mt-3'>C {'(Third variable)'}</label>
            <Field name='c' type='number' className='form-control' />
          </div>
          <button className='btn btn-primary'>Solve</button>
        </Form>
      </Formik>
      <div className='mt-4'>
        <code className='container'>
          {formValues.a}x^2 + {formValues.b}x + {formValues.c}
          <br />
          x1 = {!(isNaN(x1)) ? (x1) : 'No real solution'}
          <br />
          x2 = {!(isNaN(x2)) ? (x2) : 'No real solution'}
        </code>
      </div>
    </div>
  );
}

export default GeneralFunc;