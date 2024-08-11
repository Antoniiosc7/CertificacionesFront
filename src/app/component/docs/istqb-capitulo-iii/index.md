# Capítulo III - Prueba Estática

## 3.1 Prueba Estática - Fundamentos

A diferencia de la prueba dinámica, **en la prueba estática no es necesario ejecutar el software** sujeto a prueba.

El código, la especificación del proceso, la especificación de la arquitectura del sistema u otros productos de trabajo se evalúan mediante

- un examen manual (por ejemplo, revisiones) o
- con la ayuda de una herramienta (por ejemplo, el análisis estático).

Los objetivos de prueba incluyen

- la mejora de la calidad,
- la detección de defectos
- y la evaluación de características como la legibilidad, la completitud, la corrección, la capacidad de ser probado y la consistencia.

**La prueba estática puede aplicarse tanto para la verificación como para la validación.**

Los probadores, los representantes de negocio y los desarrolladores **trabajan juntos** durante

- los mapeos de ejemplos,
- la redacción colaborativa de historias de usuario
- y las sesiones de refinamiento de la lista de tareas pendientes

para asegurar que las historias de usuario y los productos de trabajo relacionados cumplen los criterios definidos, por ejemplo, la definición de preparado (véase la sección 5.1.3).

Pueden aplicarse **técnicas de revisión** para asegurar que las historias de usuario están completas y son comprensibles y que incluyen criterios de aceptación comprobables.

Haciendo las **preguntas adecuadas**, los probadores exploran, cuestionan y ayudan a mejorar las historias de usuario propuestas.

**El análisis estático** puede

- identificar problemas antes de la prueba dinámica
- y suele requerir un menor esfuerzo, ya que no se necesitan casos de prueba y suelen utilizarse herramientas (véase el capítulo 6).

El análisis estático suele incorporarse a los marcos de IC (véase la sección 2.1.4).

Aunque se utiliza en gran medida para detectar defectos específicos del código, el análisis estático también se emplea para evaluar la mantenibilidad y la seguridad.

Los comprobadores ortográficos y las herramientas de legibilidad son otros ejemplos de herramientas de análisis estático.

### 3.1.1 Productos de Trabajo Susceptibles de Ser Examinados Mediante Prueba Estática
Casi cualquier producto de trabajo puede examinarse mediante una prueba estática.

Algunos ejemplos son

- los documentos de especificación de requisitos,
- el código fuente,
- los planes de prueba,
- los casos de prueba,
- los elementos de la lista de trabajo acumulado del producto,
- los contratos de prueba,
- la documentación del proyecto y
- los modelos.

Cualquier producto de trabajo que pueda leerse y comprenderse puede ser objeto de una revisión.

- Sin embargo, para el análisis estático, los productos de trabajo necesitan una estructura con la que puedan ser comprobados (por ejemplo, modelos, código o texto con una sintaxis formal).

- Los productos de trabajo que no son apropiados para las pruebas estáticas incluyen aquellos que son difíciles de interpretar por los seres humanos y que no deben ser analizados por herramientas (por ejemplo, el código ejecutable de terceros debido a razones legales).

### 3.1.2 Valor de la Prueba Estática
**La prueba estática puede detectar defectos en las fases más tempranas del CVDS**, cumpliendo el principio de la prueba temprana (véase la sección 1.3).

También **puede identificar defectos que no pueden detectarse mediante pruebas dinámicas.** Por ejemplo,

- código inaccesible,
- patrones de diseño no implementados como se deseaba,
- defectos en productos de trabajo no ejecutables).

**La prueba estática permite evaluar la calidad de los productos de trabajo y generar confianza en ellos.**
- Al verificar los requisitos documentados, los implicados también pueden asegurarse de que dichos requisitos describen sus necesidades reales.
- Dado que la prueba estática puede realizarse en una fase temprana del CVDS, puede crearse un entendimiento compartido entre los implicados.
- También mejorará la comunicación entre los implicados.
- Por este motivo, se recomienda involucrar a una amplia variedad de implicados en la prueba estática.

Aunque la implementación de las revisiones puede resultar costosa, **los costes totales del proyecto suelen ser mucho menores que cuando no se realizan revisiones**, ya que se necesita dedicar menos tiempo y esfuerzo a la corrección de defectos cuando el proyecto se encuentra más avanzado.

Los defectos de código pueden detectarse utilizando el **análisis estático** de forma más eficiente que en la prueba dinámica, lo que suele dar lugar tanto a un menor número de defectos de código como a un menor esfuerzo general de desarrollo.

### 3.1.3 Diferencias entre la Prueba Estática y la Prueba Dinámica

**La prueba estática y la prueba dinámica son prácticas complementarias.**

Tienen objetivos similares, como apoyar la detección de defectos en los productos de trabajo (véase la sección 1.1.1), pero también existen algunas **diferencias**, como:

- Tanto la prueba estática como la dinámica (con análisis de fallos) pueden conducir a la detección de defectos; sin embargo, **hay algunos tipos de defectos que sólo pueden encontrarse mediante pruebas estáticas o dinámicas.**
- **La prueba estática encuentra los defectos directamente**, mientras que la prueba dinámica provoca fallos a partir de los cuales se determinan los defectos asociados mediante un análisis posterior.
- La prueba estática puede detectar más fácilmente los **defectos que se encuentran en caminos a través del código** que rara vez se ejecutan o que son difíciles de alcanzar mediante la prueba dinámica.
- **La prueba estática puede aplicarse a productos de trabajo no ejecutables**, mientras que la prueba dinámica sólo puede aplicarse a productos de trabajo ejecutables.
- **La prueba estática se puede utilizar para medir las características de calidad que no dependen de la ejecución del código** (por ejemplo, la mantenibilidad), mientras que **la prueba dinámica se puede utilizar para medir las características de calidad que dependen de la ejecución del código** (por ejemplo, la eficiencia de rendimiento).

Entre los **defectos típicos que son más fáciles y/o más económicos de encontrar mediante la prueba estática** se incluyen:

- **Defectos en los requisitos** (por ejemplo, inconsistencias, ambigüedades, contradicciones, omisiones, imprecisiones, duplicaciones).
- **Defectos de diseño** (por ejemplo, estructuras de bases de datos ineficaces, modularidad deficiente).
- **Ciertos tipos de defectos de codificación** (por ejemplo, variables con valores indefinidos, variables no declaradas, código inalcanzable o duplicado, excesiva complejidad del código).
- **Desviaciones de los estándares** (por ejemplo, falta de adherencia a las convenciones de nomenclatura en los estándares de codificación).
- **Especificaciones incorrectas de la interfaz** (por ejemplo, número, tipo u orden de los parámetros no coincidentes).
- **Tipos específicos de vulnerabilidades de seguridad** (por ejemplo, desbordamientos de memoria intermedia).
- **Lagunas o imprecisiones en la cobertura de la base de prueba** (por ejemplo, falta de pruebas para un criterio de aceptación).

## 3.2 Retroalimentación y Proceso de Revisión

### 3.2.1 Beneficios de una Retroalimentación Temprana y Frecuente de los Implicados

La retroalimentación temprana y frecuente permite la **comunicación temprana** de posibles problemas de calidad.

- Si hay poca implicación por parte de los implicados durante el CVDS, es posible que el producto que se desarrolle no cumpla la visión original o actual del implicado.
- Un fallo en la entrega de lo que la parte interesada desea puede dar lugar a
  - una costosa repetición del trabajo,
  - incumplimiento de los plazos,
  - juegos de culpas e
  - incluso podría llevar al fracaso total del proyecto.

La retroalimentación frecuente por parte de los implicados a lo largo del SDLC puede **evitar malentendidos** sobre los requisitos y asegurar que **los cambios en los requisitos se entiendan y se implementen antes.**

Esto ayuda al equipo de desarrollo a **mejorar su comprensión** de lo que están construyendo.

Les permite **concentrarse en aquellas prestaciones que aportan más valor** a los implicados y que tienen un impacto más positivo en los riesgos identificados.

### 3.2.2 Actividades del Proceso de Revisión

El estándar ISO/IEC 20246 define un proceso de revisión genérico que proporciona un marco estructurado pero flexible a partir del cual se puede adaptar un proceso de revisión específico a una situación concreta.

- Si la revisión requerida es más **formal**, entonces se necesitarán más de las tareas descritas para las distintas actividades.

El tamaño de muchos productos de trabajo hace que sean demasiado grandes para ser cubiertos por una sola revisión.

- El proceso de revisión puede invocarse un par de veces para completar la revisión de todo el producto de trabajo.

**Las actividades del proceso de revisión son:**

**Planificación.**

Durante la fase de planificación se definirá el alcance de la revisión, que comprende
- el propósito,
- el producto de trabajo que se revisará,
- las características de calidad que se evaluarán,
- las áreas en las que se concentrará,
- los criterios de salida,
- la información de apoyo como los estándares,
- el esfuerzo y
- los plazos de la revisión.

**Inicio de la Revisión.**

- Durante el inicio de la revisión, el objetivo es asegurarse de que todos y cada uno de los implicados están preparados para comenzar la revisión.
- Esto incluye asegurarse de que cada participante
  - tiene acceso al producto del trabajo objeto de revisión,
  - entiende su rol y sus responsabilidades y
  - recibe todo lo necesario para llevar a cabo la revisión.

**Revisión Individual.**

- Cada revisor realiza una **revisión individual** para evaluar la calidad del producto del trabajo objeto de revisión e identificar **anomalías, recomendaciones y preguntas** aplicando una o varias técnicas de revisión (por ejemplo, revisión basada en lista de comprobación, revisión basada en escenarios).
- El estándar ISO/IEC 20246 profundiza en las diferentes técnicas de revisión.
- Los revisores registran todas las anomalías, recomendaciones y preguntas identificadas.

**Comunicación y Análisis.**

- Dado que **las anomalías identificadas durante una revisión no son necesariamente defectos**, todas estas anomalías necesitan ser analizadas y discutidas.
- Para cada anomalía, debe tomarse una decisión sobre su estado, propiedad y acciones requeridas.
- Esto suele hacerse en una reunión de revisión, durante la cual los participantes también deciden cuál es el nivel de calidad del producto del trabajo revisado y qué acciones de seguimiento se requieren.
- Puede ser necesaria una revisión de seguimiento para completar las acciones.

**Corrección y Suministro de Información.**

- Por cada defecto, debe crearse un informe de defecto para poder hacer un seguimiento de las acciones correctivas.
- Una vez alcanzados los criterios de salida, el producto del trabajo puede ser aceptado.
- Se informa de los resultados de la revisión.


### 3.2.3 Roles y Responsabilidades en las Revisiones

Las revisiones implican a varios implicados, que pueden asumir varios roles. Los principales roles y sus responsabilidades son:

- **Gestor** - decide qué se va a revisar y aporta recursos, como personal y tiempo para la revisión
- **Autor** - crea y corrige el producto del trabajo objeto de revisión
- **Moderador** (también conocido como **facilitador**) - asegura el funcionamiento eficaz de las reuniones de revisión, incluyendo la mediación, la gestión del tiempo y un entorno de revisión seguro en el que todos puedan hablar libremente.
- **Escriba** (también conocido como **grabador**) - recopila las anomalías de los revisores y registra la información de la revisión, como las decisiones y las nuevas anomalías encontradas durante la reunión de revisión.
- **Revisor** - lleva a cabo las revisiones. Un revisor puede ser alguien que trabaje en el proyecto, un experto en la materia o cualquier otro implicado
- **Líder de la revisión** - asume la responsabilidad general de la revisión, como decidir quién participará y organizar cuándo y dónde tendrá lugar la revisión

Son posibles otros roles más detallados, como se describe en el estándar ISO/IEC 20246.

#### 3.2.4 Tipos de Revisión
Existen muchos tipos de revisión, desde revisiones **informales** hasta revisiones **formales**.

- El nivel de formalidad requerido depende de factores como el CVDS que se siga, la madurez del proceso de desarrollo, la criticidad y complejidad del producto de trabajo que se revise, los requisitos legales o reglamentarios y la necesidad de un rastro de auditoría.
- Un mismo producto de trabajo puede ser revisado con distintos tipos de revisión, por ejemplo, primero una informal y después una más formal.

**Seleccionar el tipo de revisión adecuado es clave** para alcanzar los objetivos de revisión requeridos (véase la sección 3.2.5).

- La selección no sólo se basa en los objetivos, sino también en factores como las necesidades del proyecto, los recursos disponibles, el tipo de producto y los riesgos del trabajo, el dominio del negocio y la cultura de la empresa.

Algunos de los **tipos de revisión** más utilizados son:

**Revisión Informal.**
- Las revisiones informales **no siguen un proceso definido** y no requieren una salida formal documentada.
- El objetivo principal es detectar anomalías.

**Revisión Guiada.**
- Una revisión guiada, **dirigida por el autor**, puede servir para muchos objetivos, como evaluar la calidad y generar confianza en el producto del trabajo, educar a los revisores, obtener consenso, generar nuevas ideas, motivar y capacitar a los autores para mejorar y detectar anomalías.
- Los revisores pueden realizar una revisión individual antes de la revisión guiada, pero no es un requisito.

**Revisión Técnica.**
- Una revisión técnica **es realizada por revisores técnicamente cualificados y dirigida por un moderador.**
- Los objetivos de una revisión técnica son obtener consenso y tomar decisiones sobre un problema técnico, pero también detectar anomalías, evaluar la calidad y generar confianza en el producto del trabajo, generar nuevas ideas y motivar y permitir a los autores mejorar.

**Inspección.**
- Como **las inspecciones son el tipo de revisión más formal**, siguen el proceso genérico completo (véase la sección 3.2.2).
- El objetivo principal es encontrar el máximo número de anomalías.
- Otros objetivos son evaluar la calidad, generar confianza en el producto del trabajo y motivar y capacitar a los autores para mejorar.
- **Se recopilan métricas** y se utilizan para mejorar el CVDS, incluido el proceso de inspección.
- En las inspecciones, el autor no puede actuar como revisor o escriba.

### 3.2.5 Factores de Éxito de las Revisiones
Hay diversos **factores que determinan** el éxito de las revisiones, entre los que se incluyen:

- La **definición de objetivos claros** y criterios de salida medibles. La evaluación de los participantes nunca debe ser un objetivo. 
- **Elegir el tipo de revisión adecuado** para alcanzar los objetivos fijados y para adaptarse al tipo de producto de trabajo, a los participantes en la revisión, a las necesidades del proyecto y al contexto. 
- **Realizar las revisiones en pequeños fragmentos,** para que los revisores no pierdan la concentración durante una revisión individual y/o la reunión de revisión (cuando se celebre). 
- **Proporcionar retroalimentación de las revisiones a los implicados** y a los autores para que puedan mejorar el producto y sus actividades (véase la sección 3.2.1). 
- **Proporcionar tiempo suficiente** a los participantes para prepararse para la revisión. 
- **Apoyo de la dirección al proceso de revisión.** 
- **Hacer que las revisiones formen parte de la cultura** de la organización, para promover el aprendizaje y la mejora del proceso. 
- **Proporcionar una formación** adecuada a todos los participantes para que sepan cómo desempeñar su rol. 
- **Facilitar las reuniones.**
