# Capítulo VI - Herramientas de Apoyo a la Prueba

## 6.1 Herramientas de Apoyo a la Prueba

Las **herramientas de prueba** apoyan y facilitan muchas actividades de prueba.

Algunos **ejemplos** son

- **Herramientas de gestión** - aumentan la eficiencia del proceso de prueba facilitando la gestión del CVDS, los requisitos, las pruebas, los defectos y la configuración.
- **Herramientas de prueba estática**: ayudan al probador a realizar revisiones y análisis estáticos.
- **Herramientas de diseño de pruebas e implementación**: facilitan la generación de casos de prueba, datos de prueba y procedimientos de prueba.
- **Herramientas de ejecución de la prueba y de cobertura**: facilitan la ejecución automatizada de la prueba y la medición de la cobertura.
- **Herramientas de pruebas no funcionales** - permiten al probador realizar pruebas no funcionales que son difíciles o imposibles de realizar manualmente
- **Herramientas DevOps** - apoyan la canalización de entrega DevOps, el seguimiento del flujo de trabajo, los procesos de construcción automatizados, IC/EC
- **Herramientas de colaboración** - facilitan la comunicación
- **Herramientas de apoyo a la escalabilidad y la normalización del despliegue** (por ejemplo, máquinas virtuales, herramientas de **contenerización** (ver nota))
- **Cualquier otra herramienta** que ayude en las pruebas (por ejemplo, una hoja de cálculo es una herramienta de prueba en el contexto de las pruebas)

Nota: “contenerización” es la traducción del término “containerization”. Esta traducción no es definitiva.

## 6.2 Ventajas y Riesgos de la Automatización de la Prueba

**La mera adquisición de una herramienta no garantiza el éxito.**

Cada nueva herramienta requerirá un esfuerzo para lograr beneficios reales y duraderos (por ejemplo, para la introducción de la herramienta, el mantenimiento y la formación).

También existen algunos riesgos, que necesitan análisis y mitigación.

Entre los **beneficios** potenciales de utilizar la automatización de la prueba se incluyen:

- **Ahorro de tiempo** al reducir el trabajo manual repetitivo (por ejemplo, ejecutar pruebas de regresión, volver a introducir los mismos datos de prueba, comparar los resultados esperados frente a los resultados reales y cotejarlos con los estándares de codificación).
- **Prevención de errores humanos** simples gracias a una mayor consistencia y repetibilidad (por ejemplo, las pruebas se obtienen de forma coherente a partir de los requisitos, los datos de prueba se crean de forma sistemática y las pruebas se ejecutan mediante una herramienta en el mismo orden y con la misma frecuencia).
- **Evaluación más objetiva** (por ejemplo, la cobertura) y proporcionar medidas que son demasiado complicadas de obtener para los humanos
- **Acceso más fácil a la información** sobre pruebas para apoyar la gestión de pruebas y la elaboración de informes de pruebas (por ejemplo, estadísticas, gráficos y datos agregados sobre el avance de las pruebas, las tasas de defectos y la duración de la ejecución de las pruebas).
- **Tiempos de ejecución de pruebas reducidos** para proporcionar una detección de defectos más temprana, una retroalimentación más rápida y un tiempo de comercialización más rápido
- **Más tiempo para que los probadores diseñen pruebas nuevas**, más profundas y más eficaces

Entre los **riesgos** potenciales de utilizar la automatización de la prueba se incluyen:

- **Expectativas poco realistas** sobre las ventajas de una herramienta (incluidas la funcionalidad y la facilidad de uso).
- **Estimaciones imprecisas del tiempo, los costes y el esfuerzo necesarios para introducir una herramienta**, mantener los guiones de prueba y cambiar el proceso de prueba manual existente.
- **Utilizar una herramienta de prueba cuando la prueba manual es más apropiada**.
- **Confiar demasiado en una herramienta**, por ejemplo, ignorando la necesidad del pensamiento crítico humano.
- **La dependencia del proveedor de la herramienta**, que puede quebrar, retirar la herramienta, venderla a otro proveedor o proporcionar un soporte deficiente (por ejemplo, respuestas a consultas, actualizaciones y corrección de defectos).
- **Utilizar un software de código abierto** que puede estar abandonado, lo que significa que no hay más actualizaciones disponibles, o sus componentes internos pueden requerir actualizaciones bastante frecuentes como desarrollo posterior.
- **La herramienta de automatización no es compatible** con la plataforma de desarrollo.
- **Elección de una herramienta inadecuada** que no cumpla los requisitos reglamentarios y/o los estándares de seguridad física.
