import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors.js";
import { logout } from "../../redux/auth/operations.js";
import css from "./UserMenu.module.css";
import Button from '@mui/material/Button';

export default function UserMenu() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.menuHeader}>
      <p className={css.welcome}> Welcome, {user.name} </p>
      <Button variant="contained" type="submit" onClick={handleLogout}>Log out</Button>
    </div>
  );
}
