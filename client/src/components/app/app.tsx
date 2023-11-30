import { useState } from 'react';
import { IPost } from '../../interfaces/IPost';
import Header from '../header/header';
import PostList from '../posts-list/posts-list';
import ProfilePanel from '../profile-panel/profile-panel';
import './app.css';

const App = (): JSX.Element => {

  const [posts, setPosts] = useState<IPost[]>([
    {
      id: 1,
      username: "Anton Poddybniy",
      likes_count: 23,
      message: "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха.",
      date_publication: new Date("10-11-19")
    },
    {
      id: 2,
      username: "Anton Poddybniy",
      likes_count: 34,
      message: "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.",
      date_publication: new Date("12-11-19")
    },
    {
      id: 3,
      username: "Anton Poddybniy",
      likes_count: 13,
      message: "Сложнее всего начать действовать, все остальное зависит только от упорства.",
      date_publication: new Date("3-10-19")
    },
    {
      id: 4,
      username: "Anton Poddybniy",
      likes_count: 7,
      message: "Жизнь - это то, что с тобой происходит, пока ты строишь планы.",
      date_publication: new Date("11-19-19")
    },
  ])

  return (
    <div className="app">
      <Header />
      <PostList 
        posts={posts} 
        setPosts={setPosts}
      />
      <ProfilePanel 
        username='Anton Poddybniy'
        posts={posts} 
        set_posts={setPosts}
      />
    </div>
  );
}

export default App;
