// const createConnectionPool = require('@databases/mysql');
// const {sql} = require('@databases/mysql');

const createConnectionPool = require('@databases/mysql');
const {sql} = require('@databases/mysql');
// const {Map} = require('barrage');
// const stringify = require('csv-stringify'); 
import {Map} from 'barrage';
import stringify from 'csv-stringify';

// async function run () {
    // const db = createConnectionPool(
    //     'mysql://remote:UjiCoba72@localhost:3306/u598234738_dbsimulasicbt'
    // );
    // const results = await db.query(sql`SELECT cMataUji,cSubTes FROM tbl_mastersoal`);
    // const results = db.queryStream(
    //     sql`SELECT cMataUji,cSubTes FROM tbl_mastersoal`
    //   );
    
    
    //   for await (const hasil of results) {
        // const likes = await getLikes(tweet.id);
        // if (likes !== tweet.likes) {
        //   await db.query(
        //     sql`
        //       UPDATE tweets
        //       SET likes = ${likes}
        //       WHERE id = ${tweet.id};
        //     `
        //   );
        // }
        // console.log(hasil);
    //   }

//   console.log(results);
  // => [{result: 2}]

//   db.dispose();
// }

export default function getTweetsCSV() {
    const db = createConnectionPool(
            'mysql://remote:UjiCoba72@localhost:3306/u598234738_dbsimulasicbt'
        );

    const tweets = db.queryNodeStream(
      sql`SELECT cMataUji,cSubTes FROM tbl_mastersoal;`
    );
    const map = new Map(tweet => [tweet.cMataUji, tweet.cSubTes]);
    const stringifier = stringify();
    stringifier.write(['Tweet ID', 'Likes']);
    tweets.pipe(map).pipe(stringifier);
    // tweets.on('error', e => stringifier.emit('error', e);
    // map.on('error', e => stringifier.emit('error', e);
    return stringifier;
  }

// run().catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
// run(); 