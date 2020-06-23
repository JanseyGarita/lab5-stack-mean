export class Person {
  constructor(
    _id = '',
    name = '',
    province = '',
    dateOfBirth = '',
    genre = ''
  ) {
    this._id = _id;
    this.name = name;
    this.province = province;
    this.dateOfBirth = dateOfBirth;
    this.genre = genre;
  }
  _id: string;
  name: string;
  province: string;
  dateOfBirth: string;
  genre: string;
}
