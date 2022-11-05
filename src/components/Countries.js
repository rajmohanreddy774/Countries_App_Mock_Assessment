import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import {Typography, Box,  CardContent,Card} from '@material-ui/core';
import Filtering from "./Filtering";


export default function Countries(){
    const [countries, setCountries]= useState([])
    const [filtered, setFiltered] = useState([])
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const getCountries = async () => {
          const response = await fetch("https://restcountries.eu/rest/v2/all")
          const countries = await response.json()
          setCountries(countries)
          setIsLoading(false)
          console.log(countries);
        }
    
        getCountries()
      }, [])


return (
  
    <>
      <Filtering
        search={search}
        setSearch={setSearch}
        setFiltered={setFiltered}
        setCountries={setCountries}
        countries={countries}
      />
      {isLoading ? (
        <Typography className="loading">Loading...</Typography>
      ) : search.length > 1 ? (
        < Card className="countries">
          {filtered.map((country) => {
            const { numericCode, name, flag, population, region, capital } =
              country

            return (
              <Link to={`/countries/${name}`} key={numericCode}>
                < CardContent>
                  <Box className="flag">
                    <img src={flag} alt={name} />
                  </Box>
                  <Box className="details">
                    <Typography className="country-name">
                      Name: <span>{name}</span>
                    </Typography>
                    <Typography>
                      Population: <span>{population.toLocaleString()}</span>
                    </Typography>
                    <Typography>
                      Region: <span>{region}</span>
                    </Typography>
                    <Typography>
                      Capital: <span>{capital}</span>
                    </Typography>
                  </Box>
                </ CardContent>
              </Link>
            )
          })}
        </ Card>
      ) : (
        < Card className="countries">
          {countries.map((country) => {
            const { numericCode, name, flag, population, region, capital } =
              country

            return (
              <Link to={`/countries/${name}`} key={numericCode}>
                < CardContent>
                  <Box className="flag">
                    <img src={flag} alt={name} />
                  </Box>
                  <Box className="details">
                    <Typography className="country-name">
                      Name: <span>{name}</span>
                    </Typography>
                    <Typography>
                      Population: <span>{population.toLocaleString()}</span>
                    </Typography>
                    <Typography>
                      Region: <span>{region}</span>
                    </Typography>
                    <Typography>
                      Capital: <span>{capital}</span>
                    </Typography>
                  </Box>
                </ CardContent>
              </Link>
            )
          })}
        </ Card>
      )}
    </>
  )
}







