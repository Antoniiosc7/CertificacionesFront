import {Examen} from "./examen.model";

export interface RespuestasDTO {
  id: number;
  respuestasCorrectas: string;
  explicacion: string;
  examen: Examen;
}
