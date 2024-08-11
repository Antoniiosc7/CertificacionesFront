# Capítulo V - Gestión de las Actividades de Prueba

## 5.1 Panificación de la Prueba

### 5.1.1 Propósito y Contenido de un Plan de Prueba

Un **plan de prueba** describe los objetivos, los recursos y los procesos de un proyecto de prueba.

Un **plan de pruebas**:

- Documenta los medios y el calendario para alcanzar los objetivos de prueba.
- Ayuda a asegurar que las actividades de prueba realizadas cumplirán los criterios establecidos.
- Sirve como medio de comunicación con los miembros del equipo y otros implicados.
- Demuestra que las pruebas se ajustarán a la política de prueba y la estrategia de prueba existentes (o explica por qué las pruebas se desviarán de ellas).

La planificación de la prueba guía el pensamiento de los probadores y les obliga a enfrentarse a los retos futuros relacionados con los riesgos, los calendarios, las personas, las herramientas, los costes, el esfuerzo, etc.

El proceso de elaboración de un plan de prueba es una forma útil de reflexionar sobre los esfuerzos necesarios para alcanzar los objetivos del proyecto de prueba.

El **contenido habitual de un plan de prueba** incluye:

- **Contexto de la prueba** (por ejemplo, alcance, objetivos de la prueba, restricciones, base de prueba).
- **Supuestos y restricciones** del proyecto de prueba.
- **Implicados** (por ejemplo, roles, responsabilidades, relevancia para las pruebas, necesidades de contratación y formación).
- **Comunicación** (por ejemplo, formas y frecuencia de la comunicación, plantillas de documentación).
- **Registro de riesgos** (por ejemplo, riesgos de producto, riesgos de proyecto).
- **Enfoque de prueba**. Por ejemplo,
  - niveles de prueba,
  - tipos de prueba,
  - técnicas de prueba,
  - entregables de prueba,
  - criterios de entrada y criterios de salida,
  - independencia de prueba,
  - métricas que deben recopilarse,
  - requisitos de datos de prueba,
  - requisitos del entorno de prueba,
  - desviaciones de la política de prueba y
  - la estrategia de prueba de la organización.
- **Presupuesto y calendario**.

Se pueden encontrar más detalles sobre el plan de pruebas y su contenido en el estándar ISO/IEC/IEEE 29119-3.

### 5.1.2 Contribución del Probador a la planificación de la Iteración y de la Entrega

En los **CVDS iterativos**, suelen producirse dos tipos de planificación:

- la planificación de la entrega y
- la planificación de la iteración.

La **planificación de la entrega** se anticipa al lanzamiento de un producto, define y redefine la lista de trabajo acumulado del producto y puede implicar refinar las historias de usuario más grandes en un conjunto de historias de usuario más pequeñas.

- También sirve de base para el enfoque de prueba y el plan de prueba de **todas las iteraciones**.
- Los **encargados de la planificación de la entrega**
  - participan en la redacción de historias de usuario y criterios de aceptación comprobables (véase el apartado 4.5),
  - participan en los análisis de riesgos de calidad y del proyecto (véase el apartado 5.2),
  - estiman el esfuerzo de prueba asociado a las historias de usuario (véase el apartado 5.1.4),
  - determinan el enfoque de la prueba y planifican la prueba de la entrega.

La **planificación de la iteración** mira hacia el final de una única iteración y se ocupa de la lista de trabajo acumulado de la iteración.

- Los probadores implicados en la planificación de la iteración
  - participan en el análisis detallado del riesgo de las historias de usuario,
  - determinan la capacidad de ser probadas de las historias de usuario,
  - desglosan las historias de usuario en tareas (en particular, tareas de prueba),
  - estiman el esfuerzo de prueba para todas las tareas de prueba e
  - identifican y perfeccionan los aspectos funcionales y no funcionales del objeto de prueba.

### 5.1.3 Criterios de Entrada y Criterios de Salida

Los **criterios de entrada** definen las precondiciones para emprender una actividad determinada.

- Si no se cumplen los criterios de entrada, es probable que la actividad resulte más difícil, lenta, costosa y arriesgada.

Los **criterios de salida** definen lo que debe lograrse para declarar completada una actividad.

Los criterios de entrada y los criterios de salida deben definirse para cada nivel de prueba, y diferirán en función de los objetivos de prueba.

Los **criterios de entrada típicos incluyen**:

- **disponibilidad de recursos** (por ejemplo, personas, herramientas, entornos, datos de prueba, presupuesto, tiempo),
- **disponibilidad de material de prueba** (por ejemplo, base de prueba, requisitos comprobables, historias de usuario, casos de prueba) y
- **nivel de calidad inicial de un objeto de prueba** (por ejemplo, todas las pruebas de humo han pasado).

Los **criterios de salida típicos incluyen**:

- **medidas de completitud** (p. ej.,
  - nivel de cobertura alcanzado,
  - número de defectos sin resolver,
  - densidad de defectos,
  - número de casos de prueba fallidos) y
- **criterios de compleción** (p. ej.,
  - se han ejecutado las pruebas planificadas,
  - se ha realizado la prueba estática,
  - se han notificado todos los defectos encontrados,
  - se han automatizado todas las pruebas de regresión).

**Quedarse sin tiempo o sin presupuesto también pueden considerarse criterios de salida válidos.**

- Incluso sin que se cumplan otros criterios de salida, puede ser aceptable finalizar las pruebas en tales circunstancias, si los implicados han revisado y aceptado el riesgo de salir a producción sin más prueba.

En el Desarrollo Ágil de Software, los criterios de salida suelen denominarse **definición de hecho**, y definen las métricas objetivas del equipo para un elemento entregable.

Los criterios de entrada que debe cumplir una historia de usuario para iniciar las actividades de desarrollo y/o prueba se denominan **Definición de Preparado**.

### 5.1.4 Técnicas de Estimación

La **estimación del esfuerzo** de prueba consiste en predecir la cantidad de trabajo relacionado con la prueba que se necesita para cumplir los objetivos de un proyecto de prueba.

- Es importante dejar claro a los implicados que la estimación se basa en una serie de **suposiciones** y que siempre está **sujeta a errores de estimación**.
- La estimación de las tareas pequeñas suele ser más precisa que la de las grandes.
- Por lo tanto, al estimar una tarea grande, ésta puede descomponerse en un conjunto de tareas más pequeñas que, a su vez, pueden estimarse.

En este programa de estudio se describen las siguientes cuatro técnicas de estimación.

- Estimación basada en proporciones
- Extrapolación
- Delphi de Banda Ancha
- Estimación de tres puntos

Véase (Kan 2003, Koomen 2006, Westfall 2009) para estas y muchas otras técnicas de estimación de la prueba.

#### 5.1.4.a Estimación basada en proporciones
En esta técnica **basada en métricas**, se recopilan cifras de proyectos anteriores de la organización, lo que permite obtener proporciones "estándar" para proyectos similares.

Las proporciones de los propios proyectos de una organización (por ejemplo, tomadas de datos históricos) suelen ser la mejor fuente para utilizar en el proceso de estimación.

Estas proporciones estándar pueden utilizarse después para estimar el esfuerzo de prueba del nuevo proyecto.

**Por ejemplo**, si en el proyecto anterior la proporción del esfuerzo de desarrollo a prueba era de 3:2, y en el proyecto actual se espera que el esfuerzo de desarrollo sea de 600 días-persona, el esfuerzo de prueba puede estimarse en 400 días-persona.

#### 5.1.4.b Extrapolación

En esta técnica **basada en métricas**, las mediciones se realizan lo antes posible en el proyecto actual para recopilar los datos.

Al disponer de suficientes observaciones, el esfuerzo necesario para el trabajo restante puede aproximarse extrapolando estos datos (normalmente aplicando un modelo matemático).

Este método es muy adecuado en los CVDS iterativos.

**Por ejemplo**, el equipo puede extrapolar el esfuerzo de prueba en la próxima iteración como el esfuerzo medio de las tres últimas iteraciones.

#### 5.1.4.c Delphi de Banda Ancha
En esta técnica iterativa **basada en la experiencia**, los expertos realizan estimaciones basadas en la experiencia.

- Cada experto, de forma aislada, estima el esfuerzo.
- Se recogen los resultados y si hay desviaciones que se salen de los límites acordados, los expertos discuten sus estimaciones actuales.
- A continuación, se pide a cada experto que haga una nueva estimación basada en esa retroalimentación, de nuevo de forma aislada.

Este proceso se repite hasta que se alcanza un consenso.

El **póker de planificación** es una variante del Delphi de Banda Ancha, utilizada habitualmente en el desarrollo ágil de software.

En el póker de planificación, las estimaciones suelen hacerse utilizando cartas con números que representan el tamaño del esfuerzo.

#### 5.1.4.d Estimación de tres puntos
En esta técnica **basada en expertos**, éstos realizan tres estimaciones:

- la estimación más optimista (a),
- la estimación más probable (m) y
- la estimación más pesimista (b).

La estimación final (E) es su media aritmética ponderada.

En la **versión más popular de esta técnica**, la estimación se calcula como

E = (a + 4*m + b) / 6.

La ventaja de esta técnica es que permite a los expertos calcular el **error de medición**:

SD = (b - a) / 6.

**Por ejemplo**, si las estimaciones (en horas-persona) son:

a=6, m=9 y b=18,

entonces la estimación final es de

10±2 horas-persona

(es decir, entre 8 y 12 horas- persona),

porque

E = (6 + 4*9 + 18) / 6 = 10

SD = (18 - 6) / 6 = 2

### 5.1.5 Priorización de Casos de Prueba

Una vez que los casos de prueba y los procedimientos de prueba se han especificado y reunido en conjuntos de prueba, estos conjuntos de prueba pueden organizarse en un **calendario de ejecución de prueba** que defina el orden en que deben ejecutarse.

A la hora de priorizar los casos de prueba, pueden tenerse en cuenta distintos factores.

Las **estrategias de priorización de casos de prueba** más utilizadas son las siguientes:

- **Priorización basada en el riesgo**,
  - en la que el orden de ejecución de las pruebas se basa en los resultados del análisis del riesgo (véase la sección 5.2.3).
  - Los casos de prueba que cubren los riesgos más importantes se ejecutan en primer lugar.
- **Priorización basada en la cobertura**,
  - en la que el orden de ejecución de las pruebas se basa en la cobertura (por ejemplo, la cobertura de sentencias).
  - Los casos de prueba que logran la mayor cobertura se ejecutan en primer lugar.
  - En otra variante, denominada priorización de cobertura adicional, el caso de prueba que logra la cobertura más alta se ejecuta primero; cada caso de prueba posterior es el que logra la cobertura adicional más alta.
- **Priorización basada en requisitos**,
  - en la que el orden de ejecución de las pruebas se basa en las prioridades de los requisitos trazadas hasta los casos de prueba correspondientes.
  - Las prioridades de los requisitos son definidas por los implicados.
  - Los casos de prueba relacionados con los requisitos más importantes se ejecutan en primer lugar.

En **condiciones ideales**, los casos de prueba se ordenarían para su realización en función de sus niveles de prioridad, utilizando, por ejemplo, una de las estrategias de priorización mencionadas.

Sin embargo, esta práctica puede no funcionar si los casos de prueba o las prestaciones que se están probando tienen **dependencias**.

- Si un caso de prueba con una prioridad más alta depende de un caso de prueba con una prioridad más baja, el caso de prueba de prioridad más baja debe ejecutarse primero.

El orden de ejecución de las pruebas también debe tener en cuenta la **disponibilidad de recursos**.

- Por ejemplo, las herramientas de prueba necesarias, los entornos de prueba o las personas que sólo pueden estar disponibles durante un periodo de tiempo específico.

### 5.1.6 Pirámide de Prueba

La **pirámide de prueba** es un modelo que muestra que las distintas pruebas pueden tener una granularidad diferente.

- El modelo de pirámide de prueba apoya al equipo en la automatización de la prueba y en la asignación del esfuerzo de prueba mostrando que los diferentes objetivos se apoyan en diferentes niveles de automatización de la prueba.
- Las **capas de la pirámide** representan grupos de pruebas.
  - Cuanto más alta es la capa, menor es la granularidad de la prueba, el aislamiento de la prueba y el tiempo de ejecución de la prueba.
  - Las pruebas de la capa inferior son pequeñas, aisladas, rápidas y comprueban una pequeña parte de la funcionalidad, por lo que normalmente se necesitan muchas para lograr una cobertura razonable.
  - La capa superior representa pruebas complejas, de alto nivel y de extremo a extremo.
  - Estas pruebas de alto nivel suelen ser más lentas que las pruebas de las capas inferiores y suelen comprobar una gran parte de la funcionalidad, por lo que normalmente sólo se necesitan unas pocas para lograr una cobertura razonable.
  - El número y la nomenclatura de las capas pueden diferir.
  - **Por ejemplo**, el modelo original de pirámide de prueba (Cohn 2009) define tres capas:
    - "pruebas unitarias",
    - "pruebas de servicio" y
    - "pruebas de interfaz de usuario".
  - Otro modelo popular define
    - pruebas unitarias (de componentes),
    - pruebas de integración (integración de componentes) y
    - pruebas de extremo a extremo.
  - También pueden utilizarse otros niveles de prueba (véase la sección 2.2.1).

### 5.1.7 Cuadrantes de Prueba

Los **cuadrantes de prueba**, definidos por Brian Marick (Marick 2003, Crispin 2008), agrupan los **niveles de prueba** con los **tipos de prueba, actividades, técnicas de prueba y productos de trabajo** apropiados en el Desarrollo Ágil de software.

El modelo ayuda a la gestión de pruebas a visualizarlas para asegurar que se incluyen todos los tipos de prueba y niveles de prueba apropiados en el CVDS y a comprender que algunos tipos de prueba son más relevantes para determinados niveles de prueba que otros.

Este modelo también proporciona una forma de diferenciar y describir los tipos de pruebas a todos los implicados, incluidos desarrolladores, probadores y representantes de negocio.

- En este modelo, las pruebas pueden estar orientadas al **negocio** o a la **tecnología**.
- Las pruebas también pueden **apoyar al equipo** (es decir, guiar el desarrollo) o **criticar el producto** (es decir, medir su comportamiento frente a las expectativas).

La combinación de estos dos puntos de vista determina los cuatro cuadrantes:

- **Cuadrante Q1** (orientado a la tecnología, apoya al equipo).
  - Este cuadrante contiene pruebas de componentes y de integración de componentes.
  - Estas pruebas deberían automatizarse e incluirse en el proceso de IC.
- **Cuadrante Q2** (de cara al negocio, apoya al equipo).
  - Este cuadrante contiene pruebas funcionales, ejemplos, pruebas de historias de usuario, prototipos de experiencia de usuario, pruebas de API y simulaciones.
  - Estas pruebas comprueban los criterios de aceptación y pueden ser manuales o automatizadas.
- **Cuadrante Q3** (de cara al negocio, critica al producto).
  - Este cuadrante contiene prueba exploratoria, prueba de usabilidad y prueba de aceptación de usuario.
  - Estas pruebas están orientadas al usuario y suelen ser manuales.
- **Cuadrante Q4** (de cara a la tecnología, critica al producto).
  - Este cuadrante contiene pruebas de humo y pruebas no funcionales (excepto las pruebas de usabilidad).
  - Estas pruebas suelen estar automatizadas.

## 5.2 Gestión del Riesgo

Las organizaciones se enfrentan a muchos factores internos y externos que hacen que sea **incierto** si alcanzarán sus objetivos y cuándo lo harán (ISO 31000).

La gestión del riesgo permite a las organizaciones

- aumentar la probabilidad de alcanzar los objetivos,
- mejorar la calidad de sus productos y
- aumentar la confianza de los implicados.

Las principales **actividades de gestión del riesgo** son:

- **Análisis del riesgo** (consistente en la identificación del riesgo y la evaluación del riesgo; véase la sección 5.2.3)
- El **control del riesgo** (que consiste en la mitigación del riesgo y la monitorización del riesgo; véase la sección 5.2.4)

El enfoque de prueba, en el que las actividades de prueba se seleccionan, priorizan y gestionan en función del análisis del riesgo y el control del riesgo, se denomina pruebas basadas en el riesgo.

### 5.2.1 Definición del Riesgo y Atributos del Riesgo

El **riesgo** es un acontecimiento, peligro, amenaza o situación potencial cuya ocurrencia causa un efecto adverso.

Un riesgo puede caracterizarse por dos factores:

- **Probabilidad del riesgo** - la probabilidad de que se produzca el riesgo (mayor que cero y menor que uno).
- **Impacto del riesgo** (daño) - las consecuencias de que se produzca.

Estos dos factores expresan el nivel de riesgo, que es una medida del riesgo.

**Cuanto mayor sea el nivel de riesgo, más importante será su tratamiento.**

### 5.2.2 Riesgos de Proyecto y Riesgos de Producto

En la prueba de software suelen preocupar dos tipos de riesgos:

- los riesgos de proyecto y
- los riesgos de producto.

Los **riesgos de proyecto** están relacionados con la gestión y el control del proyecto.

Los riesgos de proyecto **incluyen**:

- **Problemas de organización** (por ejemplo, retrasos en las entregas de los productos de trabajo, estimaciones inexactas, reducción de costes).
- **Problemas de personal** (por ejemplo, competencias insuficientes, conflictos, problemas de comunicación, escasez de personal).
- **Problemas técnicos** (por ejemplo, corrupción del alcance, soporte deficiente de las herramientas).
- **Problemas con los proveedores** (por ejemplo, fallo en la entrega por parte de terceros, quiebra de la empresa de apoyo).

Los riesgos de proyecto, cuando se producen, pueden repercutir en el calendario, el presupuesto o el alcance del proyecto, lo que afecta a la capacidad de éste para alcanzar sus objetivos.

Los **riesgos de producto** están relacionados con las características de calidad del producto (por ejemplo, las descritas en el modelo de calidad ISO 25010).

Algunos **ejemplos de riesgos de producto** son:

- falta de funcionalidad o funcionalidad incorrecta,
- cálculos erróneos,
- errores de ejecución,
- arquitectura deficiente,
- algoritmos ineficaces,
- tiempo de respuesta inadecuado,
- mala experiencia de usuario,
- vulnerabilidades de seguridad.

Los riesgos de producto, cuando se producen, pueden dar lugar a diversas consecuencias negativas, entre las que se **incluyen**:

- Insatisfacción del usuario.
- Pérdida de ingresos, confianza, reputación.
- Daños a terceros.
- Altos costes de mantenimiento, sobrecarga del servicio de asistencia técnica.
- Sanciones penales.
- En casos extremos, daños físicos, lesiones o incluso la muerte.

### 5.2.3 Análisis del Riesgo de Producto

Desde el punto de vista de la prueba, el **objetivo del análisis del riesgo de producto** es proporcionar una conciencia del riesgo de producto para concentrar el esfuerzo de prueba de forma que se minimice el nivel residual de riesgo de producto.

Lo ideal es que el análisis del riesgo de producto comience en una fase temprana del CVDS.

El **análisis del riesgo** de producto consiste en la **identificación del riesgo** y la **evaluación del riesgo**.

- La identificación del riesgo consiste en generar una lista exhaustiva de riesgos.
  - Los implicados pueden identificar los riesgos utilizando diversas técnicas y herramientas, por ejemplo, tormenta de ideas, talleres, entrevistas o diagramas causa-efecto.
- La evaluación del riesgo implica:
  - categorizar los riesgos identificados,
  - determinar su probabilidad de riesgo,
  - su impacto y nivel de riesgo,
  - establecer prioridades y
  - proponer formas de gestionarlos.
- La categorización ayuda a asignar acciones de mitigación, porque normalmente los riesgos que caen en la misma categoría pueden mitigarse utilizando un enfoque similar.
- La evaluación del riesgo puede utilizar un enfoque cuantitativo o cualitativo, o una mezcla de ambos.
  - En el **enfoque cuantitativo** el nivel de riesgo se calcula como la multiplicación de la probabilidad del riesgo y el impacto del riesgo.
  - En el **enfoque cualitativo**, el nivel de riesgo puede determinarse utilizando una matriz de riesgo.
- El análisis del riesgo de producto puede influir en la minuciosidad y el alcance de las pruebas.

Los resultados del análisis del riesgo se utilizan para:

- Determinar el alcance de la prueba que se debe llevar a cabo.
- Determinar los niveles de prueba concretos y proponer los tipos de prueba que deben realizarse
- Determinar las técnicas de prueba que deben emplearse y la cobertura que debe alcanzarse
- Estimar el esfuerzo de prueba necesario para cada tarea
- Priorizar las pruebas para intentar encontrar los defectos críticos lo antes posible
- Determinar si podría emplearse alguna actividad adicional a las pruebas para reducir el riesgo

### 5.2.4 Control del Riesgo de Producto

El **control del riesgo de producto** comprende todas las medidas que se toman en respuesta a los riesgos de producto identificados y evaluados.

El control del riesgo del producto consiste en la mitigación del riesgo y la monitorización del riesgo.

- La **mitigación del riesgo** implica la implementación de las acciones propuestas en la evaluación del riesgo para reducir el nivel de riesgo.
- El objetivo de la **monitorización del riesgo** es asegurar que las acciones de mitigación son efectivas, obtener más información para mejorar la evaluación del riesgo e identificar los riesgos emergentes.

Con respecto al control del riesgo de producto, una vez analizado el riesgo, son posibles varias opciones de respuesta al mismo, por ejemplo (Veenendaal 2012),

- mitigación del riesgo mediante la prueba,
- aceptación del riesgo,
- transferencia del riesgo o
- plan de contingencia

Las **medidas** que pueden tomarse para **mitigar los riesgos de producto mediante la prueba** son las siguientes:

- Seleccionar a los probadores con el nivel adecuado de experiencia y competencia, apropiados para un tipo de riesgo determinado.
- Aplicar un nivel adecuado de independencia de la prueba.
- Realizar revisiones y análisis estático.
- Aplicar las técnicas de prueba y los niveles de cobertura adecuados.
- Aplicar los tipos de prueba adecuados que aborden las características de calidad afectadas.
- Realizar pruebas dinámicas, incluidas las pruebas de regresión.

## 5.3 Monitorización de la Prueba, Control de la Prueba y Compleción de la Prueba
La **monitorización de la prueba** se ocupa de recopilar información sobre la prueba.

Esta información se utiliza para

- evaluar el avance de la prueba y
- medir si se satisfacen los criterios de salida de la prueba o las tareas de prueba asociadas a los criterios de salida, como
  - el cumplimiento de los objetivos de cobertura de los riesgos del producto,
  - los requisitos o
  - los criterios de aceptación.

El **control de la prueba** utiliza la información de la monitorización de prueba para proporcionar, en forma de directivas de control, la orientación y las acciones correctivas necesarias para lograr la prueba más eficaz y eficiente.

Algunos **ejemplos de directivas de control** son:

- Volver a priorizar las pruebas cuando un riesgo identificado se convierte en un problema.
- Reevaluar si un elemento de prueba cumple los criterios de entrada o los criterios de salida debido a la repetición del trabajo.
- Ajustar el calendario de prueba para hacer frente a un retraso en la entrega del entorno de prueba.
- Añadir nuevos recursos cuando y donde se necesiten.

La **compleción de la prueba** recopila datos de las actividades de prueba finalizadas para consolidar la experiencia, el producto de prueba y cualquier otra información relevante.

Las actividades de compleción de la prueba se producen en los hitos del proyecto, como cuando

- se completa un nivel de prueba,
- se termina una iteración ágil,
- se completa (o cancela) un proyecto de prueba,
- se libera un sistema de software o
- se completa una entrega de mantenimiento.

### 5.3.1 Métricas Utilizadas en la Prueba

Las **métricas de prueba** se recopilan para mostrar

- el **avance** con respecto al calendario de prueba y el presupuesto previstos,
- la **calidad actual** del objeto de prueba y
- la **efectividad de las actividades de prueba** con respecto a los objetivos o a una meta de iteración.

La **monitorización de prueba** recopila una variedad de métricas para apoyar el control de prueba y la compleción de la prueba.

Entre las **métricas de prueba** más comunes se incluyen:

- **Métricas de avance del proyecto** (por ejemplo, compleción de la tarea, uso de recursos, esfuerzo de la prueba).
- **Métricas de avance de la prueba** (por ejemplo, avance en la implementación de casos de prueba, avance en la preparación del entorno de prueba, número de casos de prueba realizados/no realizados, pasados/fallados, tiempo de ejecución de prueba).
- **Métricas de calidad de producto** (por ejemplo, disponibilidad, tiempo de respuesta, tiempo medio hasta el fallo).
- **Métricas de defectos** (por ejemplo, número y prioridades de defectos encontrados/corregidos, densidad de defectos, porcentaje de detección de defectos).
- **Métricas de riesgo** (por ejemplo, nivel de riesgo residual).
- **Métricas de cobertura** (por ejemplo, cobertura de requisitos, cobertura de código).
- **Métricas de coste** (por ejemplo, coste de la prueba, coste organizativo de la calidad).

### 5.3.2 Propósito, Contenido y Audiencia de los Informes de Prueba

El suministro de información de prueba resume y comunica la información de prueba durante y después de la prueba.

Los **informes del avance de la prueba** apoyan el control continuo de la prueba y deben proporcionar suficiente información para realizar modificaciones en el calendario de prueba, los recursos o el plan de prueba, cuando dichos cambios sean necesarios debido a una desviación del plan o a un cambio de circunstancias.

Los **informes de compleción de la prueba** resumen una etapa específica de la prueba (por ejemplo, nivel de prueba, ciclo de prueba, iteración) y pueden dar información para pruebas posteriores.

Durante la monitorización y el control de prueba, el equipo de prueba genera informes del avance de la prueba para los implicados con el fin de mantenerlos informados.

Los **informes del avance de la prueba** suelen generarse de forma regular (por ejemplo, a diario, semanalmente, etc.) e **incluyen**:

- Periodo de prueba.
- Avance de la prueba (por ejemplo, por delante o por detrás de lo previsto), incluyendo cualquier desviación notable.
- Obstáculos para la prueba y sus soluciones.
- Métricas de prueba (véanse ejemplos en la sección 5.3.1).
- Riesgos nuevos y modificados dentro del periodo de prueba.
- Prueba planificada para el siguiente periodo.

Un **informe compleción de prueba** se prepara durante la finalización de la prueba, cuando un proyecto, nivel de prueba o tipo de prueba está completo y cuando, idealmente, se han cumplido sus criterios de salida.

Este informe utiliza los informes del avance de la prueba y otros datos.

Los **informes típicos de compleción de la prueba incluyen**:

- Resumen de la prueba.
- Evaluación de la prueba y de la calidad del producto basada en el plan de prueba original (es decir, objetivos de la prueba y criterios de salida).
- Desviaciones del plan de prueba (por ejemplo, diferencias con el calendario, la duración y el esfuerzo previstos).
- Obstáculos y soluciones a las pruebas.
- Métricas de prueba basadas en los informes del avance de la prueba.
- Riesgos no mitigados, defectos no solucionados.
- Lecciones aprendidas relevantes para la prueba.

**Distintos públicos requieren información diferente** en los informes e influyen en el grado de formalidad y la frecuencia de los mismos.

- Informar sobre el avance de la prueba a otras personas del mismo equipo suele ser frecuente e informal, mientras que informar sobre la prueba de un proyecto finalizado sigue una plantilla establecida y sólo se produce una vez.

El estándar ISO/IEC/IEEE 29119-3 incluye plantillas y ejemplos de informes del avance de la prueba (denominados informes del estado de la prueba) e informes de compleción de la prueba.

### 5.3.3 Comunicación del Estado de la Prueba

La mejor forma de comunicar el estado de la prueba varía en función de

- los asuntos de interés de la gestión de la prueba,
- las estrategias de prueba de la organización,
- las normas reglamentarias o,
- en el caso de los equipos autoorganizados (véase la sección 1.5.2), del propio equipo.

Las **opciones** incluyen:

- Comunicación verbal con los miembros del equipo y otros implicados.
- Cuadros de mando (por ejemplo, paneles de control de CI/CD, tableros de tareas y gráficos de quemado).
- Canales de comunicación electrónica (por ejemplo, correo electrónico, chat).
- Documentación en línea.
- Informes formales de prueba (véase la sección 5.3.2).

Pueden utilizarse una o varias de estas opciones.

Una comunicación más formal puede ser más apropiada para equipos distribuidos en los que la comunicación directa cara a cara no siempre es posible debido a la distancia geográfica o a las diferencias horarias.

Normalmente, los distintos implicados están interesados en diferentes tipos de información, por lo que la comunicación debe adaptarse en consecuencia.

## 5.4 Gestión de la Configuración

En las pruebas, la gestión de la configuración (GC) proporciona una disciplina para la identificación, el control y el seguimiento de **productos de trabajo** como

- planes de prueba,
- estrategias de prueba,
- condiciones de prueba,
- casos de prueba,
- guiones de prueba,
- resultados de prueba,
- registros de prueba e
- informes de prueba

como **elementos de la configuración.**

Para un **elemento de la configuración complejo** (por ejemplo, un entorno de prueba), la GC registra

- los elementos que lo componen,
- sus relaciones y
- versiones.

Si el elemento de la configuración se aprueba para ser probado, se convierte en una **línea base** y sólo puede modificarse mediante un **proceso formal de control de cambios**.

La gestión de la configuración mantiene un registro de los elementos de la configuración modificados cuando se crea una nueva línea base.

Es posible volver a una línea base anterior para reproducir los resultados de pruebas anteriores.

Para apoyar adecuadamente las pruebas, **la gestión de la configuración asegura** lo siguiente:

- Todos los elementos de configuración, incluidos los elementos de prueba (partes individuales del objeto de prueba),
  - se identifican de forma única,
  - se controla su versión,
  - se realiza un seguimiento de los cambios y
  - se relacionan con otros elementos de configuración para que pueda mantenerse la trazabilidad durante todo el proceso de prueba.
- Todos los elementos de documentación y software identificados se referencian de forma inequívoca en la documentación de prueba.

La **integración continua**, la **entrega continua**, el **despliegue continuo** y las **pruebas** asociadas suelen implementarse como parte de una **canalización automatizada** de DevOps (véase la sección 2.1.4), en la que normalmente se incluye la GC automatizada.

## 5.5 Gestión de Defectos

Dado que **uno de los principales objetivos de prueba es encontrar defectos**, es esencial contar con un **proceso establecido de gestión de defectos**.

Aunque aquí nos referimos a "defectos", las **anomalías** notificadas pueden resultar ser defectos reales u otra cosa (por ejemplo, un f**also positivo**, una **solicitud de cambio**); esto se resuelve durante el proceso de tratamiento de los **informes de defecto**.

Las anomalías pueden informarse durante cualquier fase del CVDS y la forma depende de éste.

- Como mínimo, el proceso de gestión de defectos incluye un **flujo de trabajo para tratar las anomalías individuales** desde su descubrimiento hasta su cierre y reglas para su clasificación.
- El flujo de trabajo suele incluir actividades para registrar las anomalías notificadas, analizarlas y clasificarlas, decidir una respuesta adecuada como arreglarlas o mantenerlas tal cual y, por último, cerrar el informe de defecto.
- El proceso debe ser seguido por todos los implicados.
- Es aconsejable tratar los defectos de las pruebas estáticas (especialmente el análisis estático) de forma similar.

**Los informes de defectos típicos tienen los siguientes objetivos**:

- Proporcionar a los responsables de la gestión y resolución de los defectos notificados información suficiente para resolver el problema.
- Proporcionar un medio de seguimiento de la calidad del producto del trabajo.
- Proporcionar ideas para la mejora del proceso de desarrollo y prueba.

Un informe de defecto registrado durante una prueba dinámica suele incluir:

- **Identificador único**.
- **Título** con un breve **resumen** de la anomalía que se informa.
- **Fecha** en que se observó la anomalía, organización emisora y autor, incluido su rol.
- **Identificación del objeto** de prueba y **del entorno** de prueba.
- **Contexto del defecto** (por ejemplo, caso de prueba que se está realizando, actividad de prueba que se está llevando a cabo, fase del CVDS y otra información relevante como la técnica de prueba, la lista de comprobación o los datos de prueba que se están utilizando).
- **Descripción del fallo** para permitir su reproducción y resolución, incluidos los pasos que detectaron la anomalía, y cualquier registro de prueba, volcado de la base de datos, captura de pantalla o grabación pertinentes.
- **Resultados esperados y resultados reales**.
- **Severidad del defecto** (grado de impacto) sobre los intereses de los implicados o los requisitos.
- **Prioridad de corrección**.
- **Estado del defecto** (por ejemplo, abierto, aplazado, duplicado, a la espera de ser corregido, a la espera de pruebas de confirmación, reabierto, cerrado, rechazado).
- **Referencias** (por ejemplo, al caso de prueba).

Algunos de estos datos pueden incluirse automáticamente al utilizar **herramientas de gestión de defectos** (por ejemplo, identificador, fecha, autor y estado inicial).

En el estándar ISO/IEC/IEEE 29119-3, que se refiere a los informes de defectos como informes de incidencias, se pueden encontrar plantillas de documentos para un informe de defectos y ejemplos de informes de defectos.
