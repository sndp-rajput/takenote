import ContentPage from "./components/contentpage/ContentPage";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="w-full h-screen grid grid-cols-[auto_1fr] bg-light dark:bg-dark">
      <Sidebar />
      {/* <div></div> */}
      <ContentPage />
    </div>
  );
};

export default App;
