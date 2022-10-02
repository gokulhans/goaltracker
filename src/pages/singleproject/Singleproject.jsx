import React, { useState } from 'react'
import { useParams, Link } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import { db } from './../../firebase-config';
import { useEffect } from 'react';
import Progress from '../../components/progress/progress';
import AddTask from '../forms/AddTask';
import Table from './Table';



function Singleproject() {
  const { id } = useParams();
  console.log(id);
  let docRef
  let docSnap

  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});
  const [show, setShow] = useState(false);



  useEffect(() => {
    const getDocbyId = async (id) => {
      docRef = doc(db, "posts", id);
      docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setPost(docSnap.data());
        setAuthor(docSnap.data().author);
        console.log(post);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getDocbyId(id)
  }, []);

  return (
    <div className='mx-8 md:mx-24'>
      {/* <Progress />
      <p>{post.title}</p>
      <p>{post.postText}</p>
      <p>{author.name}</p> */}

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">

        <div className="flex justify-between items-center py-4 bg-white dark:bg-gray-800">
          <div className="relative left-5">
            <h3 className='font-bold text-lg text-green-600'>{post.title}</h3>
          </div>
          <div className="relative right-5">
            <button type="button" className=" text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => { setShow(true) }}><b>Add Task</b></button>
          </div>
        </div>

        <Table />
        <AddTask onClose={() => setShow(false)} show={show} />

      </div>

    </div>
  )
}

export default Singleproject