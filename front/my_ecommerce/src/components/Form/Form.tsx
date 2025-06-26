import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormProps, IUserLogin, IUserRegister } from "@/types";

export const FormComponent: React.FC<FormProps> = ({ fields, onSubmit, buttonText }) => {
  // Definir valores iniciales según el tipo de formulario (registro o login)
  const initialValues: IUserLogin | IUserRegister =
    fields.some((field) => field.name === "address")
      ? { name: "", email: "", password: "", address: "", phone: "" } // Registro
      : { email: "", password: "" }; // Login

  // Esquema de validación con Yup
  const validationSchema = Yup.object(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: field.validation }), {})
  );

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-lg w-full max-w-xs sm:max-w-md"
        >
          {/* Campos del formulario */}
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col">
              <Field
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              />
              <ErrorMessage name={field.name} component="span" className="text-red-500 text-sm text-start mt-1" />
            </div>
          ))}

          {/* Botón de envío */}
          <button
            type="submit"
            className="p-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer w-full"
          >
            {buttonText}
          </button>
        </Form>
      )}
    </Formik>
  );
};