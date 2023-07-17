import { PostsScene, MainScene } from './scenes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScene />}/>
        <Route path="/posts/:postId" element={<PostsScene />} />
      </Routes>
    </BrowserRouter>
  )
}
