# PROYECTO STEAM: VIDEOJUEGO EDUCATIVO CON JAVASCRIPT + IA
## Institución Educativa Angela María Torres Suárez — Área de Tecnología e Informática
### Proyecto STEAM — Grado 11°

---

# CUADERNO MAESTRO DE CONSTRUCCIÓN Y DOCUMENTACIÓN TÉCNICA
**Nombre del Videojuego:** EcoCircuit: Misión Red Eléctrica Inteligente (Smart Grid Guardian)  
**Curso:** Grado 11°  
**Equipo de Proyecto:**
- **Supervisor & Auditor Técnico (Lead):** AI Lead Engineer (Antigravity)
- **Ingeniero Frontend & Desarrollador Principal:** Ingeniero Frontend de Proyecto
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
   - [Misión 16: Selección y Justificación de la Tecnología](#misión-16-selección-y-justificación-de-la-tecnología)
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
Diseñar y desarrollar un videojuego que permita aprender, practicar o comprender un tema educativo mediante una experiencia interactiva funcional web basada en JavaScript.
> **Pregunta Clave:** *¿Qué aprenderá el jugador al jugar?*  
> **Premisa:** *No basta con que sea divertido; debe tener un propósito pedagógico verificable y real.*

### ⚖️ La Regla de Oro Institucional
> **«Si no puedes explicar cómo funciona, todavía no puedes decir que lo construiste.»**

### 🤖 Política de Uso de Inteligencia Artificial (IA como Copiloto)
- **La IA no hace el proyecto por ti.** El equipo humano toma las decisiones de arquitectura, diseño estético y mecánicas.
- **Prohibido solicitar:** *"Hazme el videojuego completo"*. Todo desarrollo se realiza por **componentes modulares progresivos**.
- Cada interacción relevante con la IA debe registrarse en la **Bitácora de IA**, demostrando criterio de aceptación, refactorización y entendimiento de cada línea de código.

### 📊 Desglose de Evaluación Oficial
| Entrega | Producto | Ponderación |
| :--- | :--- | :--- |
| **Entrega 1** | Diseño del proyecto STEAM (GDD, Storyboard, Wireframes, Fórmulas) | **30%** |
| **Entrega 2** | Prototipo Funcional (Arquitectura, 10 Componentes, Interacción JS) | **30%** |
| **Entrega 3** | Videojuego Final, Pruebas con Usuarios, Mejoras y Sustentación | **40%** |
| **TOTAL** | | **100%** |

---

# 2. ESTRUCTURA DEL PROYECTO Y REPOSITORIO

La arquitectura de archivos adoptada para garantizar modularidad y mantenibilidad es:

```text
EcoCircuit-Videojuego-STEAM/
│
├── docs/
│   ├── DOCUMENTACION_COMPLETA_STEAM.md   <-- (Documento maestro base para exportar a .docx)
│   ├── GDD.md                            <-- Game Design Document ejecutivo
│   ├── BITACORA_IA.md                    <-- Registro cronológico de prompts y decisiones
│   └── BITACORA_ERRORES.md               <-- Control de fallos, causas y soluciones
│
├── src/
│   ├── index.html                        <-- Estructura de vistas (Inicio, Tutorial, Juego, HUD, Fin)
│   ├── style.css                         <-- Estilos visuales modernos (Solarpunk / Cyber-Eco)
│   ├── js/
│   │   ├── config.js                     <-- Constantes físicas, parámetros de nivel y balance
│   │   ├── gameState.js                  <-- Estado global (puntuación, energía, baterías, tiempo)
│   │   ├── simulationEngine.js           <-- Núcleo matemático de generación, consumo y física
│   │   ├── uiController.js               <-- Manejo de pantallas, HUD y retroalimentación didáctica
│   │   ├── challengeSystem.js            <-- Sistema de preguntas y micro-retos didácticos
│   │   └── game.js                       <-- Ciclo de juego principal (Game Loop y eventos)
│   └── assets/
│       ├── images/                       <-- Iconos SVG/PNG (paneles, turbinas, baterías, ciudad)
│       └── sounds/                       <-- Efectos de audio (click, alerta, sobrecarga, victoria)
│
└── README.md                             <-- Instrucciones de instalación y ejecución local
```

---

# 3. ENTREGA 1: DISEÑO DEL PROYECTO STEAM (30%)

## Misión 1: Encontrar un Problema
- **Área:** Ciencia, Medio Ambiente y Tecnología.
- **¿Qué problema queremos abordar?**  
  La crisis de la transición energética global y la inestabilidad de las redes eléctricas modernas. A medida que las ciudades abandonan el carbón y el gas, surge el desafío de integrar fuentes renovables intermitentes (el sol no siempre brilla con la misma intensidad y el viento fluctúa). Los estudiantes desconocen la física y la matemática básica que permite balancear la oferta y la demanda eléctrica, entender la degradación de baterías y el impacto del CO2 en tiempo real.
- **¿A quién afecta?**  
  A las comunidades urbanas y rurales que sufren cortes eléctricos (blackouts), a los ecosistemas afectados por emisiones térmicas y a los futuros ciudadanos que deben liderar la transición hacia matrices energéticas limpias.
- **¿Por qué es importante?**  
  Porque el cambio climático exige descarbonizar la matriz eléctrica sin sacrificar la confiabilidad del servicio en hospitales, hogares y centros de producción.
- **¿Qué podría aprender una persona sobre este problema?**  
  Aprenderá los principios de potencia eléctrica ($P = V \cdot I$), la relación entre radiación solar/velocidad de viento y generación eléctrica, la gestión de almacenamiento químico en baterías, el concepto de carga base vs. carga pico y la toma de decisiones basada en optimización de recursos finitos.

---

## Misión 2: Investigar el Problema
### Conceptos Clave Fundamentales:
1. **Generación Renovable Variable:** La potencia de una celda fotovoltaica depende directamente de la irradiancia ($W/m^2$); una turbina eólica responde a una curva cúbica respecto a la velocidad del viento ($P \propto v^3$) entre velocidades de corte (cut-in y cut-out).
2. **Ley de Conservación y Balance de Potencia:** En todo instante, la potencia total inyectada a la red más la potencia descargada de baterías debe satisfacer la demanda comunitaria ($\sum P_{gen} + P_{batería} \ge P_{demanda}$).
3. **Eficiencia y Ciclo de Batería:** Las baterías no almacenan el 100% de la energía inyectada (pérdidas por calor, eficiencia $\approx 85\%$) y poseen una profundidad máxima de descarga (DoD) para evitar fallos.
4. **Respaldo Térmico y Emisiones:** Cuando las fuentes limpias y las baterías no alcanzan, se debe encender generación fósil de respaldo, disparando la huella de carbono ($gCO_2/kWh$).
5. **Sobrecarga y Estabilidad de Red:** Si la demanda supera críticamente a la generación o si un transformador supera el 120% de su capacidad nominal, la frecuencia decae provocando un fallo en cascada (apagón general).

### Fuentes Confiables de Referencia:
- Agencia Internacional de Energía Renovable (IRENA).
- Laboratorio Nacional de Energías Renovables (NREL) - Modelos de Microredes.
- Textos de Física General (Leyes de Circuitos y Termodinámica).

---

## Misión 3: Definir el Jugador
- **Edad:** 14 a 18 años.
- **Grado:** 10° a 11° de Bachillerato / Educación Media Técnica.
- **Conocimientos previos:** Operaciones aritméticas elementales, nociones básicas de energía, concepto cualitativo de corriente y medio ambiente.
- **Intereses:** Videojuegos de estrategia, simulación de ciudades (estilo *SimCity* / *Factorio*), rompecabezas, tecnología y ecología.
- **Necesidad educativa:** Conectar fórmulas abstractas de física y matemáticas con un impacto ecológico tangible y comprensible mediante la simulación visual.

---

## Misión 4: Crear el Objetivo Educativo
> **Objetivo Definitivo:**  
> *"Después de jugar **EcoCircuit**, el estudiante será capaz de calcular y equilibrar el balance de potencia entre generación limpia y demanda comunitaria ($\sum P_{gen} \ge P_{demanda}$), seleccionar y posicionar estratégicamente generadores solares y eólicos según las condiciones climáticas dinámicas, administrar ciclos de carga/descarga de baterías y prevenir apagones minimizando las emisiones de CO2."*

---

## Misión 5: Crear la Idea del Videojuego
- **Nombre Provisional:** **EcoCircuit: Smart Grid 2050**
- **Género:** Simulación de Estrategia, Gestión y Puzzle en Tiempo Real 2D.
- **Descripción (< 100 palabras):**  
  *En el año 2050, la ciudad de Neovalle sufre apagones constantes y altos niveles de polución. Como Ingeniero(a) Jefe de la Micro-red Eléctrica Inteligente, debes abastecer hospitales, escuelas e industrias gestionando paneles solares, turbinas eólicas y baterías químicas. Cada hora virtual trae cambios climáticos y picos de demanda imprevistos. Realiza balances de carga en tiempo real, resuelve micro-retos de cálculo de potencia y evita colapsos en la red para alcanzar la neutralidad de carbono antes de que la ciudad quede a oscuras.*

---

## Misión 6: Diseñar la Mecánica Principal
- **¿Qué hace el jugador durante el juego?**  
  - Observa el panel telemétrico en tiempo real (clima: radiación $W/m^2$, viento $m/s$; demanda: $kW$ consumidos).
  - Selecciona e instala generadores renovables (paneles, aerogeneradores) y almacenes (baterías) en una cuadrícula topológica.
  - Conecta líneas eléctricas y activa conmutadores para derivar excedentes hacia baterías o suministrar energía a sectores de emergencia.
  - Resuelve micro-desafíos de cálculo rápido para reparar sobrecargas y desbloquear condensadores de estabilización.
- **Para ganar debe:** Mantener la red 100% estable durante los 3 días virtuales del nivel, abastecer continuamente los edificios prioritarios (hospital) y mantener la huella de carbono por debajo del 20%.
- **Para perder debe:** Dejar que la barra de Estabilidad de la Red caiga a 0% debido a déficit no mitigado o sobrecarga sostenida de transformadores (Apagón General).

---

## Misión 7: Crear las Reglas del Juego (Mínimo 5 Reglas)
1. **Regla de Prioridad de Carga:** El hospital y las bombas de agua potable deben recibir energía en todo momento; si pierden suministro por más de 3 segundos virtuales, la Estabilidad se penaliza con -15% por segundo.
2. **Regla de Intermitencia Solar:** Los paneles solares generan potencia en función de la hora del día ($06:00$ a $18:00$), alcanzando su pico al mediodía virtual ($1000\, W/m^2$) y cayendo a $0\, W/m^2$ de noche.
3. **Regla de Umbral Eólico:** Los aerogeneradores solo operan si el viento se encuentra entre $3\, m/s$ (arranque) y $25\, m/s$ (freno por seguridad para evitar daños mecánicos).
4. **Regla de Conservación y Almacenamiento:** Cuando $P_{gen} > P_{demanda}$, el excedente carga automáticamente las baterías activas hasta el 100% con un factor de eficiencia del 85%. Cuando $P_{gen} < P_{demanda}$, las baterías se descargan hasta su nivel de seguridad (20% SoC).
5. **Regla del Respaldo Fósil de Emergencia:** Si las baterías se agotan y persiste un déficit, el jugador puede encender el generador térmico para evitar el apagón, pero cada segundo encendido incrementa el medidor de CO2 en +2% y descuenta 20 Puntos Eco.

---

## Misión 8: Sistema de Puntuación y Progresión
- **Puntos iniciales:** 1000 Puntos Eco.
- **Gana puntos cuando:**
  - $+10$ puntos por cada hora virtual de balance limpio perfecto (cero uso de carbón/gas).
  - $+50$ puntos por cada micro-reto de cálculo de potencia resuelto al primer intento.
  - $+200$ puntos de bonificación al finalizar el día sin interrupciones en edificios críticos.
- **Pierde puntos cuando:**
  - $-5$ puntos por segundo de déficit energético en zonas residenciales o comerciales.
  - $-20$ puntos por segundo de operación del generador térmico de respaldo.
  - $-100$ puntos por cada evento de sobrecarga térmica en un transformador.
- **¿Habrá vidas?** Sí, representadas por la **Barra de Integridad / Estabilidad de la Red** (100 HP). Se reduce por sobrecargas y apagones.
- **¿Habrá tiempo?** Sí, reloj de simulación acelerada (1 segundo real = 1 hora virtual; 24 segundos reales = 1 día virtual).
- **¿Habrá niveles?** Sí (Nivel 1: Comunidad Rural "El Roble"; Nivel 2: Bahía Costera Eólica; Nivel 3: Metrópolis Neovalle).
- **¿Habrá recompensas?** Sí, medallas STEAM ("Ingeniero Cero Emisiones", "Maestro del Balance", "Calculador Relámpago") y desbloqueo de baterías de grafeno de alta eficiencia.

---

## Misión 9: Crear los Personajes

### Personaje Principal:
- **Nombre:** Valeria "Volt" Gómez.
- **Edad:** 17 años.
- **Personalidad:** Curiosa, ágil resolviendo problemas matemáticos, líder comunitaria y apasionada por la sostenibilidad ecológica.
- **Misión:** Diseñar la red de energía inteligente de Neovalle para librar a su comunidad del humo tóxico de la vieja termoeléctrica y garantizar energía limpia continua.
- **Habilidades:** 
  - *Diagnóstico Rápido:* Identifica cuellos de botella en la cuadrícula de distribución.
  - *Cálculo Eficiente:* Resuelve balances de potencia con precisión en micro-retos.
- **Debilidades:** Poca tolerancia al desperdicio de energía; se frustra cuando la infraestructura colapsa por falta de previsión.
- **Guía / Mentor:** *Dra. Ada Faraday*, científica del centro de control que provee retroalimentación teórica y fórmulas didácticas.

---

## Misión 10: Diseñar los Escenarios

### Escenario 1: Aldea Solar "El Roble"
- **Descripción:** Zona rural con alta radiación solar pero sin red eléctrica troncal. Demanda concentrada en una escuela, un centro de salud y bombeo de riego.
- **¿Qué ocurre aquí?** El jugador aprende las bases de la energía fotovoltaica, el cálculo de paneles requeridos y la importancia de las baterías para cubrir la noche.

### Escenario 2: Valle Eólico "Punta Huracán"
- **Descripción:** Costa marítima con vientos fuertes pero racheados y variables. Abastece a un pueblo pesquero y una planta procesadora de alimentos.
- **¿Qué ocurre aquí?** El jugador enfrenta la intermitencia del viento, turbulencias climáticas repentinas y la necesidad de combinar fuentes híbridas (solar + eólica) para estabilizar la red.

### Escenario 3: Metrópolis "Neovalle 2050"
- **Descripción:** Gran centro urbano altamente tecnificado con rascacielos inteligentes, hospitales de alta complejidad, trenes eléctricos y fábricas robotizadas.
- **¿Qué ocurre aquí?** Gran complejidad de demanda con horas pico intensas, olas de calor y tormentas que ponen a prueba la arquitectura completa de la Smart Grid.

---

## Misión 11: Crear la Historia (Guion Narrativo)
- **Inicio:** Neovalle vive bajo una densa nube de humo proveniente de una planta de combustión obsoleta que falla constantemente, provocando cortes en hospitales y escuelas. Valeria es nombrada aprendiz de operadora en la central de despacho.
- **Conflicto:** Una ordenanza climática exige clausurar la planta fósil en un plazo de 3 días. La ciudad quedará a oscuras si no se construye una red inteligente basada en fuentes renovables capaces de soportar la demanda variable.
- **Desarrollo:** Valeria instala generadores limpios, canaliza energía a través de bancos de baterías y supera tormentas y olas de frío mientras equilibra los voltajes y frecuencias de cada sector.
- **Final:** Gracias al cálculo riguroso y a la gestión del jugador, Neovalle alcanza el equilibrio 100% renovable. La chimenea de carbón es desmantelada y Valeria recibe el título de Ingeniera Guardiana de la Red.

---

## Misión 12: Storyboard Didáctico

| Escena | ¿Qué ocurre? | ¿Qué hace el jugador? | ¿Qué aprende? |
| :---: | :--- | :--- | :--- |
| **1** | El sol asciende en la aldea. La escuela abre y la demanda sube a 40 kW. | Selecciona el ícono de panel solar y lo ubica en la zona despejada; conecta el cable a la subestación. | Que los paneles convierten fotones en potencia eléctrica ($P_{solar} = A \cdot \eta \cdot G$). |
| **2** | Llega el mediodía: la generación solar supera la demanda ($80\, kW > 50\, kW$). Hay riesgo de sobretensión. | Instala un banco de baterías y activa el interruptor de carga para almacenar el excedente. | La necesidad del almacenamiento para no disipar energía limpia excedente. |
| **3** | Cae la noche ($19:00$). La generación solar baja a $0\, kW$ y la demanda se mantiene en $30\, kW$. | Conmuta las baterías a modo "descarga" para abastecer al centro de salud. | Que la energía acumulada durante el día sustenta la demanda nocturna. |
| **4** | El viento comienza a soplar a $12\, m/s$ durante la madrugada. | Despliega turbinas eólicas en la colina costera para suplir la descarga de las baterías. | La complementariedad de las fuentes renovables eólicas y solares. |
| **5** | Ocurre una ola de frío inesperada; se dispara el uso de calefacción y la red entra en déficit crítico. | Resuelve un desafío de cálculo para priorizar circuitos y evitar el uso de la planta de gas fósil. | Priorización de circuitos críticos y cálculo rápido de demanda vs. capacidad. |
| **6** | Fin de la jornada: la pantalla muestra el balance energético, la huella evitada y el diploma STEAM. | Analiza el gráfico de rendimiento diario y revisa sus aciertos matemáticos. | Interpretación de curvas de carga y métricas de impacto ambiental. |

---

## Misión 13: Diseñar las Pantallas (Wireframes y Mocks UI)

### 1. Pantalla de Inicio
```text
+------------------------------------------------------------------------+
|                      ⚡ ECO-CIRCUIT: SMART GRID 2050 ⚡                 |
|            Proyecto Educativo STEAM - Grado 11° | IE AMTS              |
+------------------------------------------------------------------------+
|                                                                        |
|                  [ 🌆 ILUSTRACIÓN NEOVALLE SOSTENIBLE ]                |
|                                                                        |
|              [ ▶ INICIAR MISIÓN ]      [ 📖 GUÍA & CONCEPTOS ]         |
|                                                                        |
|              [ 🏆 TABLA DE MÉRITOS ]    [ ⚙ CONFIGURACIÓN ]             |
|                                                                        |
+------------------------------------------------------------------------+
| Regla de Oro: "Si no puedes explicar cómo funciona, aún no lo creaste"|
+------------------------------------------------------------------------+
```

### 2. Pantalla de Instrucciones / Conceptos STEAM
```text
+------------------------------------------------------------------------+
| 📖 CENTRO DE ENTRENAMIENTO STEAM: CÓMO GESTIONAR LA RED                |
+------------------------------------------------------------------------+
| FÓRMULAS & CONCEPTOS CLAVE:                                            |
|  • Balance de Red:  Balance = P_generada - P_consumo                   |
|  • P_solar = N_paneles * 0.3 kW * Factor_Sol (0 a 1)                  |
|  • P_eolica = N_turbinas * 1.5 kW * Factor_Viento                     |
|  • Baterías: Almacenan exceso (P > 0) / Entregan respaldo (P < 0)       |
|                                                                        |
| CONTROLES:                                                             |
|  [☀️ +Panel] [💨 +Turbina] [🔋 +Batería] [🔌 Interruptor On/Off]      |
|  Clic en sector para ver demanda | Arrastra componentes a la cuadrícula|
|                                                                        |
|                      [ ⬅ VOLVER ]   [ ¡ENTENDIDO, A JUGAR! ➡ ]        |
+------------------------------------------------------------------------+
```

### 3. Pantalla Principal de Juego (HUD + Canvas)
```text
+------------------------------------------------------------------------+
| [DÍA 1 - 14:00]  ☀️ Sol: 920 W/m² | 💨 Viento: 8.5 m/s | ⏱ 01:45         |
| Generación: 85 kW | Consumo: 60 kW | Batería: [████████░░] 80% (Cargando)|
| Estabilidad Red: [██████████] 100% | CO2 Evitado: 42 kg | Pts: 1250    |
+------------------------------------------------------------------------+
| MAPA INTERACTIVO DE LA CIUDAD (CANVAS 2D)                              |
|                                                                        |
|  [ ☀️ Solar Farm ] =====> [ SUBESTACIÓN ] =====> [ 🏥 Hospital: 25kW ] |
|                                   ||                                   |
|  [ 💨 Parque Eólico ] ===========//=======> [ 🏫 Escuela:  15kW ]      |
|                                   ||                                   |
|  [ 🔋 Batería Central ] =========//=======> [ 🏭 Fábrica:  20kW ]      |
|                                                                        |
| [ALERTA]: P_gen > P_demanda (+25 kW). Excedente fluyendo a Batería.    |
+------------------------------------------------------------------------+
| BARRA DE ACCIÓN:                                                       |
| [+ Panel Solar ($150)]  [+ Turbina ($400)]  [+ Batería ($250)]         |
| [🔥 Respaldo Gas (EMERGENCIA - CO2)]        [❓ RESOLVER RETO STEAM]   |
+------------------------------------------------------------------------+
```

### 4. Pantalla de Resultados y Diagnóstico Educativo
```text
+------------------------------------------------------------------------+
|                        🎉 ¡MISIÓN 1 COMPLETADA! 🎉                      |
|                  Nivel 1: Aldea Solar "El Roble"                       |
+------------------------------------------------------------------------+
| RESUMEN DE GESTIÓN ELÉCTRICA:                                          |
|  • Estabilidad Final de la Red: 96% (Excelente)                       |
|  • Energía Renovable Utilizada: 94.2%                                  |
|  • Emisiones de CO2 Evitadas:  185 kg CO2eq                            |
|  • Retos Matemáticos Resueltos: 3 de 3 (+150 pts)                     |
|  • Puntuación Total: 1,850 Pts Eco                                     |
|                                                                        |
| ¿QUÉ APRENDISTE HOY?                                                   |
|  "Mantuviste el balance P_gen >= P_demanda usando la batería durante   |
|   la noche, evitando 12 horas de combustión fósil."                    |
|                                                                        |
|           [ 🔄 REPETIR NIVEL ]        [ ➡ SIGUIENTE NIVEL ]           |
+------------------------------------------------------------------------+
```

---

## Misión 14: Matriz de Integración STEAM

| Pilar STEAM | Aplicación Real y Tangible en EcoCircuit |
| :--- | :--- |
| **Ciencia (Science)** | Estudio de la física fotovoltaica (radiación electromagnética), energía cinética del aire, termodinámica de pérdidas por disipación en líneas eléctricas y ciclo de vida del carbono. |
| **Tecnología (Technology)** | Implementación en JavaScript ES6+, algoritmos de monitoreo de variables en tiempo real, interfaz responsiva e integración de lógica de redes inteligentes (Smart Grids). |
| **Ingeniería (Engineering)** | Diseño de la topología de la micro-red, cálculo de capacidades de transporte, tolerancia a fallos, balance de carga y prevención de cortocircuitos por sobretensión. |
| **Arte (Art)** | Diseño visual estético solarpunk en CSS3 y Canvas, iconografía intuitiva, paleta de colores armónica (tonos verdes sostenibles, azules eléctricos y ámbar de advertencia) y animaciones de flujo energético. |
| **Matemáticas (Math)** | Ecuaciones algebraicas de balance $\Delta P = \sum P_{gen} - \sum P_{dem}$, funciones lineales y cuadráticas de producción, proporciones porcentuales de State-of-Charge (SoC) e interpretación de datos estadísticos. |

---

## Misión 15: Game Design Document (GDD Completo)
*(Resumen de los 17 puntos requeridos en el Cuaderno Grado 11°)*
1. **Nombre:** EcoCircuit: Smart Grid 2050.
2. **Problema educativo:** Transición energética y estabilidad de redes con renovables.
3. **Público:** Estudiantes de 14 a 18 años (Grado 10° - 11°).
4. **Objetivo educativo:** Equilibrar potencia en tiempo real, dimensionar fuentes y minimizar CO2.
5. **Género:** Simulación, estrategia y puzzle matemático en tiempo real.
6. **Historia:** Valeria transforma la matriz eléctrica contaminada de Neovalle en una red limpia.
7. **Personajes:** Valeria "Volt" Gómez (Principal), Dra. Ada Faraday (Mentora).
8. **Escenarios:** Aldea El Roble (Solar), Punta Huracán (Eólico), Metrópolis Neovalle (Híbrido).
9. **Mecánicas:** Colocación de generadores, derivación a baterías, resolución de retos de cálculo, desconexión selectiva de cargas.
10. **Reglas:** Prioridad de hospitales, intermitencia solar, corte eólico por viento extremo, eficiencia de batería 85%, penalización por uso térmico.
11. **Puntuación:** Base 1000 Pts; $+10$ por hora limpia; $+50$ por reto resuelto; penalización por déficit y CO2.
12. **Niveles:** 3 niveles con curvas crecientes de dificultad climática y demanda.
13. **Condición de victoria:** Completar los 3 días virtuales con Estabilidad $> 70\%$ y Cero Apagón Hospitalario.
14. **Condición de derrota:** Estabilidad de red $= 0\%$ o superación del límite crítico de polución CO2 ($100\%$).
15. **Elementos STEAM:** Explicados detalladamente en la Misión 14.
16. **Tecnología:** HTML5, CSS3 moderno, JavaScript ES6+.
17. **Librería JavaScript propuesta y justificada:** **Phaser 3** (Librería oficial autorizada para videojuegos 2D). Permite arquitectura por escenas (`BootScene`, `MenuScene`, `GameScene`, `UIScene`), sistema de partículas para animar el flujo eléctrico y compatibilidad escolar mediante inclusión directa sin dependencias npm.

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

## Misión 16: Selección y Justificación de la Tecnología
Conforme a la terna de librerías permitidas por la institución (**Phaser**, **p5.js**, **Three.js**):

- **HTML5:** Marcado semántico estructurado para el contenedor del lienzo y modales didácticos.
- **CSS3:** Sistema de diseño responsivo basado en CSS Grid y Flexbox con variables de temática Solarpunk.
- **JavaScript (ES6+):** Programación orientada a objetos para la simulación física y modelos matemáticos.
- **Librería Oficial Seleccionada:** **Phaser 3** (Versión 3.60+ / 3.80+).
  - *Comparación y Justificación Pedagógica (Prompt IA 10):*
    1. **Frente a Three.js:** Three.js está orientada a entornos 3D, lo cual añadiría una sobrecarga innecesaria de modelado y shaders para una mecánica de gestión de cuadrícula y balance de red topológico 2D.
    2. **Frente a p5.js:** Aunque p5.js es excelente para gráficos interactivos simples, carece de un sistema nativo de gestión de escenas de juego, ciclo de vida desacoplado (Preload, Create, Update), emisores de partículas para fluidos eléctricos y manejo optimizado de sprites interactivos con drag-and-drop.
    3. **Fortalezas de Phaser 3:** Es el estándar por excelencia de desarrollo de videojuegos 2D en web. Permite separar la escena de simulación de la escena de interfaz, ofrece animaciones fluidas a 60 FPS y se distribuye como un único archivo JavaScript (`phaser.min.js`), asegurando los **15 puntos del criterio "Uso de librería"** y garantizando que el juego funcione 100% offline en las computadoras del colegio.

---

## Misión 17: Arquitectura de Software y Archivos
Ver desglose detallado en el [Capítulo 2: Estructura del Proyecto](#2-estructura-del-proyecto-y-repositorio).

---

## Misión 18: Construcción Modular por Componentes (1 al 10)

| Componente | Descripción Técnica | Estado | Probado |
| :--- | :--- | :---: | :---: |
| **1. Pantalla Inicial** | Menú interactivo, título animado, selector de niveles y botón de inicio. | ⏳ Pendiente | [ ] |
| **2. Pantalla de Instrucciones** | Modal interactivo con manual de juego, fórmulas STEAM y simbología. | ⏳ Pendiente | [ ] |
| **3. Escenario (Grid / Canvas)** | Cuadrícula de renderizado con subestación, cableado y edificios consumidores. | ⏳ Pendiente | [ ] |
| **4. Jugador / Operador** | Cursor interactivo, herramientas de colocación y panel de control. | ⏳ Pendiente | [ ] |
| **5. Controles de Juego** | Botones de compra/arrastre de fuentes (solar, eólico, batería) y conmutadores. | ⏳ Pendiente | [ ] |
| **6. Mecánica Principal** | Motor físico de balance continuo: $\Delta P = P_{gen}(t) - P_{dem}(t)$. | ⏳ Pendiente | [ ] |
| **7. Puntuación y HUD** | Marcadores en tiempo real de potencia, batería, estabilidad y Puntos Eco. | ⏳ Pendiente | [ ] |
| **8. Victoria / Derrota** | Verificadores de condiciones de corte por apagón o éxito al completar el ciclo. | ⏳ Pendiente | [ ] |
| **9. Contenido Educativo** | Retos matemáticos dinámicos con retroalimentación correctiva inmediata. | ⏳ Pendiente | [ ] |
| **10. Pantalla Final** | Resumen analítico de desempeño, métricas STEAM y reporte formativo. | ⏳ Pendiente | [ ] |

---

## Misión 19: Comprensión y Explicación del Código
*(Sección reservada para documentar las funciones matemáticas nucleares: `calculateSolarOutput(hour, weather)`, `calculateWindOutput(windSpeed)`, `updateGridStability(deltaPower)`, explicando variables, eventos y condiciones).*

---

## Misión 20: Depuración y Bitácora de Programación
Ver registro formal en [Bitácora de Control de Errores y Debugging](#bitácora-de-control-de-errores-y-debugging).

---

## Rúbrica de Evaluación Entrega 2 (100 Puntos)
- Estructura del proyecto: **10 pts**
- HTML / CSS: **10 pts**
- JavaScript estructurado: **15 pts**
- Uso de librería / API Canvas: **15 pts**
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
Se aplicará a un mínimo de 3 estudiantes de la institución:

| Usuario | Edad / Curso | ¿Entendió las instrucciones? | ¿Pudo jugar sin bloqueos? | ¿Qué problema encontró? |
| :---: | :---: | :---: | :---: | :--- |
| **Usuario 1** | 16 años (11°A) | *(Por registrar en fase 3)* | *(Por registrar)* | *(Por registrar)* |
| **Usuario 2** | 17 años (11°B) | *(Por registrar en fase 3)* | *(Por registrar)* | *(Por registrar)* |
| **Usuario 3** | 15 años (10°A) | *(Por registrar en fase 3)* | *(Por registrar)* | *(Por registrar)* |

---

## Misión 22: Encuesta de Evaluación de Experiencia (10 Preguntas)
1. ¿Entendiste qué debías hacer desde el primer minuto?
2. ¿Fue fácil comenzar a jugar?
3. ¿Las instrucciones fueron claras y suficientes?
4. ¿Te pareció divertido y desafiante?
5. ¿La dificultad te pareció adecuada o frustrante?
6. ¿Qué fue lo más difícil de gestionar en la red?
7. ¿Qué fue lo más interesante del juego?
8. ¿Qué cambiarías o agregarías para mejorarlo?
9. ¿Qué aprendiste sobre la energía solar, el viento y las baterías?
10. ¿Volverías a jugar para superar tu puntuación?

---

## Misión 23: Matriz de Mejoras Implementadas (Mínimo 5)

| # | Problema Detectado | Mejora Implementada | ¿Por qué se implementó? | Resultado Obtenido |
| :-: | :--- | :--- | :--- | :--- |
| **1** | *(Pruebas iniciales)* | Indicador visual de flujo con partículas luminosas. | El usuario no sabía si la energía iba a la batería o a la ciudad. | Comprensión inmediata del flujo eléctrico. |
| **2** | *(Pruebas iniciales)* | Alarma sonovirtual y parpadeo al superar 90% de sobrecarga. | Los usuarios quemaban transformadores sin darse cuenta. | Reacción a tiempo y menor frustración. |
| **3** | *(Pruebas iniciales)* | Pausa táctica automática durante los micro-retos didácticos. | El tiempo seguía corriendo mientras leían la pregunta matemática. | Foco reflexivo en el cálculo sin estrés de tiempo. |
| **4** | *(Pruebas iniciales)* | Desglose gráfico comparativo al final del nivel. | El jugador quería ver cuántos kg de CO2 ahorró vs una termoeléctrica. | Mayor impacto en la conciencia ambiental. |
| **5** | *(Pruebas iniciales)* | Modo daltónico / contraste alto para cables y estados. | Dificultad para diferenciar cables activos de inactivos. | Accesibilidad universal en monitores de aula. |

---

## Misión 24: Evaluación y Evidencia Real del Aprendizaje
- **¿Qué debe aprender?** La relación matemática entre generación, demanda y acumulación en baterías, y la toma de decisiones ecológicas.
- **¿Cómo lo aprende jugando?** Experimentando directamente las consecuencias de sus decisiones: si no instala baterías de día, la ciudad se apaga de noche; si abusa del generador térmico, pierde por contaminación.
- **¿Cómo comprobamos el aprendizaje?** Mediante la resolución exitosa de micro-retos cuantitativos dentro del juego y una prueba de validación conceptual pre y post-juego.

---

## Misión 25: Auditoría y Checklist de Documentación Final
- [x] Game Design Document (GDD) completo.
- [ ] Código fuente documentado y formateado.
- [ ] Videojuego funcional sin bugs críticos en navegador.
- [ ] Evidencias de pruebas con usuarios reales (mínimo 3).
- [ ] Registro de errores solucionados.
- [ ] Registro de 5 mejoras implementadas.
- [ ] Fuentes de investigación y marco teórico.
- [ ] Bitácora de Inteligencia Artificial al día.
- [ ] Diapositivas de presentación preparadas.

---

## Misión 26: Preparación de la Sustentación (12 Preguntas de Jurado)
1. **¿Cuál era el problema educativo abordado?**
2. **¿Qué investigaron teóricamente antes de tirar la primera línea de código?**
3. **¿Cuál es el objetivo educativo observable y cómo lo evaluaron?**
4. **¿Cómo funciona el bucle del videojuego (Game Loop)?**
5. **¿Qué tecnología y API/librería utilizaron y por qué?**
6. **¿Por qué descartaron motores más pesados en favor de su arquitectura web?**
7. **¿Cómo se integraron de forma auténtica las 5 disciplinas STEAM?**
8. **¿Cuáles fueron los 3 problemas de programación más complejos que resolvieron?**
9. **¿Cómo utilizaron la Inteligencia Artificial de forma ética y reflexiva sin depender ciegamente de ella?**
10. **¿Qué competencias técnicas y científicas aprendieron durante el proyecto?**
11. **¿Qué cambios radicales hicieron tras las pruebas de usuario?**
12. **¿Qué evidencia cuantitativa demuestra que el videojuego realmente enseña y funciona?**

---

## Rúbrica de Evaluación Entrega 3 (100 Puntos)
- Funcionamiento impecable del videojuego: **15 pts**
- Calidad de la experiencia de juego: **10 pts**
- Integración y evidencia del aprendizaje: **15 pts**
- Calidad de la programación: **10 pts**
- Diseño visual y creatividad: **10 pts**
- Pruebas con usuarios: **10 pts**
- Mejoras realizadas: **10 pts**
- Documentación integral (.md / .docx): **5 pts**
- Uso responsable y reflexivo de IA: **5 pts**
- Sustentación y defensa ante jurado: **10 pts**
- **TOTAL: 100 PUNTOS**

---

# 6. BITÁCORAS OFICIALES OBLIGATORIAS

## Bitácora de Interacción con Inteligencia Artificial

| Fecha | Necesidad del Proyecto | Prompt Enviado a la IA | Respuesta Utilizada de la IA | Decisión y Adaptación del Equipo |
| :---: | :--- | :--- | :--- | :--- |
| **11/11/2026** | Definición conceptual del juego STEAM Grado 11° | *"Actúa como asesor de proyectos educativos STEAM para grado 11... identifica 10 problemas y alternativas"* | Propuesta de microredes eléctricas inteligentes y balance de energía renovable. | Aprobado unánimemente; se ajustó el enfoque a simulación 2D interactiva en Canvas. |
| **11/11/2026** | Revisión y robustez del objetivo pedagógico | *"Actúa como diseñador instruccional... evalúa el objetivo educativo para estudiantes de 16 años..."* | Recomendó agregar la fórmula de balance $\sum P_{gen} \ge P_{dem}$ y límite de CO2. | Se integraron métricas observables y evaluables en el GDD. |

---

## Bitácora de Control de Errores y Debugging

| Fecha | Componente | Descripción del Problema / Bug | Causa Raíz Identificada | Solución Aplicada | ¿Funcionó? |
| :---: | :---: | :--- | :--- | :--- | :---: |
| *(Ejemplo de inicio)* | Simulación | La batería se descargaba por debajo del 0% mostrando valores negativos. | Falta de control de frontera en la resta de potencia en `tick()`. | Se aplicó función `Math.max(0, currentCharge - dischargeRate)`. | Sí ✅ |

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
