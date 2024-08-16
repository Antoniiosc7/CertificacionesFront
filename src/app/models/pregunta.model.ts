export interface Pregunta {
  id: number;
  pregunta: string;
  codigo: string | null;
  opcion1: string;
  opcion2: string;
  opcion3: string | null;
  opcion4: string | null;
  opcion5: string | null;
  opcion6: string | null;
  opcion7: string | null;
  opcion8: string | null;
  opcion9: string | null;
  opcion10: string | null;
  respuestasCorrectas: string[];
  explicacion: string;
  examen: {
    examenId: number;
    chapter: string;
    nombre: string;
    descripcion: string;
    certificacion: {
      id: number;
      nombre: string;
      descripcion: string;
      codCertificacion: string;
      imgUrl: string;
    };
  };
}
