# Capítulo IV - Análisis y Diseño de la Prueba

## 4.1 Introducción a las Técnicas de Prueba

**Las técnicas de prueba ayudan al probador en el análisis de prueba (qué probar) y en el diseño de prueba (cómo probar).**

**Las técnicas de prueba ayudan a desarrollar un conjunto relativamente pequeño, pero suficiente, de casos de prueba de forma sistemática.**

Las técnicas de prueba también ayudan al probador a

- definir las condiciones de la prueba,
- identificar los elementos de cobertura e
- identificar los datos de prueba durante el análisis y el diseño de la prueba.

Se puede encontrar más información sobre las técnicas de prueba y sus correspondientes medidas en el estándar ISO/IEC/IEEE 29119-4 y en (Beizer 1990, Craig 2002, Copeland 2004, Koomen 2006, Jorgensen 2014, Ammann 2016, Forgács 2019).

En este programa de estudio, las técnicas de prueba se clasifican en técnicas de caja negra, de caja blanca y basadas en la experiencia.

**Técnicas de Prueba de Caja Negra**

- Las técnicas de prueba de caja negra (también conocidas como **técnicas basadas en la especificación**) se basan en un análisis del comportamiento especificado del objeto de prueba **sin hacer referencia a su estructura interna.**
- Por lo tanto, los casos de prueba son independientes de cómo se implemente el software.
- En consecuencia, si la implementación cambia, pero el comportamiento requerido sigue siendo el mismo, los casos de prueba siguen siendo útiles.

**Técnicas de Prueba de Caja Blanca**

- Las técnicas de prueba de caja blanca (también conocidas como **técnicas basadas en la estructura**) se basan en un análisis de la estructura interna y el procesamiento del objeto de prueba.
- Como los casos de prueba dependen de cómo esté diseñado el software, sólo pueden crearse después del diseño o la implementación del objeto de prueba.

**Técnicas de Prueba Basadas en la Experiencia**

- Las técnicas de prueba basadas en la experiencia utilizan eficazmente los conocimientos y la experiencia de los probadores para el diseño y la implementación de los casos de prueba.
- La efectividad de estas técnicas depende en gran medida de las competencias del probador.
- Las técnicas de prueba basadas en la experiencia pueden **detectar defectos que no se detectan con las técnicas de prueba de caja blanca y caja negra.**
- Por lo tanto, las técnicas de prueba basadas en la experiencia son complementarias a las técnicas de prueba de caja blanca y de caja negra.

## 4.2 Técnicas de Prueba de Caja Negra
Las técnicas de prueba de caja negra utilizadas de forma habitual y que se analizan en las secciones siguientes son:

- Partición de equivalencia
- Análisis del valor frontera
- Prueba de tabla de decisión
- Prueba de transición de estado

### 4.2.1 Partición de Equivalencia

La **Partición de Equivalencia (PE)** divide los datos en **particiones** (conocidas como particiones de equivalencia) **basándose en la expectativa de que todos los elementos de una partición determinada van a ser procesados de la misma manera por el objeto de prueba.**

- La teoría que subyace a esta técnica es que, si un caso de prueba, que prueba un valor de una partición de equivalencia, detecta un defecto, este defecto también debería ser detectado por los casos de prueba que prueban cualquier otro valor de la misma partición.
- Por lo tanto, **basta con una prueba para cada partición.**

Las particiones de equivalencia pueden identificarse para cualquier elemento de dato relacionado con el objeto de prueba, incluyendo

- entradas | salidas,
- elementos de configuración,
- valores internos,
- valores relacionados con el tiempo y
- parámetros de interfaz.

Las particiones pueden ser

- continuas o discretas,
- ordenadas o desordenadas,
- finitas o infinitas.

**Las particiones no deben solaparse y deben ser conjuntos no vacíos.**

Para objetos de prueba simples, la PE puede ser fácil, pero en la práctica, entender cómo tratará el objeto de prueba los distintos valores suele ser complicado.

- Por lo tanto, **la partición debe hacerse con cuidado.**

Una partición que contenga valores válidos se denomina **partición válida.**

Una partición que contiene valores no válidos se denomina** partición no válida.**

Las definiciones de valores válidos e inválidos pueden variar entre equipos y organizaciones. Por ejemplo,

- los valores válidos pueden interpretarse como aquellos que deben ser procesados por el objeto de prueba o como aquellos para los que la especificación define su procesamiento.
- Los valores no válidos pueden interpretarse como aquellos que deben ser ignorados o rechazados por el objeto de prueba o como aquellos para los que no se define su procesamiento en la especificación del objeto de prueba.

Muchos objetos de prueba incluyen múltiples conjuntos de particiones

- por ejemplo, objetos de prueba con más de un parámetro de entrada,

lo que significa que un caso de prueba cubrirá particiones de diferentes conjuntos de particiones.

El criterio de cobertura más sencillo en el caso de conjuntos múltiples de particiones se denomina **cobertura de Cada Elección** (Ammann 2016).
- La cobertura de Cada Elección exige que los casos de prueba utilicen cada partición de cada conjunto de particiones al menos una vez.
- La cobertura Cada Elección no tiene en cuenta las combinaciones de particiones.

### 4.2.2 Análisis del Valor Frontera

El Análisis del Valor Frontera (AVF) es una técnica basada en practicar las fronteras de las particiones de equivalencia.

- Por lo tanto, el AVF sólo puede utilizarse para particiones ordenadas.
- Los valores mínimo y máximo de una partición son sus valores frontera.
- En el caso de AVF, si dos elementos pertenecen a la misma partición, todos los elementos entre ellos deben pertenecer también a esa partición.

El AVF se concentra en los valores frontera de las particiones porque es más probable que los desarrolladores cometan errores con estos valores frontera.

- Los defectos típicos que encuentra el BVA se localizan cuando las fronteras implementadas se colocan erróneamente en posiciones superiores o inferiores a las previstas o se omiten por completo.

Este programa de estudio abarca dos versiones del AVF: **AVF de 2 valores y AVF de 3 valores.**

Se diferencian en cuanto a los elementos de cobertura por frontera que necesitan ser practicados para lograr una cobertura del 100%.

En el **AVF de 2 valores** (Craig 2002, Myers 2011), para cada valor frontera hay dos elementos de cobertura:

- este valor frontera
- y su vecino más cercano perteneciente a la partición adyacente.

- Para lograr una cobertura del 100% con BVA de 2 valores, los casos de prueba deben utilizar todos los elementos de cobertura, es decir, todos los valores frontera identificados.
- La cobertura se mide como el número de valores frontera que se han practicado, dividido por el número total de valores frontera identificados, y se expresa en porcentaje.

En el **AVF de 3 valores** (Koomen 2006, O'Regan 2019), para cada valor frontera hay tres elementos de cobertura:

- este valor frontera
- y sus dos vecinos.

- Por lo tanto, en el AVF de 3 valores algunos de los elementos de cobertura pueden no ser valores frontera.
- Para lograr una cobertura del 100% con BVA de 3 valores, los casos de prueba deben practicar todos los elementos de cobertura, es decir, los valores frontera identificados y sus vecinos.
- La cobertura se mide como el número de valores frontera y sus vecinos practicados, dividido por el número total de valores frontera identificados y sus vecinos, y se expresa en porcentaje.

El **AVF de 3 valores es más riguroso que el AVF de 2 valores,** ya que puede detectar defectos pasados por alto por el AVF de 2 valores.

Por ejemplo,

- si la decisión "si (x <= 10) ..." se implementa incorrectamente como "si (x = 10) ...", ningún dato de prueba derivado del AVF de 2 valores (x = 10, x = 11) puede detectar el defecto.
- Sin embargo, es probable que x = 9, derivado del AVF de 3 valores, lo detecte.

### 4.2.3 Prueba de Tabla de Decisión

Las **tablas de decisión** se utilizan para probar la implementación de los requisitos de sistemas que especifican cómo **diferentes combinaciones de condiciones dan lugar a diferentes resultados.**

- Las tablas de decisión son una forma efectiva de registrar **lógicas complejas**, como las reglas de negocio. 
- Cuando se crean tablas de decisión, se definen las **condiciones** y las **acciones** resultantes del sistema. Éstas forman las **filas** de la tabla. 
- Cada **columna** corresponde a una **regla de decisión** que define una combinación única de condiciones, junto con las acciones asociadas. 
- En las **tablas de decisión de entrada limitada**, todos los valores de las condiciones y acciones (excepto los irrelevantes o inviables; véase más adelante) se muestran como **valores booleanos (verdadero o falso).** 
- Alternativamente, en las **tablas de decisión de entrada ampliada** algunas o todas las condiciones y acciones también pueden adoptar **valores múltiples** (por ejemplo, rangos de números, particiones de equivalencia, valores discretos). 
- La notación para las **condiciones** es la siguiente:
  - **"V"** (verdadero) significa que se cumple la condición.
  - **"F"** (falso) significa que la condición no se satisface.
  - **"-"** significa que el valor de la condición es irrelevante para el resultado de la acción.
  - **"N/A"** significa que la condición es inviable para una regla determinada.
- Para las acciones:
  - **"X"** significa que la acción debe producirse.
  - **En blanco** significa que la acción no debe ocurrir.
- También se pueden utilizar otras notaciones.
- Una **tabla de decisión completa** tiene suficientes columnas para cubrir todas las combinaciones de condiciones. 
- La tabla puede **simplificarse** eliminando las columnas que contengan combinaciones de condiciones inviables. 
- La tabla también **se puede minimizar** fusionando en una sola columna las columnas en las que algunas condiciones no afectan al resultado. 
- Los algoritmos de minimización de tablas de decisión están fuera del alcance de este programa de estudio. 
- En la prueba de tabla de decisión, los **elementos de cobertura son las columnas** que contienen combinaciones de condiciones factibles. 
  - Para lograr una cobertura del 100% con esta técnica, los casos de prueba deben practicar todas estas columnas. 
  - La cobertura se mide como el número de columnas practicadas, dividido por el número total de columnas factibles, y se expresa en porcentaje. 
- El **punto fuerte** de la prueba de tabla de decisión es que proporciona un **enfoque sistemático** para identificar todas las combinaciones de condiciones, algunas de las cuales podrían pasarse por alto de otro modo. 
- También **ayuda a encontrar lagunas o contradicciones** en los requisitos. 
- Si hay muchas condiciones, practicar todas las reglas de decisión puede llevar mucho tiempo, ya que **el número de reglas crece exponencialmente con el número de condiciones.** 
- En tal caso, para reducir el número de reglas que necesitan ser practicadas, puede utilizarse una **tabla de decisión minimizada** o un enfoque basado en el riesgo.

### 4.2.4 Prueba de Transición de Estado

Un **diagrama de transición de estados** modela el comportamiento de un sistema mostrando sus posibles estados y las transiciones de estado válidas.

- Una **transición** es iniciada por un evento, que puede ser calificado adicionalmente por una **condición de guarda**.
- Se supone que las transiciones son instantáneas y, en ocasiones, pueden dar lugar a que el software pase a la acción.
- La sintaxis común de etiquetado de transiciones es la siguiente:
  - **"evento [ condición de guardia ] / acción]".**
- Las condiciones de guarda y las acciones pueden omitirse si no existen o son irrelevantes para el probador.

Una **tabla de estados** es un modelo equivalente a un diagrama de transición de estado.
- Sus filas representan estados y sus columnas eventos (junto con las condiciones de guarda si existen).
- Las entradas de la tabla (celdas) representan transiciones, y contienen el estado objetivo, así como las acciones resultantes, si están definidas.
- A diferencia del diagrama de transición de estados, la tabla de estados muestra explícitamente las **transiciones no válidas**, que se representan mediante celdas vacías.

**Un caso de prueba basado en un diagrama de transición de estado o en una tabla de estados suele representarse como una secuencia de eventos, que da lugar a una secuencia de cambios de estado** (y acciones, si se necesitan).

- Un caso de prueba puede cubrir, y normalmente cubrirá, varias transiciones entre estados.

Existen muchos **criterios de cobertura** para las pruebas de transición de estado. Este programa de estudio analiza **tres** de ellos.

- En la **cobertura de todos los estados**, los elementos de cobertura son los estados.
  - Para lograr una cobertura del 100% de todos los estados, los casos de prueba deben asegurar que se visitan todos los estados.
  - La cobertura se mide como el número de estados visitados dividido por el número total de estados, y se expresa en porcentaje.
- En la **cobertura de transiciones válidas** (también denominada **cobertura de conmutador 0**), los elementos de cobertura son transiciones válidas únicas.
  - Para lograr una cobertura de transiciones válidas del 100%, los casos de prueba deben practicar todas las transiciones válidas.
  - La cobertura se mide como el número de transiciones válidas practicadas dividido por el número total de transiciones válidas, y se expresa en porcentaje.
- En la **cobertura de todas las transiciones**, los elementos de cobertura son todas las transiciones que aparecen en una tabla de estados.
  - Para lograr una cobertura del 100% de todas las transiciones, los casos de prueba deben practicar todas las transiciones válidas e intentar ejecutar las transiciones no válidas.

Sobre la cobertura:

- Probar sólo una transición no válida en un único caso de prueba ayuda a evitar el **enmascaramiento de defecto**, es decir, una situación en la que un defecto impide la detección de otro.
- La cobertura se mide como el número de transiciones válidas e inválidas practicadas o intentadas por los casos de prueba ejecutados, dividido por el número total de transiciones válidas e inválidas, y se expresa en porcentaje.
- La cobertura de todos los estados es más débil que la cobertura de las transiciones válidas, porque normalmente puede lograrse sin practicar todas las transiciones.
- La cobertura de transiciones válidas es el criterio de cobertura más utilizado.
- Lograr una cobertura completa de transiciones válidas garantiza una cobertura completa de todos los estados.
- Lograr la cobertura completa de todas las transiciones garantiza tanto la cobertura completa de todos los estados como la cobertura completa de las transiciones válidas y debería ser un requisito mínimo para el software de misión y seguridad física críticas.

## 4.3 Técnicas de Prueba de Caja Blanca
Debido a su popularidad y sencillez, esta sección se concentra en dos técnicas de prueba de caja blanca relacionadas con el código:

- Prueba de sentencia
- Pruebas de rama

Existen técnicas más rigurosas que se utilizan en algunos entornos de seguridad crítica, misión crítica o alta integridad para lograr una cobertura de código más profunda.

También hay técnicas de prueba de caja blanca que se utilizan en niveles de prueba superiores (por ejemplo, prueba de API), o que utilizan una cobertura no relacionada con el código (por ejemplo, la cobertura de neuronas en la prueba de redes neuronales).

Estos dos últimos grupos de técnicas no se tratan en este programa de estudio.

### 4.3.1 Prueba de Sentencia y Cobertura de Sentencia

En la **prueba de sentencia**, los elementos de cobertura son sentencias ejecutables.

- El objetivo es diseñar casos de prueba que practiquen sentencias en el código hasta alcanzar un nivel aceptable de cobertura.
- La cobertura se mide como el número de sentencias practicadas por los casos de prueba dividido por el número total de sentencias ejecutables del código, y se expresa en porcentaje.
- Cuando se alcanza el 100% de cobertura de sentencias, se asegura que todas las sentencias ejecutables del código han sido practicadas al menos una vez.
  - En concreto, esto significa que se ejecutará cada sentencia con un defecto, lo que puede provocar un fallo que demuestre la presencia del defecto.
- Sin embargo, practicar una sentencia con un caso de prueba no detectará defectos en todos los casos.
  - Por ejemplo, puede que no detecte defectos que dependen de los datos (por ejemplo, una división por cero que sólo falla cuando el denominador se pone a cero).
- Además, una cobertura de sentencia del 100% no asegura que se haya practicado toda la lógica de decisión ya que, por ejemplo, puede que no se practiquen todas las ramas (véase el capítulo 4.3.2) del código.

### 4.3.2 Prueba de Rama y Cobertura de Rama

Una **rama** es una transferencia de control entre dos nodos del **grafo del flujo de control**, que muestra las posibles secuencias en las que se ejecutan las sentencias del código fuente en el objeto de prueba.

- Cada transferencia de control puede ser
  - incondicional (es decir, código en línea recta) o
  - condicional (es decir, un resultado de la decisión).
- En la prueba de rama, los elementos de cobertura son las ramas y el objetivo es diseñar casos de prueba que permitan practicar las ramas del código hasta alcanzar un nivel de cobertura aceptable.
- La cobertura se mide como el número de ramas practicadas por los casos de prueba dividido por el número total de ramas, y se expresa en porcentaje.
- Cuando se alcanza el 100% de cobertura de rama, todas las ramas del código, incondicionales y condicionales, son practicadas por los casos de prueba.
- Las ramas condicionales suelen corresponder a
  - un resultado verdadero o falso de una decisión "if...then",
  - un resultado de una sentencia switch/case o
  - una decisión de salir o continuar en un bucle.
- Sin embargo, practicar una rama con un caso de prueba no detectará defectos en todos los casos.
  - Por ejemplo, puede que no detecte defectos que requieran la ejecución de un camino específico en un código.
- La cobertura de rama **subsume** la cobertura de sentencia.
  - Esto significa que **cualquier conjunto de casos de prueba que logre una cobertura de rama del 100% también logra una cobertura de sentencia del 100% (pero no viceversa).**

### 4.3.3 El valor de la Prueba de Caja Blanca

Un **punto fuerte** fundamental que comparten **todas las técnicas de caja blanca** es que durante las pruebas **se tiene en cuenta toda la implementación del software**, lo que facilita la detección de defectos incluso cuando la especificación del software es vaga, obsoleta o incompleta.

Un **punto débil** correspondiente es que si el software no implementa uno o más requisitos, **la prueba de caja blanca puede no detectar los defectos de omisión** resultantes (Watson 1996).

Las técnicas de caja blanca pueden utilizarse en la prueba estática (por ejemplo, durante la realización de simulacros de código).

Son muy adecuadas para revisar código que aún no está listo para su ejecución (Hetzel 1988), así como pseudocódigo y otra lógica de alto nivel o descendente que pueda modelarse con un grafo del flujo de control.

**Realizar sólo la prueba de caja negra no proporciona una medida de la cobertura de código real.**

- Las medidas de cobertura de caja blanca proporcionan una medición objetiva de la cobertura y aportan la información necesaria para permitir que se generen pruebas adicionales que aumenten esta cobertura y, posteriormente, aumenten la confianza en el código.

## 4.4 Técnicas de Prueba Basadas en la Experiencia
Las **técnicas de prueba basadas en la experiencia** utilizadas de forma habitual y que se analizan en las secciones siguientes son:

- Predicción de errores.
- Prueba exploratoria.
- Prueba basada en lista de comprobación.

### 4.4.1 Predicción de Errores

La predicción de errores es una técnica utilizada para **anticipar la aparición de errores, defectos y fallos**, basada en los **conocimientos del probador**, entre los que se incluyen:

- Cómo ha funcionado la aplicación en el pasado.
- Los tipos de errores que suelen cometer los desarrolladores y los tipos de defectos que resultan de estos errores.
- Los tipos de fallos que se han producido en otras aplicaciones similares.

En general, los errores, defectos y fallos pueden estar relacionados con:

- la entrada (por ejemplo, no se acepta la entrada correcta, parámetros erróneos o ausentes),
- la salida (por ejemplo, formato incorrecto, resultado erróneo),
- la lógica (por ejemplo, casos ausentes, operador erróneo),
- el cálculo (por ejemplo, operando incorrecto, cálculo erróneo),
- las interfaces (por ejemplo, desajuste de parámetros, tipos incompatibles) o
- los datos (por ejemplo, inicialización incorrecta, tipo erróneo).

Los **ataques de defecto** son un **enfoque metódico** de la implementación de la predicción de errores.

- Esta técnica requiere que el probador cree o adquiera una lista de posibles errores, defectos y fallos, y que diseñe pruebas que identifiquen los defectos asociados a los errores, expongan los defectos o provoquen los fallos.
- Estas listas pueden construirse basándose en la experiencia, en datos sobre defectos y fallos o en el conocimiento común sobre por qué falla el software.

Para más información sobre la predicción de errores y los ataques de defecto, véase (Whittaker 2002, Whittaker 2003, Andrews 2006).

### 4.4.2 Prueba Exploratoria

En la **prueba exploratoria**, las pruebas se diseñan, ejecutan y evalúan **simultáneamente** mientras el probador aprende sobre el objeto de prueba.

- La prueba se utiliza
  - para **aprender** más sobre el objeto de prueba,
  - para **explorarlo** más profundamente con pruebas concentradas y
  - para **crear pruebas para áreas no probadas.**
- A veces, la prueba exploratoria se lleva a cabo en la forma de **prueba basada en la sesión** para estructurar la prueba.
  - En un enfoque basado en la sesión, la prueba exploratoria se realiza dentro de un **marco temporal definido**.
  - El probador utiliza un **contrato de prueba** que contiene los objetivos de prueba para guiar la prueba.
  - La sesión de prueba suele ir seguida de una **recapitulación** que implica un **debate** entre el probador y los implicados en los resultados de prueba de la sesión de prueba.
  - En este enfoque, los **objetivos de prueba** pueden tratarse como condiciones de prueba de alto nivel.
  - Los **elementos de cobertura** se identifican y se practican durante la sesión de prueba.
  - El probador puede utilizar **hojas de sesión de prueba** para documentar los pasos seguidos y los descubrimientos realizados.
- La prueba exploratoria resulta **útil** cuando las **especificaciones son escasas o inadecuadas** o cuando existe una **presión de tiempo importante** para la prueba.
- La prueba exploratoria también es útil para **complementar otras técnicas** de prueba más formales.
- La prueba exploratoria será más eficaz si el probador tiene **experiencia**, conoce el dominio y posee un alto grado de competencias esenciales, como capacidad de análisis, curiosidad y creatividad (véase el apartado 1.5.1).
- La prueba exploratoria puede incorporar el uso de otras técnicas de prueba (por ejemplo, la partición de equivalencia).

Puede encontrar más información sobre las pruebas exploratorias en (Kaner 1999, Whittaker 2009, Hendrickson 2013).

### 4.4.3 Prueba basada en Lista de Comprobación

En la **prueba basada en lista de comprobación**, un probador diseña, implementa y ejecuta pruebas para cubrir las condiciones de prueba de una lista de comprobación.

- Las listas de comprobación pueden construirse
  - basándose en la experiencia,
  - en el conocimiento de lo que es importante para el usuario o
  - en la comprensión de por qué y cómo falla el software.
- Las listas de comprobación no deben contener
  - elementos que puedan comprobarse automáticamente,
  - elementos más adecuados como criterios de entrada/salida o
  - elementos demasiado generales (Brykczynski 1999).
- Los elementos de la lista de comprobación suelen formularse en forma de **pregunta**.
- Debe ser posible comprobar cada elemento por separado y directamente.
- Estos elementos pueden referirse a
  - requisitos,
  - propiedades de la interfaz gráfica,
  - características de calidad u
  - otras formas de condiciones de prueba.
- Se pueden crear listas de comprobación para apoyar diversos tipos de pruebas, incluidas las pruebas funcionales y no funcionales (por ejemplo, 10 heurísticas para pruebas de usabilidad (Nielsen 1994)).
- Algunas entradas de la lista de comprobación **pueden ir perdiendo efectividad con el tiempo** porque los desarrolladores aprenderán a evitar cometer los mismos errores.
  - También puede necesitar que se añadan nuevas entradas para reflejar defectos de alta severidad recién encontrados.
  - Por lo tanto, las listas de comprobación **deben actualizarse periódicamente** en función del análisis de los defectos.
  - Sin embargo, hay que tener cuidado para evitar que la lista de comprobación se haga excesivamente larga (Gawande 2009).
- A falta de casos de comprobación detallados, la prueba basada en listas de comprobación puede proporcionar directrices y cierto grado de consistencia para la prueba.
- Si las **listas de comprobación son de alto nivel**, es probable que se produzca cierta variabilidad en las pruebas reales, lo que puede dar lugar a una mayor cobertura pero a una menor repetibilidad.

## 4.5 Enfoques de Prueba Basados en la Colaboración
Cada una de las técnicas mencionadas anteriormente (véanse las secciones 4.2, 4.3 y 4.4) tiene un objetivo particular con respecto a la detección de defectos.

Los enfoques basados en la colaboración, en cambio, se concentran también en **evitar defectos mediante la colaboración y la comunicación**.

### 4.5.1 Redacción Colaborativa de Historias de Usuario

**Una historia de usuario representa una prestación que será de valor para un usuario o comprador de un sistema o software.**

Las historias de usuario tienen tres aspectos críticos (Jeffries 2000), denominados en conjunto las "3 C" (ver nota) (en referencia a las iniciales de los términos en inglés: Card, Conversation, Confirmation).

| Inglés              | Español      |                                                                                                                                                                                                |
|---------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Card →              | Cuartilla -  | el medio que describe una historia de usuario (por ejemplo, una ficha, una entrada en un tablón electrónico)|
| Conversation →      | Conversación - | explica cómo se utilizará el software (puede ser documentada o verbal)|
| Confirmation →      | Confirmación - | los criterios de aceptación (véase la sección 4.5.2)|

El formato más habitual de una historia de usuario es

Como [rol],
quiero que se cumpla [objetivo],
de modo que pueda [valor de negocio resultante para el rol]",
seguido de los criterios de aceptación.


La autoría colaborativa de la historia de usuario puede utilizar técnicas como la tormenta de ideas y los mapas mentales.

La colaboración permite al equipo obtener una visión compartida de lo que debe entregarse, teniendo en cuenta tres perspectivas: el negocio, el desarrollo y la prueba.

Las buenas historias de usuario deben ser: Independientes, Negociables, Valiosas, Estimables, Pequeñas y Comprobables (INVEST, en referencia a las iniciales de los términos en inglés: Independent, Negotiable, Valuable, Estimable, Small and Testable).

| Español |  | Inglés                                                                                                                                                                                                  |
|----|--|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Independiente | I | Independent                                                                                                                                             |
| Negociable | N | Negotiable                                                                               |
| Valioso/a | V | Valuable |
| Estimable | E | Estimable                                                                                                                                                                      |
| Pequeño/a | S | Small                                                                                                                                                                      |
| Capacidad de Prueba | T | Testable                                                                                                                                                                      |                                                                                                                                                                      |

Si un implicado no sabe cómo probar una historia de usuario, esto puede indicar que la historia de usuario no es lo suficientemente clara, o que no refleja algo valioso para él, o que simplemente necesita ayuda para probarla (Wake 2003).

Nota: En este caso y contexto, “cuartilla” es la traducción del término “card”. La traducción correcta sería “tarjeta” pero se optó por cuartilla para conservar el mnemónico “3C”. Una cuartilla es una hoja de papel de tamaño A5 (148mm x 210 mm).

### 4.5.2 Criterios de Aceptación

Los **criterios de aceptación de una historia de usuario** son las condiciones que debe cumplir una implementación de la historia de usuario para ser aceptada por los implicados.

- Desde esta perspectiva, los criterios de aceptación pueden verse como las condiciones de prueba que deben ser practicadas por las pruebas.
- Los criterios de aceptación suelen ser un resultado de la Conversación (véase la sección 4.5.1).

Los criterios de aceptación **se utilizan para**:

- Definir el alcance de la historia de usuario.
- Alcanzar un consenso entre los implicados.
- Describir escenarios positivos y negativos.
- Servir de base para la prueba de aceptación de usuario (véase la sección 4.5.3).
- Permitir una planificación y estimación precisas.

Hay varias formas de redactar los criterios de aceptación de una historia de usuario.

Los dos formatos más comunes son:

- **Orientado al escenario** (por ejemplo, el formato Dado/Cuando/Entonces (“Given/When/Then”) utilizado en desarrollo guiado por el comportamiento (DGC), véase la sección 2.1.3)
- **Orientado a reglas** (por ejemplo, lista de verificación con viñetas, o forma tabulada de mapeo entrada-salida)

La mayoría de los criterios de aceptación pueden documentarse en uno de estos dos formatos.

Sin embargo, el equipo puede utilizar otro formato personalizado, siempre que los criterios de aceptación estén bien definidos y sean inequívocos.

### 4.5.3 Desarrollo Guiado por Prueba de Aceptación (DGPA)

**DGPA** es un enfoque de tipo probar primero (véase la sección 2.1.3).

- Los casos de prueba se crean **antes** de la implementación de la historia de usuario.
- Los casos de prueba son creados por miembros del equipo con **diferentes perspectivas**, por ejemplo, clientes, desarrolladores y probadores (Adzic 2009).
- Los casos de prueba pueden ejecutarse de forma manual o automatizada.

Procedimiento

- El primer paso es un **taller de especificación** en el que los miembros del equipo analizan, debaten y redactan la historia de usuario y (si aún no están definidos) sus criterios de aceptación.
  - Durante este proceso se resuelven las incompletitudes, ambigüedades o defectos de la historia de usuario.
- El siguiente paso consiste en crear los casos de prueba.
  - Esto puede hacerlo el equipo en su conjunto o el probador individualmente.
  - Los casos de prueba se basan en los criterios de aceptación y pueden verse como ejemplos de cómo funciona el software.
  - Esto ayudará al equipo a implementar correctamente la historia de usuario.

Dado que **ejemplos y pruebas son lo mismo**, estos términos suelen utilizarse indistintamente.

Durante el diseño de prueba pueden aplicarse las técnicas de prueba descritas en las secciones 4.2, 4.3 y 4.4.

Características

- Normalmente, los primeros casos de prueba son positivos, confirman el comportamiento correcto sin excepciones ni condiciones de error y comprenden la secuencia de actividades que se ejecutan si todo va como se espera.
- Una vez realizados los casos de prueba positivos, el equipo debe realizar pruebas negativas.
- Por último, el equipo debe cubrir también las características de calidad no funcionales (por ejemplo, la eficiencia de desempeño, la usabilidad).
- Los casos de prueba deben expresarse de forma comprensible para los implicados.
- Normalmente, los casos de prueba contienen frases en lenguaje natural que incluyen las precondiciones necesarias (si las hay), las entradas y las postcondiciones.

Los casos de prueba deben cubrir todas las características de la historia de usuario y no deben ir más allá de la historia.

Sin embargo, los criterios de aceptación pueden detallar algunos de los problemas descritos en la historia de usuario.

Además, no debe haber dos casos de prueba que describan las mismas características de la historia de usuario.

Cuando se capturan en un formato compatible con un marco de automatización de la prueba, los desarrolladores pueden automatizar los casos de prueba escribiendo el código de apoyo a medida que implementan la prestación descrita por una historia de usuario.

**Las pruebas de aceptación se convierten entonces en requisitos ejecutables.**
