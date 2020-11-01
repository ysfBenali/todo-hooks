import firebase from 'firebase';

const convertToTimestamp = (date) => {
    return firebase.firestore.Timestamp.fromDate(date)
}

export default convertToTimestamp;