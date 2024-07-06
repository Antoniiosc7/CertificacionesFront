export interface Opcion {
  opcion: string;
  texto: string;
}

export interface Pregunta {
  id: number;
  pregunta: string;
  codigo?: string;
  opciones: Opcion[];
  respuestasCorrectas: string[];
  explicacion: string;
}
