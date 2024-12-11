import EditProfile from "./components/EditProfile";
import ShareBox from "./components/ShareBox";
import { UserProvider } from "./context/UserContext";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import './styles/global.css';
import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";


function App() {
  return (
    <UserProvider>
        <BrowserRouter>
          {/* <div className="App App-wrappers">
            <Routes>
              <Route  path="/" element={<><LoginPage/></>}></Route>
              <Route  path="/create-page" element={<><EditProfile pageType="create" /></>}></Route>
              <Route  path="/profile-page" element={<><ProfilePage/></>}></Route>
              <Route  path="/edit-page" element={<><EditProfile pageType="edit" /></>}></Route>
              <Route  path="/feed" element={<><FeedPage /></>}></Route>
            </Routes>
          </div> */}
          <ShareBox />
        </BrowserRouter>
    </UserProvider>

  );
}

export default App;

          