# `api/post.js -> updatePost`
- Parameter `title` und `body` sind potentiell `undefined`.
- `??` Operator sorgt dafür, dass bei einem Leerstring der Wert geleert wird.
- TODO: existingPost kann `undefined` sein und muss gehandelt werden.

# `domain/post -> createNewPost`
- `never` Type bei Error

# `domain/user -> getUserRank`
- Enum `UserRank` vs String-Literal-Union

# Handout/Zusammenfassung

- Ein Cheat-Cheat drucken, mit den Key-Learnings des Workshops.
