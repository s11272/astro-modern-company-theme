# Blastserv – Strona Internetowa

Oficjalna strona internetowa firmy **Blastserv** ([blastserv.pl](https://blastserv.pl)) – dostarczającej przemysłowe systemy obróbki strumieniowo-ściernej (komory śrutownicze, tunele śrutownicze, systemy śrutowania rur), kabiny lakiernicze i do malowania proszkowego, a także kompleksowe usługi serwisowe, konserwacyjne oraz części zamienne.

## Spis treści

- [Stos technologiczny](#stos-technologiczny)
- [Główne funkcjonalności](#główne-funkcjonalności)
- [Uruchomienie lokalne](#uruchomienie-lokalne)
- [Dostępne skrypty](#dostępne-skrypty)
- [Struktura projektu](#struktura-projektu)
- [Zarządzanie treścią (CMS) i wielojęzyczność](#zarządzanie-treścią-cms-i-wielojęzyczność)
- [Wdrożenie (Deployment)](#wdrożenie-deployment)
- [Licencje i podziękowania](#licencje-i-podziękowania)

---

## Stos technologiczny

- **[Astro 5](https://astro.build/)** – generator stron statycznych (SSG) z obsługą `ViewTransitions`
- **[Tailwind CSS](https://tailwindcss.com/)** – stylowanie komponentów oraz zmienne motywów (`src/styles/theme.css`)
- **[React](https://react.dev/) & [React Icons](https://react-icons.github.io/react-icons/)** – interaktywne elementy UI i ikony
- **[TypeScript](https://www.typescriptlang.org/)** – typowanie kodu i walidacja (`@astrojs/check`)
- **[Decap CMS (dawniej Netlify CMS)](https://decapcms.org/) + Netlify Identity** – panel administracyjny do edycji treści i zdjęć
- **[Sharp](https://sharp.pixelplumbing.com/)** – optymalizacja zasobów graficznych
- **Fontsource** – lokalnie ładowane czcionki `Inter` oraz `Merriweather`

---

## Główne funkcjonalności

- **Wielojęzyczność (PL / EN):** Pełna obsługa języka polskiego (`/pl/`) oraz angielskiego (`/en/`). Wejście na stronę główną (`/`) automatycznie przekierowuje użytkownika na polską wersję językową (`/pl/`) lub do panelu `/admin/`, jeśli w adresie URL znajduje się token autoryzacyjny Netlify Identity.
- **Katalog produktów:** Statycznie generowane podstrony produktów (`/[lang]/products/[slug]`) z galerią zdjęć, pełnym opisem oraz tabelą specyfikacji technicznych.
- **Sekcja aktualności:** Statycznie generowane wpisy aktualności (`/[lang]/news/[slug]`) z opisem i galerią zdjęć z realizacji czy wydarzeń branżowych.
- **Prezentacja oferty i firmy:** Sekcje *Hero*, *Key Metrics* (kluczowe wskaźniki), *Usługi* (serwis, konserwacja, części zamienne) oraz *Partnerzy* (logotypy klientów i partnerów).
- **Formularz kontaktowy:** Zintegrowany z usługą [UseBasin](https://usebasin.com/).
- **Panel CMS (`/admin/`):** Edycja wszystkich sekcji strony, produktów oraz aktualności bezpośrednio z poziomu przeglądarki.

---

## Uruchomienie lokalne

### Wymagania wstępne

- **Node.js** (zalecana wersja 18.x lub nowsza)
- **npm**

### Instalacja krok po kroku

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/s11272/astro-modern-company-theme.git
   cd astro-modern-company-theme
   ```

2. Zainstaluj zależności:
   ```bash
   npm install
   ```

3. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```

4. Otwórz przeglądarkę pod adresem `http://localhost:4321`.

---

## Dostępne skrypty

W pliku `package.json` zdefiniowano następujące polecenia:

| Polecenie | Opis |
| :--- | :--- |
| `npm run dev` / `npm start` | Uruchamia lokalny serwer deweloperski Astro (`http://localhost:4321`) |
| `npm run build` | Wykonuje sprawdzenie typów (`astro check`) i buduje produkcyjną wersję strony do katalogu `dist/` |
| `npm run preview` | Uruchamia lokalny podgląd zbudowanej wersji produkcyjnej z katalogu `dist/` |
| `npm run astro` | Uruchamia interfejs CLI Astro |

---

## Struktura projektu

```text
├── docs/
│   └── INSTRUKCJA_PRODUKTY.md       # Instrukcja obsługi panelu CMS dla administratorów
├── public/
│   ├── admin/
│   │   ├── config.yml               # Konfiguracja kolekcji i pól Decap CMS
│   │   └── index.html               # Punkt wejściowy panelu administracyjnego (/admin/)
│   ├── products/                    # Zdjęcia produktów i aktualności zarządzane przez CMS
│   └── favicon.svg
├── src/
│   ├── assets/                      # Statyczne zasoby graficzne (logo firmy, logotypy partnerów, zdjęcia)
│   │   ├── logos/                   # Logotypy partnerów biznesowych
│   │   └── products/                # Dodatkowe zasoby graficzne produktów
│   ├── components/                  # Komponenty Astro
│   │   ├── ContactForm.astro        # Formularz kontaktowy
│   │   ├── Footer.astro             # Stopka strony
│   │   ├── Header.astro             # Nawigacja i przełącznik języka
│   │   ├── Hero.astro               # Sekcja powitalna O nas
│   │   ├── KeyMetrics.astro         # Kluczowe liczby i wskaźniki jakości
│   │   ├── News.astro               # Lista aktualności na stronie głównej
│   │   ├── Partners.astro           # Karuzela / siatka logotypów partnerów
│   │   ├── Products.astro           # Katalog produktów na stronie głównej
│   │   └── Services.astro           # Sekcja usług (Serwis, Konserwacja, Części zamienne)
│   ├── i18n/                        # Konfiguracja wielojęzyczności i pliki treści
│   │   ├── pl.json                  # Treści strony, produktów i aktualności (Język polski)
│   │   ├── en.json                  # Treści strony, produktów i aktualności (Język angielski)
│   │   ├── ui.ts                    # Rejestr języków i eksport słowników
│   │   └── utils.ts                 # Funkcje pomocnicze do wykrywania języka i tłumaczeń
│   ├── layouts/                     # Szablony stron
│   │   ├── Layout.astro             # Główny szablon strony (meta tagi, czcionki, Netlify Identity)
│   │   ├── ProductLayout.astro      # Szablon widoku szczegółów produktu
│   │   └── NewsLayout.astro         # Szablon widoku szczegółów aktualności
│   ├── pages/                       # Routing Astro
│   │   ├── index.astro              # Przekierowanie na /pl/ lub /admin/ (obsługa tokenów Netlify)
│   │   ├── pl/index.astro           # Strona główna (PL)
│   │   ├── en/index.astro           # Strona główna (EN)
│   │   └── [lang]/
│   │       ├── products/[slug].astro # Dynamicznie generowane strony produktów (PL/EN)
│   │       └── news/[slug].astro     # Dynamicznie generowane strony aktualności (PL/EN)
│   └── styles/
│       └── theme.css                # Zmienne CSS kolorystyki i motywu Blastserv
├── astro.config.mjs                 # Konfiguracja Astro (Tailwind, React, Sharp, i18n)
├── tailwind.config.mjs              # Konfiguracja Tailwind CSS
├── tsconfig.json                    # Konfiguracja TypeScript
├── THIRD_PARTY_NOTICES.md           # Informacje o autorach i licencjach kodu zewnętrznego
└── package.json
```

---

## Zarządzanie treścią (CMS) i wielojęzyczność

Wszystkie teksty na stronie, lista produktów, specyfikacje techniczne oraz aktualności znajdują się w plikach JSON:
- `src/i18n/pl.json` – wersja polska
- `src/i18n/en.json` – wersja angielska

### Edycja przez panel administracyjny (Decap CMS)
1. Panel dostępny jest pod adresem `/admin/` (np. `https://blastserv.pl/admin/`).
2. Uwierzytelnianie odbywa się za pomocą **Netlify Identity** oraz **Git Gateway** (każda publikacja w CMS zapisuje commit bezpośrednio do gałęzi `main` w repozytorium).
3. Przesyłane przez CMS zdjęcia trafiają do katalogu `public/products/` i są serwowane ze ścieżki `/products/...`.
4. Szczegółowa instrukcja krok po kroku dotycząca dodawania, edycji i usuwania produktów znajduje się w pliku [docs/INSTRUKCJA_PRODUKTY.md](docs/INSTRUKCJA_PRODUKTY.md).

---

## Wdrożenie (Deployment)

Projekt jest przystosowany do hostingu na platformie **Netlify**:
- **Polecenie budowania (Build command):** `npm run build`
- **Katalog publikacji (Publish directory):** `dist`
- **Wymagane usługi Netlify:** włączone *Netlify Identity* oraz *Git Gateway* do poprawnego działania panelu CMS pod adresem `/admin/`.