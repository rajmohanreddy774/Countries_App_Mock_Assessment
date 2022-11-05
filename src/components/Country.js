import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, CardContent, Card } from "@material-ui/core";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const country = await response.json();
      setCountry(country);
    };

    fetchCountryData();
  }, [name]);

  return (
    <>
      <Card className="country">
        <Link to="/">Home</Link>
        {country.map((c) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            capital,
            currencies,
            languages,
            borders,
          } = c;

          return (
            <CardContent key={numericCode}>
              <Box>
                <Box>
                  <img src={flag} alt={name} />
                </Box>

                <Box>
                  <Box>
                    <Typography>{name}</Typography>
                    <Typography>
                      Name: <span>{nativeName}</span>
                    </Typography>
                    <Typography>
                      Population: <span>{population.toLocaleString()}</span>
                    </Typography>
                    <Typography>
                      Region: <span>{region}</span>
                    </Typography>
                    <Typography>
                      Capital: <span>{capital}</span>{" "}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography>
                      Currencies: <span>{currencies[0].name}</span>
                    </Typography>
                    <Typography>
                      Languages: <span>{languages[0].name}</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography>Border Countries: </Typography>
                <Box>
                  {borders.map((border) => {
                    return (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    );
                  })}
                </Box>
              </Box>
            </CardContent>
          );
        })}
      </Card>
    </>
  );
};

export default Country;
