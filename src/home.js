import { useState , useEffect} from "react";
import Bloglist from "./BlogList";

const Home = () => {
  
  const[blogs, setBlogs] = useState(null)
  const[yukleniyor , setYukleniyor] = useState(true)
  const[hata, setHata] = useState(null)


  useEffect(()=>{
   
    fetch('http://localhost:8000/yazilar').then(res=>{
      if(!res.ok) throw Error("Veriler çekilemedi")

      return res.json();
    }).then(data=>{
      //console.log(data);
      setBlogs(data);
      setYukleniyor(false);
    })
    .catch(err=>{
      setHata(err.message);
      setYukleniyor(false);
      //console.log(err);
    })
  },[])

  const handleClick =(id)=>{
      const newBlogs = blogs.filter(blog=>blog.id != id);

      setBlogs(newBlogs);

      console.log(id + " li Yazı silindi");
  }

    return (
       <div className="home">
            {hata && <div className="error">{hata}</div>}
            {yukleniyor && <div className="loading">Yükleniyor..</div> }
            {blogs && <Bloglist bloglar={blogs} baslik="Bütün Yazılar" handleClick={handleClick}/>}
            <br/>
       </div>
      );
}
 
export default Home;