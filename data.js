'use strict'

let musics = [
    {musicid:123, title: "abc", type:"hiphop", year:2020, publisher:"osa"},
    {musicid:321, title: "Anas", type:"old", year:2019, publisher:"orac"},
    {musicid:234, title: "Ali", type:"country", year:2018, publisher:"bis"},
    {musicid:456, title: "Ahd", type:"jazz", year:2017, publisher:"nds"},
    {musicid:125, title: "Aiha", type:"hiphop", year:2015, publisher:"ytech"},
    {musicid:963, title: "kdi", type:"jazz", year:2016, publisher:"catcom"},   
];

exports.getAll = () => {
    return musics;
};
exports.getItem =(title) => {
    let found = musics.find((album) => {
        return album.title === title;
      });
      console.log(found);
    return found;
};
//console.log(this.getItem(‘Ahd’))



