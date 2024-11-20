import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { AddDish } from "../pages/AddDish";
import { EditDish } from "../pages/EditDish";
import { SearchResults } from "../pages/SearchResults";
import { NotFound } from "../pages/NotFound";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/:id" element={<Dish />} />
      <Route path="/new" element={<AddDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/results" element={<SearchResults />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
