import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCSy7oqmroUU_FF47NBLwwRMSGakAJDso",
  authDomain: "dpconsultation-83237.firebaseapp.com",
  projectId: "dpconsultation-83237",
  storageBucket: "dpconsultation-83237.appspot.com",
  messagingSenderId: "502428764843",
  appId: "1:502428764843:web:5cd55678c9e6fa02ed85ee",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
