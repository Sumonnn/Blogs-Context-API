import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

const Blogs = () => {
  //consume
  const { loading, posts } = useContext(AppContext);


  return (
    <div className='w-11/12 max-w-[600px] py-3 flex flex-col gap-y-7'>
      {
        loading ? <Spinner /> :
          posts.length === 0 ? (
            <div>
              <p>No Post Found!</p>
            </div>
          ) : (
            posts.map((post) => {
              return <Card key={post.id} post={post}/>
            })
          )

      }
    </div>
  )
}

export default Blogs