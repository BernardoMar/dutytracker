import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";
// import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDJBVlskCKRLd6_bKpv9Ye2M3T2wwrx9UU",
    authDomain: "tasktracker-f4d34.firebaseapp.com",
    projectId: "tasktracker-f4d34",
    storageBucket: "tasktracker-f4d34.appspot.com",
    messagingSenderId: "1093580296377",
    appId: "1:1093580296377:web:a67b9d1523d602e396cb68",
    measurementId: "G-6MR4VCSR90"
};



const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const addTask = async (user, name, date, category, priority, color, address, notes) => {
  let data = {
    taskName: name,
    taskDate: date,
    taskCategory: category,
    taskPriority: priority,
    taskColor: color,
    taskAddress: address,
    taskNotes: notes,
    user: user,
    id: uuidv4(),
  };
  // let currentUser;
  // function filterUsers () {
  //   for (let i= 0; i < db.collection("users").length ; i++) {
  //     if (db.collection("users").doc(i).uid === user) {
  //       return currentUser = db.collection("users").doc(i)
  //
  //     };
  //   };
  // };
  // console.log('wtf',currentUser);
  //   };
  // // };
  // //
  //
  //
  //   // db.collection("users").forEach((u) =>{
  //   //   console.log(u);
  //     // if (u.uid === user) {
        db.collection("tasks").doc(data.id).set(data)
        alert('Task Created!');

  //     // }
  // //   })
  };


const showTask = async () => {
  const arrayOfTasks = [];
    try {
      const query = await db
        .collection("tasks")
        // .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs

      for (let i=0 ; i<data.length ; i++){
        console.log(data[i].id);
        arrayOfTasks.push(data[i].data())}
      } catch (err) {
          console.error(err);
          alert("An error occured while fetching tasks data");
        }
        return arrayOfTasks;
      };
///////////////////////////////////////////////

const updateTask = async (user, id, originalName, date, category, priority, color, address, notes) => {
  let data = {
    id: id,
    taskName: originalName,
    taskDate: date,
    taskCategory: category,
    taskPriority: priority,
    taskColor: color,
    taskAddress: address,
    taskNotes: notes,
    user: user
  };
  db.collection("tasks").doc(data.id).set(data).then(()=>{


  alert('The Task has been updated');
  });
};
///////////////////////////////////////////////

const deleteTask = async (t) => {
  db.collection("tasks").doc(t).delete().then(()=>{
    alert("Task has been deleted succesfully, you can go to sleep now");
  })
};





const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
  addTask,
  showTask,
  deleteTask,
  updateTask
};
