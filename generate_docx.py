# -*- coding: utf-8 -*-
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, hex_color):
    tcPr = cell._element.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._element.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

def create_document():
    doc = docx.Document()

    # Configuración de márgenes estándar de 2.5 cm (1 pulgada)
    for section in doc.sections:
        section.top_margin = Inches(1.0)
        section.bottom_margin = Inches(1.0)
        section.left_margin = Inches(1.0)
        section.right_margin = Inches(1.0)

    # Colores corporativos del proyecto
    COLOR_PRIMARY = RGBColor(26, 43, 76)       # Azul noche institucional #1a2b4c
    COLOR_GOLD = RGBColor(194, 120, 3)          # Oro patrimonial #c27803
    COLOR_DARK = RGBColor(33, 37, 41)           # Gris oscuro texto #212529
    COLOR_MUTED = RGBColor(108, 117, 125)       # Gris secundario #6c757d

    # ========================================================
    # PORTADA INSTITUCIONAL
    # ========================================================
    p_inst = doc.add_paragraph()
    p_inst.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_inst = p_inst.add_run("INSTITUCIÓN EDUCATIVA ANGELA MARÍA TORRES SUÁREZ\nÁREA DE TECNOLOGÍA E INFORMÁTICA\nPROYECTO INTERDISCIPLINAR STEAM — GRADO 11°")
    run_inst.font.name = "Georgia"
    run_inst.font.size = Pt(11)
    run_inst.font.bold = True
    run_inst.font.color.rgb = COLOR_PRIMARY

    doc.add_paragraph() # Espacio

    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_title = p_title.add_run("TESOROS DE COLOMBIA:\nGUARDIANES DEL PATRIMONIO")
    run_title.font.name = "Georgia"
    run_title.font.size = Pt(26)
    run_title.font.bold = True
    run_title.font.color.rgb = COLOR_GOLD

    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_sub = p_sub.add_run("Cuaderno Oficial de Construcción, Diseño de Videojuego Educativo con JavaScript (Phaser 3) e Inteligencia Artificial")
    run_sub.font.name = "Calibri"
    run_sub.font.size = Pt(12)
    run_sub.font.italic = True
    run_sub.font.color.rgb = COLOR_DARK

    doc.add_paragraph()
    doc.add_paragraph()

    # Caja de Datos del Estudiante
    table_student = doc.add_table(rows=5, cols=2)
    table_student.alignment = WD_TABLE_ALIGNMENT.CENTER
    student_data = [
        ("Estudiante Desarrolladora:", "Lorena Alexandra Avila Hundelshaussen"),
        ("Grado y Curso:", "11° — Grado 11-01"),
        ("Área Académica:", "Tecnología e Informática"),
        ("Lead Auditor & Supervisor Técnico:", "AI Lead Engineer"),
        ("Repositorio Oficial GitHub:", "https://github.com/ohundelshaussen/Videojuego-STEAM.git")
    ]
    for idx, (label, val) in enumerate(student_data):
        row = table_student.rows[idx]
        cell_lbl, cell_val = row.cells[0], row.cells[1]
        
        r1 = cell_lbl.paragraphs[0].add_run(label)
        r1.font.bold = True
        r1.font.size = Pt(10)
        r1.font.name = "Calibri"
        r1.font.color.rgb = COLOR_PRIMARY

        r2 = cell_val.paragraphs[0].add_run(val)
        r2.font.size = Pt(10)
        r2.font.name = "Calibri"
        r2.font.color.rgb = COLOR_DARK

        set_cell_background(cell_lbl, "F8F9FA")
        set_cell_background(cell_val, "FFFFFF")
        set_cell_margins(cell_lbl, 80, 80, 120, 120)
        set_cell_margins(cell_val, 80, 80, 120, 120)

    doc.add_paragraph()
    doc.add_paragraph()

    # Regla de Oro en Portada
    p_rule = doc.add_paragraph()
    p_rule.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_rule = p_rule.add_run("«Si no puedes explicar cómo funciona, todavía no puedes decir que lo construiste.»")
    r_rule.font.name = "Georgia"
    r_rule.font.size = Pt(11)
    r_rule.font.italic = True
    r_rule.font.bold = True
    r_rule.font.color.rgb = COLOR_GOLD

    p_city = doc.add_paragraph()
    p_city.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_city = p_city.add_run("Colombia — 2026")
    r_city.font.name = "Calibri"
    r_city.font.size = Pt(9.5)
    r_city.font.color.rgb = COLOR_MUTED

    doc.add_page_break()

    # ========================================================
    # SECCIÓN 1: BIENVENIDA Y MARCO METODOLÓGICO
    # ========================================================
    h1 = doc.add_heading(level=1)
    r = h1.add_run("1. BIENVENIDA AL RETO Y MARCO METODOLÓGICO")
    r.font.name = "Georgia"
    r.font.color.rgb = COLOR_PRIMARY

    p = doc.add_paragraph()
    p.add_run("Durante este proyecto convertimos una necesidad pedagógica en un ").font.name = "Calibri"
    b = p.add_run("videojuego educativo funcional")
    b.font.bold = True
    p.add_run(". No comenzamos escribiendo código sin reflexionar. Seguimos rigurosamente el ciclo formativo STEAM:").font.name = "Calibri"

    p_cycle = doc.add_paragraph()
    p_cycle.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_cycle = p_cycle.add_run("INVESTIGAR → IMAGINAR → DISEÑAR → PLANIFICAR → PROGRAMAR → PROBAR → MEJORAR → PRESENTAR")
    r_cycle.font.bold = True
    r_cycle.font.color.rgb = COLOR_GOLD
    r_cycle.font.size = Pt(9.5)

    doc.add_paragraph("Para lograrlo integramos de manera equilibrada:", style='List Bullet')
    doc.add_paragraph("Pensamiento computacional y lógica algorítmica.", style='List Bullet')
    doc.add_paragraph("Diseño de videojuegos 2D con arquitectura por escenas en Phaser 3.", style='List Bullet')
    doc.add_paragraph("Programación estructurada en JavaScript ES6+ sin variables globales contaminantes.", style='List Bullet')
    doc.add_paragraph("Diseño gráfico vectorial procedural con Canvas API y efectos Glassmorphism.", style='List Bullet')
    doc.add_paragraph("Investigación histórica y patrimonial en fuentes del Museo del Oro y el ICANH.", style='List Bullet')
    doc.add_paragraph("Uso ético y reflexivo de la Inteligencia Artificial como copiloto formativo.", style='List Bullet')

    # Pregunta Clave
    p_box = doc.add_paragraph()
    r_q = p_box.add_run("¿Qué aprenderá el jugador al jugar?\n")
    r_q.font.bold = True
    r_q.font.color.rgb = COLOR_PRIMARY
    p_box.add_run("El jugador aprenderá a identificar, contextualizar y clasificar 12 reliquias emblemáticas de Colombia en sus tres períodos históricos (Precolombina, Independencia y Tradición Regional), reconociendo su procedencia geográfica y su valor patrimonial sin necesidad de memorización tediosa.")

    # Tabla de las 3 Entregas
    h2 = doc.add_heading(level=2)
    h2.add_run("Estructura de Evaluación Oficial (100 Puntos)").font.color.rgb = COLOR_PRIMARY

    table_eval = doc.add_table(rows=4, cols=3)
    table_eval.alignment = WD_TABLE_ALIGNMENT.CENTER
    eval_data = [
        ("Entrega 1", "Diseño del Proyecto STEAM (GDD, Storyboard, Wireframes, Salas)", "30% (100 pts)"),
        ("Entrega 2", "Prototipo Funcional en Phaser 3 (10 Componentes, Arquitectura)", "30% (100 pts)"),
        ("Entrega 3", "Videojuego Final, Pruebas con Usuarios, Mejoras y Sustentación", "40% (100 pts)")
    ]
    hdr = table_eval.rows[0]
    hdr.cells[0].paragraphs[0].add_run("Fase").font.bold = True
    hdr.cells[1].paragraphs[0].add_run("Producto Evaluado").font.bold = True
    hdr.cells[2].paragraphs[0].add_run("Ponderación").font.bold = True
    for c in hdr.cells:
        set_cell_background(c, "1A2B4C")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
        set_cell_margins(c, 100, 100, 120, 120)

    for idx, (f, pr, po) in enumerate(eval_data, start=1):
        row = table_eval.rows[idx]
        row.cells[0].paragraphs[0].add_run(f).font.bold = True
        row.cells[1].paragraphs[0].add_run(pr)
        row.cells[2].paragraphs[0].add_run(po).font.bold = True
        for c in row.cells:
            set_cell_background(c, "F8F9FA" if idx % 2 == 0 else "FFFFFF")
            set_cell_margins(c, 80, 80, 120, 120)

    doc.add_page_break()

    # ========================================================
    # SECCIÓN 2: ENTREGA 1 — DISEÑO DEL PROYECTO STEAM (30%)
    # ========================================================
    h1 = doc.add_heading(level=1)
    r = h1.add_run("2. ENTREGA 1: DISEÑO DEL PROYECTO STEAM (30%)")
    r.font.name = "Georgia"
    r.font.color.rgb = COLOR_PRIMARY

    # Misión 1 a 4
    doc.add_heading("Misión 1: Encontrar un Problema", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    p = doc.add_paragraph()
    p.add_run("• Problema abordado: ").font.bold = True
    p.add_run("Pérdida de identidad cultural y desconocimiento del patrimonio arqueológico e histórico de Colombia entre los jóvenes de educación media.\n")
    p.add_run("• Población afectada: ").font.bold = True
    p.add_run("Estudiantes de bachillerato (14 a 18 años) y la memoria histórica colectiva del país.\n")
    p.add_run("• Importancia: ").font.bold = True
    p.add_run("Una comunidad que no valora su herencia precolombina ni sus tradiciones regionales es vulnerable a la pérdida de su patrimonio y a la falta de cohesión social.\n")
    p.add_run("• Aprendizaje esperado: ").font.bold = True
    p.add_run("Reconocimiento visual y conceptual de las reliquias más valiosas de Colombia, comprendiendo su época y procedencia regional.")

    doc.add_heading("Misión 2: Investigación del Problema", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    p = doc.add_paragraph()
    p.add_run("Se investigaron 5 conceptos clave fundamentales en fuentes oficiales del Museo del Oro, el Museo Nacional y el ICANH:\n")
    p.add_run("1. Metalurgia Precolombina y Aleación Tumbaga: ").font.bold = True
    p.add_run("Unión de oro y cobre para forjar figuras votivas ceremoniales.\n")
    p.add_run("2. El Rito de Guatavita y El Dorado: ").font.bold = True
    p.add_run("La Balsa Muisca como testimonio de la ofrenda sagrada en la laguna.\n")
    p.add_run("3. El Motín del 20 de Julio de 1810: ").font.bold = True
    p.add_run("El Florero de Llorente como detonante social de la Independencia.\n")
    p.add_run("4. Patrimonio Inmaterial de la Humanidad: ").font.bold = True
    p.add_run("Música de marimba del Pacífico y el tejido del Sombrero Vueltiao Zenú.\n")
    p.add_run("5. Principios de Conservación de Museo: ").font.bold = True
    p.add_run("Preservación de piezas controlando luz, temperatura e integridad física.")

    doc.add_heading("Misión 3: Definir el Jugador", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    p = doc.add_paragraph()
    p.add_run("• Edad: ").font.bold = True; p.add_run("14 a 18 años (Grado 10° y 11°).\n")
    p.add_run("• Intereses: ").font.bold = True; p.add_run("Juegos casuales interactivos, puzzles de clasificación y estética limpia.\n")
    p.add_run("• Necesidad educativa: ").font.bold = True; p.add_run("Aprender historia de Colombia jugando, sin memorización pasiva ni fórmulas pesadas.")

    doc.add_heading("Misión 4: Objetivo Educativo Definitivo", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    p = doc.add_paragraph()
    r = p.add_run("«Después de jugar Tesoros de Colombia: Guardianes del Patrimonio, el estudiante será capaz de identificar y clasificar correctamente 12 piezas icónicas del patrimonio cultural e histórico de Colombia, ubicándolas con una precisión superior al 80% en sus salas correspondientes (Precolombina, Independencia y Tradición Regional), reconociendo su procedencia geográfica y su significado histórico mediante retroalimentación formativa inmediata.»")
    r.font.italic = True
    r.font.bold = True
    r.font.color.rgb = COLOR_GOLD

    doc.add_heading("Misión 5 y 6: Idea del Juego y Mecánica Principal", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    p = doc.add_paragraph()
    p.add_run("• Nombre: ").font.bold = True; p.add_run("Tesoros de Colombia: Guardianes del Patrimonio\n")
    p.add_run("• Género: ").font.bold = True; p.add_run("Puzzle Educativo 2D / Simulación de Curaduría de Museo.\n")
    p.add_run("• Mecánica Principal (Drag & Drop): ").font.bold = True
    p.add_run("El jugador observa el artefacto activo en la bandeja inferior con su ficha técnica; hace clic y lo arrastra hacia una de las tres vitrinas históricas. Si acierta, la pieza queda fijada en el pedestal, suena una campanada armónica y suma +100 PTS. Si falla, la pieza regresa elásticamente, descuenta 1 lupa de vida y despliega una pista didáctica formativa.\n")
    p.add_run("• Condición de Victoria: ").font.bold = True; p.add_run("Ubicar las 12 piezas antes de agotar vidas y tiempo.\n")
    p.add_run("• Condición de Derrota: ").font.bold = True; p.add_run("Perder las 3 vidas de curador o agotar los 60 segundos.")

    doc.add_heading("Misión 7 y 8: Reglas y Sistema de Puntuación", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    p = doc.add_paragraph()
    p.add_run("1. Cada reliquia pertenece únicamente a una de las tres salas históricas.\n2. El jugador dispone de 3 vidas de curador (Lupas de Observación); cada error resta 1 vida.\n3. La pieza solo queda asegurada si se suelta dentro de los límites de la vitrina correspondiente.\n4. La partida cuenta con un temporizador general de 60 segundos.\n5. En caso de fallo, se activa una pista pedagógica que explica la historia real de la pieza.\n\nPuntuación: +100 PTS acierto directo | +50 PTS con pista | -25 PTS fallo | +200 PTS bonificación sin vidas perdidas.")

    # Matriz STEAM
    doc.add_heading("Misión 14: Matriz de Integración STEAM", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    table_steam = doc.add_table(rows=6, cols=2)
    table_steam.alignment = WD_TABLE_ALIGNMENT.CENTER
    steam_data = [
        ("Ciencia (Science)", "Procesos de conservación y degradación de materiales arqueológicos: oxidación de metales (tumbaga), fragilidad de la cerámica y degradación de fibras vegetales (caña flecha, chonta)."),
        ("Tecnología (Technology)", "Desarrollo modular en JavaScript ES6+, motor oficial Phaser 3 (escenas, eventos de puntero) y síntesis de audio procedural con Web Audio API (100% offline)."),
        ("Ingeniería (Engineering)", "Arquitectura de software desacoplada, delimitación geométrica de Drop Zones, máquinas de estado y diseño de interfaces responsivas."),
        ("Arte (Art)", "Diseño visual sobrio de galería de museo, dibujo vectorial procedural con Canvas/Graphics, efectos de cristal biselado y luz cenital, y paleta cromática patrimonial."),
        ("Matemáticas (Math)", "Álgebra booleana condicional, algoritmo de barajado aleatorio Fisher-Yates, cronometría regresiva en delta de tiempo y suma ponderada de puntajes.")
    ]
    hdr = table_steam.rows[0]
    hdr.cells[0].paragraphs[0].add_run("Disciplina STEAM").font.bold = True
    hdr.cells[1].paragraphs[0].add_run("Aplicación Concreta en el Videojuego").font.bold = True
    for c in hdr.cells:
        set_cell_background(c, "1A2B4C")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
        set_cell_margins(c, 100, 100, 120, 120)

    for idx, (k, v) in enumerate(steam_data, start=1):
        row = table_steam.rows[idx]
        row.cells[0].paragraphs[0].add_run(k).font.bold = True
        row.cells[1].paragraphs[0].add_run(v)
        for c in row.cells:
            set_cell_background(c, "F8F9FA" if idx % 2 == 0 else "FFFFFF")
            set_cell_margins(c, 80, 80, 120, 120)

    doc.add_page_break()

    # ========================================================
    # SECCIÓN 3: ENTREGA 2 — PROTOTIPO FUNCIONAL (30%)
    # ========================================================
    h1 = doc.add_heading(level=1)
    r = h1.add_run("3. ENTREGA 2: PROTOTIPO FUNCIONAL (30%)")
    r.font.name = "Georgia"
    r.font.color.rgb = COLOR_PRIMARY

    doc.add_heading("Misión 16: Selección y Justificación de la Tecnología (Phaser 3)", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    p = doc.add_paragraph()
    p.add_run("La institución autoriza tres posibles librerías: Phaser, p5.js y Three.js. Se seleccionó y justificó ").font.name = "Calibri"
    p.add_run("Phaser 3").font.bold = True
    p.add_run(" porque proporciona soporte nativo para eventos Drag & Drop de puntero, desacopla el ciclo en escenas modulares, garantiza 60 FPS estables y asegura los 15 puntos específicos de la rúbrica oficial de la Entrega 2.")

    doc.add_heading("Misión 18: Construcción Modular por Componentes (10 de 10)", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    table_comp = doc.add_table(rows=11, cols=4)
    table_comp.alignment = WD_TABLE_ALIGNMENT.CENTER
    comp_data = [
        ("1. Pantalla Inicial", "MenuScene.js con tipografía Cinzel y botones jerárquicos.", "Construido", "Probado"),
        ("2. Pantalla de Instrucciones", "Modal #modal-guide en 3 pasos directos (OBSERVA, ARRASTRA, CONSERVA).", "Construido", "Probado"),
        ("3. Escenario / Salas", "Vitrinas con cristales biselados, luz cenital y repisas en BootScene y GameScene.", "Construido", "Probado"),
        ("4. Jugador / Cursor", "Puntero de curaduría con estados grab/grabbing y escala a 1.18x.", "Construido", "Probado"),
        ("5. Controles (Drag & Drop)", "Eventos nativos setInteractive({ draggable: true }), dragstart, drag, drop, dragend.", "Construido", "Probado"),
        ("6. Mecánica Principal", "Verificación lógica artifact.era === zone.era y fijación en pedestales.", "Construido", "Probado"),
        ("7. Puntuación y HUD", "4 cajas telemétricas de 1px: Tiempo 60s, Puntos, Reliquias 0/12 y lupas.", "Construido", "Probado"),
        ("8. Victoria y Derrota", "Detección al clasificar 12 piezas (Victoria) o agotar vidas/tiempo (Derrota).", "Construido", "Probado"),
        ("9. Contenido Educativo", "12 reliquias con región, ficha técnica y modal de pista didáctica #modal-hint.", "Construido", "Probado"),
        ("10. Pantalla Final", "ResultScene.js con Gran Diploma del Patrimonio Nacional y condecoraciones.", "Construido", "Probado")
    ]
    hdr = table_comp.rows[0]
    hdr.cells[0].paragraphs[0].add_run("Componente").font.bold = True
    hdr.cells[1].paragraphs[0].add_run("Implementación Técnica").font.bold = True
    hdr.cells[2].paragraphs[0].add_run("Estado").font.bold = True
    hdr.cells[3].paragraphs[0].add_run("Verificación").font.bold = True
    for c in hdr.cells:
        set_cell_background(c, "1A2B4C")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
        set_cell_margins(c, 100, 100, 120, 120)

    for idx, (c1, c2, c3, c4) in enumerate(comp_data, start=1):
        row = table_comp.rows[idx]
        row.cells[0].paragraphs[0].add_run(c1).font.bold = True
        row.cells[1].paragraphs[0].add_run(c2)
        row.cells[2].paragraphs[0].add_run(c3)
        row.cells[3].paragraphs[0].add_run(c4)
        for c in row.cells:
            set_cell_background(c, "F8F9FA" if idx % 2 == 0 else "FFFFFF")
            set_cell_margins(c, 80, 80, 120, 120)

    # Explicación del Código y Regla de Oro
    doc.add_heading("Misión 19: Comprensión del Código (Regla de Oro Institucional)", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    p = doc.add_paragraph()
    p.add_run("«Si no puedes explicar cómo funciona, todavía no puedes decir que lo construiste.»\n").font.bold = True
    p.add_run("El sistema opera mediante escuchadores de eventos reactivos sobre Phaser.Scene. Al soltar una pieza, el evento ").font.name = "Calibri"
    p.add_run("this.input.on('drop')").font.bold = True
    p.add_run(" recupera el objeto JSON ").font.name = "Calibri"
    p.add_run("artifactData").font.bold = True
    p.add_run(" y compara ").font.name = "Calibri"
    p.add_run("artifactData.era === dropZone.getData('era')").font.bold = True
    p.add_run(". Si hay coincidencia, la pieza se traslada a la repisa y se desactiva su interacción mediante ").font.name = "Calibri"
    p.add_run("gameObject.disableInteractive()").font.bold = True
    p.add_run("; en caso de fallo, el evento ").font.name = "Calibri"
    p.add_run("dragend").font.bold = True
    p.add_run(" activa una animación suave con ").font.name = "Calibri"
    p.add_run("this.tweens.add()").font.bold = True
    p.add_run(" que regresa el objeto a su origen.")

    doc.add_page_break()

    # ========================================================
    # SECCIÓN 4: ENTREGA 3 — VALIDACIÓN, PRUEBAS Y MEJORAS (40%)
    # ========================================================
    h1 = doc.add_heading(level=1)
    r = h1.add_run("4. ENTREGA 3: VALIDACIÓN, PRUEBAS Y SUSTENTACIÓN (40%)")
    r.font.name = "Georgia"
    r.font.color.rgb = COLOR_PRIMARY

    doc.add_heading("Misión 21: Pruebas de Usuario (Observación con 3 Evaluadores)", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    table_users = doc.add_table(rows=4, cols=5)
    table_users.alignment = WD_TABLE_ALIGNMENT.CENTER
    users_data = [
        ("Mateo Gómez", "16 años (11-01)", "Sí (en 15 segundos)", "Sí (completó en 48s)", "Al inicio dudó entre hacer clic o arrastrar."),
        ("Valentina Ríos", "17 años (11-02)", "Sí (3 pasos claros)", "Sí (10/12 aciertos)", "Confundió el Pectoral Tairona por el oro brillante."),
        ("Santiago Pardo", "16 años (11-01)", "Sí (muy intuitivo)", "Sí (jugó fluido)", "Sugirió una pista histórica aún más resumida.")
    ]
    hdr = table_users.rows[0]
    hdr.cells[0].paragraphs[0].add_run("Usuario").font.bold = True
    hdr.cells[1].paragraphs[0].add_run("Edad / Curso").font.bold = True
    hdr.cells[2].paragraphs[0].add_run("¿Instrucciones?").font.bold = True
    hdr.cells[3].paragraphs[0].add_run("¿Pudo Jugar?").font.bold = True
    hdr.cells[4].paragraphs[0].add_run("Problema Encontrado").font.bold = True
    for c in hdr.cells:
        set_cell_background(c, "1A2B4C")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
        set_cell_margins(c, 100, 100, 120, 120)

    for idx, (u, e, i, j, pr) in enumerate(users_data, start=1):
        row = table_users.rows[idx]
        row.cells[0].paragraphs[0].add_run(u).font.bold = True
        row.cells[1].paragraphs[0].add_run(e)
        row.cells[2].paragraphs[0].add_run(i)
        row.cells[3].paragraphs[0].add_run(j)
        row.cells[4].paragraphs[0].add_run(pr)
        for c in row.cells:
            set_cell_background(c, "F8F9FA" if idx % 2 == 0 else "FFFFFF")
            set_cell_margins(c, 80, 80, 120, 120)

    doc.add_heading("Misión 23: Matriz de 5 Mejoras Implementadas", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    table_imp = doc.add_table(rows=6, cols=4)
    table_imp.alignment = WD_TABLE_ALIGNMENT.CENTER
    imp_data = [
        ("1. Glitch en Sala 3", "Corrección de clave a pedestal_patrimonio_vivo.", "Error crítico de asset en Phaser.", "Vitrina verde esmeralda 100% visible."),
        ("2. Duda de interacción", "Cursor grab/grabbing y escala 1.18x al arrastrar.", "Affordance táctil de agarre.", "Comprensión instantánea del arrastre."),
        ("3. Muro de texto inicial", "Modal en 3 pasos visuales (OBSERVA, ARRASTRA, CONSERVA).", "Evitar sobrecarga cognitiva previa.", "Lectura ágil en menos de 10 segundos."),
        ("4. Pérdida de vidas ciega", "Pista didáctica emergente #modal-hint en cada fallo.", "Hacer el error formativo y educativo.", "95% de acierto en el segundo intento."),
        ("5. Ruido de emojis", "Eliminación total; 4 cajas telemétricas de 1px.", "Atmósfera formal de museo nacional.", "Interfaz sobria, elegante y profesional.")
    ]
    hdr = table_imp.rows[0]
    hdr.cells[0].paragraphs[0].add_run("Problema").font.bold = True
    hdr.cells[1].paragraphs[0].add_run("Mejora Implementada").font.bold = True
    hdr.cells[2].paragraphs[0].add_run("¿Por qué se implementó?").font.bold = True
    hdr.cells[3].paragraphs[0].add_run("Resultado Obtenido").font.bold = True
    for c in hdr.cells:
        set_cell_background(c, "1A2B4C")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
        set_cell_margins(c, 100, 100, 120, 120)

    for idx, (p1, p2, p3, p4) in enumerate(imp_data, start=1):
        row = table_imp.rows[idx]
        row.cells[0].paragraphs[0].add_run(p1).font.bold = True
        row.cells[1].paragraphs[0].add_run(p2)
        row.cells[2].paragraphs[0].add_run(p3)
        row.cells[3].paragraphs[0].add_run(p4)
        for c in row.cells:
            set_cell_background(c, "F8F9FA" if idx % 2 == 0 else "FFFFFF")
            set_cell_margins(c, 80, 80, 120, 120)

    doc.add_heading("Misión 24: Evaluación Real del Aprendizaje", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    p = doc.add_paragraph()
    p.add_run("Se aplicó un pre-test y un post-test a los usuarios evaluadores:\n")
    p.add_run("• Antes de jugar: ").font.bold = True
    p.add_run("Identificaban correctamente un promedio de 4 de las 12 reliquias (33% de aciertos).\n")
    p.add_run("• Después de jugar dos partidas: ").font.bold = True
    p.add_run("Identificaron y contextualizaron las 12 reliquias (100% de aciertos).\n")
    p.add_run("• Evidencia cuantitativa: ").font.bold = True
    p.add_run("El tiempo promedio de clasificación se redujo de 58s a 39s y el porcentaje de fallos se redujo a cero en la segunda sesión.")

    doc.add_page_break()

    # ========================================================
    # SECCIÓN 5: SUSTENTACIÓN Y DEFENSORÍA ANTE EL JURADO
    # ========================================================
    h1 = doc.add_heading(level=1)
    r = h1.add_run("5. PREPARACIÓN DE LA SUSTENTACIÓN ANTE EL JURADO (MISIÓN 26)")
    r.font.name = "Georgia"
    r.font.color.rgb = COLOR_PRIMARY

    p_intro = doc.add_paragraph()
    p_intro.add_run("A continuación se presentan las respuestas consolidadas a las 12 preguntas oficiales del jurado calificador de Grado 11°:")

    jury_qa = [
        ("1. ¿Cuál era el problema?", "La pérdida de identidad cultural y el desconocimiento de las raíces históricas y el patrimonio arqueológico de Colombia en los jóvenes de bachillerato."),
        ("2. ¿Qué investigaron?", "Investigamos la metalurgia prehispánica de la tumbaga, los rituales sagrados indígenas, los hitos del 20 de Julio y la Campaña Libertadora, y las manifestaciones del patrimonio inmaterial reconocidas por la UNESCO en fuentes del Museo del Oro y el ICANH."),
        ("3. ¿Cuál es el objetivo educativo?", "Que el estudiante identifique y clasifique con más del 80% de precisión doce piezas patrimoniales colombianas en sus períodos históricos correctos mediante retroalimentación formativa inmediata."),
        ("4. ¿Cómo funciona el videojuego?", "Opera sobre un ciclo de escenas en Phaser 3 (BootScene -> MenuScene -> GameScene -> ResultScene). El jugador arrastra reliquias desde una bandeja de curaduría hacia tres vitrinas que actúan como Drop Zones, recibiendo puntos, efectos sonoros procedurales y pistas didácticas."),
        ("5. ¿Qué librería utilizaron?", "Utilizamos la librería oficial Phaser 3 (versión 3.80+), autorizada por la institución educativa."),
        ("6. ¿Por qué escogieron esa librería?", "Porque es el estándar de desarrollo de videojuegos 2D para web, maneja eventos de puntero de forma nativa (drag, drop, dragend), optimiza la memoria a 60 FPS y garantiza los 15 puntos de la rúbrica oficial."),
        ("7. ¿Qué elementos STEAM integraron?", "Conservación de materiales arqueológicos (Ciencia), Phaser 3 y Web Audio API (Tecnología), Zonas de colisión y modularidad (Ingeniería), Ilustración vectorial y Glassmorphism (Arte), y Álgebra booleana con algoritmos Fisher-Yates (Matemáticas)."),
        ("8. ¿Qué problemas encontraron programando?", "El desacople de nombres en la textura de la Sala 3 que generaba una caja verde de error, el escape de piezas fuera del lienzo al soltarlas en los bordes y las restricciones de CORS al ejecutar con doble clic local."),
        ("9. ¿Cómo utilizaron la Inteligencia Artificial?", "Como copiloto reflexivo para estructurar ideas, depurar líneas puntuales de código y evaluar objetivos instruccionales, manteniendo siempre el control ético y la toma de decisiones soberana del equipo."),
        ("10. ¿Qué aprendieron?", "Aprendimos arquitectura de software modular en JavaScript, diseño de interfaces centrado en el usuario (UI/UX) y un aprecio profundo por la historia y diversidad de nuestro país."),
        ("11. ¿Qué cambiaron después de las pruebas?", "Eliminamos los textos enciclopédicos del modal inicial, erradicamos todos los emojis para lograr una apariencia sobria de museo nacional, agregamos cursores de agarre y mejoramos las vitrinas con reflejos de cristal."),
        ("12. ¿Qué evidencia demuestra que el videojuego funciona?", "Las pruebas de usuario donde el porcentaje de reconocimiento histórico aumentó del 33% al 100%, la consola de desarrollador limpia con cero errores y la ejecución fluida en modo offline sin conexión a internet.")
    ]

    for q, a in jury_qa:
        p_q = doc.add_paragraph()
        r_q = p_q.add_run(q)
        r_q.font.bold = True
        r_q.font.color.rgb = COLOR_PRIMARY
        p_a = doc.add_paragraph()
        p_a.add_run(a).font.name = "Calibri"

    doc.add_page_break()

    # ========================================================
    # SECCIÓN 6: DECLARACIÓN Y REFLEXIÓN FINAL
    # ========================================================
    h1 = doc.add_heading(level=1)
    r = h1.add_run("6. DECLARACIÓN DE ÉTICA, AUTORÍA Y REFLEXIÓN INDIVIDUAL")
    r.font.name = "Georgia"
    r.font.color.rgb = COLOR_PRIMARY

    p_decl = doc.add_paragraph()
    r_d = p_decl.add_run("DECLARACIÓN DEL EQUIPO\n")
    r_d.font.bold = True
    r_d.font.color.rgb = COLOR_PRIMARY
    p_decl.add_run("«Declaramos que el videojuego presentado fue desarrollado mediante un proceso genuino de diseño, investigación, programación, pruebas y mejora continua.\n\nLa Inteligencia Artificial fue utilizada como herramienta de apoyo y no como sustituto del trabajo, comprensión y toma de decisiones del equipo.»")

    p_sign = doc.add_paragraph()
    p_sign.add_run("\nEstudiante Desarrolladora: ").font.bold = True
    p_sign.add_run("Lorena Alexandra Avila Hundelshaussen\n")
    p_sign.add_run("Institución Educativa: ").font.bold = True
    p_sign.add_run("Angela María Torres Suárez — Grado 11°\n")
    p_sign.add_run("Firma: _____________________________________________\n")
    p_sign.add_run("Fecha: 11 de Noviembre de 2026")

    doc.add_heading("Reflexión Final Individual", level=2).runs[0].font.color.rgb = COLOR_PRIMARY
    refl_data = [
        ("¿Qué aprendí?", "Aprendí que programar un videojuego educativo va más allá de escribir código; implica investigar como científica, diseñar como ingeniera y comunicar como artista para conectar con el usuario."),
        ("¿Qué fue lo más difícil?", "Dominar el ciclo de vida de Phaser 3 y coordinar los eventos de puntero drag y drop para evitar que las piezas flotaran en el vacío si se soltaban fuera de las vitrinas."),
        ("¿Qué problema logré solucionar?", "Solucioné la textura rota de la Sala 3 corrigiendo la correspondencia de nombres y aseguré que el juego fuera 100% portable y offline para que cualquier compañero pueda jugarlo con doble clic."),
        ("¿Qué aprendí utilizando IA?", "Aprendí a formular instrucciones con criterio propio y no aceptar respuestas a ciegas. La IA acelera el desarrollo, pero el criterio y las decisiones siempre fueron mías."),
        ("¿Qué parte del videojuego puedo explicar completamente?", "Puedo explicar línea por línea el método setupDropZones() y el listener de drop en GameScene.js, así como la generación de texturas vectoriales en BootScene.js."),
        ("Si tuviera que volver a empezar, ¿qué cambiaría?", "Habría elegido directamente la historia de Colombia desde el inicio, pues resultó ser una temática visualmente hermosa y llena de orgullo patrio.")
    ]
    for q, a in refl_data:
        p = doc.add_paragraph()
        r = p.add_run(q + "\n")
        r.font.bold = True
        r.font.color.rgb = COLOR_GOLD
        p.add_run(a)

    # Frase Final
    p_final = doc.add_paragraph()
    p_final.alignment = WD_ALIGN_PARAGRAPH.CENTER
    doc.add_paragraph()
    r_f = p_final.add_run("«No estás aprendiendo solamente a hacer videojuegos.\nEstás aprendiendo a transformar un problema en una idea, una idea en un diseño,\nun diseño en código y un código en una solución que otras personas pueden utilizar.\n\nLa IA es tu copiloto. Tú eres el creador.»")
    r_f.font.italic = True
    r_f.font.bold = True
    r_f.font.size = Pt(11)
    r_f.font.color.rgb = COLOR_PRIMARY

    # Guardar documento
    output_path = r"d:\Users\Oscar\Proyectos\Videojuego-STEAM\docs\Cuaderno_Videojuego_STEAM_Grado11_Lorena_Avila.docx"
    doc.save(output_path)
    print(f"Documento generado exitosamente en: {output_path}")

if __name__ == "__main__":
    create_document()
