# Learnings

## 1. Lernblock: Grundlagen

- TypeScript erhöht die Code-Qualität
- Wichtig: TypeScript existiert nicht zur Laufzeit
- `interface` vs `type`
    - Beides beinahe gleich mächtig
    - `type` als "Alias"
    - `interface` für Objekte
- `async/await` für Asynchronität

## 2. Lernblock Class vs Function

- Klassen sind sehr selten notwendig
- Funktionen sind stateless und dadurch insgesamt flexibler

## 3. Lernblock: Generics und Co

- Union Types mit `string | number | null`
- `enum` ist JS und kann deshalb als Wert genutzt werden
- Discriminated Unions = Union-Werte spezifisch nutzen
- Generics = Typen dynamisch halten (selten notwendig)

## 4. Lernblock: Types beim Testen

- Tests sind wichtig, um Code-Qualität zu sichern und Bugs langfristig zu verhindern
- In Tests kann mit `as X` gecastet werden, um unvollständige Werte zu erlauben
- `Partial` mit Helper-Funktionen
- Mocking:
    - `vi.mock`
    - `const someFunctionMock = vi.mock<typeof someFunction>(someFunction);`
    - `someFunctionMock.mockResolvedValue(...)`

## 5. Lernblock: Tooling
