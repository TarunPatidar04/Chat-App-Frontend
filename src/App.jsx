import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Your routes */}
        <Routes>
          {/* Your routes */}
          <Route path="/" element={<h1>Home</h1>} />
          {/* Your routes */}
          <Route path="/about" element={<h1>About</h1>} />
          {/* Your routes */}
          <Route path="*" element={<h1>NotFound</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
