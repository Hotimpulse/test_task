import { useState } from 'react';
import FormComponentStyle from '@src/components/FormComponent/FormComponentStyle.module.css';
import { ISelectors } from '@src/interfaces/ISelectors';
import { IOption } from '@src/interfaces/IOption';

export default function FormComponent(props: ISelectors) {

    const [isValid, setIsValid] = useState<boolean>(false);

    const { label, options, value } = props;

    function handleSubmit(): void {
    }

    return (
        <div className={FormComponentStyle['center-flex-col']}>
            <h3>Country Form</h3>
            <form className={FormComponentStyle.form} onSubmit={handleSubmit}>
                <label htmlFor={label}></label>
                <select value={value}>
                    <option value={value}>Выбор параметра: {value}</option>
                    {options.map((option: IOption, index: number) => {
                        return <option key={index} value={value}>{option.value}</option>
                    })}
                </select>


                <button type="submit" disabled={!isValid}>
                    Подтвердить
                </button>
            </form>
        </div>
    );
}
