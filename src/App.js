import EditProfile from "./components/EditProfile";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import './styles/global.css';


function App() {
  return (
    <div className="App App-wrappers">
      {/* <LoginPage/> */}
      {/* <ProfilePage/> */}
      {/* <EditProfile /> */}
      <FeedPage/>
    </div>
  );
}

export default App;
