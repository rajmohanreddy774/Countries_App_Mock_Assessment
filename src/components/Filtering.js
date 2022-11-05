import React, { useEffect } from "react";
import {Box,Select, MenuItem } from "@material-ui/core";

const Filtering = ({
  search,
  setSearch,
  setFiltered,
  setCountries,
  countries,
}) => {
  const regions = [
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "America",
      desc: "America",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Ocean",
      desc: "Ocean",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCountries = (searchValue) => {
    setSearch(searchValue);

    if (search) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  const filterRegions = async (region) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
    const data = await res.json();
    setCountries(data);
  };

  useEffect(() => {
    filterRegions();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Country"
          onChange={(e) => searchCountries(e.target.value)}
        />

        <Box className="select">
          <Select
           
            id="select"
            value={regions.name}
            onChange={(e) => filterRegions(e.target.value)}
          >
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="America">America</MenuItem>
            <MenuItem value="Ocean">Ocean</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
          </Select>
        </Box>
       <button type="submit">Enter</button>
      </form>
    </>
  );
};

export default Filtering;
