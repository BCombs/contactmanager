import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "jdoe@mail.com",
                phone: "555-555-5555"
            },
            {
                id: 2,
                name: "Jane Doe",
                email: "jane@mail.com",
                phone: "555-555-1234"
            },
            {
                id: 3,
                name: "Mark Smith",
                email: "mark@mail.com",
                phone: "555-555-4321"
            }
        ]
    }

    deleteContact = (id) => {
        const { contacts } = this.state;
        const newContacts = contacts.filter(contact => contact.id !== id);
        this.setState({contacts: newContacts});
    }

  render() {
      const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)}/>
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts;
