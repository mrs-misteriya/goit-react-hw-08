import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Button from '@mui/material/Button';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div className={css.info}>
        <p className={css.article}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.article}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      
      <Button variant="contained" type="submit"  onClick={() => {
          dispatch(deleteContact(id));
        }}>Delete</Button>

    </div>
  );
}
