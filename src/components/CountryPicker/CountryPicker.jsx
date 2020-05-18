import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css'; 

const CounrtyPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    }
    fetchAPI();
  }, [setFetchedCountries]);
  return (
    !fetchedCountries.length ? null 
    : (
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {fetchedCountries.map((countryName, i) => <option key={i} value={countryName}>{countryName}</option>)}
        </NativeSelect>
      </FormControl>  
    )
  )
}

export default CounrtyPicker;
