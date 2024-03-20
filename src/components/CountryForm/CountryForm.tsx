import { useEffect, useState } from 'react';
import { IOption } from '@src/interfaces/IOption';
import FormComponent from '@src/components/FormComponent/FormComponent.tsx';
import {
  countryList,
  citiesList,
  universityList,
  accommodationList,
} from '@src/data/data.ts';
import CountryFormStyle from '@src/components/CountryForm/CountryFormStyle.module.css';

export default function CountryForm() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');

  const [cities, setCities] = useState<IOption[]>([]);

  const [selectedUniversity, setSelectedUniversity] = useState<string>('');
  const [selectedAccommodation, setSelectedAccommodation] = useState<string>('');

  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    const filteredCities = citiesList.filter((city) => city.country === selectedCountry);
    setCities(filteredCities);
  }, [selectedCountry]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    setSelectedCity('');
    setSelectedUniversity('');
    setSelectedAccommodation('');
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
    setSelectedUniversity('');
    setSelectedAccommodation('');
  };

  const handleUniChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUniversity(event.target.value);
    setSelectedAccommodation('');
  };

  const handleAccommodationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAccommodation(event.target.value);
  };

  useEffect(() => {
    if (
      (selectedCountry && selectedCity && selectedUniversity && selectedAccommodation) !==
      ''
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [selectedCountry, selectedCity, selectedUniversity, selectedAccommodation, isValid]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(
      `Data:`,
      selectedCountry,
      selectedCity,
      selectedUniversity,
      selectedAccommodation
    );
    alert(
      `Страна: ${selectedCountry}, город: ${selectedCity}, университет: ${selectedUniversity}, проживание: ${selectedAccommodation}`
    );
  }

  return (
    <div className={CountryFormStyle.container}>
      <form className={CountryFormStyle.form} onSubmit={handleSubmit}>
        <FormComponent
          label="country"
          options={countryList}
          onChange={handleCountryChange}
          value={selectedCountry}
          text={'Выберите страну'}
        />

        <FormComponent
          label="city"
          options={cities}
          onChange={handleCityChange}
          value={selectedCity}
          text={'Выберите город'}
          disabled={!selectedCountry}
        />

        <FormComponent
          label="university"
          options={universityList}
          onChange={handleUniChange}
          value={selectedUniversity}
          text={'Выберите университет'}
          disabled={!selectedCity}
        />

        <FormComponent
          label="accommodation"
          options={accommodationList
            .filter((option) => option.country.includes(selectedCountry))
            .map((option) => ({ value: option.value }))}
          onChange={handleAccommodationChange}
          value={selectedAccommodation}
          text={'Выберите проживание'}
          disabled={!selectedCountry || !selectedCity || !selectedUniversity}
        />

        <button type="submit" disabled={!isValid}>
          Подтвердить
        </button>
      </form>
    </div>
  );
}
