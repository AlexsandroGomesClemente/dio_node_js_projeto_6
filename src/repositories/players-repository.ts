import { PlayerIntaface } from "../interfaces/players-interface";

const database: PlayerIntaface[] = [
  { id: 1, name: "Messi" },
  { id: 2, name: "Ronaldo" },
];

export const findAllPlayer = async (): Promise<PlayerIntaface[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerIntaface | undefined> => {
  return database.find((player) => player.id === id);
};
