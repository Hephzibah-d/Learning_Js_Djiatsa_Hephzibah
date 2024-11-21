class AddressBook {
    constructor() {
        this.contacts = []; // Array to store contact objects
    }

    // Add a contact
    addContact(name, email, phone) {
        const contact = { name, email, phone };
        this.contacts.push(contact);
        console.log("Contact added:", contact);
    }

    // Find a contact by name
    findContact(name) {
        const contact = this.contacts.find(c => c.name === name);
        if (contact) {
            console.log("Contact found:", contact);
            return contact;
        } else {
            console.log("Contact not found.");
            return null;
        }
    }

    // Display all contacts
    displayContacts() {
        console.log("Address Book:");
        this.contacts.forEach(contact => {
            console.log(`Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
        });
    }
}

// Usage
const myAddressBook = new AddressBook();
myAddressBook.addContact("John Doe", "john@example.com", "123-456-7890");
myAddressBook.addContact("Jane Smith", "jane@example.com", "987-654-3210");

myAddressBook.findContact("John Doe");
myAddressBook.displayContacts();
