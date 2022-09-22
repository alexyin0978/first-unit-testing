const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cat.com',
  'cats.com',
  'disney.com',
  'dogpictures.com',
];

describe('googlesearch', () => {

  it('initial test', () => {
    console.log('first test')
  });
  
  it('random input', () => {
    expect(googleSearch('test', dbMock)).toEqual([]);
  });
  
  it('specific input', () => {
    expect(googleSearch('cat', dbMock)).toEqual(['cat.com', 'cats.com']);
  });

  it('undefined or null as an input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('length not bigger than 3', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });

});