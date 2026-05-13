import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'], // Specify weights as strings in an array
  subsets: ['latin'],     // Add 'latin' or other supported subsets
});