# Ablauf

## 1. Lernblock: Grundlagen

- Kurze Einführung: Warum TypeScript? (Björn)
- Vorstellung Fachlichkeit: Blog mit Usern und Posts (Björn)
- `interface`- und `type`-Syntax anhand von `User` (Björn)
- Beispiel: `findUserByName` basteln (Björn)
- `Promise`, `.then` und `await` erklären (Chris)
- `api/user.js` typen (Chris)
- `types.ts` einführen (Chris)
- ALLE: `api/post.js` typen
- Praxis-Retro: Was haben wir gelernt, was war schwierig?

## 2. Lernblock: Class vs Function

- TODO: Sicherheit gewinnen, warum wollen wir Class loswerden?

## 3. Lernblock: Generics und Co

- Kurze Einführung: Was sind Union Types?
- `UserRank` Type einführen
- `getUserRank` typen
- `InternalUser` und `ExternalUser` Type einführen
  - Externe User kriegen richtig nervige Werbung angezeigt
- ALLE: `domain/users/setUserType.js` typen
- ALLE: `domain/users/updateUserRanks.js` typen
- Discriminated Unions erklären

- Kurze Einführung: Was sind Generics, wofür brauchen wir sie?
- `domain/users/formatPhaseNumber.js` typen
- ALLE: `domain/users/getUserNames.js` typen
- Bonus: `domain/dashboard/search.js` typen

- Praxis-Retro: Was haben wir gelernt, was war schwierig?

## 4. Lernblock: Types beim Testen

- Kurze Einführung: Warum sind Testen wichtig und wie helfen Types?
- `domain/users/setUserType.test.ts` füllen
  - Helper-Funktion mit `Partial`
- `domain/users/getUserRank.test.ts` füllen
- ALLE: `domain/users/userService.test.ts` füllen