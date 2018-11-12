export class Book {
  get reserved(): boolean {
    return this._reserved;
  }

  set reserved(value: boolean) {
    this._reserved = value;
  }
  _id: number = 1;
  _title: string = 'Iba jeden rok (Iba jeden deň 2)';
  _author: string = 'Formanová Gayle';
  _description: string = `Keď sa Willem preberie z bezvedomia, netuší, kde je – v Prahe, v Dubrovníku alebo doma v Amsterdame?
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
  _imageUrl: string = 'https://www.knihyprekazdeho.sk/Kniha/iba-jeden-rok-1006123';
  _reserved: boolean = false;
  available: boolean = true;



  public constructor(id: number, title: string, author: string, description: string, imageUrl: string, reserved: boolean, available: boolean) {
    this._id = id;
    this._title = title;
    this._author = author;
    this._description = description;
    this._imageUrl = imageUrl;
    this._reserved = reserved;
    this.available = available;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }
}
