import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { selectContacts } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error />}
      <ContactList />
    </div>
  );
}
