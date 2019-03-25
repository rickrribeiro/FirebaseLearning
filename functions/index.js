    const functions = require('firebase-functions');

    const firebaseAdmin = require('firebase-admin')


    config={
        apikey:  'API key AQUI',
        projectId: "trendsbot-a91a6",
        authDomain: "trendsbot-a91a6",
        databaseURL: "https://trendsbot-a91a6.firebaseio.com",
        storageBucket: "trendsbot-a91a6.appspot.com"
    };
    firebaseAdmin.initializeApp(config)
    var db = firebaseAdmin.firestore()


    var docRef = db.collection('users').doc('alovelace');

    var setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
    });

    var aTuringRef = db.collection('citiesAut').doc('1wjaz7w1KSvPv0CYo432');

    var setAlan = aTuringRef.set({
        'first': 'Alan2',
        'middle': 'Mathison',
        'last': 'Turing',
        'born': 1912
    }, {merge: true});
    

    var addDoc = db.collection('citiesAut').add({
        name: 'Tokyo',
        country: 'Japan'
      }).then(ref => {
        console.log('Added document with ID: ', ref.id);
      });

      var deleteDoc = db.collection('citiesAut').doc('1nsYMJccpyxqKfXfzC7R').delete()

      var cityRef = db.collection('citiesAut').doc('1wjaz7w1KSvPv0CYo432');
      var getDoc = cityRef.get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            console.log('Document data:', doc.data());
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
        });

        var allCities = db.collection('citiesAut').get() //getall
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
          });
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
      
