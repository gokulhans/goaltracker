import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { auth, db } from './../../firebase-config';
import Progress from './../../components/progress/progress';
import Search from './../../components/search/search';
import Card from './../../components/card/card';

function Home({ isAuth }) {

  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    onSnapshot(postsCollectionRef, (snapshot) => {
      setPostList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);


  return (
    <div className="homePage">
      <div className="mx-4 sm:mx-16 mb-12">
        <Search />
      </div>
      <Progress />
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mx-12">
        {postLists.map((post, index) => {
          return (
            <Card key={index} isAuth={isAuth} post={post} />
          )
        })}
      </div>
    </div>
  );
}

export default Home;
