<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Array Cardio 💪</title>
</head>
<body>
  <p><em>Psst: have a look at the JavaScript Console</em> 💁</p>
  <script>
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    /*1. Filter the list of inventors for those who were born in the 1500's*/
    // Google for example - https://www.bitdegree.org/learn/javascript-filter
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
    /*display tabular data - googled - https://developer.mozilla.org/en-US/docs/Web/API/Console/table - to display tabular data = consol.table*/
    console.table(fifteen); 

    /*Array.prototype.map(), map takes in an array, it does something with that array, and then returns(=>) a new array but of the same length.*/
    // 2. Give us an array of the inventor first and last names
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullNames);

    // Array.prototype.sort()
    //sort - asked to sort items, is person A older than person A
    // 3. Sort the inventors by birthdate, oldest to youngest
     const ordered = inventors.sort(function(a, b) {
       if(a.year > b.year) {
         return 1;
       } else {
         return -1;
       }
     });
     //shorter method, shorthand if statement, with arrow function and itenary operator:
    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered);

    // Array.prototype.reduce()
    /*reduce - allow to build something,gives running total, what you returned last time*/
    // 4. How many years did all the inventors live?
    const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(totalYears);

    // 5. Sort the inventors by years lived
    const oldest = inventors.sort(function(a, b) {
      const lastInventor = a.passed - a.year;
      const nextInventor = b.passed - b.year;
      return lastInventor > nextInventor ? -1 : 1;
    });
    console.table(oldest);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    //get the DOM elements out of the wiki page first(doc.queryselector, mw.catagory)
    const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a'));
    const de = links
                 .map(link => link.textContent);//maps the array
                 .filter(streetName => streetName.includes('de'));//filter array

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    //you are working with people on this, NOT the inventors
    const alpha = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1; //? says if true return 1, : says if not return-1
    });
    console.log(alpha);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transportation = data.reduce(function(obj, item) {
      //consol.log(item);
      //return obj;
      if (!obj[item]) {   //if there is no ! object item, then object item is set to 0
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

    console.log(transportation);

  </script>
</body>
</html>
