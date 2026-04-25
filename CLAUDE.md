# Deploy

Cloudflare Pages — auto-deploy na każdy push do `main`.

## Ustawienia CF Pages dashboard

| Ustawienie | Wartość |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `NODE_VERSION=20` (zmienna env) |

## Konfiguracja (`public/config.json`)

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

Teksty w `src/i18n/pl.json` i `src/i18n/en.json`. Zmiana tekstu wymaga rebuildu.
