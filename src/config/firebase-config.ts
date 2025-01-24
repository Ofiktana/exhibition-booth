// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, 
//   GoogleAuthProvider,
//   signInWithPopup,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile
// } from 'firebase/auth';
// import { getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   serverTimestamp,
//   onSnapshot,
//   query,
//   where, 
//   doc,
//   updateDoc,
//   deleteDoc
//  } from 'firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// /************************************************************************************/
// //AUTHENTICATION SETUP
// /************************************************************************************/

// export const auth = getAuth(app)
// const provider = new GoogleAuthProvider()

// // Google Sign-in implementation

// export async function signInWithGoogle(){
//   try{
//     const result = (await signInWithPopup(auth, provider)).user
//     return result
//   }
//   catch(err){
//     console.log(err)
//   }

// }

//   //Email and password sign-in implementation

// export async function registerNewUserWithEmail(email:string, password:string){
//   try{
//     const user = (await createUserWithEmailAndPassword(auth, email, password)).user
//     return user

//   }catch(err){
//     console.log(err)
//   }
// }

// export async function signInUserWithEmail(email:string, password:string){

//   try{
//     const user = (await signInWithEmailAndPassword(auth, email, password)).user
//     return user

//   }catch(err){
//     console.log(err)
//   }
// }



// // Sign-out Implementation

// export async function authSignOut(){
//   await signOut(auth)
// }

// // Updating user-profile

// export async function authUpdateProfile(firstName:string, lastName:string){
//   const newDisplayName : string = `${firstName} ${lastName}`
//   try {
//     await updateProfile(auth.currentUser, {displayName: newDisplayName})

//   } catch (error) {
//     console.log(error)
//   }
// }

// /************************************************************************************/
// //DATABASE SETUP

// /*
//   Tables: 
//     - users
// */
// /************************************************************************************/

// // GENERIC

// const db = getFirestore(app)

// export async function addNewDataToCollection(collectionName : string, data: any){
//   try {
//     const docRef = await addDoc(collection(db, collectionName),{
//       ...data,
//       createdAt: serverTimestamp()
//     })

//     console.log(`successfully recorded new item in ${collectionName}`)
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// export async function getAllDocsInCollection(collectionName : string){

//   const querySnapshot = await getDocs(collection(db, collectionName));
//   const result = []
//   querySnapshot.forEach((doc) => {
//     result.push({id: doc.id, data: doc.data()})
//   })

//   return result
// }

// export async function getDocsByParam(collectionName : string, queryObj){
//   const { field, operator, value } = queryObj
//   const colRef = collection(db, collectionName)
//   const q  = query(colRef, where(field, operator, value))
//   const querySnapshot = await getDocs(q);
  
//   const result = []
//   querySnapshot.forEach((doc) => {
//     result.push({id: doc.id, data: doc.data()})
//   })

//   return result
// }

// export async function subscribeToCollection(collectionName : string, callback){

//   const arr = []

//   onSnapshot(collection(db, collectionName),(querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       arr.push({id: doc.id, data: doc.data()})
//       callback(arr)
//     })
//   })
// }

// export async function subscribeToFilteredCollection(collectionName : string, param : string, value : string){
//   const colRef = collection(db, collectionName)

//   const q = query(colRef, where(param, '==', value))

//   // Example of the orderBy and limit methods in Firebase Store
//   // import { query, where, orderBy, limit } from 'firebase/firestore';
//   // const q = query(citiesRef, where('population', '>', 100000), orderBy('population','desc'), limit(2))
//   // NB: Firebase will throw an error requiring you to add an index to your query on the console

//   /*
//   Example of date filtering
//   const startOfDay = new Date()
//   startOfDay.setHours(0, 0, 0, 0) // hrs, mins, secs, milli-secs

//   const endOfDay = new Date()
//   endOfDay.setHours(23, 59, 59, 999)

//   const q = query(colRef, where('uid', '==', user.uid), 
//                           where('createdAt', '>=', startOfDay),
//                           where('createdAt', '<=', endOfDay),
//                           orderBy('createdAt', 'desc'))

//   */

//   onSnapshot(q, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       // Function to be defined
//       // Push data into an array and call a state setter function in react
//       // The data contained in the documents is accessible using doc.data()
//     })
//   })
// }

// export async function updateDataInDoc(collectionName : string, docId : string, data : any){

//   const docRef = doc(db, collectionName, docId)

//   await updateDoc(docRef, data)
// }


// export async function deleteDocFromCollection(collectionName : string, docId : string){
//   const docRef = doc(db, collectionName, docId)

//   await deleteDoc(docRef)
// }
