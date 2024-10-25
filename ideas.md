# `api/post.js -> updatePost`
- Parameter `title` und `body` sind potentiell `undefined`.
- `??` Operator sorgt dafür, dass bei einem Leerstring der Wert geleert wird.