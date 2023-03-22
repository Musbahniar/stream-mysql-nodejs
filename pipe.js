// import connect, {sql} from '@databases/mysql';
// import {Map} from 'barrage';
// import stringify from 'csv-stringify';
// // const db = connect();
// const db = connect(
//         'mysql://remote:UjiCoba72@localhost:3306/u598234738_dbsimulasicbt'
//     );

// export default function getTweetsCSV() {
//   const tweets = db.queryNodeStream(
//     sql`SELECT cMataUji,cSubTes FROM tbl_mastersoal;`
//   );
//   const map = new Map(tweet => [tweet.cMataUji, tweet.cSubTes]);
//   const stringifier = stringify();
//   stringifier.write(['Tweet ID', 'Likes']);
//   tweets.pipe(map).pipe(stringifier);
// //   tweets.pipe(map).pipe(process.stdout);
//   tweets.on('error', e => stringifier.emit('error', e));
//   map.on('error', e => stringifier.emit('error', e));
//   return stringifier;
// }


