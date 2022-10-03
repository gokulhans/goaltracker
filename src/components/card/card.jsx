import React from 'react'
import Progress from '../progress/progress'
import Smallprogress from '../progress/smallprogress'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from './../../firebase-config';
import { useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';

function Card(props) {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    };

    useEffect(() => {
        onSnapshot(postsCollectionRef, (snapshot) => {
            setPostList(
                snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        });
    }, []);

    return (
        <>
            <div>

                <Link
                    to={{
                        pathname: `/project/${props.post.id}`,
                        state: { posts: props.post }
                    }} className="relative block p-8  bg-indigo-900 hover:border-gray-100 hover:shadow-xl rounded-xl" >

                    {props.isAuth && props.post.author.id === auth.currentUser.uid && (
                        <>
                            <button className="absolute right-4 top-4 rounded-full w-8 h-8 text-green-600 font-bold text-xs"
                                onClick={() => {
                                    deletePost(props.post.id);
                                }}
                            >
                                {" "}
                                &#128465;
                            </button>
                        </>
                    )}
                    <div className="mt-4 text-gray-500 sm:pr-8 ">
                        <h5 className="mt-4 text-xl font-bold text-white"> {props.post.title}</h5>
                        <p className=" mt-2 text-sm sm:block">
                            {props.post.author.name}
                        </p>
                        <p className=" mt-2 text-sm sm:block">
                            {props.post.postText}
                        </p>
                        <div className="mt-3">
                            <Smallprogress />
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card