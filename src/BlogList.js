import React from 'react'

export default function Bloglist({bloglar, baslik, handleClick}) {
    //const blogs = props.bloglar;

  return (
    <div className="blog-list">
    <h2 style={{color: '#ff793f'}} >{baslik}</h2>
    
    {bloglar.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.ad}</h2>
          <p>Yazarın adı : {blog.yazar}</p>
          <button onClick={()=>handleClick(blog.id)}>Sil</button>
        </div>


     ))}

  </div>
  )
}
