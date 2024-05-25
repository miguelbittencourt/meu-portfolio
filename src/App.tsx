import AboutMe from "./components/aboutMe";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="flex flex-col gap-10">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
