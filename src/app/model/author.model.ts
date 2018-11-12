export class Author {
  id : number = 9;
  name : string = "";
  surname : string = "";
  birthdate : Date = new Date();
  imageUrl : string = "";
  deathDate: Date;
 /* gender - zatiaľ nerobiť, ukážem*/

  public constructor(id: number, name: string, surname: string, birthdate: Date, imageUrl: string, deathDate?: Date) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
    this.imageUrl = imageUrl;
    this.deathDate = deathDate;
  }



}
