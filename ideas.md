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
    - .js -> .ts
    - api/users.js
    - types.ts
    - ALLE: api/post.js
2. Lernblock: Class vs Function
    - Class als Datenstruktur in Type überführen (class User)
    - domain/userService.js
    - ALLE: domain/postService.js typen
    - Bonus: dashboard.js typen
3. Lernblock: Generics und Co
    - domain/user.js -> getUserRank
    - domain/advancedUserService.js -> updateUserRanks
    - domain/user.js -> formatPhoneNumber
    - ALLE: domain/user.js -> mapUserData + getUserNames (+ search.js)
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

- Dinge die fehlen
    - `Promise`, `.then` und `await` behandeln
    - Svelt und Immutable bzw. Re-Render bei State-Änderungen

# Handout/Zusammenfassung

- Ein Cheat-Sheet drucken, mit den Key-Learnings des Workshops?
