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
  >   name: string;
  >   type: "INTERNAL";
  > }
  > interface ExternalUser {
  >   name: string;
  >   type: "EXTERNAL";
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
   - TODO: ALLE ???
3. Lernblock: Generics und Co
   - domain/user.js -> getUserRank
   - domain/advancedUserService.js -> updateUserRanks
   - domain/user.js -> formatPhoneNumber
   - ALLE: domain/user.js -> mapUserData + getUserNames (+ search.js)
4. Lernblock: Types beim Testen
   - TODO: ???
5. Lernblock: Tooling
   - TODO: ???

# Handout/Zusammenfassung

- Ein Cheat-Cheat drucken, mit den Key-Learnings des Workshops.
