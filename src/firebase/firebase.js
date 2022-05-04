import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:194354439824:web:f245b855243e6df3d51a15",
  measurementId: "G-FD4ZW5CKJ7",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on(
//   "value",
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   },
//   (e) => {
//     console.log("Error: ", e);
//   }
// );

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("notes/-N1A54kjcWB-1i13Gm5G").update({
//   body: "Chaning it",
// });

// database.ref().on(
//   "value",
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   },
//   (e) => {
//     console.log("Error: ", e);
//   }
// );

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching ", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Hamid Farmani",
//     age: 27,
//     isSingle: false,
//     location: {
//       city: "Gothenburg",
//       country: "Sweden",
//     },
//   })
//   .then(() => {
//     console.log("data is saved!");
//   })
//   .catch((e) => {
//     console.log("This failed.", e);
//   });

// database.ref().update({
//   name: "Mike",
//   age: 30,
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("data is removed!");
//   })
//   .catch((e) => {
//     console.log("This failed.", e);
//   });

// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
