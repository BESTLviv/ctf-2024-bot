# Навігація

- [Зміст](#зміст)
- [Функціонал](#функціонал)
  - [Основні можливості](#основні-можливості)
- [Встановлення та запуск](#встановлення-та-запуск)
  - [Необхідні залежності](#необхідні-залежності)
  - [Встановлення](#встановлення)
  - [Запуск в режимі розробки](#запуск-в-режимі-розробки)
  - [Запуск у продакшн-режимі](#запуск-у-продакшн-режимі)
- [Конфігурація](#конфігурація)
  - [Використання конфігураційних файлів](#використання-конфігураційних-файлів)
- [Контексти та сцени](#контексти-та-сцени)
  - [Контексти](#контексти)
  - [Сцени](#сцени)
- [Адміністративна панель](#адміністративна-панель)
- [Технології](#технології)
- [Хто писав](#хто-писав)
  
# CTF24-Bot

## Зміст

CTF24-Bot - це телеграм-бот, розроблений для організації та проведення Capture The Flag (CTF) змагання. Він допомагає учасникам реєструватися, знаходити команди, отримувати актуальну інформацію про змагання та взаємодіяти з організаторами.

## Функціонал

### Основні можливості:

- **Реєстрація учасників** – користувач може пройти реєстрацію, надавши особисті дані.
- **Створення та приєднання до команд** – кожен користувач може створити команду або приєднатися до існуючої.
- **Адміністративна панель** – для організаторів передбачена можливість керування учасниками, командами та масовими розсилками.
- **Отримання інформації** – бот надає розклад, правила, локацію та іншу важливу інформацію щодо заходу.
- **Повідомлення та нагадування** – надсилає користувачам нагадування про ключові моменти змагання.
- **Завантаження резюме** – учасники можуть додати своє резюме для подальшої співпраці з роботодавцями.
- **Інтерактивний чат** – можливість швидко отримати відповіді від організаторів та спілкуватися з іншими учасниками.

## Встановлення та запуск

### Необхідні залежності

Для роботи бота потрібно встановити Node.js (версія 20.x) та npm.

### Встановлення

```sh
npm install
```

```sh
npm i --save-dev @types/node
```

### Запуск в режимі розробки

```sh
npm run dev
```

### Запуск у продакшн-режимі

```sh
npm run build
npm start
```

## Конфігурація

Перед запуском необхідно створити `.env` файл із наступними параметрами:

```
TOKEN=your-telegram-bot-token
DATABASE_URL=mongodb+srv://<username>:<password>@<cluster_address>/<database_name>?retryWrites=true&w=majority&appName=<app_name>
ADMIN_WORD=secret-admin-code
```
### Коротко про дані змінні:

```
- TOKEN: айдішка вашого телеграм бота, який можна скопіювати з BotFather
- DATABASE_URL: стрічка підключення до бази даних. У Бесті ми використовуємо MongoDB, тому очікується саме він
- ADMIN_WORD: слово, яке ввівши в чат з ботом, перемкне вас до Адмін панелі
```
### Використання конфігураційних файлів

У проекті є два варіанти файлу конфігурації:
- **Закоментований варіант у `config.service.ts`** – використовується під час деплою на Heroku та отримує змінні з середовища.
- **Розкоментований варіант** (де використовується `dotenv`) – можна використовувати для локального тестування, якщо є `.env` файл.

## Контексти та сцени

### Контексти
Бот використовує `IBotContext`, що містить всю необхідну інформацію про користувача та його сесію. Основні елементи:
- `session` – зберігає дані про користувача, команду, стан реєстрації тощо.
- `scene` – поточний стан взаємодії користувача з ботом.
- `wizard` – дозволяє використовувати багатокрокові діалоги.

### Сцени
Бот реалізує логіку через `Telegraf Scenes`, що дозволяє створювати сценарії взаємодії. Основні сцени:
- **before-registration** – ознайомлення з подією перед реєстрацією.
- **registration-wizard** – покрокова реєстрація.
- **after-registration-menu-wizard** – взаємодія після реєстрації.
- **admin-panel-wizard** – адмін-панель для керування ботом.

Навіщо ці сцени потрібні:
Різні сцени надають різні можливості. Наприклад на сцені ознайолмення доступні кнопки переходу до реєстрації 

## Адміністративна панель
Адміністратори мають доступ до спеціальної панелі для керування користувачами та командами. Основні функції:
- **Масові розсилки** – можливість надсилати повідомлення всім користувачам, зареєстрованим або незареєстрованим.
- **Перегляд та управління командами** – можливість схвалювати або відхиляти команди.
- **Переключення етапів змагання** – зміна стадії CTF.
- **Завантаження резюме учасників** – отримання всіх резюме в архіві(шняга жоска і може містити багів. Головне, щоб в бота не кинули книжку японської філософії (мій птср тупо)).

## Технології

- **Telegraf** – бібліотека для роботи з Telegram API.
- **TypeScript** – основна мова розробки.
- **MongoDB (Mongoose)** – база даних для збереження інформації про користувачів та команди.
- **Express.js** – сервер для роботи з вебхуками Telegram API.
  

## Хто писав 
Взяв бота в Дениса (айтівець BEC'24, tg: `@Malerce933`). Під потреби CTF'24 переробив я (tg: @Polter01). 

У разі питань чи ще щось з радістю відпишу та допоможу!
