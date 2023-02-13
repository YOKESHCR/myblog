import React from 'react'
import { useState, useEffect } from 'react'
import { db, auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("")
  const [blog, setBlog] = useState("")

  const postsCollectionRef = collection(db, "posts")
  let navigate = useNavigate()

  const createBlog = async() => {
    await addDoc(postsCollectionRef, { title, blog, author : {name: auth.currentUser.displayName, id:auth.currentUser.uid} })
    navigate("/")
  }

  
  useEffect(() => {
    if (!isAuth){
        navigate("/login")
    }
    
  }, [])

  return (
    <div className='createPostPage'>
        <div className='cpContainer'>
            <h1>Create a Post</h1>
            <div className='inputGp'>
                <label>
                    Title:
                </label>
                <input placeholder = 'Title...' onChange={(event) => {
                    setTitle(event.target.value)
                }}/>
            </div>
            <div className='inputGp'>
                <label>
                    Post:
                </label>
                <textarea placeholder = 'Post...' onChange={(event) => {
                    setBlog(event.target.value)
                }}/>
            </div>
            <button onClick={createBlog}> Submit Post</button>


        </div>
      
    </div>
  )
}

export default CreatePost
