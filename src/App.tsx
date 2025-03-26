import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import PetOwnerProfile from "./pages/PetOwnerProfile";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Dashboard />} />
            <Route path="/petowner" element={<PetOwnerProfile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
