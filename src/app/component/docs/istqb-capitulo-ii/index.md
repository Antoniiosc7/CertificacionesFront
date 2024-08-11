# Capítulo II - Prueba a lo Largo del Ciclo de Vida de Desarrollo de Software

## 2.1 La Prueba en el Contexto de un Ciclo de Vida de Desarrollo de Software

Un **modelo de ciclo de vida de desarrollo de software (CVDS)** es una representación abstracta y de alto nivel del proceso de desarrollo de software.

Un modelo CVDS define cómo se relacionan entre sí, tanto lógica como cronológicamente, las diferentes fases de desarrollo y los tipos de actividades que se realizan dentro de este proceso.

Algunos ejemplos de modelos de CVDS son:
- los modelos de desarrollo secuencial (por ejemplo, el modelo en cascada, el modelo V),
- los modelos de desarrollo iterativo (por ejemplo, el modelo en espiral, el prototipado)
- y los modelos de desarrollo incremental (por ejemplo, el Proceso Unificado).

Algunas actividades de los procesos de desarrollo de software también pueden describirse mediante métodos de desarrollo de software más detallados y prácticas Ágiles.

Algunos ejemplos son:
- el desarrollo guiado por pruebas de aceptación (DGPA),
- el desarrollo guiado por el comportamiento (DGC),
- el diseño guiado por dominios (DGD),
- la programación extrema (XP),
- el desarrollo guiado por prestaciones (DGP),
- Kanban,
- Lean IT,
- Scrum
- y el desarrollo guiado por pruebas (DGP).

### 2.1.1 Impacto del Ciclo de Vida de Desarrollo de Software en la Prueba

**La prueba debe adaptarse al CVDS para tener éxito.**

La elección del CVDS repercute en:

- Alcance y cronología de las actividades de prueba (por ejemplo, niveles de prueba y tipos de prueba).
- Nivel de detalle de la documentación de prueba.
- Elección de técnicas de prueba y enfoque de prueba.
- Alcance de la automatización de la prueba.
- Rol y responsabilidades de un probador.

En las fases iniciales de los modelos de **desarrollo secuencial**,

- los probadores suelen participar en la revisión de requisitos, el análisis de prueba y el diseño de prueba.
- El código ejecutable suele crearse en las fases posteriores, por lo que normalmente la prueba dinámica no puede realizarse al principio del CVDS.

En algunos modelos de **desarrollo iterativo e incremental**,

- se supone que cada iteración entrega un prototipo funcional o un incremento del producto.
- Esto implica que en cada iteración se puede probar tanto estática como dinámicamente en todos los niveles de prueba.
- La entrega frecuente de incrementos requiere una retroalimentación rápida y **pruebas de regresión extensivas**.

El **desarrollo de software Ágil** asume que pueden producirse cambios a lo largo de todo el proyecto.

- Por lo tanto, en los proyectos ágiles se favorece una documentación de producto de trabajo ligera y
- una amplia automatización de la prueba para facilitar la prueba de regresión.
- Además, la mayor parte de las pruebas manuales suelen realizarse mediante técnicas de prueba basadas en la experiencia (véase la sección 4.4) que no requieren un análisis y diseño de prueba previos exhaustivos.

### 2.1.2 Ciclo de Vida de Desarrollo de Software y Buenas Prácticas de Prueba

Las **buenas prácticas de prueba**, independientemente del modelo de CVDS elegido, incluyen los siguientes elementos:

- **Cada actividad de desarrollo de software tiene su correspondiente actividad de prueba**, de modo que todas las actividades de desarrollo están sujetas a un control de la calidad.
- **Cada nivel de prueba** (véase el capítulo 2.2.1) **tiene objetivos de prueba específicos y diferentes**, lo que permite que las pruebas sean lo suficientemente comprensivas a la vez que se evita la redundancia.
- **El análisis y diseño de prueba** para un nivel de prueba determinado **comienza durante la fase de desarrollo correspondiente** del CVDS, para que la prueba pueda atenerse al principio de prueba temprana (véase la sección 1.3).
- **Los probadores participan en la revisión de los productos de trabajo** tan pronto como están disponibles los borradores de esta documentación, para que esta prueba temprana y la detección de defectos puedan apoyar la estrategia de desplazamiento a la izquierda (véase la sección 2.1.5).

### 2.1.3 La Prueba como Impulsor del Desarrollo de Software

Desarrollo guiado por prueba (DGP), desarrollo guiado por prueba de aceptación (DGPA) y desarrollo guiado por el comportamiento (DGC son enfoques de desarrollo similares, en los que las pruebas se definen como un medio para conducir el desarrollo.

- Cada uno de estos enfoques aplica el principio de la prueba temprana (véase el apartado 1.3) y sigue un planteamiento de desplazamiento a la izquierda (véase el apartado 2.1.5), ya que las pruebas se definen antes de escribir el código.
- Apoyan un modelo de desarrollo iterativo.

Estos enfoques se caracterizan por lo siguiente:

**Desarrollo Guiado por Prueba (DGP):**

- Dirige la codificación mediante casos de prueba (en lugar de un diseño extensivo del software) (Beck 2003).
- Primero se redactan las pruebas, luego se elabora el código para que satisfaga las pruebas y, por último, se refactorizan las pruebas y el código.

**Desarrollo Guiado por Prueba de Aceptación (DGPA)** (véase el apartado 4.5.3):

- Obtiene pruebas a partir de criterios de aceptación como parte del proceso de diseño del sistema (Gärtner 2011).
- Las pruebas se redactan antes de que la parte de la aplicación se desarrolle para satisfacer las pruebas.

**Desarrollo Guiado por Comportamiento (DGC):**

- Expresa el comportamiento deseado de una aplicación con casos de prueba escritos en una forma sencilla de lenguaje natural, que es fácil de entender por los implicados - normalmente utilizando el formato Dado/Cuando/Entonces (“Given/When/Then”). (Chelimsky 2010)
- A continuación, los casos de prueba se traducen automáticamente en pruebas ejecutables.

En todos los enfoques anteriores, las pruebas pueden persistir como pruebas automatizadas para asegurar la calidad del código en futuras adaptaciones / refactorizaciones.

### 2.1.4 DevOps y la Prueba

**DevOps**

- es un enfoque organizativo que pretende crear sinergias haciendo que el desarrollo (incluidas las pruebas) y las operaciones trabajen juntos para alcanzar un conjunto de objetivos comunes.
- requiere un **cambio cultural** dentro de una organización para salvar las distancias entre el desarrollo (incluidas las pruebas) y las operaciones, tratando sus funciones con el mismo valor.
- promueve la autonomía de los equipos, la retroalimentación rápida, las cadenas de herramientas integradas y prácticas técnicas como la integración continua (IC) y la entrega continua (EC).

Esto permite a los equipos construir, probar y entregar código de alta calidad más rápidamente a través de un canal de entrega DevOps (Kim 2016).

Desde el punto de vista de la prueba, algunas de las **ventajas de DevOps** son:

- Rápida **retroalimentación** sobre la calidad del código y sobre si los cambios afectan negativamente al código existente.
- La **integración continua IC** promueve un enfoque de **desplazamiento a la izquierda** en la prueba (véase la sección 2.1.5) animando a los desarrolladores a suministrar código de alta calidad acompañado de pruebas de componentes y análisis estático.
- Promueve procesos automatizados como CI/CD que facilitan el establecimiento de **entornos de prueba estables.**
- **Aumenta la visión sobre las características de calidad no funcionales** (por ejemplo, rendimiento, fiabilidad).
- La automatización a través de un canal de entrega **reduce la necesidad de pruebas manuales repetitivas.**
- **El riesgo en la regresión se minimiza** gracias a la escala y el alcance de las pruebas de regresión automatizadas.

DevOps no está exento de **riesgos y desafíos**, entre los que se incluyen:

- La tubería (pipeline) de entrega DevOps debe ser definida y establecida.
- Las herramientas CI / CD deben ser introducidas y mantenidas.
- La automatización de la prueba requiere recursos adicionales y puede ser difícil de establecer y mantener.

Aunque DevOps llega con un alto nivel de pruebas automatizadas, la prueba manual seguirá siendo necesaria, especialmente desde la perspectiva del usuario.

### 2.1.5 Enfoque “Desplazamiento a la Izquierda”

El **principio de prueba temprana** (véase la sección 1.3) se denomina a veces **desplazamiento a la izquierda** porque es un enfoque en el que la prueba se realiza de forma temprana en el CVDS.

El desplazamiento a la izquierda normalmente sugiere que la prueba debería realizarse **antes** (por ejemplo, no esperar a que se implemente el código o a que se integren los componentes), pero no significa que deba descuidarse la prueba más avanzada en el CVDS.

Existen algunas **buenas prácticas** que ilustran cómo lograr un "desplazamiento a la izquierda" en la prueba, entre las que se incluyen:

- **Revisión de la especificación desde la perspectiva de la prueba.** Estas actividades de revisión de las especificaciones suelen encontrar defectos potenciales, como ambigüedades, incompletitud e inconsistencias.
- **Redactar casos de prueba desde antes de escribir el código** y hacer que éste se ejecute en un arnés de prueba durante la implementación de código.
- **Utilizar integración continua** (IC) e incluso mejor **entrega continua** (EC), ya que aporta una retroalimentación rápida y pruebas de componentes automatizadas para acompañar al código fuente cuando se envía al repositorio de código.
- Completar el **análisis estático del código fuente antes de la prueba dinámica**, o como parte de un proceso automatizado.
- **Realizar pruebas no funcionales empezando en el nivel de prueba de componente**, siempre que sea posible. Se trata de una forma de desplazamiento a la izquierda, ya que estos tipos de pruebas no funcionales tienden a realizarse más adelante en el CVDS, cuando se dispone de un sistema completo y de un entorno de prueba representativo.

Un enfoque de desplazamiento a la izquierda puede dar lugar a formación, esfuerzo y/o costes adicionales al principio del proceso, pero se espera que ahorre esfuerzos y/o costes con posterioridad.

Para el enfoque de desplazamiento a la izquierda es importante que los implicados estén convencidos y asuman este concepto.

### 2.1.6 Retrospectivas y Mejora de Proceso

Las **retrospectivas** (también conocidas como **"reuniones post proyecto"** y retrospectivas de proyecto) suelen celebrarse al final de un proyecto o de una iteración, en un hito de entrega, o pueden celebrarse cuando se necesiten.

La cronología y la organización de las retrospectivas dependen del modelo de CVDS concreto que se siga.

En estas reuniones los participantes (no sólo probadores, sino también, por ejemplo, desarrolladores, arquitectos, propietario de producto, analistas de negocio) debaten:

- ¿Qué tuvo éxito y debe conservarse?
- ¿Qué no tuvo éxito y puede mejorarse?
- ¿Cómo incorporar las mejoras y conservar los éxitos en el futuro?

Los resultados deben registrarse y normalmente forman parte del informe de compleción de la prueba (véase la sección 5.3.2).

Las retrospectivas son fundamentales para el éxito de la implementación de la mejora continua y es importante que se haga un seguimiento de cualquier mejora recomendada.

Entre los **beneficios** habituales para la prueba se incluyen:

- **Aumento de la efectividad / eficiencia de la prueba** (por ejemplo, mediante la implementación de sugerencias para la mejora del proceso).
- **Aumento de la calidad de los productos de prueba** (por ejemplo, mediante la revisión conjunta de los procesos de prueba)
- **Unión y aprendizaje en equipo** (por ejemplo, como resultado de la oportunidad de plantear problemas y proponer puntos de mejora)
- **Mejora de la calidad de la base de prueba** (por ejemplo, al poder abordar y solucionar las deficiencias en la extensión y la calidad de los requisitos)
- **Mejor cooperación entre el desarrollo y la prueba** (por ejemplo, ya que la colaboración se revisa y optimiza con regularidad).

## 2.2 Niveles de Prueba y Tipos de Prueba

Los **niveles de prueba** son grupos de actividades de prueba que se organizan y gestionan conjuntamente.

**Cada nivel de prueba es una instancia del proceso de prueba**, realizado en relación con el software en una etapa determinada de desarrollo, desde componentes individuales hasta sistemas completos o, en su caso, sistemas de sistemas.

Los niveles de prueba están relacionados con otras actividades dentro del CVDS.

- En los **modelos secuenciales** de CVDS, los niveles de prueba suelen definirse de tal forma que los criterios de salida de un nivel forman parte de los criterios de entrada del siguiente.
- En algunos **modelos iterativos**, esto puede no aplicarse.
  - Las actividades de desarrollo pueden abarcar varios niveles de prueba.
  - Los niveles de prueba pueden solaparse en el tiempo.

Los tipos de prueba son grupos de actividades de prueba relacionadas con características de calidad específicas y la mayoría de esas actividades de prueba pueden realizarse en todos los niveles de prueba.
### 2.2.1 Niveles de Prueba

En este programa de estudio se describen los siguientes cinco niveles de prueba:

**Prueba de Componente**

- La prueba de componente (también conocida como prueba unitaria) se concentra en probar componentes de forma aislada.
- A menudo requiere un soporte específico, como arneses de prueba o marcos de trabajo para la prueba unitaria.
- En general, los desarrolladores realizan la prueba de componente en sus entornos de desarrollo.

**Prueba de Integración de Componentes**

- La prueba de integración de componentes (también conocida como prueba de integración de unidades) se concentra en probar las interfaces y las interacciones entre los componentes.
- La prueba de integración de componentes depende en gran medida de los enfoques de la estrategia de integración, como ascendente, descendente o big-bang.

**Prueba de Sistema**

- La prueba de sistema se concentra en el comportamiento general y las capacidades de todo un sistema o producto, incluyendo a menudo la prueba funcional de las tareas de extremo a extremo y la prueba no funcional de las características de calidad.
- Para algunas características de calidad no funcionales, es preferible probarlas en un sistema completo en un entorno de prueba representativo (por ejemplo, la usabilidad).
- También es posible utilizar simulaciones de subsistemas.
- Un equipo de prueba independiente puede realizar la prueba de sistema, que está relacionada con las especificaciones del sistema.

**Prueba de Integración de Sistemas**

- La prueba de integración de sistemas se concentra en probar las interfaces del sistema sujeto a prueba y otros sistemas y servicios externos.
- La prueba de integración de sistemas requiere entornos de prueba adecuados, preferiblemente similares al entorno de operaciones.

**Prueba de Aceptación**

- La prueba de aceptación se concentra en la validación y en demostrar la preparación para el despliegue, lo que significa que el sistema satisface las necesidades de negocio del usuario.
- Lo ideal es que la prueba de aceptación la realicen usuarios a los que está dirigido.
- Las principales formas de pruebas de aceptación son:
  - prueba de aceptación de usuario (PAU),
  - prueba de aceptación operativa,
  - prueba de aceptación contractual y de regulación,
  - prueba alfa y
  - prueba beta.

Con el fin de evitar el solapamiento de las actividades de prueba, los niveles de prueba se distinguen por la siguiente lista no exhaustiva de atributos:

- Objeto de prueba.
- Objetivos de prueba.
- Base de prueba.
- Defectos y fallos.
- Enfoque y responsabilidades.

### 2.2.2 Tipos de Prueba

Existen muchos tipos de prueba que pueden aplicarse en los proyectos.

En este programa de estudio se abordan los siguientes **cuatro tipos de prueba**:

**Prueba Funcional**

- La prueba funcional evalúa las **funciones** que debe realizar un componente o sistema.
- Las funciones son **"aquello" que debe hacer** el objeto de prueba.
- El objetivo principal de la prueba funcional es comprobar
  - la completitud funcional,
  - la corrección funcional y
  - la pertinencia funcional.

**Prueba No Funcional**

- La prueba no funcional evalúa atributos distintos de las características funcionales de un componente o sistema.
- La prueba no funcional es la comprobación de **"lo bien que se comporta el sistema".**
- El principal objetivo de la prueba no funcional es comprobar las características de calidad del software no funcionales.
- El estándar **ISO/IEC 25010** proporciona la siguiente clasificación de las características de calidad del software no funcionales:
  - Eficiencia de desempeño.
  - Compatibilidad.
  - Usabilidad.
  - Fiabilidad.
  - Seguridad.
  - Mantenibilidad.
  - Portabilidad.
- A veces es conveniente que la prueba no funcional **comience al principio del ciclo de vida** (por ejemplo, como parte de las revisiones y prueba de componente o prueba de sistema).
- Muchas pruebas no funcionales se obtienen a partir de pruebas funcionales, ya que utilizan las mismas pruebas funcionales, pero comprueban que, al realizar la función, se satisface una restricción no funcional
  - por ejemplo, comprobar que una función se lleva a cabo en un tiempo determinado o que una función puede portarse a una nueva plataforma.
- El descubrimiento tardío de defectos no funcionales puede suponer una grave amenaza para el éxito de un proyecto.
- A veces, la prueba no funcional necesita un entorno de prueba muy específico, como un laboratorio de usabilidad para probar la usabilidad.

**Prueba de Caja Negra**

- La prueba de caja negra (véase el apartado 4.2) se basa en la especificación y obtiene pruebas a partir de documentación externa al objeto de prueba.
- El objetivo principal de la prueba de caja negra es comprobar el comportamiento del sistema frente a sus especificaciones.

**Prueba de Caja Blanca**

- La prueba de caja blanca (véase el apartado 4.3) se basa en la estructura y obtiene pruebas de la implementación o la estructura interna del sistema (por ejemplo, el código, la arquitectura, los flujos de trabajo y los flujos de datos).
- El objetivo principal de la prueba de caja blanca es que las pruebas cubran la estructura subyacente hasta un nivel aceptable.

**Los cuatro tipos de prueba mencionados pueden aplicarse a todos los niveles de prueba**, aunque el enfoque será diferente en cada nivel.

Se pueden utilizar diferentes técnicas de prueba para obtener condiciones y casos de prueba para todos los tipos de prueba mencionados.

### 2.2.3 Prueba de Confirmación y Prueba de Regresión

En general los cambios que se realizan en un componente o sistema son para mejorarlo añadiendo una nueva prestación o para arreglarlo eliminando un defecto.

La prueba debería entonces incluir también la prueba de confirmación y la prueba de regresión.

La **prueba de confirmación** confirma que un defecto original se ha corregido con éxito.

- En función del riesgo, se puede probar la versión corregida del software de varias maneras, entre ellas:
  - ejecutando todos los casos de prueba que hayan fallado previamente debido al defecto, o, también mediante
  - añadiendo nuevas pruebas para cubrir cualquier cambio que se haya necesitado para arreglar el defecto.
- Sin embargo, cuando se dispone de poco tiempo o dinero para solucionar los defectos, la prueba de confirmación puede limitarse a practicar simplemente los pasos que deberían reproducir el fallo causado por el defecto y comprobar que éste no se produce.

La **prueba de regresión** confirma que no se han producido consecuencias adversas a causa de un cambio, incluida una corrección que ya ha sido sometida a una prueba de confirmación.

- Estas consecuencias adversas podrían afectar al mismo componente en el que se realizó el cambio, a otros componentes del mismo sistema o incluso a otros sistemas conectados.
- La prueba de regresión puede no limitarse al objeto de prueba en sí, sino que también puede estar relacionada con el entorno.
- Es aconsejable realizar primero un análisis de impacto para optimizar el alcance de la prueba de regresión.
- El análisis de impacto muestra qué partes del software podrían verse afectadas.
- Los juegos de pruebas de regresión se ejecutan muchas veces y, por lo general, el número de casos de prueba de regresión aumentará con cada iteración o entrega, por lo que **la prueba de regresión es una firme candidata a la automatización.**
- La automatización de estas pruebas debe comenzar en las primeras fases del proyecto.
- Cuando se utiliza IC, como en DevOps (véase la sección 2.1.4), es una buena práctica incluir también pruebas de regresión automatizadas.
- Dependiendo de la situación, esto puede incluir pruebas de regresión en diferentes niveles.

Se necesita una prueba de confirmación y/o una prueba de regresión para el objeto de prueba **en todos los niveles de prueba** si se corrigen defectos y/o se realizan cambios en estos niveles de prueba.

## 2.3 Prueba de Mantenimiento

Existen diferentes **categorías de mantenimiento**, puede ser

- correctivo,
- adaptable a los cambios del entorno
- o mejorar el rendimiento o la mantenibilidad (véase ISO/IEC 14764 para más detalles),

por lo que el mantenimiento puede implicar entregas/despliegues planificados y entregas/despliegues no planificados (correcciones en caliente).

El **análisis de impacto** puede realizarse antes de realizar un cambio, para ayudar a decidir si el cambio debe realizarse, basándose en las consecuencias potenciales en otras áreas del sistema.

**Probar los cambios de un sistema** en producción incluye

- tanto la evaluación del éxito de la implementación del cambio
- como la comprobación de posibles regresiones en las partes del sistema que permanecen inalteradas (que suele ser la mayor parte del sistema).

El **alcance de las pruebas de mantenimiento** suele depender de:

- El grado de riesgo del cambio.
- El tamaño del sistema existente.
- La magnitud del cambio.

Los **desencadenantes del mantenimiento y de la prueba de mantenimiento** pueden clasificarse como sigue:

- **Modificaciones**, como mejoras planificadas (es decir, basadas en la entrega), cambios correctivos o correcciones en caliente.
- **Actualizaciones o migraciones del entorno de operación**, como de una plataforma a otra, que pueden requerir pruebas asociadas con el nuevo entorno así como del software modificado, o pruebas de conversión de datos cuando se migran datos de otra aplicación al sistema que se está manteniendo.
- **Retirada**, tal como ocurre cuando una aplicación llega al final de su vida útil. Cuando se retira un sistema, puede ser necesario probar el archivo de datos si se requieren largos periodos de retención de datos. También puede ser necesario probar los procedimientos de recuperación y restauración tras el archivado en caso de que se necesiten determinados datos durante el periodo de archivado.
