//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

//create class
class MakeNetflixTVShows{
    //create constructor
    constructor(title,genre,rating,numOfEp){
        this.title = title  //this. binds the properties
        this.genre = genre
        this.rating = rating  // after = is the parameters
        this.numOfEp = numOfEp
    }
    play(){
        console.log('Playing...')
    }
    stop(){
        console.log('Stopping...')
    }
    saveToList(){
        console.log('Saved To List')
    }
}
                                        //pass in the parameters here.
let bridgerton = new MakeNetflixTVShows('Bridgerton', 'Period Romantic Drama', '99%',16)
==============================================================================================================

/*Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class TvShow {
    constructor(title, year, numOfEpisodes, genre) {
        this.title = title
        this.year = year
        this. numOfEpisodes = numOfEpisodes
        this.genre = genre
    }
    play() {
        console.log('The episode starts')
    }
    nextEpiside() {
        console.log('The next episode starts')
    }
    previousEpisode() {
        console.log('The last episode starts')
    }
}

let avatar = new TvShow('Avatar: The Last Airbender', '2005', 61, 'comedy-drama')
console.log(avatar)
avatar.play()
avatar.nextEpiside()
avatar.previousEpisode()
*/
==============================================================================================

/*OTHER WAY:
//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTVShows{
    constructor(title, genre,rating,numOfEp){
        this.title = title
        this.genre = genre
        this.rating = rating
        this.numOfEp = numOfEp
    }
    addToList(){
        alert('Added to list')
    }
    play(){
        alert('Show starting')
    }
    stop(){
        alert('Show stopping')
    }
}

let areYouAfraidOfTheDark = new MakeNetflixTVShows('Are you afraid of the dark', 'horror',4.5,94)*/

========================================================================================================

/*ANOTHER WAY:
//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class CreateNetflixShow{
    constructor(Name, Length, Genre, FSK) {
        this.Name = Name
        this.Length = Length
        this.Genre = Genre
        this.FSK = FSK
    }
    startFilm() {
        console.log("Starting the film...")
    }
    pauseFilm() {
        console.log("Pause the film...")
    }
    stoppFilm() {
        console.log("Stop the film...")
    }
}
let film1 = new CreateNetflixShow("NiceFilm",90,"Action",16)
let film2 = new CreateNetflixShow("FunnyFilm",120,"Comedy",0)

console.log(film1)
film1.startFilm()
console.log(film1.Length)
*/
