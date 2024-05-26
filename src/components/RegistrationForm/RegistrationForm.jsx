import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId } from "react";
import { toast } from "react-hot-toast";
import Button from '@mui/material/Button';
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const userId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values)).unwrap()
    .then(() => toast.success("Success!"))
    .catch(() => {
      return toast.error("Enter valid information or this email address is already registered!");
    });
    actions.resetForm()
  }


  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <div className={css.fields}> 
          <label htmlFor={userId}>
          User
          <Field type="text" name="name" id={userId} />
        </label>
        </div>

        <div className={css.fields}>
          <label htmlFor={emailId}>
          Email
          <Field type="email" name="email" id={emailId} />
        </label>
        </div>

        <div className={css.fields}>
          <label htmlFor={passwordId}>
          Password
          <Field type="password" name="password" id={passwordId} />
        </label>
        </div>

        <Button variant="contained" type="submit">Registration</Button>
      
      </Form>
    </Formik>
  );
}
