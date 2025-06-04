import { writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function writeContacts(data) {
  await writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
}
