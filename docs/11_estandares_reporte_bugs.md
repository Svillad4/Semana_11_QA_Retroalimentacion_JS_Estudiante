# Estándares para reportar bugs

Un buen reporte de bug debe permitir que otra persona reproduzca, entender y corregir el problema.

## Estructura mínima

1. **Título claro:** describe el problema en una frase.
2. **Contexto:** página, archivo o función donde ocurre.
3. **Pasos para reproducir:** acciones exactas.
4. **Resultado esperado:** qué debería ocurrir.
5. **Resultado obtenido:** qué ocurre realmente.
6. **Evidencia:** captura, consola, mensaje de error o prueba fallida.
7. **Severidad:** impacto técnico o para el usuario.
8. **Prioridad:** orden recomendado de corrección.

## Ejemplo

| Campo | Ejemplo |
|---|---|
| Título | El formulario se recarga al enviar un registro válido. |
| Pasos | Abrir index.html, diligenciar datos válidos, presionar Registrar. |
| Esperado | El registro se agrega a la tabla sin recargar la página. |
| Obtenido | La página se recarga y se pierde la información. |
| Evidencia | Captura de consola y video corto. |
| Severidad | Alta. |
| Prioridad | P1. |

## Recomendaciones

- No mezcles varios bugs en un solo reporte.
- Usa capturas claras.
- Indica datos de prueba.
- No propongas únicamente “arreglar”; explica qué falla.
- Verifica si el bug se reproduce más de una vez.
