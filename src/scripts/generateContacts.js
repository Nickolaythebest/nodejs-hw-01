import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count = 5) => {
    const contacts = await readContacts();
    for (let i = 0; i < count; i++) {
        contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
};

generateContacts(5);
