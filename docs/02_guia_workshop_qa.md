# Guía del taller QA

## Propósito

Aplicar un proceso básico de QA sobre un proyecto web con JavaScript, trabajando como revisores técnicos y desarrolladores responsables de corrección.

## Roles sugeridos

Si trabajan en parejas o equipos, distribuyan los roles:

| Rol | Responsabilidad |
|---|---|
| Tester funcional | Ejecuta el sistema y verifica comportamiento esperado. |
| Revisor de consola | Observa errores, advertencias y trazas con `console.log()`. |
| Documentador | Registra bugs, evidencia y pasos para reproducir. |
| Desarrollador corrector | Aplica ajustes en el código y ejecuta pruebas de regresión. |

En equipos pequeños, una persona puede asumir más de un rol.

## Ruta técnica

### 1. Exploración inicial

Prueba el formulario con casos válidos e inválidos:

- nombre vacío;
- nombre de menos de 3 caracteres;
- teléfono incompleto;
- edad menor a 12;
- edad mayor a 80;
- asistencia menor a 0 o mayor a 100;
- actividades fuera de rango;
- taller no seleccionado;
- datos completamente válidos.

### 2. Registro de bugs

Cada bug debe tener:

- ID único;
- título claro;
- tipo de error;
- pasos para reproducir;
- resultado esperado;
- resultado obtenido;
- evidencia;
- severidad;
- prioridad;
- estado.

### 3. Priorización

Sugerencia de prioridad:

| Prioridad | Significado |
|---|---|
| P1 | Bloquea la ejecución o impide usar el sistema. |
| P2 | La funcionalidad principal trabaja de forma incorrecta. |
| P3 | Error parcial, de cálculo, clasificación o visualización. |
| P4 | Mejora menor o ajuste de usabilidad. |

### 4. Corrección

Corrige primero los bugs P1, luego P2, P3 y P4.

### 5. Pruebas de regresión

Después de corregir, prueba que:

- el sistema no tenga errores nuevos en consola;
- los casos válidos se registren;
- los casos inválidos sean rechazados;
- la tabla se actualice correctamente;
- los indicadores sean coherentes;
- `tests.html` muestre mejores resultados.
