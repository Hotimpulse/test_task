import { IOption } from './IOption';

export interface ISelectors extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: IOption[];
  value: string;
  text: string;
}
