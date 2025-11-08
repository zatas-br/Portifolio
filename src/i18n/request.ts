import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import { promises as fs } from 'fs';
import path from 'path';
 
export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  const messagesPath = path.join(process.cwd(), 'messages', locale);
  const filenames = await fs.readdir(messagesPath);

  const messages: Record<string, any> = {};

  for (const filename of filenames) {
    if (filename.endsWith('.json')) {
      const namespace = filename.replace('.json', '');
      const filePath = path.join(messagesPath, filename);
      const content = await fs.readFile(filePath, 'utf8');
      messages[namespace] = JSON.parse(content);
    }
  }

  return {
    locale,
    messages
  };
});