# BFT task

### Структура данных для реализации задачи:

Для более динамичного и переиспользуемого подхода, можно выделить два интерфейса: 

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

Для кнопки 
```

В проекте настроены:
- Eslint
- Prettier
- Husky (pre-push formatting)

В проекте использованы:
- Vite
- Jest (E2E tests)