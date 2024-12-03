# `domain/post.js -> updatePost`

- Parameter `title` und `body` sind potentiell `undefined`.
- `??` Operator sorgt dafür, dass bei einem Leerstring der Wert geleert wird.

# `domain/post -> createNewPost`

- `never` Type bei Error

# `domain/user -> getUserRank`

- Enum `UserRank` vs String-Literal-Union
- `UserService.getUserRank` mit Bug, dass `await` vor `this.loadUser` fehlt.
- Zeigen wie wir mit discriminated Unions die richtige Funktion aufrufen (siehe TODO)
    > interface InternalUser {
    > name: string;
    > type: "INTERNAL";
    > }
    > interface ExternalUser {
    > name: string;
    > type: "EXTERNAL";
    > }
- formatPhoneNumber für Generics
    - Es geht ein Internal oder External User rein und kommt entsprechend wieder raus.
    - Wenn wir dem Generic ein `extends {phone: string}` machen, dann ist es total egal, was reingeht, solange es ein `phone` hat (User, Company, Deparment, ...).
    - Es nennt sich _type argument inference_, wenn wir den Typen nicht explizit angeben müssen.
    - Theoretisch können wir auch ein `interface PhoneAble { phone: string }` machen und das als Type-Argument übergeben. Aber dadurch verlieren wir den Return-Type.
- `domain/search.js`
    - Bonusaufgabe das korrekt mit Generics zu typen.

# Ablauf gemäß Dateien

1. Lernblock: Grundlagen
    - Promises und async/await
    - .js -> .ts
    - api/user.js
    - types.ts
    - ALLE: api/post.js
2. Lernblock: Class vs Function
    - Class als Datenstruktur in Type überführen (class User)
    - domain/userService.js typen
    - domain/userService.js class entfernen
    - ALLE: domain/postService.js typen + class entfernen
    - Bonus: dashboard.js typen // TODO: Noch mehr hinzufügen?
3. Lernblock: Generics und Co
    - domain/getUserRank.js -> UserRank Type einführen und auch für getUserRank nutzen
    - InternalUser und ExternalUser Type einführen
    - ALLE: domain/setUserType.js
    - ALLE: domain/updateUserRanks.js -> User um `rank` erweitern
    - domain/formatPhoneNumber.js (brauchen wir das noch?)
    - ALLE: domain/user.js -> mapUserData + getUserNames
    - Bonus: domain/search.js
    - `any` vs `unknown` vs `never` erklären
4. Lernblock: Types beim Testen
    - TODO: ???
    - Test-Cases vorschreiben
    - Partial erklären
    - `as X`
    - Mocks
5. Lernblock: Tooling
    - TODO: ???
    - TypeScript
        - `strict: true` - TypeScript richtig nutzen
        - `noEmit: true` - `tsc` nur für Typ-Prüfung, `vite` für Build
        - `noImplicitAny: true` - Implizite `any` vermeiden
    - `@types/<dependency>`
        - `const a: Type = callJavaScriptFunctionWithoutTypes()`
        - Externe Typ-Definitionen, weil manche Projekte keine Typen mitliefern
        - (`ReturnType<typeof function>` - ReturnType von einer Funktion ermitteln)
        - (`export type StatusId = (typeof Status)[keyof typeof Status]["id"];`)
        - TODO: `type.d.ts` Dateien???
    - ESLint
        - Unabhängig von TypeScript
        - `@typescript-eslint`-Plugin bringt die wichtigsten Regeln für TypeScript mit
        - Hilft dabei, Framework-Regeln einzuhalten (z.B. React-Hooks)
        - Erlaubt durch import-Regeln, dass Projekt-Bereiche nicht aufeinander zugreifen dürfen
        -

- Offene TODOs:
    - Brauchen wir eine kurze Übersicht, zu unserer Domain?
    - Brauchen wir Sub-Dirs in /domain?
    - Brauchen wir `domain/post.js`?
    - `Promise`, `.then` und `await` behandeln
    - Svelt und Immutable bzw. Re-Render bei State-Änderungen
    - `bun check` auf `main` grün machen
    - `type` vs `interface` (für uns gerade ziehen im Code)

# Handout/Zusammenfassung

- Ein Cheat-Sheet drucken, mit den Key-Learnings des Workshops?
