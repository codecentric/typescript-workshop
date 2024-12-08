# Ablauf

## 1. Lernblock: Grundlagen

- Kurze Abfragen: Wer hat schon Erfahrung mit TypeScript? (Björn)
- Kurze Einführung: Warum TypeScript? (Björn)
- Vorstellung Fachlichkeit: Blog mit Usern und Posts (Björn)
- Primitive Typen in JavaScript erklären
- `interface`- und `type`-Syntax anhand von `User` (Björn)
    - `types.ts` einführen
    - Kurze Beispiele - `interface` als Go-To nennen
- Beispiel: `findUserByName` basteln (Björn)
    - Kein Union-Type, sondern Placeholder-User nutzen (`| undefined` verhindern)
- `Promise`, `.then` und `await` erklären (Chris)
- `api/01_user.js` typen (Chris)
    - `filterWebsite` als Optional-Beispiel
- ALLE: `api/01_post.js` typen

- Praxis-Retro: Was haben wir gelernt, was war schwierig?

## 2. Lernblock: Class vs Function

- Wer nutzt denn gerne Klassen in JavaScript? (Björn)
- Kurze Einführung: Was sind Klassen? (Björn)
- `class User` in Type überführen (Chris)
- `domain/users/02_userService.js` typen (Chris)
- `domain/users/02_userService.js` `class` entfernen (Chris)
    - Stateless-Funktion und State in "Komponente" auslagern
- ALLE: `domain/posts/02_postService.js` typen + `class` entfernen

- Praxis-Retro: Was haben wir gelernt, was war schwierig?

## 3. Lernblock: Generics und Co

- Kurze Einführung: Was sind Union Types? (Björn)
    - `?.` und `!.` erklären
- `UserRank` Type einführen (Björn)
    - `enum` vs String-Literal-Union (`enum` kann als Wert genutzt werden)
- `domain/users/03_getUserRank.js` typen (Björn)
- `InternalUser` und `ExternalUser` Type einführen (Björn)
    - Externe User kriegen richtig nervige Werbung angezeigt
- `domain/users/03_setUserType.js` typen (Björn)
    - Discriminated Unions erklären
    - Casten mit `as` (KEIN `as unknown` nutzen!)
- ALLE: `domain/users/03_updateUserRanks.js` typen

- Wer kennt Generics? (Chris)
- Kurze Einführung: Was sind Generics, wofür brauchen wir sie? (Chris)
- `domain/users/03_formatPhoneNumber.js` typen (Chris)
- ALLE: `domain/users/03_getUserNames.js` typen
- Bonus: `domain/dashboard/03_search.js` typen

- Praxis-Retro: Was haben wir gelernt, was war schwierig?

- `any` (vs `unknown` vs `never`) erklären

## 4. Lernblock: Types beim Testen

- Wer schreibt gerne Tests? (Chris)
- Kurze Einführung: Warum sind Testen wichtig und wie helfen Types? (Chris)
- `domain/users/04_setUserType.test.ts` füllen (Chris)
    - Helper-Funktion mit `Partial`
    - Default-Wert erklären
- `domain/users/04_getUserRank.test.ts` füllen (Björn)
    - Mocken erklären und `typeof <function>`-Syntax
- ALLE: `domain/users/04_updateUserRanks.test.ts` füllen

- Praxis-Retro: Was haben wir gelernt, was war schwierig?

## 5. Lernblock: Tooling

- TypeScript (Chris)
    - `strict: true` - TypeScript richtig nutzen
    - `noEmit: true` - `tsc` nur für Typ-Prüfung, `vite` für Build
    - `noImplicitAny: true` - Implizite `any` vermeiden
- ESLint (Björn)
    - Unabhängig von TypeScript
    - `@typescript-eslint`-Plugin bringt die wichtigsten Regeln für TypeScript mit
        - `"@typescript-eslint/explicit-function-return-type": "error"` - Funktionen müssen immer einen expliziten Rückgabewert haben
    - Hilft dabei, Framework-Regeln einzuhalten (z.B. React-Hooks)
    - Erlaubt durch import-Regeln, dass Projekt-Bereiche nicht aufeinander zugreifen dürfen
- `@types/<dependency>` (Chris)
    - `const a: Type = callJavaScriptFunctionWithoutTypes()`
    - Externe Typ-Definitionen, weil manche Projekte keine Typen mitliefern
    - `type.d.ts` Dateien
    - (`ReturnType<typeof function>` - ReturnType von einer Funktion ermitteln)
    - (`export type StatusId = (typeof Status)[keyof typeof Status]["id"];`)
