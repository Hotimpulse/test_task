import FormComponent from "@src/components/FormComponent/FormComponent.tsx";
import { countryList, citiesList, universityList, accommodationList } from '@src/data/data.ts';
import { IOption } from "@src/interfaces/IOption";
import { useEffect, useState } from "react";

export default function CountryForm() {
    const [country, setCountry] = useState<string>('');
    const [cities, setCities] = useState<IOption[]>([]);

    useEffect(() => {
        const filteredCities = citiesList.filter(city => city.country === country);
        setCities(filteredCities);
    }, [country]);

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCountry(event.currentTarget.value);
    }

    return (
        <div>
            <FormComponent label='cтрана' options={countryList} onChange={handleCountryChange} />
        </div>
    )
}
