# Changelog

## [0.2.0] - 2026-04-25

### Changed
- Migracja z Home Assistant addon na Cloudflare Pages.
- Konfiguracja przez `public/config.json` zamiast runtime bashio injection.
- Usunięto: Dockerfile, nginx.conf, run.sh, config.yaml, .dockerignore.
- Dodano: `public/_redirects` (SPA routing na CF Pages).



## [0.1.0] - 2026-04-23

### Added
- Pierwsza wersja strony portfolio jako Home Assistant addon.
- Sekcje: Hero, O mnie, Stack, Kontakt.
- Konfiguracja przez opcje addonu (imię, tagline, linki, kolor akcentu, zdjęcie).
- Dynamicznie liczone lata doświadczenia z `career_start_year`.
- Opcjonalna sekcja wykształcenia (`show_education`).
- Flaga `open_to_work` pokazująca status dostępności.
- Nginx z gzip, długim cache dla hashowanych assetów, bez cache dla `config.json`.
