import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppContext } from "./context/contextAPI";
import Header from "./components/Header";
import SearchResult from './components/SearchResult';
import Feed from './components/Feed';
import VideoDetails from './components/VideoDetails';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header></Header>
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
