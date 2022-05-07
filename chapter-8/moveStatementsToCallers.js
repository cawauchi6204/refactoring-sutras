/*
ステートメントの呼び出し側への移動
*/

// before
emitPhotoData(outStream, person.photo);

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>location: ${photo.location}</p>\n`);
}

// after
emitPhotoData(outStream, person.photo);
outStream.write
