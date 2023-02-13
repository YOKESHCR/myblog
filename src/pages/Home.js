import React, { useEffect, useState } from 'react'
import { getDocs, deleteDoc, collection, doc } from 'firebase/firestore'
import { db, auth } from '../firebase'


function Home(isAuth) {
  const [blogLists, setBlogLists] = useState([])
  const blogsCollectionRef = collection(db, "posts")

  useEffect(() => {
    const getBlogs = async () => {
        const data = await getDocs(blogsCollectionRef)
        setBlogLists(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })))
    }
    getBlogs()
  })

  const deleteBlog = async(id) => {
      const blogDoc = doc(db, "posts", id)
      await deleteDoc(blogDoc)
  }
  return (
    <div className='homePage'>
        {blogLists.map((blogpost) => {
            return <div className='post'>
                      <div className='postHeader'>
                        <div className='title'>
                            <h1> {blogpost.title} </h1>
                        </div> 
                        <div className='deletePost'>
                            {isAuth && blogpost.author.id === auth.currentUser.uid && (
                                <button onClick={() => {
                                    deleteBlog(blogpost.id)
                                }}> &#128465; </button>
                            )}
                        </div>       
                      </div>
                      <div className='postTextContainer'>
                        {blogpost.blog}
                      </div>  
                      <h3>@{blogpost.author.name}</h3>
                   </div>
        })}

    </div>
  )
}

export default Home
