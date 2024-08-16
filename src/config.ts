import { environment } from './environment/environment';

export const BASE_URL = environment.BASE_URL;
export const API_PORT = environment.API_PORT;
export const PROTOCOLO = environment.PROTOCOLO;

export const API_URL = `${PROTOCOLO}://${BASE_URL}:${API_PORT}`;

// ROUTINGS

export const JAVA_DOCS = 'certificacion/javaCert/docs';
export const ISTQB_DOCS = 'certificacion/istqbCert/docs';

// Version
export const VERSIONTEXT = "beta javaCert-project | v.0.3.2";
