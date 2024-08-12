import {Examen} from "./examen.model";

export interface PreguntasDTO {
  id: number;
  pregunta: string;
  codigo: string;
  opcion1: string;
  opcion2: string;
  opcion3?: string;
  opcion4?: string;
  opcion5?: string;
  opcion6?: string;
  opcion7?: string;
  opcion8?: string;
  opcion9?: string;
  opcion10?: string;
  examen: Examen;
}
