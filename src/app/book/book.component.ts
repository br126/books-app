import { Component } from '@angular/core';
import {Book} from '../model/book.model';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  book : Book = new Book ( 1,
  'Iba jeden rok (Iba jeden deň 2)',
   'Formanová Gayle',
  `Keď sa Willem preberie z bezvedomia, netuší, kde je – v Prahe, v Dubrovníku alebo doma v Amsterdame?
  Francúzsky lekár mu ošetril ranu na hlave, ale Willem utŕžil aj inú, ktorú navonok nevidieť, napriek tomu bolí.
  Mladý Holanďan je zase sám a naliehavo potrebuje nájsť dievča, peknú Američanku, ktorú pomenoval Lulu, lebo jej pravé meno nepozná.
  Strávili spolu čarovný deň v Paríži a niečo na tom dni – alebo dievčati – núti Willema položiť si otázku, či im nie je súdené
  zostať navždy spolu.
  Opäť sa vydáva na cesty, blúdi od Mexika až po Indiu a dúfa, že to dievča ako zázrakom znovu stretne. Ale keď mesiace plynú a Lulu
  mu stále uniká,
  Willem začína pochybovať, či ruka osudu je naozaj taká silná, ako si myslel... A čo na to geniálny dramatik Shakespeare, ktorý mladú
  dvojicu najprv spojil,
  potom rozdelil a napokon v rozhodujúcej chvíli opäť zasiahol do ich života? Romantické, emotívne pokračovanie románu Iba jeden deň je
  príbehom voľby a náhody či „nehody“, ale aj šťastia, ktoré môžeme nájsť, keď sa voľba skríži s náhodou. Z anglického originálu Just One
  Year (Dutton Books, an imprint of Penguin Group, New York 2013) preložila Jana Seichertová.`,
  'https://www.knihyprekazdeho.sk/Kniha/iba-jeden-rok-1006123',
  true, true);

  id: number = 1;
  title: string = 'Iba jeden rok (Iba jeden deň 2)';
  author : string = 'Formanová Gayle';
  description: string = `Keď sa Willem preberie z bezvedomia, netuší, kde je – v Prahe, v Dubrovníku alebo doma v Amsterdame?
  Francúzsky lekár mu ošetril ranu na hlave, ale Willem utŕžil aj inú, ktorú navonok nevidieť, napriek tomu bolí.
  Mladý Holanďan je zase sám a naliehavo potrebuje nájsť dievča, peknú Američanku, ktorú pomenoval Lulu, lebo jej pravé meno nepozná.
  Strávili spolu čarovný deň v Paríži a niečo na tom dni – alebo dievčati – núti Willema položiť si otázku, či im nie je súdené
  zostať navždy spolu.
  Opäť sa vydáva na cesty, blúdi od Mexika až po Indiu a dúfa, že to dievča ako zázrakom znovu stretne. Ale keď mesiace plynú a Lulu
  mu stále uniká,
  Willem začína pochybovať, či ruka osudu je naozaj taká silná, ako si myslel... A čo na to geniálny dramatik Shakespeare, ktorý mladú
  dvojicu najprv spojil,
  potom rozdelil a napokon v rozhodujúcej chvíli opäť zasiahol do ich života? Romantické, emotívne pokračovanie románu Iba jeden deň je
  príbehom voľby a náhody či „nehody“, ale aj šťastia, ktoré môžeme nájsť, keď sa voľba skríži s náhodou. Z anglického originálu Just One
  Year (Dutton Books, an imprint of Penguin Group, New York 2013) preložila Jana Seichertová.`;
  imageUrl: string = 'https://www.knihyprekazdeho.sk/Kniha/iba-jeden-rok-1006123';
  reserved: boolean = true;

  getClasses(){
    return {
      reservedBook : this.book._reserved
    }
  }



}
