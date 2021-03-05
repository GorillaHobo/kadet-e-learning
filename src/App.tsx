import Navbar from "./components/Navbar";
import TopMenu from "./components/TopMenu";
import Profile from "./components/Profile";
import Courses from "./components/Courses";
import { CourseProvider } from "./contexts/CourseContext";
import { MenuProvider } from "./contexts/menuContext";
import { SearchProvider } from "./contexts/searchContext";

function App() {
  return (
    <SearchProvider>
      <MenuProvider>
        <CourseProvider>
          <div className="App">
            <Navbar />
            <TopMenu />
            <div className="p-10 flex justify-center items-start ">
              <Courses />
              <Profile />
            </div>
          </div>
        </CourseProvider>
      </MenuProvider>
    </SearchProvider>
  );
}

export default App;
