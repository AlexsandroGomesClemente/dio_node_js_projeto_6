import * as PlayerRepository from "../repositories/players-repository";
import { HttpResponseInterface } from "../interfaces/http-response-interface";
import { noContent, ok } from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayer();
  let response: HttpResponseInterface;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};
