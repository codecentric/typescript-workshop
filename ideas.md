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
  >   type: "INTERNAL_USER";
  > }
  > interface ExternalUser {
  >   name: string;
  >    type: "EXTERNAL_USER";
  > }


# Handout/Zusammenfassung

- Ein Cheat-Cheat drucken, mit den Key-Learnings des Workshops.
