import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';


export const removeAllContacts = async () => {
    try {
        await writeContacts(PATH_DB, '[]', 'utf-8'); // Очищаем файл
        console.log('Все контакты удалены.');
    } catch (error) {
        console.error('Ошибка при удалении контактов:', error);
    }
};

removeAllContacts();
