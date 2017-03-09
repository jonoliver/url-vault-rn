/**
 * Run this to seed the realm datbase with fixed set of data
 * while we are developing
 **/
import Realm from 'realm';
export default class Seeder {

  static initDb() {
    console.log("INIT DB");
    const UrlSchema = {
      name: 'Url',
      properties: {
        url: 'string',
        description: 'string',
        image: 'string'
      }
    };

    let realm = new Realm({schema: [UrlSchema]});
    realm.write(() => {
      let urls = realm.objects('Url');
      if (urls){
        realm.delete(urls);
      }
      realm.create('Url', {url: 'http://www.google.com', description: 'Straight from realm yo', image: 'https://www.clker.com/cliparts/1/c/7/7/13986776161270179884cute_cat102.png'});
      realm.create('Url', {url: 'http://www.cnn.com', description: 'CNN Straight from realm yo', image: 'https://pics.onsizzle.com/angry-kitty-my-friends-dad-found-standard-casein-sharing-1-11406826.png'});
      realm.create('Url', {url: 'http://www.yahoo.com', description: 'yahoo Straight from realm yo', image: 'https://www.clker.com/cliparts/1/c/7/7/13986776161270179884cute_cat102.png'});
      realm.create('Url', {url: 'http://www.slashdot.com', description: 'slashdot Straight from realm yo', image: 'https://pics.onsizzle.com/angry-kitty-my-friends-dad-found-standard-casein-sharing-1-11406826.png'});
      realm.create('Url', {url: 'http://www.napster.com', description: 'Napster Straight from realm yo', image: 'https://www.clker.com/cliparts/1/c/7/7/13986776161270179884cute_cat102.png'});
    });
    return realm;
  }

  static getData(realm) {
    console.log("GETTING DATA..");
    return realm.objects('Url');
  }

  static deleteRecord(realm) {
    console.log('DELETING DATA..');
    let urls = realm.objects('Url');
    let first = urls[0];
    realm.write(() => {
      realm.delete(first);
    });
  }

  static findRecord(realm, string){
    let urls = realm.objects('Url');
    let found = urls.filtered(`url contains[c] "${string}"`);
    return found;
  };
}
