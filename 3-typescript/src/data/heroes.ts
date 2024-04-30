interface Hero {
  id: number,
  name: string,
  owner: string,
}

export const heroes: Hero[] = [
  { id: 1, name: "Saitama", owner: "Manga" },
  { id: 2, name: "Flash", owner: "DC" },
  { id: 3, name: "Spiderman", owner: "Marvel" },
];