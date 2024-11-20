import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

import { Input } from "../../components/Input";

export function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/results?query=${searchQuery}`);
      console.log(searchQuery)
    }
  }

  return (
    <Container>
      <form onSubmit={handleSearch}>
        <Input
          className="search-input"
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </Container>
  );
}
