# Semana 11 - QA y retroalimentación en pares + plan de mejora

## Actividad evaluativa

**Tema:** Errores frecuentes en JavaScript; depuración sistemática; control de flujos.  
**Tipo de actividad:** Taller (Workshop) o Foro (Forum).  
**Modalidad:** Grupal o individual con coevaluación.  
**Evidencia:** Registro de bugs priorizado + correcciones aplicadas + plan de mejora.

Esta actividad corresponde al cierre práctico de la Semana 11. Después de haber trabajado conceptos, cuestionario, taller de depuración y entrega incremental, ahora se realizará una revisión de calidad del proyecto. La intención es que cada estudiante o equipo pueda **diagnosticar fallas**, **priorizarlas**, **comunicar retroalimentación técnica** y **aplicar mejoras verificables**.

La actividad se desarrolla desde **Visual Studio Code**, el navegador web y la consola del navegador. No requiere instalar servidores ni dependencias externas.

---

## Relación con la Unidad 2

La Unidad 2 se enfoca en la validación, corrección y presentación de proyectos de software. Esta actividad fortalece esa intención porque exige probar una versión funcional, reportar errores, aplicar correcciones, verificar resultados y documentar el proceso de mejora.

---

## Objetivo general

Aplicar un proceso de aseguramiento de calidad básico sobre un proyecto web con JavaScript, identificando errores frecuentes, registrando bugs con criterios técnicos, priorizando correcciones y construyendo un plan de mejora fundamentado en pruebas y retroalimentación de pares.

## Objetivos específicos

Al finalizar la actividad, el estudiante estará en capacidad de:

1. Diagnosticar errores de JavaScript usando ejecución, observación, consola y pruebas funcionales.
2. Clasificar bugs según tipo, severidad, prioridad e impacto para el usuario.
3. Explicar técnicamente errores relacionados con sintaxis, referencias, tipos de datos, eventos, condiciones, ciclos y control de flujo.
4. Aplicar correcciones sobre el código y verificar que no se generen errores nuevos.
5. Elaborar un plan de mejora con acciones concretas, responsables, prioridad y criterio de aceptación.
6. Participar en una coevaluación respetuosa, técnica y útil para mejorar el proyecto.

---

## Escenario de trabajo

El paquete incluye un proyecto web de práctica llamado:

**Verificador de participación comunitaria**

El sistema debería permitir registrar participantes de talleres comunitarios, validar sus datos, clasificarlos según asistencia y actividades completadas, y mostrar resultados en una tabla.

Sin embargo, el proyecto contiene errores intencionales de JavaScript. Tu trabajo será revisarlo como si fueras parte de un equipo de QA, registrar los bugs encontrados, corregirlos, probar nuevamente y construir un plan de mejora.

También puedes usar esta misma metodología para revisar el proyecto incremental desarrollado por tu equipo o por otro equipo de clase.

---

## Flujo recomendado de trabajo

### Fase 1. Preparación

1. Descarga este ZIP.
2. Descomprímelo en una carpeta de trabajo.
3. Abre la carpeta completa en Visual Studio Code.
4. Lee este `README.md` y el archivo `docs/01_enunciado_moodle.md`.
5. Abre `proyecto_a_revisar/index.html` en el navegador.
6. Abre la consola del navegador con `F12` o clic derecho > `Inspeccionar` > `Consola`.

### Fase 2. Diagnóstico inicial

1. Ejecuta el proyecto sin modificarlo.
2. Interactúa con el formulario.
3. Observa qué funciona y qué falla.
4. Revisa mensajes de consola.
5. Ejecuta `proyecto_a_revisar/tests.html` y revisa cuáles pruebas fallan.
6. Registra cada hallazgo en `docs/04_registro_bugs_priorizado.md`.

### Fase 3. Coevaluación en pares

1. Intercambia tu proyecto o tus hallazgos con otro estudiante/equipo.
2. Revisa el trabajo de tu par usando `docs/07_formato_coevaluacion.md`.
3. Publica o entrega retroalimentación en el foro o taller de Moodle según indique el docente.
4. Recibe retroalimentación de tus compañeros.
5. Decide qué mejoras aplicarás primero.

### Fase 4. Priorización de bugs

Clasifica los bugs según:

- **Tipo:** sintaxis, referencia, tipo de dato, lógica, evento, validación, ciclo, usabilidad.
- **Severidad:** crítica, alta, media, baja.
- **Prioridad:** P1, P2, P3, P4.
- **Impacto:** bloqueo total, funcionalidad incorrecta, dato inconsistente, problema visual, mejora menor.

### Fase 5. Corrección

1. Corrige el archivo `proyecto_a_revisar/js/app.js`.
2. Haz cambios pequeños y prueba después de cada ajuste.
3. No cambies todo al mismo tiempo.
4. Usa `console.log()` cuando necesites revisar valores.
5. Registra las correcciones aplicadas en `docs/05_correcciones_aplicadas.md`.

### Fase 6. Pruebas de regresión

1. Abre nuevamente `proyecto_a_revisar/index.html`.
2. Verifica que el formulario funcione con datos válidos e inválidos.
3. Ejecuta `proyecto_a_revisar/tests.html`.
4. Completa `docs/08_matriz_pruebas_regresion.md`.
5. Guarda capturas en la carpeta `evidencias/`.

### Fase 7. Plan de mejora

Completa `docs/06_plan_mejora.md` con:

- bugs corregidos;
- bugs pendientes;
- mejoras propuestas;
- prioridad;
- responsables;
- criterio de aceptación;
- fecha o sesión sugerida para aplicar la mejora.

### Fase 8. Entrega

Entrega en Moodle un ZIP con la carpeta completa del proyecto, incluyendo:

1. Proyecto corregido.
2. Registro de bugs priorizado.
3. Correcciones aplicadas.
4. Plan de mejora.
5. Formato de coevaluación diligenciado.
6. Matriz de pruebas de regresión.
7. Capturas de consola, pruebas y sistema funcionando.
8. Checklist de entrega completo.

---

## Archivos principales

```txt
Semana_11_QA_Retroalimentacion_JS_Estudiante/
|
├── README.md
├── index.html
|
├── proyecto_a_revisar/
|   ├── index.html
|   ├── tests.html
|   ├── css/
|   |   └── styles.css
|   └── js/
|       ├── app.js
|       └── tests.js
|
├── docs/
|   ├── 01_enunciado_moodle.md
|   ├── 02_guia_workshop_qa.md
|   ├── 03_guia_foro_moodle.md
|   ├── 04_registro_bugs_priorizado.md
|   ├── 05_correcciones_aplicadas.md
|   ├── 06_plan_mejora.md
|   ├── 07_formato_coevaluacion.md
|   ├── 08_matriz_pruebas_regresion.md
|   ├── 09_rubrica.md
|   ├── 10_checklist_entrega.md
|   ├── 11_estandares_reporte_bugs.md
|   └── 12_minuta_trabajo_pares.md
|
├── evidencias/
|   ├── README.md
|   └── plantilla_evidencias.md
|
└── entrega/
    └── instrucciones_entrega.txt
```

---

## Reglas de trabajo

- No elimines archivos de la estructura original.
- Corrige principalmente `proyecto_a_revisar/js/app.js`.
- Puedes mejorar HTML y CSS si lo justificas, pero el foco evaluativo es JavaScript.
- No entregues solo capturas; debe entregarse el proyecto funcional.
- Toda corrección debe estar documentada.
- Toda recomendación a un par debe ser respetuosa, específica y verificable.

---

## Criterios generales de evaluación

| Criterio | Peso sugerido |
|---|---:|
| Diagnóstico y registro de bugs | 25% |
| Priorización técnica de errores | 15% |
| Correcciones aplicadas y verificadas | 25% |
| Coevaluación y retroalimentación | 15% |
| Plan de mejora | 10% |
| Evidencias y organización de entrega | 10% |

---

## Resultado esperado

Al finalizar, el estudiante debe poder demostrar que el proyecto fue revisado, que los errores fueron diagnosticados con criterios técnicos, que las correcciones funcionan y que existe un plan de mejora realista para seguir fortaleciendo el producto.
