const googleDatabase = [
  'cats.com',
  'soup.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavoritecats.com',
];

const googleSearch = (searchInput, db) => {
  const match = db.filter(website => {
    return website.includes(searchInput);
  });

  return match.length > 3 ? match.slice(0,3) : match;
};

// console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;