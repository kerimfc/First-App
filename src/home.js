import { useState , useEffect} from "react";
import Bloglist from "./BlogList";

const Home = () => {
  
  const[blogs, setBlogs] = useState([
    {
      ad:"Yeni Başlayanlar İçin C#",
      aciklama:"Lorem ipsum dolar sit amet",
      yazar:"luffy",
      id:1
    },
    {
      ad:"React öğreniyorum",
      aciklama:"Lorem ipsum dolar sit amet",
      yazar:"zoro",
      id:2
    },
    {
      ad:"İleri seviye C#",
      aciklama:"Lorem ipsum dolar sit amet",
      yazar:"luffy",
      id:3
    },
    {
      ad:"MVC öğreniyorum",
      aciklama:"Lorem ipsum dolar sit amet",
      yazar:"sanji",
      id:4
    },
    {
      ad:"Flutter Giriş Seviye",
      aciklama:"Lorem ipsum dolar sit amet",
      yazar:"develop",
      id:5
    }
  ])

  const [isim, setIsim] = useState('luffy');

  useEffect(()=>{
    console.log("use effect calıştı");
    console.log(blogs);
  },[blogs, isim])

  const handleClick =(id)=>{
      const newBlogs = blogs.filter(blog=>blog.id != id);

      setBlogs(newBlogs);

      console.log(id + " li Yazı silindi");
  }

    return (
       <div className="home">
            <Bloglist bloglar={blogs} baslik="Bütün Yazılar" handleClick={handleClick}/>
            <br/>
            <button onClick={()=>setIsim('zoro')}>değiştir</button>
            <br/>
            <Bloglist bloglar={blogs.filter((blog) =>  blog.yazar == 'luffy')} baslik="Seçkin Yazılar" />
       </div>
      );
}
 
export default Home;