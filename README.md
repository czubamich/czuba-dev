# Czuba Dev Portfolio

Osobista strona portfolio. Statyczny build React (Vite) deployowany na Cloudflare Pages.

## Dev lokalnie

```sh
npm install
npm run dev
```

Vite serwuje na `http://localhost:5173`. `config.json` jest pobierany z `public/config.json` — brak pliku = fallback z `src/config.ts`.

## Build

```sh
npm run build
```

Wyjście: `dist/` — statyczne pliki gotowe do deployu.

## Deploy (Cloudflare Pages)

W CF Pages dashboard:

| Ustawienie | Wartość |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `NODE_VERSION=20` (zmienna env) |

Połącz z repozytorium GitHub → auto-deploy na każdy push do `main`.

## Konfiguracja

Edytuj `public/config.json`:

| Pole | Typ | Opis |
|---|---|---|
| `name` | string | Imię i nazwisko |
| `location` | string | Miasto / kraj |
| `careerStartYear` | number | Rok startu kariery — lata liczone dynamicznie |
| `email` | string | Adres e-mail do kontaktu |
| `github` | string | Nazwa użytkownika GitHub |
| `linkedin` | string | Slug profilu LinkedIn (po `/in/`) |
| `photoUrl` | string | Nazwa pliku zdjęcia w `public/` (np. `profile.jpg`); pusty = inicjały |
| `accentHue` | number (0–360) | Hue dla koloru akcentu (oklch) |
| `defaultLanguage` | `pl` / `en` | Domyślny język przy pierwszej wizycie |
| `showEducation` | boolean | Pokaż sekcję wykształcenia |
| `openToWork` | boolean | Pokaż badge "Otwarty na rozmowy" |

Zmiana config → commit → auto-deploy. Bez rebuildu ręcznego.

## Zdjęcie

Wrzuć plik (np. `profile.jpg`) do `public/` i ustaw `photoUrl` w `config.json`. Brak pliku → inicjały.

## i18n

Teksty w `src/i18n/pl.json` i `src/i18n/en.json`. Zmiana tekstu wymaga rebuildu. Użytkownik przełącza język w UI (zapisywane w `localStorage`).
