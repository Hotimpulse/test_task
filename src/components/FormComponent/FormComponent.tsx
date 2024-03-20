import FormComponentStyle from '@src/components/FormComponent/FormComponentStyle.module.css';
import { ISelectors } from '@src/interfaces/ISelectors';
import { IOption } from '@src/interfaces/IOption';

export default function FormComponent(props: ISelectors) {
  const { label, options, value, onChange, disabled, text } = props;

  return (
    <div className={FormComponentStyle['center-flex-col']}>
      <label htmlFor={label}>{text}</label>
      <select value={value} onChange={onChange} disabled={disabled}>
        <option value="">Выберите опцию</option>
        {options.map((option: IOption, index: number) => {
          return (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
