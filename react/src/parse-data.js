export default (itemsArray) => {
  const result = [];
  for (let i = 0; i < itemsArray.length; i++) {
    result.push({ link: itemsArray[i].url, title: itemsArray[i].title, content: itemsArray[i].abstract, date: itemsArray[i].published_date })
  }
  return result;
}
