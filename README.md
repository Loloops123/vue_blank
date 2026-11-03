# Vue 3 Template

Стартовый шаблон одностраничного приложения на Vue 3 и TypeScript.
Проект включает маршрутизацию, управление состоянием, стилизацию,
тестирование и инструменты проверки кода.

В текущей реализации предусмотрены главная страница с демонстрационной
кнопкой, пример хранилища Pinia с unit-тестами и история Storybook
с проверкой взаимодействия. Серверная часть отсутствует.

## Технологии

| Область                   | Инструменты                              |
| ------------------------- | ---------------------------------------- |
| Приложение                | Vue 3.5, Composition API, TypeScript 5.9 |
| Сборка                    | Vite 7, Vue DevTools                     |
| Маршрутизация и состояние | Vue Router 4, Pinia 3                    |
| Вспомогательные функции   | VueUse 14                                |
| Стили и иконки            | Tailwind CSS 4, unplugin-icons, Iconify  |
| Компоненты и документация | Storybook 10                             |
| Тестирование              | Vitest 4, happy-dom, Playwright          |
| Анализ и форматирование   | Oxlint, ESLint 9, Prettier, Knip         |
| Git-хуки                  | Husky, lint-staged, commitlint           |

## Требования

- Node.js версии `^20.19.0` или `>=22.12.0`, согласно `package.json`.
- pnpm. Зависимости зафиксированы в `pnpm-lock.yaml`.

## Установка и запуск

В корневом каталоге проекта выполните:

```bash
pnpm install
pnpm dev
```

По умолчанию приложение доступно по адресу [localhost:5173](http://localhost:5173).
Если порт занят, Vite выберет следующий доступный порт; фактический адрес
отображается в терминале. Сервер настроен на прослушивание `0.0.0.0`.

Для установки зависимостей без изменения lock-файла используйте:

```bash
pnpm install --frozen-lockfile
```

## Структура проекта

```text
src/
  assets/main.css           # Глобальные стили и подключение Tailwind CSS
  components/TestComponent/ # Пример кнопки и история Storybook
  router/index.ts           # Маршруты приложения
  store/                    # Хранилища Pinia и их unit-тесты
  view/HomeView.vue         # Главная страница
  App.vue                   # Корневой компонент
  main.ts                   # Инициализация приложения
.storybook/                 # Настройки Storybook и браузерных тестов
public/                     # Статические файлы
```

Алиас `@/` указывает на `src/`. Компоненты используют
`<script setup lang="ts">`. Tailwind CSS подключён через Vite-плагин
и импорт в `src/assets/main.css`.

## Команды

| Команда                | Назначение                                              |
| ---------------------- | ------------------------------------------------------- |
| `pnpm dev`             | Запуск сервера разработки Vite                          |
| `pnpm storybook`       | Запуск Storybook на порту 6006                          |
| `pnpm test:unit`       | Однократный запуск unit-тестов                          |
| `pnpm test:storybook`  | Запуск браузерных тестов историй Storybook              |
| `pnpm lint:types`      | Проверка типов через `vue-tsc --build`                  |
| `pnpm lint:oxlint`     | Проверка Oxlint с автоматическими исправлениями         |
| `pnpm lint:eslint`     | Проверка ESLint с автоматическими исправлениями и кешем |
| `pnpm lint:commit`     | Проверка сообщения коммита через `commitlint --edit`    |
| `pnpm lint:all`        | Последовательный запуск всех команд `lint:*`            |
| `pnpm build:dev`       | Сборка приложения без отдельной проверки типов          |
| `pnpm build:ci`        | Проверка типов и сборка приложения                      |
| `pnpm storybook:build` | Статическая сборка Storybook                            |
| `pnpm prettier:format` | Форматирование всего проекта с записью изменений        |
| `pnpm knip`            | Поиск неиспользуемых файлов, экспортов и зависимостей   |
| `pnpm prepare`         | Настройка Git-хуков Husky                               |

`lint:all` включает проверку сообщения коммита, поэтому требует
соответствующего контекста Git. Команды Oxlint и ESLint в этом наборе
могут изменять файлы.

Для проверки без автоматических исправлений:

```bash
pnpm exec eslint src
pnpm exec prettier --check .
```

## Тестирование

Unit-тесты располагаются рядом с исходниками в файлах `*.spec.ts`.
Vitest запускает тесты из `src/` в окружении happy-dom:

```bash
pnpm test:unit
```

Истории компонентов размещаются в файлах `*.stories.ts`.
Тесты Storybook выполняются через Playwright в Chromium без графического
интерфейса. Перед первым запуском необходимо установить браузер:

```bash
pnpm exec playwright install chromium
pnpm test:storybook
```

Для просмотра компонентов в Storybook:

```bash
pnpm storybook
```

Адрес по умолчанию — [localhost:6006](http://localhost:6006).

## Сборка и размещение

```bash
pnpm build:ci
```

Команда проверяет типы TypeScript и создаёт сборку приложения в `dist/`.
`pnpm build:dev` запускает тот же `vite build` без проверки типов;
отдельный режим `development` в этой команде не задан.

Статическая сборка Storybook создаётся в `dist-storybook/`:

```bash
pnpm storybook:build
```

Приложение использует `createWebHistory(import.meta.env.BASE_URL)`.
При размещении сервер должен возвращать `index.html` для клиентских
маршрутов, чтобы переходы по прямым ссылкам работали корректно.

## Соглашения разработки

Prettier задаёт отступ в два пробела, одинарные кавычки, отсутствие точек
с запятой и переводы строк LF. Импорты проверяются `simple-import-sort`,
классы Tailwind упорядочиваются плагином Prettier.

Перед коммитом Husky запускает lint-staged: ESLint и Prettier для
подготовленных файлов TypeScript/Vue, Prettier для JSON, Markdown, HTML
и CSS. Сообщения коммитов проверяются по Conventional Commits, например:

```text
feat: add navigation component
fix: correct counter state update
docs: update setup instructions
```

Переменные с префиксом `VITE_` доступны клиентскому коду и не подходят
для хранения секретов. Типы переменных окружения описываются в `env.d.ts`.

Инструкции для автоматизированной работы с репозиторием приведены
в [AGENTS.md](./AGENTS.md).
