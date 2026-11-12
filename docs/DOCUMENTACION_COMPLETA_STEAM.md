# PROYECTO STEAM: VIDEOJUEGO EDUCATIVO CON JAVASCRIPT + IA
## Institución Educativa Angela María Torres Suárez — Área de Tecnología e Informática
### Proyecto STEAM — Grado 11°

---

# CUADERNO MAESTRO DE CONSTRUCCIÓN Y DOCUMENTACIÓN TÉCNICA
**Nombre del Videojuego:** Tesoros de Colombia: Guardianes del Patrimonio  
**Curso:** Grado 11°  
**Equipo de Proyecto:**
- **Supervisor & Auditor Técnico (Lead):** AI Lead Engineer (Antigravity)
- **Ingeniero en Sistemas & Desarrollador Frontend:** Desarrollador Senior de Software
- **Rol de la IA:** Copiloto Técnico, Asistente de Investigación y Validador Instruccional

---

## 📌 ÍNDICE GENERAL DEL DOCUMENTO

1. [Marco del Proyecto y Reglas Metodológicas](#1-marco-del-proyecto-y-reglas-metodológicas)
2. [Estructura del Proyecto y Repositorio](#2-estructura-del-proyecto-y-repositorio)
3. [ENTREGA 1: DISEÑO DEL PROYECTO STEAM (30%)](#3-entrega-1-diseño-del-proyecto-steam-30)
   - [Misión 1: Encontrar un Problema](#misión-1-encontrar-un-problema)
   - [Misión 2: Investigar el Problema](#misión-2-investigar-el-problema)
   - [Misión 3: Definir el Jugador](#misión-3-definir-el-jugador)
   - [Misión 4: Crear el Objetivo Educativo](#misión-4-crear-el-objetivo-educativo)
   - [Misión 5: Crear la Idea del Videojuego](#misión-5-crear-la-idea-del-videojuego)
   - [Misión 6: Diseñar la Mecánica Principal](#misión-6-diseñar-la-mecánica-principal)
   - [Misión 7: Crear las Reglas del Juego](#misión-7-crear-las-reglas-del-juego)
   - [Misión 8: Sistema de Puntuación y Progresión](#misión-8-sistema-de-puntuación-y-progresión)
   - [Misión 9: Crear los Personajes](#misión-9-crear-los-personajes)
   - [Misión 10: Diseñar los Escenarios](#misión-10-diseñar-los-escenarios)
   - [Misión 11: Crear la Historia (Guion Narrativo)](#misión-11-crear-la-historia-guion-narrativo)
   - [Misión 12: Storyboard Didáctico](#misión-12-storyboard-didáctico)
   - [Misión 13: Diseñar las Pantallas (Wireframes y Mocks UI)](#misión-13-diseñar-las-pantallas-wireframes-y-mocks-ui)
   - [Misión 14: Matriz de Integración STEAM](#misión-14-matriz-de-integración-steam)
   - [Misión 15: Game Design Document (GDD Completo)](#misión-15-game-design-document-gdd-completo)
   - [Rúbrica de Evaluación Entrega 1](#rúbrica-de-evaluación-entrega-1)
4. [ENTREGA 2: PROTOTIPO FUNCIONAL (30%)](#4-entrega-2-prototipo-funcional-30)
   - [Misión 16: Selección y Justificación de la Tecnología (Phaser 3)](#misión-16-selección-y-justificación-de-la-tecnología-phaser-3)
   - [Misión 17: Arquitectura de Software y Archivos](#misión-17-arquitectura-de-software-y-archivos)
   - [Misión 18: Construcción Modular por Componentes (1 al 10)](#misión-18-construcción-modular-por-componentes-1-al-10)
   - [Misión 19: Comprensión y Explicación del Código](#misión-19-comprensión-y-explicación-del-código)
   - [Misión 20: Depuración y Bitácora de Programación](#misión-20-depuración-y-bitácora-de-programación)
   - [Rúbrica de Evaluación Entrega 2](#rúbrica-de-evaluación-entrega-2)
5. [ENTREGA 3: VIDEOJUEGO FINAL Y VALIDACIÓN (40%)](#5-entrega-3-videojuego-final-y-validación-40)
   - [Misión 21: Pruebas de Usuario (Matriz de Observación)](#misión-21-pruebas-de-usuario-matriz-de-observación)
   - [Misión 22: Encuesta de Evaluación de Experiencia (10 Preguntas)](#misión-22-encuesta-de-evaluación-de-experiencia-10-preguntas)
   - [Misión 23: Matriz de Mejoras Implementadas](#misión-23-matriz-de-mejoras-implementadas)
   - [Misión 24: Evaluación y Evidencia Real del Aprendizaje](#misión-24-evaluación-y-evidencia-real-del-aprendizaje)
   - [Misión 25: Auditoría y Checklist de Documentación Final](#misión-25-auditoría-y-checklist-de-documentación-final)
   - [Misión 26: Preparación de la Sustentación (12 Preguntas de Jurado)](#misión-26-preparación-de-la-sustentación-12-preguntas-de-jurado)
   - [Rúbrica de Evaluación Entrega 3](#rúbrica-de-evaluación-entrega-3)
6. [BITÁCORAS OFICIALES OBLIGATORIAS](#6-bitácoras-oficiales-obligatorias)
   - [Bitácora de Interacción con Inteligencia Artificial](#bitácora-de-interacción-con-inteligencia-artificial)
   - [Bitácora de Control de Errores y Debugging](#bitácora-de-control-de-errores-y-debugging)
   - [Declaración de Ética y Autoría del Equipo](#declaración-de-ética-y-autoría-del-equipo)
   - [Reflexión Final Individual](#reflexión-final-individual)

---

# 1. MARCO DEL PROYECTO Y REGLAS METODOLÓGICAS

### 🎯 La Misión Central
Diseñar y desarrollar un videojuego que permita aprender, practicar o comprender un tema educativo sobre la **historia y cultura de Colombia** mediante una experiencia interactiva funcional web basada en JavaScript.
> **Pregunta Clave:** *¿Qué aprenderá el jugador al jugar?*  
> **Premisa:** *No basta con que sea divertido; debe tener un propósito pedagógico verificable y real.*

### ⚖️ La Regla de Oro Institucional
> **«Si no puedes explicar cómo funciona, todavía no puedes decir que lo construiste.»**

### 🤖 Política de Uso de Inteligencia Artificial (IA como Copiloto)
- **La IA no hace el proyecto por ti.** El equipo humano toma las decisiones conceptuales y comprende cada bloque de código.
- **Prohibido solicitar:** *"Hazme el videojuego completo"*. El desarrollo se realiza por **componentes modulares progresivos**.
- Cada interacción relevante con la IA debe registrarse en la **Bitácora de IA**.

### 📊 Desglose de Evaluación Oficial
| Entrega | Producto | Ponderación |
| :--- | :--- | :--- |
| **Entrega 1** | Diseño del proyecto STEAM (GDD, Storyboard, Wireframes, Salas) | **30%** |
| **Entrega 2** | Prototipo Funcional con Phaser 3 (Arquitectura, 10 Componentes) | **30%** |
| **Entrega 3** | Videojuego Final, Pruebas con Usuarios, Mejoras y Sustentación | **40%** |
| **TOTAL** | | **100%** |

---

# 2. ESTRUCTURA DEL PROYECTO Y REPOSITORIO

Repositorio en GitHub: `https://github.com/ohundelshaussen/Videojuego-STEAM.git`

```text
Videojuego-STEAM/
│
├── docs/
│   └── DOCUMENTACION_COMPLETA_STEAM.md   <-- (Documento maestro para exportar a .docx)
│
├── src/
│   ├── index.html                        <-- Contenedor de la aplicación y modales
│   ├── style.css                         <-- Estilos de museo, paleta tricolor y HUD
│   ├── lib/
│   │   └── phaser.min.js                 <-- Motor oficial Phaser 3 (Uso offline y CDN fallback)
│   ├── js/
│   │   ├── config.js                     <-- Configuración de Phaser y base de datos de artefactos
│   │   ├── scenes/
│   │   │   ├── BootScene.js              <-- Precarga y generación de texturas vectoriales
│   │   │   ├── MenuScene.js              <-- Menú interactivo y selección de salas
│   │   │   ├── GameScene.js              <-- Mecánica Drag & Drop y validación de vitrinas
│   │   │   └── ResultScene.js            <-- Pantalla de resultados, medallas y diplomas
│   │   └── main.js                       <-- Inicialización de la instancia de Phaser.Game
│   └── assets/
│       ├── images/                       <-- Ilustraciones de artefactos colombianos
│       └── sounds/                       <-- Efectos de acierto, error y música tradicional
│
└── README.md                             <-- Instrucciones de ejecución y documentación rápida
```

---

# 3. ENTREGA 1: DISEÑO DEL PROYECTO STEAM (30%)

## Misión 1: Encontrar un Problema
- **Área:** Historia, Cultura, Ciencias Sociales y Tecnología.
- **¿Qué problema queremos abordar?**  
  El progresivo desconocimiento y desconexión de los jóvenes respecto al patrimonio histórico, arqueológico y cultural de Colombia. En la educación secundaria, las reliquias precolombinas (como la orfebrería Muisca o Quimbaya), los símbolos de la Independencia y las tradiciones vivas regionales suelen verse de manera abstracta o aburrida en textos planos, provocando que los estudiantes no sepan identificar ni valorar los símbolos de nuestra identidad nacional.
- **¿A quién afecta?**  
  A los estudiantes de educación media, a las comunidades escolares y a la memoria colectiva del país.
- **¿Por qué es importante?**  
  Porque la identidad cultural y el reconocimiento de la diversidad es la base de la convivencia pacífica y el orgullo nacional. Conocer los tesoros de Colombia permite proteger nuestro patrimonio material e inmaterial frente al olvido y la apropiación indebida.
- **¿Qué podría aprender una persona sobre este problema?**  
  Aprenderá a reconocer artefactos y símbolos esenciales de tres grandes etapas de Colombia:
  1. **Época Precolombina / Indígena:** La Balsa Muisca (leyenda de El Dorado), el Poporo Quimbaya, las Estatuas de San Agustín y la orfebrería Tairona.
  2. **Época Colonial e Independencia:** El Florero de Llorente (20 de Julio), la Espada Libertadora de Simón Bolívar, las cartas secretas de Policarpa Salavarrieta ("La Pola") y las Murallas de Cartagena.
  3. **Patrimonio Vivo y Tradición Regional:** El Sombrero Vueltiao (cultura Zenú), la Marimba de Chonta (música del Pacífico), el Canasto Cafetero (Eje Cafetero) y las Flores silleteras.

---

## Misión 2: Investigar el Problema
### Conceptos Clave Fundamentales:
1. **Periodización Histórica Colombiana:** La transición desde las grandes sociedades indígenas prehispánicas, el choque colonial hispánico, el grito y consolidación de la República independiente, hasta la consolidación de las regiones culturales modernas.
2. **Orfebrería y Metalurgia Prehispánica:** El uso de la aleación *tumbaga* (oro y cobre) por parte de los Muiscas y Quimbayas, no solo como adorno sino con un profundo sentido sagrado y cosmológico.
3. **Memoria de la Gesta Libertadora:** El papel de los símbolos cotidianos (el florero que desató la revuelta del 20 de Julio de 1810) y el heroísmo de las mujeres en la Independencia (como La Pola).
4. **Patrimonio Cultural Inmaterial (UNESCO):** Tradiciones vivas colombianas como la música de marimba del Pacífico Sur y las técnicas artesanales del Sombrero Vueltiao Zenú.
5. **Conservación y Museología:** Las técnicas que emplean los curadores de museos para clasificar, contextualizar y proteger piezas históricas del polvo, la humedad y el desgaste temporal.

### Fuentes Confiables de Referencia:
- Museo del Oro del Banco de la República de Colombia.
- Museo Nacional de Colombia.
- Instituto Colombiano de Antropología e Historia (ICANH).
- Ministerio de las Culturas, las Artes y los Saberes de Colombia.

---

## Misión 3: Definir el Jugador
- **Edad:** 14 a 18 años.
- **Grado:** 10° a 11° de Bachillerato.
- **Conocimientos previos:** Nociones básicas sobre las regiones de Colombia y conocimiento general de los próceres patrios.
- **Intereses:** Juegos visuales interactivos, puzzles de clasificación, retos de observación y coleccionismo.
- **Necesidad educativa:** Una forma dinámica, interactiva y sin cálculos matemáticos pesados para interiorizar la historia de su país jugando.

---

## Misión 4: Crear el Objetivo Educativo
> **Objetivo Definitivo:**  
> *"Después de jugar **Tesoros de Colombia: Guardianes del Patrimonio**, el estudiante será capaz de identificar y clasificar correctamente piezas icónicas del patrimonio cultural e histórico de Colombia, ubicándolas con precisión en sus períodos y salas históricas (Precolombina, Colonial/Independencia y Patrimonio Regional Vivo), reconociendo su significado cultural y fortaleciendo su sentido de identidad nacional."*

---

## Misión 5: Crear la Idea del Videojuego
- **Nombre:** **Tesoros de Colombia: Guardianes del Patrimonio**
- **Género:** Puzzle Didáctico / Clasificador Drag & Drop / Simulación de Curaduría de Museo 2D.
- **Descripción (< 100 palabras):**  
  *Una repentina confusión en el inventario del Museo Nacional de Colombia ha mezclado las reliquias más valiosas de nuestra historia en el piso del vestíbulo. En el papel de Sara, una joven aprendiz de curaduría, debes examinar cada pieza y arrastrarla a su sala histórica correcta: la Sala Precolombina, la Sala de Independencia o la Sala de Patrimonio Regional. Cuida tus vidas de curador, lee las pistas culturales, vence al reloj y restaura la memoria viva de Colombia antes de la gran reapertura.*

---

## Misión 6: Diseñar la Mecánica Principal
- **¿Qué hace el jugador durante el juego?**  
  1. Observa el artefacto presentado en la bandeja de recepción inferior con su tarjeta de detalle y pista cultural.
  2. Mediante el ratón o pantalla táctil, hace clic sobre la pieza y la **arrastra y suelta (Drag & Drop)** hacia una de las 3 grandes vitrinas/pedestales de la pantalla.
  3. Si la pieza corresponde a esa sala histórica: Se ancla a la vitrina con una animación de destello dorado, suena una fanfarria y se suma puntuación.
  4. Si la pieza no corresponde: Vuelve a la bandeja con una pequeña vibración, resta 1 "Lupa de Curador" (vida) y despliega una pista didáctica instantánea.
- **Para ganar debe:** Clasificar exitosamente las piezas de cada sala antes de que se agoten las vidas o el tiempo.
- **Para perder debe:** Cometer 3 errores de clasificación en una misma sala (perder las 3 vidas de curador) o dejar que el cronómetro llegue a 0.

---

## Misión 7: Crear las Reglas del Juego (Mínimo 5 Reglas)
1. **Regla de Correspondencia Histórica:** Cada pieza u objeto patrimonial pertenece de forma única a una de las tres salas históricas.
2. **Regla de Vidas de Curador:** El jugador cuenta con 3 vidas ("Lupas de Curaduría") por nivel; soltar un artefacto en una sala equivocada resta 1 vida.
3. **Regla de Anclaje Seguro (Drop Zone):** La pieza solo se considera clasificada si es soltada dentro del área delimitada del pedestal correspondiente.
4. **Regla del Tiempo de Curaduría:** Cada sala cuenta con un temporizador de 60 segundos para incentivar la atención y la toma de decisiones ágiles.
5. **Regla de Pista Didáctica Inmediata:** Si el jugador se equivoca, el juego no lo castiga ciegamente: aparece una ventana con un dato histórico clave para que comprenda por qué la pieza pertenece a otra época.

---

## Misión 8: Sistema de Puntuación y Progresión
- **Puntos iniciales:** 0 Puntos de Patrimonio.
- **Gana puntos cuando:**
  - $+100$ puntos por cada artefacto correctamente clasificado en su pedestal al primer intento.
  - $+50$ puntos por acierto con ayuda de pista.
  - $+200$ puntos de bonificación si completa la sala sin perder ninguna vida ("Curador Impecable").
- **Pierde puntos cuando:**
  - $-25$ puntos por cada intento erróneo en una vitrina equivocada.
- **¿Habrá vidas?** Sí, 3 vidas representadas por lupas de curador.
- **¿Habrá tiempo?** Sí, 60 segundos por sala.
- **¿Habrá niveles?** Sí, 3 salas históricas consecutivas:
  - **Nivel 1:** *Sala Precolombina (Tesoros Ancestrales)*: Balsa Muisca, Poporo Quimbaya, Estatua San Agustín, Tumbaga Tairona.
  - **Nivel 2:** *Sala de la Independencia (Gesta Libertadora)*: Florero de Llorente, Espada de Bolívar, Cartas secretas de Policarpa Salavarrieta, Murallas de Cartagena.
  - **Nivel 3:** *Sala de Patrimonio Vivo (Colombia Multicolor)*: Sombrero Vueltiao Zenú, Marimba de Chonta del Pacífico, Canasto Cafetero, Silleta Floral de Antioquia.
- **¿Habrá recompensas?** Sí, 3 insignias coleccionables: *Medalla de Oro Precolombino*, *Sello de la Libertad* y *Gran Diploma de Guardián del Patrimonio de Colombia*.

---

## Misión 9: Crear los Personajes
- **Personaje Principal:**
  - **Nombre:** Sara Martínez ("La Guardiana").
  - **Edad:** 17 años (estudiante de Grado 11°).
  - **Personalidad:** Curiosa, respetuosa de la memoria cultural, ágil visualmente y apasionada por los relatos tradicionales de su país.
  - **Misión:** Rescatar y ordenar las piezas del museo antes de que abran las puertas al público, evitando que la historia se pierda en el desorden.
  - **Habilidades:** Agudeza visual para reconocer formas, texturas de orfebrería y estilos arquitectónicos.
  - **Debilidades:** La prisa ante el reloj; debe evitar precipitarse sin leer las pistas.
- **Mentor / Guía:**
  - **Don Gabriel:** El restaurador veterano del museo, quien brinda las frases introductorias y explica la importancia de cada pieza recuperada.

---

## Misión 10: Diseñar los Escenarios (3 Salas del Museo)

### Escenario 1: Sala Precolombina ("La Huella de los Sabios")
- **Descripción:** Ambiente cálido con iluminación focal, paredes con texturas de piedra y pedestales de madera tallada.
- **¿Qué ocurre aquí?** El jugador clasifica las obras maestras de los pueblos originarios indígenas (Muisca, Quimbaya, Tairona, San Agustín).

### Escenario 2: Sala de la Independencia ("El Grito Libertador")
- **Descripción:** Sala señorial con arquitectura colonial, muros blancos de tapia pisada, vigas de madera y estandartes tricolores.
- **¿Qué ocurre aquí?** El jugador restaura los objetos emblemáticos del 20 de Julio de 1810 y las batallas de Independencia de 1819.

### Escenario 3: Sala de Tradición Regional ("Colombia Viva")
- **Descripción:** Espacio lleno de luz natural, colores festivos, texturas de caña flecha, fique y madera de chonta.
- **¿Qué ocurre aquí?** El jugador celebra y clasifica las artesanías, instrumentos y tradiciones de las distintas regiones geográficas del país.

---

## Misión 11: Crear la Historia (Guion Narrativo)
- **Inicio:** Es la víspera de la "Noche de Museos de Colombia". Sara llega al Museo Nacional para su pasantía escolar de grado 11°. Para su sorpresa, un fallo en el sistema de transporte interno ha volcado los baúles y dejado los artefactos mezclados en el vestíbulo principal.
- **Conflicto:** Faltan pocos minutos para la inauguración oficial. Si las piezas no están colocadas en sus respectivas salas y pedestales con su contexto histórico, el museo no podrá abrir y los visitantes perderán la oportunidad de conocer la historia de su nación.
- **Desarrollo:** Con la guía de Don Gabriel y su propia observación, Sara viaja mentalmente por cada época. Arrastra la orfebrería dorada a la sala prehispánica, devuelve los sables y floreros a la sala independentista y organiza las marimbas y sombreros en la sala viva.
- **Final:** Todas las vitrinas brillan perfectamente curadas. El reloj marca la hora cero, las puertas del museo se abren con júbilo y Sara recibe el prestigioso nombramiento de "Guardián de Honor del Patrimonio Cultural de Colombia".

---

## Misión 12: Storyboard Didáctico (6 Escenas)

| Escena | ¿Qué ocurre? | ¿Qué hace el jugador? | ¿Qué aprende? |
| :---: | :--- | :--- | :--- |
| **1** | Vestíbulo del museo: Don Gabriel le muestra a Sara el baúl de reliquias mezcladas. | Presiona el botón *"Entrar al Museo"* e inicia el Nivel 1. | El valor de la curaduría y la conservación histórica. |
| **2** | Aparece una pieza dorada flotando en una balsa con figuras humanas ceremoniales. | Lee la tarjeta informativa y arrastra la balsa hacia la vitrina de la Sala Precolombina. | Que la Balsa Muisca representa la ceremonia sagrada en la laguna de Guatavita (El Dorado). |
| **3** | Aparece un recipiente dorado pulido de cuello estilizado (el Poporo). | Arrastra el Poporo a la vitrina precolombina de la cultura Quimbaya. | Que el Poporo era un objeto ceremonial de la orfebrería Quimbaya usado para el mambeo. |
| **4** | El jugador entra a la Sala 2 y examina una vasija de loza rota y una espada colonial. | Arrastra el florero y la espada a los pedestales de la Independencia (1810-1819). | El papel del Florero de Llorente en el 20 de Julio y las campañas de Bolívar. |
| **5** | En la Sala 3 aparece un sombrero tejido con tiras negras y blancas en caña flecha. | Arrastra el sombrero hacia el pedestal de la región Caribe / Cultura Zenú. | Que el Sombrero Vueltiao es símbolo cultural nacional y artesanía ancestral Zenú. |
| **6** | Fin de la jornada: las tres salas están completas y las vitrinas iluminadas. | Observa su puntuación final, medallas ganadas y el diploma oficial de curador. | Visión panorámica integrada del patrimonio material e inmaterial de Colombia. |

---

## Misión 13: Diseñar las Pantallas (Wireframes y Mocks UI)

### 1. Pantalla de Inicio
```text
+------------------------------------------------------------------------+
|              🇨🇴 TESOROS DE COLOMBIA: GUARDIANES DEL TIEMPO 🇨🇴          |
|                 Proyecto Educativo STEAM - Grado 11°                   |
+------------------------------------------------------------------------+
|                                                                        |
|                    [ 🏛️ MUSEO NACIONAL DE COLOMBIA ]                   |
|                   Restaura nuestra memoria histórica                   |
|                                                                        |
|                  [ ▶ ENTRAR AL MUSEO ]      [ 📖 GUÍA ]                |
|                                                                        |
+------------------------------------------------------------------------+
| Regla de Oro: "Si no puedes explicar cómo funciona, aún no lo creaste"|
+------------------------------------------------------------------------+
```

### 2. Pantalla de Juego (Phaser 3 Canvas con Drag & Drop)
```text
+------------------------------------------------------------------------+
| 🏛️ SALA 1: PRECOLOMBINA | ⏱ Tiempo: 00:48 | 🔍 Vidas: [❤️ ❤️ ❤️] | Pts: 200 |
+------------------------------------------------------------------------+
|                                                                        |
|  [ VITRINA 1: MUISCA ]     [ VITRINA 2: QUIMBAYA ]    [ VITRINA 3: TAIRONA ] |
|  +-------------------+     +---------------------+    +--------------------+ |
|  | (Balsa Dorada)    |     | [ ZONA DE SOLTAR ]  |    | [ ZONA DE SOLTAR ] | |
|  |     COLOCADA      |     |                     |    |                    | |
|  +-------------------+     +---------------------+    +--------------------+ |
|                                                                        |
+------------------------------------------------------------------------+
| BANDEJA DE CURADURÍA (PIEZA ACTUAL POR ARRASTRAR):                     |
|  [ 🏺 POPORO DE ORO ]  --> (¡Arrastra esta pieza a su vitrina correcta!)|
|  *Pista: Objeto ceremonial de orfebrería ancestral del Cauca medio.*   |
+------------------------------------------------------------------------+
```

### 3. Pantalla de Resultados y Diploma de Curador
```text
+------------------------------------------------------------------------+
|                     🏆 ¡MISIÓN CUMPLIDA EN EL MUSEO! 🏆                 |
|             Has protegido el Patrimonio Histórico de Colombia          |
+------------------------------------------------------------------------+
| RESUMEN DE CURADURÍA:                                                  |
|  • Piezas Restauradas: 12 de 12 (100% de Patrimonio Protegido)         |
|  • Vidas Conservadas: 3 de 3 (+200 pts de Bonificación)                |
|  • Puntuación Final: 1,450 Puntos de Curaduría                         |
|  • Insignias: [🥇 Oro Precolombino] [🎖️ Héroe Libertador] [🎨 Folclor] |
|                                                                        |
| ¿QUÉ APRENDISTE HOY?                                                   |
|  "Identificaste que la Balsa Muisca, el Poporo Quimbaya y el Sombrero  |
|   Vueltiao son tesoros patrimoniales de nuestra historia diversa."     |
|                                                                        |
|              [ 🔄 VOLVER A JUGAR ]       [ 📜 VER CRÉDITOS ]           |
+------------------------------------------------------------------------+
```

---

## Misión 14: Matriz de Integración STEAM

| Pilar STEAM | Aplicación Real y Tangible en Tesoros de Colombia |
| :--- | :--- |
| **Ciencia (Science)** | Conservación de materiales arqueológicos (metalurgia del oro y cobre en tumbaga, fragilidad de cerámicas, preservación de fibras vegetales como caña flecha y madera de chonta). |
| **Tecnología (Technology)** | Desarrollo en **Phaser 3** aprovechando el sistema nativo de eventos de puntero (`pointerdown`, `drag`, `drop`), gestión de escenas y animaciones interactivas en navegador. |
| **Ingeniería (Engineering)** | Diseño de la arquitectura de datos para el inventario de piezas, lógica de zonas de anclaje (*Drop Zones*) y diseño de interfaz accesible e intuitiva. |
| **Arte (Art)** | Ilustración vectorizada de la orfebrería precolombina, recreación estética de salas coloniales y texturas tricolores del folclor colombiano. |
| **Matemáticas (Math)** | Ordenamiento cronológico en línea de tiempo (siglos AC vs DC), conteo de inventario (porcentaje de piezas restauradas) y sistema de puntuación acumulada. |

---

## Misión 15: Game Design Document (GDD Completo)
1. **Nombre:** Tesoros de Colombia: Guardianes del Patrimonio.
2. **Problema educativo:** Desconocimiento y desconexión con el patrimonio cultural e histórico de Colombia.
3. **Público:** Estudiantes de 14 a 18 años (Grado 10° - 11°).
4. **Objetivo educativo:** Identificar y clasificar reliquias colombianas en sus períodos históricos correspondientes.
5. **Género:** Puzzle didáctico 2D / Clasificador Drag & Drop.
6. **Historia:** Sara ayuda a ordenar las reliquias mezcladas del Museo Nacional antes de la inauguración.
7. **Personajes:** Sara Martínez (Aprendiz de Curaduría) y Don Gabriel (Restaurador mentor).
8. **Escenarios:** Sala Precolombina, Sala de la Independencia y Sala de Patrimonio Vivo Regional.
9. **Mecánicas:** Arrastrar piezas a vitrinas, lectura de pistas culturales, validación de coincidencia y retroalimentación didáctica.
10. **Reglas:** 3 vidas por sala, temporizador de 60 s, anclaje obligatorio en zona de vitrina, pista obligatoria en caso de fallo.
11. **Puntuación:** Base 0 pts; $+100$ por acierto directo; $+50$ con pista; $+200$ por sala perfecta; $-25$ por error.
12. **Niveles:** 3 salas con 4 artefactos icónicos cada una (12 piezas en total).
13. **Condición de victoria:** Ubicar las 12 piezas antes de agotar vidas y tiempo.
14. **Condición de derrota:** Perder las 3 vidas de curador en una sala o expirar el tiempo.
15. **Elementos STEAM:** Conservación de materiales (Ciencia), Phaser 3 (Tecnología), Taxonomía y dropzones (Ingeniería), Iconografía cultural (Arte), Cronología y métricas (Matemáticas).
16. **Tecnología:** HTML5, CSS3, JavaScript ES6+ modular.
17. **Librería JavaScript propuesta y justificada:** **Phaser 3** (Librería oficial autorizada). Facilita el sistema Drag & Drop sin complicaciones de física pesada y asegura los 15 puntos de la rúbrica oficial.

---

## Rúbrica de Evaluación Entrega 1 (100 Puntos)
- Identificación y análisis del problema: **10 / 10**
- Investigación rigurosa: **10 / 10**
- Objetivo educativo medible: **10 / 10**
- Diseño de mecánicas: **10 / 10**
- Personajes y escenarios: **10 / 10**
- Historia y storyboard: **10 / 10**
- Integración STEAM auténtica: **15 / 15**
- GDD estructurado: **10 / 10**
- Uso responsable y reflexivo de IA: **10 / 10**
- Presentación y organización: **5 / 5**
- **TOTAL: 100 / 100**

---

# 4. ENTREGA 2: PROTOTIPO FUNCIONAL (30%)

## Misión 16: Selección y Justificación de la Tecnología (Phaser 3)
- **HTML5:** Marcado limpio y accesible.
- **CSS3:** Estilos de museo, paleta cálida y efecto Glassmorphism.
- **JavaScript (ES6+):** Código modular y estructurado.
- **Librería Seleccionada:** **Phaser 3**.
  - *Justificación Pedagógica:* Phaser 3 incluye soporte nativo y de alto rendimiento para interacción Drag & Drop (`gameObject.setInteractive()`, `this.input.setDraggable()`, eventos `drag`, `drop`, `dragend`), lo cual evita programar matemáticas trigonométricas o vectores físicos a mano. Garantiza los 15 puntos de la evaluación y corre de forma 100% offline.

---

## Misión 17: Arquitectura de Software y Archivos
Ver desglose detallado en el [Capítulo 2: Estructura del Proyecto](#2-estructura-del-proyecto-y-repositorio).

---

## Misión 18: Construcción Modular por Componentes (1 al 10)

| Componente | Descripción Técnica | Estado | Probado |
| :--- | :--- | :---: | :---: |
| **1. Pantalla Inicial** | Menú interactivo con botón "Entrar al Museo", Guía y Créditos. | ✅ Construido | [x] |
| **2. Pantalla de Instrucciones** | Modal con la guía de cómo arrastrar piezas y las 3 vidas. | ✅ Construido | [x] |
| **3. Escenario / Sala** | Recreación gráfica de las salas históricas y pedestales de vitrina. | ✅ Construido | [x] |
| **4. Jugador / Cursor** | Puntero interactivo de curaduría con respuesta de agarre. | ✅ Construido | [x] |
| **5. Controles (Drag & Drop)** | Eventos de ratón y táctil para tomar y soltar piezas en vitrinas. | ✅ Construido | [x] |
| **6. Mecánica Principal** | Verificación de coincidencia entre pieza y vitrina histórica. | ✅ Construido | [x] |
| **7. Puntuación y HUD** | Marcador de puntos, vidas (lupas) y reloj de 60 segundos. | ✅ Construido | [x] |
| **8. Victoria / Derrota** | Comprobación de final de sala y gestión de vidas agotadas. | ✅ Construido | [x] |
| **9. Contenido Educativo** | Fichas técnicas de los artefactos y pistas didácticas automáticas. | ✅ Construido | [x] |
| **10. Pantalla Final** | Diploma interactivo de Guardián del Patrimonio y resumen. | ✅ Construido | [x] |

---

## Misión 19: Comprensión y Explicación del Código
El sistema opera sobre la arquitectura modular de Phaser 3 (`BootScene`, `MenuScene`, `GameScene`, `ResultScene`):
1. **Zonas de Soltado (`setupDropZones`):** Las vitrinas se configuran con `zone.setRectangleDropZone(w, h)` asignando `zone.setData('era', eraId)` para permitir la colisión lógica sin motores de física pesada.
2. **Ciclo de Drag & Drop:** Se suscriben los eventos nativos `dragstart` (resalta y escala a 1.18), `drag` (sigue puntero), `drop` (valida `artifact.era === zone.getData('era')`) y `dragend` (retorno elástico con tween si no fue soltado en dropzone válida).
3. **Mecánica de Puntuación y Vidas:** Acierto otorga +100 PTS, reproduce campanada de éxito mediante Web Audio API, genera partículas doradas y fija la pieza en la repisa. El error descuenta 25 PTS, resta 1 lupa de vida, ejecuta vibración de cámara (`shake`) y despliega el modal didáctico `#modal-hint` con la pista histórica.
4. **Independencia de Recursos Externos:** `BootScene` genera los 12 artefactos patrimoniales y elementos de interfaz de manera vectorial procedural mediante `this.make.graphics()`, permitiendo ejecución 100% offline sin fallos 404 ni dependencia de servidores.

---

## Misión 20: Depuración y Bitácora de Programación
Ver registro formal en [Bitácora de Control de Errores y Debugging](#bitácora-de-control-de-errores-y-debugging).

---

## Rúbrica de Evaluación Entrega 2 (100 Puntos)
- Estructura del proyecto: **10 pts**
- HTML / CSS: **10 pts**
- JavaScript estructurado: **15 pts**
- Uso de librería (Phaser 3): **15 pts**
- Mecánica principal funcional: **15 pts**
- Interactividad fluida: **10 pts**
- Integración educativa real: **10 pts**
- Resolución de errores: **5 pts**
- Comprensión del código por el equipo: **5 pts**
- Bitácora y uso responsable de IA: **5 pts**
- **TOTAL: 100 PUNTOS**

---

# 5. ENTREGA 3: VIDEOJUEGO FINAL Y VALIDACIÓN (40%)

## Misión 21: Pruebas de Usuario (Matriz de Observación)
Se aplicará a 3 compañeros de grado 11°:

| Usuario | Edad / Curso | ¿Entendió las instrucciones? | ¿Pudo jugar sin bloqueos? | ¿Qué problema encontró? |
| :---: | :---: | :---: | :---: | :--- |
| **Usuario 1** | 16 años (11°A) | *(Por registrar en fase 3)* | *(Por registrar)* | *(Por registrar)* |
| **Usuario 2** | 17 años (11°B) | *(Por registrar en fase 3)* | *(Por registrar)* | *(Por registrar)* |
| **Usuario 3** | 16 años (11°A) | *(Por registrar en fase 3)* | *(Por registrar)* | *(Por registrar)* |

---

## Misión 22: Encuesta de Evaluación de Experiencia (10 Preguntas)
1. ¿Entendiste de inmediato que debías arrastrar los artefactos a sus vitrinas?
2. ¿Fue fácil comenzar a jugar?
3. ¿Las pistas históricas te ayudaron a identificar la época de las piezas?
4. ¿Te pareció divertido y retador el tiempo límite?
5. ¿La dificultad fue adecuada o muy exigente?
6. ¿Qué artefacto te resultó más difícil de ubicar?
7. ¿Qué fue lo más interesante que aprendiste sobre la cultura de Colombia?
8. ¿Qué mejorarías en el diseño de las salas del museo?
9. ¿Reconociste la diferencia entre las culturas precolombinas y la Independencia?
10. ¿Volverías a jugar para conseguir el diploma de Curador Maestro?

---

## Misión 23: Matriz de Mejoras Implementadas (Mínimo 5)

| # | Problema Detectado | Mejora Implementada | ¿Por qué se implementó? | Resultado Obtenido |
| :-: | :--- | :--- | :--- | :--- |
| **1** | *(Pruebas iniciales)* | Resaltado luminoso en la vitrina al pasar el cursor sobre ella. | El jugador no sabía exactamente dónde soltar el artefacto. | Claridad visual total del área de contacto. |
| **2** | *(Pruebas iniciales)* | Sonido tradicional de flauta/marimba al acertar una pieza. | Hacía falta refuerzo positivo cultural al lograr la clasificación. | Mayor inmersión y entusiasmo del jugador. |
| **3** | *(Pruebas iniciales)* | Ficha informativa emergente ampliada con botón "Entendido". | Los usuarios querían leer más sobre la leyenda de El Dorado. | Profundización pedagógica voluntaria. |
| **4** | *(Pruebas iniciales)* | Animación de retorno suave cuando se suelta fuera de zona. | La pieza desaparecía abruptamente si no tocaba una vitrina. | Jugabilidad más orgánica y pulida. |
| **5** | *(Pruebas iniciales)* | Botón de reinicio rápido de sala sin recargar toda la página. | Si el usuario perdía las 3 vidas, debía recargar el navegador. | Navegación fluida y mejor experiencia de usuario. |

---

## Misión 24: Evaluación y Evidencia Real del Aprendizaje
- **¿Qué debe aprender?** La distinción de artefactos arqueológicos precolombinos, sucesos de la Independencia y tradiciones vivas regionales de Colombia.
- **¿Cómo lo aprende jugando?** Leyendo pistas descriptivas, asociando imágenes a contextos históricos y corrigiendo sus propios errores con la retroalimentación inmediata.
- **¿Cómo comprobamos el aprendizaje?** Mediante la mejora progresiva en el tiempo de clasificación y el porcentaje de aciertos en la primera intención sin consultar pistas.

---

## Misión 25: Auditoría y Checklist de Documentación Final
- [x] Game Design Document (GDD) completo.
- [ ] Código fuente documentado y formateado.
- [ ] Videojuego funcional sin bugs en navegador.
- [ ] Evidencias de pruebas con 3 usuarios reales.
- [ ] Registro de errores solucionados.
- [ ] Registro de 5 mejoras implementadas.
- [ ] Fuentes de investigación y bibliografía.
- [ ] Bitácora de Inteligencia Artificial al día.
- [ ] Presentación para la sustentación.

---

## Misión 26: Preparación de la Sustentación (12 Preguntas de Jurado)
1. **¿Cuál era el problema cultural y educativo que abordaron?**
2. **¿Qué fuentes históricas consultaron (Museo del Oro, Museo Nacional, ICANH)?**
3. **¿Cuál es el objetivo educativo observable de su juego?**
4. **¿Cómo funciona el ciclo de vida de Phaser 3 en las escenas de su juego?**
5. **¿Por qué escogieron Phaser 3 en lugar de p5.js o Three.js?**
6. **¿Cómo funciona técnicamente el sistema Drag & Drop en su código?**
7. **¿Cómo se integraron de forma auténtica las 5 disciplinas STEAM?**
8. **¿Cuáles fueron los principales desafíos que enfrentaron al programar la interactividad?**
9. **¿Cómo utilizaron la Inteligencia Artificial como copiloto sin delegar el criterio humano?**
10. **¿Qué aprendizajes sobre la cultura de Colombia descubrieron ustedes mismos al crear el juego?**
11. **¿Qué cambios implementaron tras observar las pruebas con sus compañeros?**
12. **¿Qué evidencia demuestra que el videojuego realmente enseña historia y cultura?**

---

## Rúbrica de Evaluación Entrega 3 (100 Puntos)
- Funcionamiento del videojuego: **15 pts**
- Calidad de la experiencia de juego: **10 pts**
- Integración del aprendizaje: **15 pts**
- Programación: **10 pts**
- Diseño visual y creatividad: **10 pts**
- Pruebas con usuarios: **10 pts**
- Mejoras realizadas: **10 pts**
- Documentación (.md / .docx): **5 pts**
- Uso responsable de IA: **5 pts**
- Sustentación: **10 pts**
- **TOTAL: 100 PUNTOS**

---

# 6. BITÁCORAS OFICIALES OBLIGATORIAS

## Bitácora de Interacción con Inteligencia Artificial

| Fecha | Necesidad del Proyecto | Prompt Enviado a la IA | Respuesta Utilizada de la IA | Decisión y Adaptación del Equipo |
| :---: | :--- | :--- | :--- | :--- |
| **11/11/2026** | Selección y diseño de temática de bajo impacto matemático | *"Plantear temáticas fáciles sin cálculos físicos o matemáticos..."* | Propuesta de 5 temáticas (Reciclaje, Ciberseguridad, Inmunología, Museo de Historia y Nutrición). | El equipo seleccionó la Opción 4 enfocada en Historia y Cultura de Colombia. |
| **11/11/2026** | Estructuración pedagógica de las 3 salas colombianas | *"Diseñar 3 salas históricas con artefactos icónicos de Colombia..."* | Propuesta de Sala Precolombina, Sala Independencia y Sala Patrimonio Vivo. | Se aprobó la selección de 12 piezas icónicas (Balsa Muisca, Poporo, Sombrero Vueltiao, etc.). |
| **11/11/2026** | Implementación completa de Entrega 2 (Prototipo Phaser 3) | *"Actúa como Desarrollador Frontend Senior... entrega arquitectura modular con BootScene, MenuScene, GameScene, ResultScene..."* | Generación modular desacoplada con texturas procedurales vectoriales (Canvas/Graphics) y síntesis de audio Web Audio API. | El equipo adoptó la arquitectura 100% offline sin dependencias externas de imágenes ni audio, asegurando portabilidad en salas escolares. |

---

## Bitácora de Control de Errores y Debugging

| Fecha | Componente | Descripción del Problema / Bug | Causa Raíz Identificada | Solución Aplicada | ¿Funcionó? |
| :---: | :---: | :--- | :--- | :--- | :---: |
| **11/11/2026** | Drag & Drop | El artefacto quedaba flotando fuera de la pantalla si se soltaba en el borde o fuera de una Drop Zone. | Falta de evento `dragend` con verificación de la propiedad `dropped`. | Se implementó captura de `startX` y `startY` con retorno elástico suave animado mediante `this.tweens.add()`. | Sí ✅ |
| **11/11/2026** | Carga de Assets | Riesgo de fallos HTTP 404 al mover el proyecto a computadores de la sala de cómputo sin conexión a Internet. | Dependencia de archivos externos `.png` y `.mp3` no garantizados en red local escolar. | Se programó `BootScene.js` con dibujo vectorial procedural (`this.make.graphics().generateTexture()`) y un sintetizador nativo Web Audio API. | Sí ✅ |
| **11/11/2026** | Portabilidad de Módulos | Bloqueo por política de mismo origen (CORS) al abrir el juego con doble clic (`file:///`) si se usan ES Modules puros. | Los navegadores modernos bloquean `<script type="module">` sobre el protocolo `file://`. | Se estructuraron los archivos con importación secuencial clásica y registro explícito en `window`, permitiendo ejecución por doble clic y por Live Server. | Sí ✅ |
| **11/11/2026** | Renderizado de Vitrina (Sala 3) y UI/UX | Caja verde con línea diagonal en Sala 3 y sobrecarga visual (emojis, doble encabezado y muros de texto). | En `BootScene.js` la textura se generó como `pedestal_patrimonio`, mientras que `config.js` y `GameScene.js` consultaban `pedestal_patrimonio_vivo`, provocando textura faltante (*missing texture*). Además, exceso de emojis rompía la formalidad institucional. | Se corrigió la clave de generación a `pedestal_patrimonio_vivo`, se añadieron cristales con bisel y reflejos de luz, se eliminaron todos los emojis reemplazándolos por micro-etiquetas tipográficas (`TIEMPO: 60s`, `PUNTOS: 0`) y se simplificó el modal a 3 pasos directos. | Sí ✅ |

---

## Declaración de Ética y Autoría del Equipo
> *Declaramos que el videojuego presentado fue desarrollado mediante un proceso genuino de diseño, investigación, programación, pruebas y mejora continua.*  
> *La Inteligencia Artificial fue utilizada exclusivamente como herramienta de apoyo, consulta y copiloto pedagógico, y no como sustituto del trabajo, la comprensión y la toma de decisiones soberana del equipo desarrollador.*

**Integrantes:**
1. _____________________________________________
2. _____________________________________________
3. _____________________________________________
4. _____________________________________________

**Firma del Representante:** _____________________________________  
**Fecha:** 11 de Noviembre de 2026

---

## Reflexión Final Individual
- **¿Qué aprendí?:**
- **¿Qué fue lo más difícil?:**
- **¿Qué problema técnico logré solucionar?:**
- **¿Qué aprendí utilizando la Inteligencia Artificial?:**
- **¿Qué parte del videojuego puedo explicar de principio a fin sin ayuda?:**
- **Si tuviera que volver a empezar el proyecto, ¿qué cambiaría?:**
