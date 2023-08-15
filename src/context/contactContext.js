import { createContext, useState } from 'react';

export const Context = createContext();

export function GlobalContext({ children }) {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // const deleteContact = contactId => {
  //   setContacts(prevState => {
  //     prevState.filter(contact => contact.id !== contactId);
  //   });
  // };

  // const handleGood = () => {
  //   setGood(state => state + 1);
  // };

  // const handleNeutral = () => {
  //   setNeutral(state => state + 1);
  // };

  // const handleBad = () => {
  //   setBad(state => state + 1);
  // };

  return (
    <Context.Provider
      value={{
        contacts,
        setContacts,
        filter,
        setFilter,
        name,
        setName,
        number,
        setNumber,
        filteredContacts,
      }}
    >
      {children}
    </Context.Provider>
  );
}
