import { RoutesPage } from "./pages/RoutesPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        {RoutesPage.map((route) => (
          <Route
          key={route.path}
          exact
          path={route.path}
          element={route.component}
          />
))}
      </Routes>
      
    </div>
  );
}

export default App;
