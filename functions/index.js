const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)


exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello, ninjas!");
});


const createNotification = (notification =>{
    console.log("chegou")
    return admin.firestore().collection('notifications').add(notification).then(doc=> console.log('notification added',doc))
})


exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc =>{

    const project = doc.data();
    const notification = {
        content:'Added a new project',
        user: `${project.authorFirstName} ${project.authonrLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification)
})

exports.userJoined = functions.auth.user().onCreate(user =>{
    return admin.firestore().collection('users').doc(user.uid).get().then(doc =>{
        const newUser = doc.data()

        const notification = {
            content:'Joined',
            user: `${newUser.firstName} ${newUser.LastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)
    })

})