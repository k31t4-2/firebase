import React,{useState,useEffect} from "react";
import "./App.css";
import db  from "./firebase";
import { doc, collection, getDocs, onSnapshot } from "firebase/firestore";

function App() {

  // 一度持ってきたものを格納するために、useStateで管理
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // リロードされた際にDBからデータを持ってくる
    const postData = collection(db, "posts")
    getDocs(postData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({...doc.data()})  ));
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })))
    })

    // リアルタイムで情報を取得していく　 like Twitter
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({ ...doc.data() })))
    });

  },[])


  return (
    <>
      <div className="App">

        <div>
          {posts.map((post) => (
              <div key={post.title}>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
              </div>
            ))}
        </div>

        </div>
    </>
  );
}

export default App;
