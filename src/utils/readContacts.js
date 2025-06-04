import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function readContacts() {
  const data = await readFile(PATH_DB, 'utf-8');
  return JSON.parse(data);
}
