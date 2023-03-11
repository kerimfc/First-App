import Bloglist from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
  
  const{veri:blogs,yukleniyor,hata}=useFetch("http://localhost:8000/yazilar");

    return (
       <div className="home">
            {hata && <div className="error">{hata}</div>}
            {yukleniyor && <div className="loading">Yükleniyor..</div> }
            {blogs && <Bloglist bloglar={blogs} baslik="Bütün Yazılar" />}
            <br/>
       </div>
      );
}
 
export default Home;