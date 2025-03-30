import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MyContext } from "./Context";
const ExpenseForm = () => {
  
  
  const { addExpense } = useContext(MyContext);
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Item name is required"),
      price: Yup.number()
        .positive("Price must be positive")
        .required("Price is required"),
    }),

    onSubmit: (values) => {
      addExpense(values); // Call the function to add expense
    },
  });
  return (
    <div>
      <h3>Expense Form</h3>
      <form onSubmit={formik.handleSubmit}>
       
        <input
          type="text"
          name="name"
          placeholder="Item name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
        <br />

        <input
          type="number"
          name="price"
          placeholder="Item Price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.price && formik.errors.price ? (
          <div style={{ color: "red" }}>{formik.errors.price}</div>
        ) : null}
        <br />

        <button type="submit">ADD Item</button>
      </form>
    </div>
  );
};

export default ExpenseForm;