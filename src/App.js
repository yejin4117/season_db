import Navbar from "./Navbar"
import MAIN from "./pages/main"
import HOME from "./pages/home"
import VIEW from "./pages/View"
import LOGIN from "./pages/login"
import SIGNUP from "./pages/signup"
import Footer from "./Footer"

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = <MAIN/>
      break
    case "/home":
      Component = <HOME/>
      break
    case "/View":
      Component = <VIEW/>
      break
    case "/login":
      Component = <LOGIN/>
      break
    case "/signup":
      Component = <SIGNUP/>
      break
  }
  return (
    <div className="page-container">
    <div className="content-wrap">

      <Navbar />
      <main />
      <home />
      {Component}
      </div>
      <Footer />
      
      </div>
  );
  return (
    <div>
      <LOGIN/>
    </div>
  )
};

export default App;