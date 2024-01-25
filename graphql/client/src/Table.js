import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./GraphQl/Query"

import { useEffect, useState }  from "react";

const Table = () => {
   const {  data} = useQuery(GET_COUNTRIES);
   const [ countries, setCountries ] = useState([]);
    //  if (data)console.log(data);
//     if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;

   useEffect(() => {
    if (data !== undefined) {
        setCountries([...data.getCountry]);
    }
}, [data]);
return (
    <>
    <p className="text-center h4">Country Table</p>
    <table className="table table-bordered">
        <thead>
            <tr className="text-center table-primary">
                <th width="10%">Sr No</th>
                <th width="40%">Name</th>
                <th width="20%">Population</th>
                <th width="10%">Land Area</th>
                <th width="20%">Density</th>
                <th width="20%">Capital</th>
                <th width="20%">Currency</th>
                <th width="20%">Flag</th>
            </tr>
        </thead>
        <tbody>
            {countries.map((country) => {
                return (
                    <tr key={country.id}>
                        <td>{country.id}</td>
                        <td>{country.name}</td>
                        <td>{country.population}</td>
                        <td>{country.land_area}</td>
                        <td>{country.density}</td>
                        <td>{country.capital}</td>
                        <td>{country.currency}</td>
                        <td>{country.flag}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    
    </>
);

};

export default Table;