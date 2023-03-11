import { useState , useEffect} from "react";
import Bloglist from "./BlogList";

const Home = () => {
  
  const[blogs, setBlogs] = useState(null)


  useEffect(()=>{
   
    fetch('http://localhost:8000/yazilar').then(res=>{
      return res.json();
    }).then(data=>{
      //console.log(data);
      setBlogs(data);
    })
  },[])

  const handleClick =(id)=>{
      const newBlogs = blogs.filter(blog=>blog.id != id);

      setBlogs(newBlogs);

      console.log(id + " li Yazı silindi");
  }

    return (
       <div className="home">
            {blogs && <Bloglist bloglar={blogs} baslik="Bütün Yazılar" handleClick={handleClick}/>}
            <br/>
       </div>
      );
}
 
export default Home;