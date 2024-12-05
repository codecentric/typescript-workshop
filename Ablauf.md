# Ablauf

## 1. Lernblock: Grundlagen

- Kurze Abfragen: Wer hat schon Erfahrung mit TypeScript? (Björn)
- Kurze Einführung: Warum TypeScript? (Björn)
- Vorstellung Fachlichkeit: Blog mit Usern und Posts (Björn)
- `interface`- und `type`-Syntax anhand von `User` (Björn)
  - Kurze Beispiele - `interface` als Go-To nennen
- Beispiel: `findUserByName` basteln (Björn)
  - Kein Union-Type, sondern Placeholder-User nutzen
- `Promise`, `.then` und `await` erklären (Chris)
- `api/user.js` typen (Chris)
  - `filterWebsite` als Optional-Beispiel
- `types.ts` einführen (Chris)
- ALLE: `api/post.js` typen

- Praxis-Retro: Was haben wir gelernt, was war schwierig?

## 2. Lernblock: Class vs Function

- Wer nutzt denn gerne Klassen in JavaScript?
- TODO: Kurze Einführung: Was sind Klassen?
- `class User` in Type überführen
- `domain/users/userService.js` typen
- `domain/users/userService.js` `class` entfernen
  - Stateless-Funktion und State in "Komponente" auslagern
- ALLE: `domain/posts/postService.js` typen + `class` entfernen

- Praxis-Retro: Was haben wir gelernt, was war schwierig?

## 3. Lernblock: Generics und Co

- Kurze Einführung: Was sind Union Types?
- `UserRank` Type einführen
  - `enum` vs String-Literal-Union (`enum` kann als Wert genutzt werden)
- `getUserRank` typen
- `InternalUser` und `ExternalUser` Type einführen
  - Externe User kriegen richtig nervige Werbung angezeigt
- ALLE: `domain/users/setUserType.js` typen
- ALLE: `domain/users/updateUserRanks.js` typen
- Discriminated Unions erklären

- Wer kennt Generics?
- Kurze Einführung: Was sind Generics, wofür brauchen wir sie?
- `domain/users/formatPhaseNumber.js` typen
- ALLE: `domain/users/getUserNames.js` typen
- Bonus: `domain/dashboard/search.js` typen
- (`any` vs `unknown` vs `never` erklären)

- Praxis-Retro: Was haben wir gelernt, was war schwierig?

## 4. Lernblock: Types beim Testen

- Wer schreibt gerne Tests?
- Kurze Einführung: Warum sind Testen wichtig und wie helfen Types?
- `domain/users/setUserType.test.ts` füllen
  - Helper-Funktion mit `Partial`
  - Default-Wert erklären
- `domain/users/getUserRank.test.ts` füllen
  - Mocken erklären und `typeof <function>`-Syntax
- ALLE: `domain/users/userService.test.ts` füllen

- Praxis-Retro: Was haben wir gelernt, was war schwierig?

## 5. Lernblock: Tooling

- TypeScript
  - `strict: true` - TypeScript richtig nutzen
  - `noEmit: true` - `tsc` nur für Typ-Prüfung, `vite` für Build
  - `noImplicitAny: true` - Implizite `any` vermeiden
- ESLint
  - Unabhängig von TypeScript
  - `@typescript-eslint`-Plugin bringt die wichtigsten Regeln für TypeScript mit
    - `"@typescript-eslint/explicit-function-return-type": "error"` - Funktionen müssen immer einen expliziten Rückgabewert haben
  - Hilft dabei, Framework-Regeln einzuhalten (z.B. React-Hooks)
  - Erlaubt durch import-Regeln, dass Projekt-Bereiche nicht aufeinander zugreifen dürfen
- `@types/<dependency>`
  - `const a: Type = callJavaScriptFunctionWithoutTypes()`
  - Externe Typ-Definitionen, weil manche Projekte keine Typen mitliefern
  - `type.d.ts` Dateien
  - (`ReturnType<typeof function>` - ReturnType von einer Funktion ermitteln)
  - (`export type StatusId = (typeof Status)[keyof typeof Status]["id"];`)
