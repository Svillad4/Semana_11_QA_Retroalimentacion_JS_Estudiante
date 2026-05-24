# Matriz de pruebas de regresión

Después de corregir bugs, ejecuta nuevamente estos casos para verificar que el sistema siga funcionando.

| ID prueba | Caso | Datos de entrada | Resultado esperado | Resultado obtenido | Estado | Evidencia |
|---|---|---|---|---|---|---|
| PR-001 | Carga inicial | Abrir `index.html` | La página carga sin errores críticos en consola | | | |
| PR-002 | Nombre inválido | Nombre: `Al` | El sistema muestra error de nombre | | | |
| PR-003 | Teléfono inválido | Teléfono: `123` | El sistema muestra error de teléfono | | | |
| PR-004 | Edad menor | Edad: `10` | El sistema muestra error de edad | | | |
| PR-005 | Edad mayor | Edad: `81` | El sistema muestra error de edad | | | |
| PR-006 | Asistencia inválida | Asistencia: `120` | El sistema muestra error de asistencia | | | |
| PR-007 | Registro válido certificado | Asistencia 80, actividades 3 | Estado `Certificado` | | | |
| PR-008 | Registro válido seguimiento | Asistencia 60, actividades 2 | Estado `En seguimiento` | | | |
| PR-009 | Registro que requiere refuerzo | Asistencia 40, actividades 1 | Estado `Requiere refuerzo` | | | |
| PR-010 | Pruebas automatizadas | Abrir `tests.html` | Mejoran o aprueban las pruebas | | | |

## Resultado general

- Total pruebas ejecutadas: 2
- Total aprobadas: 2
- Total fallidas:
- Observaciones:
