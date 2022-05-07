/*
ステートメントの関数内への移動
*/

// before
result.push(`<p>title: ${person.photo.title}</p>`);
result.concat(photoData(person.photo));

function photoData(aPhoto) {
  return [
    `<p>location: ${aPhoto.location}</p>`,
    `<p>date: ${aPhoto.date.toDateString()}</p>`
  ];
}

// after
result.concat(photoData(person.photo));
function photoData(aPhoto) {
  return [
    `<p>title: ${aPhoto.title}</p>`,
    `<p>location: ${aPhoto.location}</p>`,
    `<p>date: ${aPhoto.date.toDateString()}</p>`
  ]
}

// progress
function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`)
}
