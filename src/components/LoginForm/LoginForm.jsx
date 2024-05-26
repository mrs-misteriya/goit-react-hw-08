import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import Button from '@mui/material/Button';

import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(login(values))
      .unwrap()
      .then(() => toast.success("Success!!!"))
      .catch((error) => {
        console.log(error);
        return toast.error("Incorrect email address or password");
      });

    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.fields}>
          <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        </div>

        <div className={css.fields}>
          <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        </div>
                
        <Button variant="contained" type="submit">Log In</Button>  
      </Form>
    </Formik>
  );
}
