import * as firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "../firebase/apiConfig";

class Fire {
  constructor() {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  }
  get firestore() {
    return firebase.firestore();
  }

  get uid() {
    return firebase.auth().currentUser.uid;
  }

  get timeStamp() {
    return Date.now();
  }

  addPost = async ({ text, localUri }) => {
    const remoteUri = await this.uploadPhotosAsync(localUri);
    const { uid, timeStamp } = this;
    return new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection("posts")
        .add({
          text,
          uid,
          timeStamp,
          img: remoteUri
        })
        .then(ref => {
          resolve(ref);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  ADDPOST = async ({ text }) => {
    return new Promise((res, rej) => {
      // firebase.firestore().collection('posts').add()
    });
  };

  uploadPhotosAsync = async uri => {
    const path = `photos/${this.uid}/${Date.now()}.jpg`;

    return new Promise(async (resolve, reject) => {
      const response = await fetch(uri);

      const file = await response.blob();
      let upload = firebase
        .storage()
        .ref(path)
        .put(file);

      upload.on(
        "state_changed",
        snapshot => {},
        err => {
          reject(err);
        },
        async () => {
          const uri = await upload.snapshot.ref.getDownloadURL();
          resolve(uri);
        }
      );
    });
  };
}

const fireObjct = new Fire();
export default fireObjct;
