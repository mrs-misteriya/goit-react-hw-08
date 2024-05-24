import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId } from "react";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const userId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.container}>
        <label htmlFor={userId}>
          User
          <Field type="text" name="name" id={userId} />
        </label>
        <label htmlFor={emailId}>
          Email
          <Field type="email" name="email" id={emailId} />
        </label>
        <label htmlFor={passwordId}>
          Password
          <Field type="password" name="password" id={passwordId} />
        </label>
        <button type="submit">Registration</button>
      </Form>
    </Formik>
  );
}
