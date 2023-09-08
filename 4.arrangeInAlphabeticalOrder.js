const books = [
  { title: "Batman", author: "DC", year: 1990 },
  { title: "Superman", author: "DC", year: 1992 },
  { title: "Thor", author: "Marvel", year: 1999 },
  { title: "Ironman", author: "Marvel", year: 2005 },
];

function logTitle(filteredbooks) {
  console.log(filteredbooks.sort())
}

function filterObject(books, logTitle) {
  const filteredbooks = [];
  books.map((obj) => {
    return filteredbooks.push(obj.title);
  });

  logTitle(filteredbooks);
}

filterObject(books, logTitle);
