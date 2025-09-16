import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-[#FCFAF6] flex flex-col">
      <Header />
      <main className="flex-1 pt-16"> {/* Fixed headerのためのpadding追加、コンテナ制限を削除 */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;