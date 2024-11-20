import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { SearchResults } from "../pages/SearchResults";
import { NotFound } from "../pages/NotFound";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/:id" element={<Dish />} />
      <Route path="/results" element={<SearchResults />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
