import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import { routes } from './routes';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        {routes.map((route, index) => {
          return <Route
            element={route.element}
            path={route.path}
            key={index}
          />
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
