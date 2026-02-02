# Instrukcja zarządzania produktami

## Spis treści
1. [Logowanie do panelu](#logowanie-do-panelu)
2. [Edycja produktu](#edycja-produktu)
3. [Dodawanie nowego produktu](#dodawanie-nowego-produktu)
4. [Usuwanie produktu](#usuwanie-produktu)
5. [Zarządzanie obrazami](#zarządzanie-obrazami)

---

## Logowanie do panelu

1. Wejdź na stronę: `https://blastserv.pl/admin/`
2. Kliknij **"Login with Netlify Identity"**
3. Wprowadź swój email i hasło
4. Po zalogowaniu zobaczysz panel zarządzania treścią

---

## Edycja produktu

### Krok 1: Wybierz język
W menu bocznym wybierz:
- **Products (English)** → dla wersji angielskiej
- **Products (Polish)** → dla wersji polskiej

### Krok 2: Otwórz plik treści
Kliknij na **"English Content"** lub **"Polish Content"**

### Krok 3: Znajdź produkt
Rozwiń sekcję **"Products Section"** → **"Products"**
Znajdź produkt, który chcesz edytować i kliknij na niego.

### Krok 4: Edytuj pola
Możesz edytować następujące pola:
- **Slug (URL path)** - adres URL produktu (np. `shot-blasting-machine`)
- **Title** - nazwa produktu
- **Product Image** - zdjęcie produktu (kliknij aby zmienić)
- **Short Description** - krótki opis widoczny na liście produktów
- **Full Description** - pełny opis na stronie produktu
- **Specifications** - specyfikacje techniczne (etykieta + wartość)

### Krok 5: Zapisz zmiany
Kliknij przycisk **"Publish"** w prawym górnym rogu.

> ⚠️ **Uwaga:** Po opublikowaniu zmian, strona zostanie automatycznie przebudowana. Zajmie to około 2-3 minuty.

---

## Dodawanie nowego produktu

### Krok 1: Przygotuj obraz
- Zalecany format: JPEG lub PNG
- Zalecany rozmiar: minimum 800x600 pikseli
- Nazwa pliku: bez polskich znaków i spacji (np. `nowy-produkt.jpg`)

### Krok 2: Dodaj produkt w CMS

1. Wejdź do **Products (Polish)** → **Polish Content**
2. Rozwiń **Products Section** → **Products**
3. Kliknij przycisk **"Add Products"** (na dole listy)
4. Wypełnij wszystkie pola:
   - **Slug** - np. `nowy-produkt` (tylko małe litery, myślniki zamiast spacji)
   - **Title** - np. `Nowy Produkt`
   - **Product Image** - kliknij i prześlij zdjęcie produktu
   - **Short Description** - krótki opis
   - **Full Description** - pełny opis
   - **Specifications** - kliknij "Add Specifications" aby dodać specyfikacje
5. Kliknij **"Publish"**
6. **Powtórz dla wersji angielskiej** (Products English)

> ✅ **Teraz obrazy można przesyłać bezpośrednio przez panel CMS!**

---

## Usuwanie produktu

### Krok 1: Usuń treść z CMS

1. Wejdź do **Products (Polish)** → **Polish Content**
2. Rozwiń **Products Section** → **Products**
3. Znajdź produkt do usunięcia
4. Kliknij ikonę **kosza** obok produktu lub usuń cały obiekt
5. Kliknij **"Publish"**
6. **Powtórz dla wersji angielskiej**

> ⚠️ **Uwaga:** Obrazy produktów pozostaną w folderze `public/products/`. Można je usunąć ręcznie później.

---

## Zarządzanie obrazami

### Jak zmienić obraz produktu

1. W panelu CMS otwórz produkt do edycji
2. Kliknij na pole **"Product Image"**
3. Wybierz jedną z opcji:
   - **Upload** - prześlij nowy obraz z komputera
   - **Choose an existing** - wybierz istniejący obraz
4. Kliknij **"Publish"**

### Gdzie są przechowywane obrazy?

Obrazy przesłane przez CMS są zapisywane w folderze:
```
public/products/
```

Ten folder jest dostępny publicznie pod adresem `/products/nazwa-pliku.jpg`

### Zalecenia dotyczące obrazów

| Parametr | Zalecenie |
|----------|-----------|
| Format | JPEG (preferowany) lub PNG |
| Rozmiar | Min. 800x600 px |
| Proporcje | 4:3 (szerokość:wysokość) |
| Nazwa pliku | Tylko litery, cyfry, myślniki |
| Wielkość pliku | Max 500KB (optymalizuj przed przesłaniem) |

### Optymalizacja obrazów

Przed przesłaniem zalecamy:
1. Zmniejszyć rozdzielczość do ~1200x900 px
2. Skompresować obraz (np. na stronie [squoosh.app](https://squoosh.app))
3. Używać formatu JPEG dla zdjęć

---

## Rozwiązywanie problemów

### Strona nie aktualizuje się po zmianach
- Poczekaj 2-3 minuty na przebudowanie
- Sprawdź status w Netlify Dashboard → Deploys
- Wyczyść cache przeglądarki (Ctrl+Shift+R)

### Obraz się nie wyświetla
- Sprawdź czy obraz został poprawnie przesłany
- Upewnij się, że nazwa pliku nie zawiera polskich znaków ani spacji
- Sprawdź czy plik nie jest za duży (max ~5MB)

### Build nie powiódł się
Najczęstsze przyczyny:
1. **Brakujące pole** - sprawdź czy wszystkie wymagane pola są wypełnione
2. **Błędny format JSON** - sprawdź czy nie ma literówek w CMS
3. **Niepoprawny slug** - używaj tylko małych liter i myślników

### Nie mogę się zalogować
1. Sprawdź czy masz aktywne konto w Netlify Identity
2. Użyj opcji "Forgot password" aby zresetować hasło
3. Skontaktuj się z administratorem

---

## Kontakt z pomocą techniczną

W przypadku problemów technicznych, skontaktuj się z zespołem deweloperskim, podając:
- Opis problemu
- Zrzut ekranu błędu (jeśli dotyczy)
- Logi z konsoli przeglądarki (F12 → Console)
