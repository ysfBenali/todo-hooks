
import firebase from 'firebase/app';
 
const convertToTimestamp = (date) => {
    return firebase.firestore.Timestamp.fromDate(date)
}

export default convertToTimestamp;