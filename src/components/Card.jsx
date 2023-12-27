import { space } from 'postcss/lib/list'
import React from 'react'

const Card = ({ post }) => {
    return (
        <div>
            <p className='font-bold text-md'>{post.title}</p>
            <p className='text-[12px]'>
                By <span className='italic'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span>
            </p>
            <p className='text-[14px]'>Posted On {post.date}</p>
            <p className='text-md mt-[8px]'>{post.content}</p>
            <div className='flex gap-x-3'>
                {
                    post.tags.map((tag, index) => {
                        return <span key={index} className='text-blue-500 underline font-bold text-[14px]'>{`#${tag}`}</span>
                    })
                }
            </div>
        </div>
    )
}

export default Card