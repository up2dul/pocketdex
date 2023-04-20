interface IPokemonTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemon {
  name: string;
  height: number;
  weight: number;
  types: IPokemonTypes[];
}
