# Capítulo I - Fundamentos del proceso de prueba

## 1.1 ¿Qué es probar?

Los sistemas de software son parte integrante de nuestra vida cotidiana.

La mayoría de la gente ha tenido experiencias con software que no funcionaba como se esperaba.

Un software que no funciona correctamente puede acarrear muchos problemas, como

- pérdidas económicas,
- de tiempo
- o de reputación empresarial
- y, en casos extremos, incluso lesiones o la muerte.

**La prueba de software evalúa la calidad del software y ayuda a reducir el riesgo de fallo del software en operación.**

**La prueba de software es un conjunto de actividades para descubrir defectos y evaluar la calidad de los artefactos de software.**

Cuando se prueban, estos artefactos se conocen como **objetos de prueba**.

Un **concepto erróneo habitual** sobre la prueba es que sólo consiste en ejecutar pruebas

- es decir, ejecutar el software y comprobar los resultados de las pruebas).
- Sin embargo, la prueba del software también incluye otras actividades y debe estar alineada con el ciclo de vida de desarrollo del software (véase el capítulo 2).

Otro concepto erróneo habitual sobre la prueba es que ésta se concentra por completo en la verificación del objeto de prueba.

- Aunque la prueba implica verificación, es decir, comprobar si el sistema cumple los requisitos especificados,
- también implica validación, lo que significa comprobar si el sistema satisface las necesidades de los usuarios y otros implicados en su entorno operativo.

**La prueba puede ser dinámica o estática.**

- La prueba dinámica implica la ejecución del software, mientras que la prueba estática no.
- La prueba estática incluye revisiones (véase el capítulo 3) y análisis estático.
- La prueba dinámica utiliza distintos tipos de técnicas de prueba y enfoques de prueba para obtener casos de prueba (véase el capítulo 4).

**Probar no es sólo una actividad técnica.** También necesita que se planifique, gestione, estime, monitorice y controle de forma adecuada (véase el capítulo 5).

**Los probadores utilizan herramientas** (véase el capítulo 6), pero es importante recordar que la prueba es en gran medida una actividad intelectual, que requiere que los probadores tengan conocimientos especializados, utilicen competencias analíticas y apliquen el pensamiento crítico y el pensamiento sistémico (Myers 2011, Roman 2018).
El estándar ISO/IEC/IEEE 29119-1 proporciona más información sobre los conceptos de prueba de software.

### 1.1.1 Objetivos de Prueba

**Los objetivos de prueba característicos son:**

- **Evaluar** productos de trabajo como requisitos, historias de usuario, diseños y código.
- **Provocar fallos y encontrar defectos.**
- **Asegurar la cobertura** necesaria de un objeto de prueba.
- **Reducir el nivel de riesgo** asociado a una calidad inadecuada del software.
- **Verificar** si se han **cumplido los requisitos** especificados.
- Verificar que un objeto de prueba **cumple los requisitos contractuales, legales y normativos.**
- **Proporcionar información a los implicados** para que puedan tomar decisiones informadas.
- **Generar confianza** en la calidad del objeto de prueba.
- **Validar** si el objeto de prueba está completo y funciona **como esperan los implicados**.

Los objetivos de prueba pueden variar en función de

- el contexto, que incluye el producto de trabajo que se está probando,
- el nivel de prueba,
- los riesgos,
- el ciclo de vida de desarrollo del software (SDLC) que se está siguiendo y
- los factores relacionados con el contexto del negocio,
  - por ejemplo, la estructura corporativa, las consideraciones relativas a la competencia o el tiempo de comercialización.

### 1.1.2 Probar y Depurar

Probar y depurar son actividades distintas.

**Probar**
- puede desencadenar fallos causados por defectos en el software (prueba dinámica) o
- puede, de forma directa, encontrar defectos en el objeto de prueba (prueba estática).

Cuando **una prueba dinámica** (véase el capítulo 4) **desencadena un fallo, la depuración se ocupa de**
- encontrar las causas de este fallo (defectos),
- analizar estas causas y eliminarlas.
- En este caso, el proceso típico de depuración implica:
  - Reproducción del fallo.
  - Diagnóstico (hallazgo de la causa raíz).
  - Corrección de la causa.
- La prueba de confirmación posterior comprueba si las correcciones han resuelto el problema. Preferiblemente, **la prueba de confirmación la realiza la misma persona** que llevó a cabo la prueba inicial.
- También se puede llevar a cabo una prueba de regresión posterior, para comprobar si las correcciones están causando fallos en otras partes del objeto de prueba
- Véase la sección 2.2.3 para más información sobre la prueba de confirmación y la prueba de regresión.

Cuando **la prueba estática identifica un defecto, la depuración se ocupa de eliminarlo**.
No se necesita reproducción ni diagnóstico, ya que la prueba estática encuentra directamente los defectos y no puede provocar fallos (véase el capítulo 3).

## 1.2 ¿Por qué es Necesario Probar?

**Probar**, como forma de control de la calidad, **ayuda a alcanzar los objetivos ** dentro de

- el alcance,
- el tiempo,
- la calidad y
- las limitaciones presupuestarias establecidos.

La contribución de la prueba al éxito no debe limitarse a las actividades del equipo de prueba.

**Cualquier implicado** puede utilizar sus competencias en materia de prueba para contribuir al éxito del proyecto.

Probar componentes, sistemas y la documentación asociada ayuda a identificar defectos en el software:
  
### 1.2.1 Contribuciones de la prueba al éxito

**Probar proporciona un medio rentable de detectar defectos.**

- Estos defectos pueden eliminarse posteriormente (mediante la depuración, una actividad ajena a la prueba),
- por tanto, la prueba contribuye indirectamente a lograr objetos de prueba de mayor calidad.

**La prueba proporciona medios para evaluar directamente la calidad de un objeto de prueba** en varias etapas del ciclo de vida de desarrollo software CVDS.

- Estas mediciones se utilizan como parte de una actividad de gestión de proyectos más amplia, contribuyendo a las decisiones para pasar a la siguiente etapa del SDLC, como por ejemplo la decisión de entrega.

**Probar proporciona a los usuarios una representación indirecta en el proyecto de desarrollo.**

- Los probadores aseguran que se tiene en cuenta la **comprensión de las necesidades de los usuarios** a lo largo de todo el ciclo de vida de desarrollo.
- La alternativa es implicar a un conjunto representativo de usuarios como parte del proyecto de desarrollo, lo que no suele ser posible debido a los elevados costes y a la falta de disponibilidad de usuarios adecuados.

También puede ser necesario realizar pruebas **para cumplir requisitos contractuales o legales**, o para ajustarse a los estándares reglamentarios.

### 1.2.2 Prueba y Aseguramiento de la Calidad (AC)

Aunque a menudo se utilizan indistintamente los términos "prueba" y "aseguramiento de la calidad" (AC), **prueba y AC no son lo mismo**.

**La prueba es una forma de control de la calidad** (CC).

- El CC es un enfoque correctivo orientado al producto que se concentra en aquellas actividades que contribuyen a la consecución de unos niveles de calidad adecuados.
- La prueba es una de las principales formas de control de la calidad, mientras que otras incluyen métodos formales (comprobación de modelo y prueba de corrección), simulación y creación de prototipos.

El **aseguramiento de la calidad** es un enfoque preventivo orientado a los procesos que se concentra en la implementación y mejora de los mismos.

- Funciona sobre la base de que, si un buen proceso se sigue correctamente, entonces generará un buen producto.
- El aseguramiento de la calidad se aplica tanto al proceso de desarrollo como al de prueba, y es responsabilidad de todos los que participan en un proyecto.

Los resultados de la prueba son utilizados por el Aseguramiento de la Calidad (AC) y el Control de la Calidad (CC).

- En el control de calidad se utilizan para corregir defectos,
- mientras que en el aseguramiento de la calidad proporcionan retroalimentación sobre el rendimiento de los procesos de desarrollo y prueba.

### 1.2.3 Errores, Defectos, Fallos y Causas Raíz

Los seres humanos cometen **errores (equivocaciones)**, que producen defectos, que a su vez pueden dar lugar a fallos.

Los seres humanos cometen errores por diversas razones, como

- la presión por razones de tiempo,
- la complejidad de los productos de trabajo, los procesos, la infraestructura o las interacciones,
- o simplemente porque están cansados o carecen de la formación adecuada.

Los **defectos** pueden encontrarse en

- la documentación, como una especificación de requisitos o un guion de prueba,
- en el código fuente o
- en un artefacto de apoyo como un archivo de construcción.

Los defectos en los artefactos producidos al principio del CVDS, si no se detectan, suelen dar lugar a artefactos defectuosos más adelante en el ciclo de vida.

Si se ejecuta un código con defectos, el sistema puede **fallar** al hacer lo que debería hacer, o hacer algo que no debería, provocando un fallo.

- Algunos defectos siempre darán lugar a un fallo si se ejecutan, mientras que otros sólo darán lugar a un fallo en circunstancias específicas, y algunos puede que nunca den lugar a un fallo.

Los errores y los defectos no son la única causa de los fallos.

- Los fallos también pueden deberse a condiciones ambientales, como cuando la radiación o el campo electromagnético provocan defectos en el firmware.

Una **causa raíz** es una razón fundamental por la que se produce un problema (por ejemplo, una situación que conduce a un error).

- Las causas raíz se identifican mediante el análisis de la causa raíz, que suele realizarse cuando se produce un fallo o se identifica un defecto.
- Se cree que pueden evitarse otros fallos o defectos similares o reducirse su frecuencia tratando la causa raíz, por ejemplo, eliminándola.

## 1.3 Siete Principios de la Prueba

A lo largo de los años se han sugerido una serie de principios de prueba que ofrecen directrices generales aplicables a todas las pruebas. En este programa de estudio se describen siete de estos principios.

1. **La prueba muestra la presencia de defectos, no su ausencia.**
- La prueba puede mostrar que hay defectos en el objeto de prueba, pero **no puede demostrar que no los haya** (Buxton 1970).
- La prueba reduce la probabilidad de que queden defectos por descubrir en el objeto de prueba, pero aunque no se encuentren defectos, la prueba no puede demostrar la corrección del objeto de prueba.
2. **La prueba exhaustiva es imposible.**
- **Probarlo todo no es factible** salvo en casos triviales (Manna 1978).
- En lugar de intentar probar exhaustivamente, deberían utilizarse
  - técnicas de prueba (véase el capítulo 4),
  - priorización de casos de prueba (véase el apartado 5.1.5)
  - y pruebas basadas en el riesgo (véase el apartado 5.2),
- para concentrar los esfuerzos de prueba.
3. **La prueba temprana ahorra tiempo y dinero**.
- **Los defectos que se eliminan al principio del proceso no causarán defectos posteriores** en los productos de trabajo derivados.
- El **coste de la calidad se reducirá**, ya que se producirán menos fallos más adelante en el CVDS (Boehm 1981).
- Para encontrar defectos en una fase temprana, tanto las pruebas estáticas (véase el capítulo 3) como las pruebas dinámicas (véase el capítulo 4) deben iniciarse lo antes posible.
4. **Los defectos se agrupan.**
- **Un pequeño número de componentes del sistema suelen contener la mayoría de los defectos descubiertos o son responsables de la mayoría de los fallos operativos** (Enders 1975).
- Este fenómeno es una ilustración del principio de Pareto.
- Las agrupaciones de defectos previstas, y las agrupaciones de defectos reales observadas durante la prueba o en operación, son una entrada importante para la prueba basada en el riesgo (véase la sección 5.2).
5. **Las pruebas se desgastan**.
- **Si las pruebas se repiten muchas veces, se vuelven cada vez más ineficaces para detectar nuevos defectos** (Beizer 1990).
- Para superar este efecto, puede que sea necesario modificar las pruebas y los datos de prueba existentes, y que haya que escribir nuevas pruebas.
- Sin embargo, en algunos casos, la repetición de las mismas pruebas puede tener un resultado beneficioso, por ejemplo, en las pruebas de regresión automatizadas (véase la sección 2.2.3).
6. **La prueba depende del contexto**.
- **No existe un único enfoque de prueba aplicable universalmente**.
- La prueba se realiza de forma diferente en distintos contextos (Kaner 2011).
7. **Falacia de la ausencia de defectos**.
- Es una falacia (es decir, una idea equivocada) esperar que la verificación del software asegure el éxito de un sistema.
- **Probar a fondo todos los requisitos especificados y arreglar todos los defectos encontrados podría seguir produciendo un sistema que no satisface las necesidades y expectativas de los usuarios**, que no ayuda a conseguir los objetivos de negocio del cliente y que es inferior en comparación con otros sistemas de la competencia.
- Además de la verificación, también debe llevarse a cabo la validación (Boehm 1981).

## 1.4 Actividades de Prueba, Productos de Prueba y Roles de Prueba

**La prueba depende del contexto**, pero, a un alto nivel, **existen conjuntos comunes de actividades de prueba** sin los cuales es menos probable que la prueba alcance los objetivos de prueba.

**Estos conjuntos de actividades de prueba forman un proceso de prueba.**

El proceso de prueba puede adaptarse a una situación determinada en función de diversos factores.

- Qué actividades de prueba se incluyen en este proceso de prueba, cómo se implementan y cuándo tienen lugar se decide normalmente como parte de la **planificación de prueba** para la situación específica (véase la sección 5.1).

Las siguientes secciones describen los aspectos generales de este proceso de prueba en términos de

- actividades y tareas de prueba,
- el impacto del contexto,
- el productos de prueba,
- la trazabilidad entre la base de prueba y el productos de prueba,
- y los roles de prueba.

El estándar ISO/IEC/IEEE 29119-2 proporciona más información sobre los procesos de prueba.

### 1.4.1 Actividades y Tareas de Prueba

Un proceso de prueba suele constar de los principales grupos de actividades que se describen a continuación.

Aunque puede parecer que muchas de estas actividades siguen una secuencia lógica, **a menudo se implementan de forma iterativa o en paralelo**.

**Estas actividades de prueba suelen necesitar adaptarse** al sistema y al proyecto.

#### 1.4.1.a Planificación de la Prueba

La planificación de la prueba consiste en **definir los objetivos de la prueba** y, a continuación, **seleccionar el enfoque** que mejor permita alcanzar los objetivos dentro de las **limitaciones** impuestas por el contexto general.

La planificación de la prueba se explica con más detalle en la sección 5.1.

#### 1.4.1.b Monitorización y Control de la Prueba

La **monitorización** de la prueba implica

- la **comprobación continua** de todas las actividades de la prueba y
- la **comparación del avance real con el plan**.

El **control** de prueba implica la **adopción de las medidas** necesarias para cumplir los objetivos de la prueba.

La monitorización de prueba y el control de prueba se explican con más detalle en la sección 5.3.

#### 1.4.1.c Análisis de la Prueba

El* **análisis de la prueba** incluye

- el análisis de la base de prueba para **identificar las prestaciones** que pueden ser objeto de prueba
- y para **definir y priorizar las condiciones de prueba** asociadas,
- junto con los riesgos y niveles de riesgo relacionados (véase la sección 5.2).

La base de prueba y los objetos de prueba también se evalúan para identificar los defectos que pueden contener y valorar su capacidad de ser probados.

El análisis de prueba suele apoyarse en el uso de **técnicas de prueba** (véase el capítulo 4).

El análisis de la prueba responde a la pregunta **"¿qué hay que probar?"** en términos de criterios de cobertura medibles.

#### 1.4.1.d Diseño de la Prueba

El diseño de prueba incluye la elaboración de las condiciones de prueba en **casos de prueba** y otros productos de prueba (por ejemplo, contratos de prueba).

Esta actividad suele implicar la **identificación de elementos de cobertura**, que sirven de referencia para especificar las entradas de los casos de prueba.

Las **técnicas de prueba** (véase el capítulo 4) pueden servir de apoyo a esta actividad.

El diseño de pruebas también incluye

- la definición de los requisitos de datos de prueba,
- el diseño del entorno de prueba y
- la identificación de cualquier otra infraestructura y herramientas necesarias.

El diseño de prueba responde a la pregunta "¿cómo llevar a cabo la prueba?".

#### 1.4.1.e Implementación de la Prueba

La **implementación de prueba** incluye la **creación o la adquisición de los productos de prueba** necesarios para la ejecución de prueba (por ejemplo, los datos de prueba).

Los casos de prueba pueden **organizarse** en **procedimientos de prueba** y suelen reunirse en **conjuntos de prueba**.

Se crean **guiones de prueba** manuales y automatizados.

Se **priorizan** los procedimientos de prueba y se organizan dentro de un **calendario de ejecución** de prueba para una ejecución de prueba eficiente (véase la sección 5.1.5).

Se **construye el entorno de prueba** y se verifica que está configurado correctamente.

#### 1.4.1.f Ejecución de la Prueba
La **ejecución de la prueba** incluye la **realización de las pruebas de acuerdo con el calendario de ejecución de prueba** (ejecuciones de pruebas).

La ejecución de una prueba puede ser **manual** o **automatizada**.

La ejecución de prueba puede adoptar muchas formas, incluidas

- la prueba continua o
- sesiones de prueba en pareja.

**Los resultados de prueba reales se comparan con los resultados esperados.**

Se **registran** los resultados de la prueba.

Las **anomalías** se analizan para identificar sus causas probables.

Este análisis permite informar de las anomalías en función de los fallos observados (véase el apartado 5.5).

#### 1.4.1.g Compleción de la Prueba

Las actividades de **compleción de la prueba** suelen producirse en los **hitos** del proyecto (por ejemplo,

- la entrega,
- el final de una iteración,
- la compleción del nivel de prueba)

para cualquier defecto no resuelto, solicitud de cambio o elemento de lista de trabajo acumulado del producto que se haya creado.

Cualquier producto de prueba que pueda ser **útil en el futuro** se identifica y se archiva o se entrega a los equipos adecuados.

Se **desactiva el entorno de prueba** hasta un estado acordado.

Se analizan las actividades de prueba para

- identificar las **lecciones aprendidas**
- y las mejoras para futuras iteraciones, entregas o proyectos (véase la sección 2.1.6).

Se crea un **informe de compleción de la prueba** y se comunica a los implicados.

### 1.4.2 El Proceso de Prueba en Contexto

**La prueba no se realiza de forma aislada.**

Las actividades de prueba son parte **integrante** de los procesos de desarrollo que se llevan a cabo en una organización.

La prueba también está sufragada por los implicados y **su objetivo final es ayudar a satisfacer las necesidades de negocio de los implicados.**

Por lo tanto, la forma en que se lleve a cabo la prueba dependerá de una serie de **factores contextuales** entre los que se incluyen:

- **Implicados** (necesidades, expectativas, requisitos, voluntad de cooperación, etc.)
- **Miembros del equipo** (competencias, conocimientos, nivel de experiencia, disponibilidad, necesidades de formación, etc.)
- **Dominio del negocio** (criticidad del objeto de prueba, riesgos identificados, necesidades del mercado, normativa legal específica, etc.)
- **Factores técnicos** (tipo de software, arquitectura del producto, tecnología utilizada, etc.)
- **Restricciones del proyecto** (alcance, tiempo, presupuesto, recursos, etc.)
- **Factores organizativos** (estructura organizativa, políticas existentes, prácticas utilizadas, etc.)
- **Ciclo de vida de desarrollo del software** - CVDS (prácticas de ingeniería, métodos de desarrollo, etc.)
- **Herramientas** (disponibilidad, usabilidad, cumplimiento, etc.)

Estos factores influirán en muchos asuntos relacionados con la prueba, entre ellos:

- la estrategia de prueba, 
- las técnicas de prueba utilizadas, 
- el grado de automatización de la prueba, 
- el nivel de cobertura requerido, 
- el nivel de detalle de la documentación de prueba, 
- el suministro de información, 
- etc.

### 1.4.3 Productos de Prueba

El producto de prueba se crea como producto de salida de las actividades de prueba descritas en la sección 1.4.1.

Existe una **variación significativa** en la forma en que las distintas organizaciones producen, conforman, nombran, organizan y gestionan sus productos de trabajo.

Una **gestión de la configuración** adecuada (véase la sección 5.4) **asegura la consistencia y la integridad de los productos de trabajo**.

La siguiente lista de productos de trabajo no es exhaustiva:

#### 1.4.3.a Productos del Trabajo de Planificación de la Prueba

Entre los productos del trabajo de planificación de la prueba se incluyen:

- el **plan de prueba,**
- el **calendario de prueba**,
- el **registro de riesgos**
- y los **criterios de entrada y salida** (véase la sección 5.1).

El **registro de riesgos** es una lista de riesgos junto con la probabilidad del riesgo, el impacto del riesgo e información sobre la mitigación del riesgo (véase la sección 5.2).

El calendario de prueba, el registro de riesgos y los criterios de entrada y salida suelen formar parte del plan de prueba.

#### 1.4.3.b Productos de Trabajo de Monitorización y Control de la Prueba

Los productos de trabajo de monitorización y control de la prueba incluyen:

- informes del avance de la prueba (véase el apartado 5.3.2),
- documentación de las directivas de control (véase el apartado 5.3)
- e información sobre los riesgos (véase el apartado 5.2).

#### 1.4.3.c Productos de Trabajo de Análisis de la Prueba

Los productos del trabajo de análisis de la prueba incluyen:

- condiciones de prueba (priorizadas) (por ejemplo, criterios de aceptación, véase la sección 4.5.2),
- e informes de defectos relativos a los defectos en la base de prueba (si no se solucionan directamente).

#### 1.4.3.d Productos del Trabajo del Diseño de la Prueba

Los productos de trabajo del diseño de prueba incluyen:

- casos de prueba (priorizados),
- contratos de prueba,
- elementos de cobertura,
- requisitos de datos de prueba
- y requisitos del entorno de prueba.

#### 1.4.3.e Productos del Trabajo de Implementación de la Prueba

Los productos de trabajo de implementación de prueba incluyen:

- procedimientos de prueba,
- guiones de prueba automatizados,
- juegos de prueba, 
- datos de prueba, 
- calendario de ejecución de la prueba 
- y elementos del entorno de prueba.

Algunos ejemplos de elementos del entorno de pruebas son:
- stubs, 
- controladores, 
- simuladores 
- y virtualizaciones de servicios.

#### 1.4.3.f Productos del Trabajo de Ejecución de la Prueba

Los productos de trabajo de la ejecución de la prueba incluyen:

- registros en bitácora de prueba
- e informes de defectos (véase la sección 5.5).

#### 1.4.3.g Productos del Trabajo de Compleción de la Prueba

Los productos de trabajo de la compleción de la prueba incluyen:

- informe de compleción de la prueba (véase la sección 5.3.2),
- elementos de acción para la mejora de proyectos o iteraciones posteriores, lecciones aprendidas documentadas
- y solicitudes de cambio (por ejemplo, como elementos de la lista de trabajo acumulado del producto).

### 1.4.4 Trazabilidad entre Bases de Prueba y Productos de Prueba

**Para implementar una monitorización y un control efectivos** de la prueba, **es importante establecer y mantener la trazabilidad** a lo largo del proceso de prueba entre

- los elementos de la base de prueba,
- los productos de prueba asociados a estos elementos, por ejemplo,
  - las condiciones de la prueba,
  - los riesgos,
  - los casos de prueba,
- los resultados de la prueba
- y los defectos detectados.

Una **trazabilidad precisa soporta la evaluación de la cobertura**, por lo que es muy útil que se definan criterios de cobertura medibles en la base de prueba.

Los **criterios de cobertura** pueden funcionar como indicadores clave de rendimiento para impulsar las actividades que muestran hasta qué punto se han alcanzado los objetivos de la prueba (véase la sección 1.1.1). Por ejemplo:

- La trazabilidad de los casos de prueba a los requisitos puede verificar que los requisitos están cubiertos por los casos de prueba.
- La trazabilidad de los resultados de prueba a los riesgos puede utilizarse para evaluar el nivel de riesgo residual en un objeto de prueba.

Además de evaluar la cobertura, una buena trazabilidad permite

- determinar el impacto de los cambios,
- facilita las auditorías de la prueba
- y ayuda a cumplir los criterios de gobernanza de TI.

Una buena trazabilidad también **facilita la comprensión de los informes** de avance y compleción de la prueba al incluir el estado de los elementos de la base de prueba.

Esto también puede ayudar a **comunicar los aspectos técnicos** de la prueba a los implicados de forma comprensible.

La trazabilidad proporciona información para

- evaluar la calidad del producto,
- la capacidad del proceso
- y el avance del proyecto con respecto a los objetivos de negocio

### 1.4.5 Roles en la Prueba

En este programa de estudio se tratan **dos roles principales** en la prueba:

- un **rol de gestión de prueba**
- y un **rol de prueba.**

Las actividades y tareas asignadas a estos dos roles dependen de factores como
- el contexto del proyecto y del producto,
- las competencias de las personas que desempeñan los roles
- y la organización.

El **rol de gestión de prueba** asume la **responsabilidad general**

- del proceso de prueba,
- del equipo de prueba
- y de la dirección de las actividades de prueba.

El rol de gestión de prueba se concentra principalmente en las actividades de
- planificación de prueba,
- monitorización y control de prueba y
- compleción de la prueba.

La forma en que se lleva a cabo el rol de gestión de pruebas varía en función del contexto. Por ejemplo,
- en el desarrollo ágil de software, algunas de las tareas de gestión de pruebas pueden correr a cargo del equipo ágil.

Las tareas que abarcan a varios equipos o a toda la organización pueden ser realizadas por jefes de prueba ajenos al equipo de desarrollo.

El **rol de prueba** asume la responsabilidad general del aspecto asociado a la ingeniería (técnica) de la prueba.

El rol de prueba se concentra principalmente en las actividades de
- análisis de prueba,
- diseño de prueba,
- implementación de prueba
- y ejecución de prueba.

Diferentes personas pueden asumir estos roles en diferentes momentos.

Por ejemplo,

- el rol de gestión de la prueba puede ser desempeñado por un jefe de equipo, por un jefe de prueba, por un jefe de desarrollo, etc.
- También es posible que una misma persona asuma los roles de prueba y gestión de prueba al mismo tiempo.

## 1.5 Competencias Esenciales y Buenas Prácticas en la Prueba

La **competencia** es la capacidad de hacer algo bien que proviene del conocimiento, la práctica y la aptitud de cada uno.

Los buenos probadores deben poseer algunas competencias esenciales para hacer bien su trabajo.

Los buenos probadores

- deben ser **jugadores de equipo eficaces**
- y deben ser capaces de realizar pruebas en diferentes niveles de independencia de la prueba.

### 1.5.1 Competencias Genéricas Necesarias para Probar

A pesar de ser genéricas, las siguientes **competencias** son especialmente **relevantes** para los probadores:

- **Conocimiento en materia de prueba** (para aumentar la efectividad de la prueba, por ejemplo, mediante el uso de técnicas de prueba).
- **Minuciosidad, cuidado, curiosidad, atención a los detalles, ser metódico** (para identificar defectos, especialmente los difíciles de encontrar).
- Buena competencia en el ámbito de la **comunicación escucha activa, ser un jugador de equipo** (para interactuar eficazmente con todos los implicados, transmitir información a los demás, hacerse entender e informar y discutir los defectos).
- **Pensamiento analítico, pensamiento crítico, creatividad** (para aumentar la efectividad de las pruebas).
- **Conocimientos técnicos** (para aumentar la eficiencia de las pruebas, por ejemplo, utilizando herramientas de prueba adecuadas).
- **Conocimientos del dominio** (para poder comprender y comunicarse con los usuarios finales/representantes de negocio).

A menudo, los probadores son los **portadores de las malas noticias.**

- Es un rasgo humano común culpar al portador de malas noticias.
- Esto hace que las competencias de comunicación sean cruciales para los probadores.

Comunicar los resultados de prueba puede percibirse como una crítica al producto y a su autor.

- El **sesgo de confirmación** puede dificultar la aceptación de información que discrepa de las creencias actuales.
- Algunas personas pueden percibir las pruebas como una **actividad destructiva**, a pesar de que contribuyen en gran medida al éxito del proyecto y a la calidad del producto.
- Para intentar mejorar esta opinión, la información sobre defectos y fallos debe **comunicarse de forma constructiva.**

### 1.5.2 Enfoque de Equipo Completo

**Una de las competencias importantes para un probador es la capacidad de trabajar eficazmente en un contexto de equipo y de contribuir positivamente a los objetivos del mismo.**

El **enfoque de equipo completo** - una práctica procedente de la Programación Extrema (véase la sección 2.1) - se basa en esta competencia.

- En el enfoque de equipo completo, cualquier miembro del equipo con los conocimientos y competencias necesarios puede realizar cualquier tarea, y todos son responsables de la calidad.
- Los miembros del equipo comparten el mismo espacio de trabajo (físico o virtual), ya que la ubicación común facilita la comunicación y la interacción.
- El enfoque de equipo completo mejora la dinámica de equipo, potencia la comunicación y la colaboración dentro del equipo y crea sinergia al permitir que los diversos conjuntos de competencias dentro del equipo se aprovechen en beneficio del proyecto.

Los probadores **trabajan en estrecha colaboración** con otros miembros del equipo para asegurar que se alcanzan los niveles de calidad deseados.

Esto incluye
- colaborar con los representantes de negocio para ayudarles a crear pruebas de aceptación adecuadas
- y trabajar con los desarrolladores para acordar la estrategia de prueba y decidir los enfoques de automatización de la prueba.
- De este modo, los probadores pueden transferir conocimientos sobre la prueba a otros miembros del equipo e influir en el desarrollo del producto.

Dependiendo del contexto, el enfoque de equipo completo puede no ser siempre apropiado.

Por ejemplo, en algunas situaciones, como las críticas para la seguridad, puede necesitarse un alto nivel de independencia en la prueba.

### 1.5.3 Independencia de la Prueba

Un **cierto grado de independencia** hace que el probador sea más eficaz a la hora de encontrar defectos debido a las diferencias entre los **sesgos cognitivos** del autor y del probador (cf. Salman 1995).

Sin embargo, la independencia no sustituye a la familiaridad; por ejemplo,

- los desarrolladores pueden encontrar eficazmente muchos defectos en su propio código.

Los productos del trabajo pueden ser probados

- por su autor (sin independencia),
- por los compañeros del autor del mismo equipo (cierta independencia),
- por probadores ajenos al equipo del autor pero dentro de la organización (alta independencia),
- o por probadores ajenos a la organización (independencia muy alta).

Para la mayoría de los proyectos, suele ser mejor llevar a cabo las pruebas con **varios niveles de independencia**
por ejemplo,
- que los desarrolladores realicen las pruebas de integración de componentes,
- que el equipo de pruebas realice las pruebas de integración de sistemas y sistemas,
- y que los representantes de negocio realicen las pruebas de aceptación.

La **principal ventaja de la independencia de la prueba** es que es probable que los probadores independientes reconozcan diferentes tipos de fallos y defectos en comparación con los desarrolladores debido a sus diferentes antecedentes, perspectivas técnicas y sesgos.

Además, un probador independiente puede verificar, cuestionar o refutar las suposiciones realizadas por los implicados durante la especificación e implementación del sistema.

Sin embargo, también existen algunos **inconvenientes**.

- Los probadores independientes pueden estar **aislados del equipo** de desarrollo, lo que puede provocar una falta de colaboración, problemas de comunicación o una relación de confrontación con el equipo de desarrollo.
- Los desarrolladores pueden **perder el sentido de la responsabilidad** por la calidad.
- Los probadores independientes pueden ser vistos como un **cuello de botella** o culpables de los **retrasos** en la entrega.
