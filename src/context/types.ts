export type HouseType = "gryffindor" | "slytherin" | "hufflepuff" | "ravenclaw";
export interface ThemeContextProps {
  house: HouseType;
  setHouse: (house: HouseType) => void;
}
