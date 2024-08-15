//export const BASE_URL = 'localhost';
//export const API_PORT = '8080';
//export const PROTOCOLO = 'http';
export const BASE_URL = 'certs.antoniosaborido.es';
export const API_PORT = '8443';
export const PROTOCOLO = 'https';

export const API_URL = `${PROTOCOLO}://${BASE_URL}:${API_PORT}`;
export const wsURL = `ws://${BASE_URL}:${API_PORT}/wss`;

// ROUTINGS

export const JAVA_DOCS = 'certificacion/javaCert/docs';
export const ISTQB_DOCS = 'certificacion/istqbCert/docs';

// Version
export const VERSIONTEXT = "beta javaCert-project | v.0.3.1"
