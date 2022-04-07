class Media {
  constructor(title){
  this._title = title;
  this._isCheckedOut = false;
  this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedout(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this.ratings.length;
    return ratingsSum / lengthOfArray;
  }

  addRating(ratings){
    if(ratings >= 1 && ratings <= 5){
       this.ratings.push(ratings);
    } else {
      console.log('Enter range between 1-5 for rating.');
      }
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director,runTime, movieCast, songTitles) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
    this._songTitles = songTitles;
  }

  get director () {
    return this._director;
  }

  get runtime () {
    return this._runtime;
  }

  get movieCast () {
    return this._movieCast;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(5);
historyOfEverything.addRating(4);
historyOfEverything.addRating(8);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed','Jan de Bont',116)

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();
console.log(speed.getAverageRating());

class CD extends Media {
  constructor(title, artist, gender, songs){
    super(title);
    this._artist = artist;
    this._gender = gender;
  }

  get artist () {
    return this._artist;
  }

  get gender () {
    return this._gender;
  }

  get songs () {
    return this._songs;
  }

  shuffle() {
    for (let i = this.songs.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.songs[i], this.songs[j]] = [this.songs[j],     this.songs[i]];
      }
}
 get songs() {
    return this._songs;
  }  
}

class Catalog {
    constructor(myCatalog){
    this._MyCatalog = [];
   }
  
get MyCatalog() {
     return this._MyCatalog;
  }
  
set MyCatalog(myCatalog)  {
   this._MyCatalog.push(myCatalog);
   }
}

const EntireCatalog = new Catalog();
EntireCatalog.MyCatalog = historyOfEverything;
EntireCatalog.MyCatalog = speed;
console.log(EntireCatalog)
