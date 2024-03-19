# BFT task

### Структура данных для реализации задачи:

**Для более динамичного и переиспользуемого подхода, можно выделить два интерфейса:**

```
export interface IOption {
  value: string;
  country?: string;
}

export interface ISelectors {
    label: string;
    options: IOption[];
    value?: string;
}
```

**Данные могут выглядеть следующим образом:**

```
export const countryList = [
  { value: 'Республика Беларусь' },
  { value: 'Российская Федерация' },
];

export const citiesList = [
  { country: 'Республика Беларусь', value: 'Минск' },
  { country: 'Республика Беларусь', value: 'Гомель' },
  { country: 'Российская Федерация', value: 'Москва' },
  { country: 'Российская Федерация', value: 'Сочи' },
];

export const universityList = [{ value: 'Технический' }, { value: 'Гуманитарный' }];

export const accommodationList = [
  {
    country: ['Российская Федерация', 'Республика Беларусь'],
    value: 'Общежития',
  },
  { country: 'Российская Федерация', value: 'Аренда' },
  {
    country: ['Российская Федерация', 'Республика Беларусь'],
    value: 'Не интересует',
  },
  { country: 'Российская Федерация', value: 'Общежития + Аренда' },
];
```

**В проекте настроены:**
- Eslint
- Prettier
- Husky (pre-push formatting)

**В проекте использованы:**
- Vite
- Jest (E2E tests)
