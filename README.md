## Client

Contains simple react app with sorting and search functionality. Uses created API.

## API

```
GET http://localhost:3001/api/names
```
Returns all names, highest amount first.

```
GET http://localhost:3001/api/names?sort=:sort
Sort options: 
  1. Name_ASC, ascending alphabetical order A->Z
  2. Name_DESC, descending alphabetical order Z->A
  3. Amount_ASC, most popular first
  4. Amount_DESC, least popular first
```

Returns all names in sorted order.

```
GET http://localhost:3001/api/names/:name
```
Returns matching name, case insensitive. 