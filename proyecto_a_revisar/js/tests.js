(function () {
  const salida = document.getElementById('resultado-pruebas');
  const resultados = [];

  function test(nombre, fn) {
    try {
      fn();
      resultados.push({ nombre, ok: true, detalle: 'OK' });
    } catch (error) {
      resultados.push({ nombre, ok: false, detalle: error.message });
    }
  }

  function assert(condicion, mensaje) {
    if (!condicion) throw new Error(mensaje);
  }

  function assertEqual(actual, esperado, mensaje) {
    if (actual !== esperado) {
      throw new Error(`${mensaje}. Esperado: ${esperado}. Recibido: ${actual}`);
    }
  }

  const app = window.QAApp;

  test('La aplicación expone funciones para pruebas', function () {
    assert(app, 'window.QAApp no existe. Revisa si app.js tiene errores de carga.');
    assert(typeof app.validarDatos === 'function', 'validarDatos no está disponible.');
    assert(typeof app.clasificarParticipante === 'function', 'clasificarParticipante no está disponible.');
  });

  const datosValidos = {
    nombre: 'Ana Pérez',
    telefono: '3001234567',
    edad: 16,
    asistencia: 80,
    actividades: 3,
    taller: 'huerta'
  };

  test('Datos válidos no generan errores', function () {
    const errores = app.validarDatos(datosValidos);
    assertEqual(errores.length, 0, 'Un registro válido no debe tener errores');
  });

  test('Teléfono inválido genera error', function () {
    const errores = app.validarDatos({ ...datosValidos, telefono: '123' });
    assert(errores.some(e => e.toLowerCase().includes('teléfono')), 'Debe reportar error de teléfono');
  });

  test('Edad menor a 12 genera error', function () {
    const errores = app.validarDatos({ ...datosValidos, edad: 10 });
    assert(errores.some(e => e.toLowerCase().includes('edad')), 'Debe reportar error de edad menor');
  });

  test('Edad mayor a 80 genera error', function () {
    const errores = app.validarDatos({ ...datosValidos, edad: 81 });
    assert(errores.some(e => e.toLowerCase().includes('edad')), 'Debe reportar error de edad mayor');
  });

  test('Asistencia 80 y 3 actividades clasifica como Certificado', function () {
    const estado = app.clasificarParticipante(datosValidos);
    assertEqual(estado, 'Certificado', 'La clasificación debe respetar el límite >= 80');
  });

  test('Asistencia 60 y 2 actividades clasifica como En seguimiento', function () {
    const estado = app.clasificarParticipante({ ...datosValidos, asistencia: 60, actividades: 2 });
    assertEqual(estado, 'En seguimiento', 'La clasificación intermedia debe requerir asistencia >= 60 y actividades >= 2');
  });

  test('Asistencia 90 y 1 actividad no debe certificar', function () {
    const estado = app.clasificarParticipante({ ...datosValidos, asistencia: 90, actividades: 1 });
    assertEqual(estado, 'Requiere refuerzo', 'La certificación requiere también actividades suficientes');
  });

  test('Cupo sugerido por taller huerta es 20', function () {
    assertEqual(app.calcularCupoSugerido('huerta'), 20, 'El cupo de huerta debe ser 20');
  });

  test('Generar resumen no debe fallar con arreglo de registros', function () {
    const resumen = app.generarResumen([{ nombre: 'Ana' }, { nombre: 'Luis' }]);
    assert(resumen.includes('Ana') && resumen.includes('Luis'), 'El resumen debe incluir los nombres');
  });

  const aprobadas = resultados.filter(r => r.ok).length;
  const total = resultados.length;

  salida.innerHTML = `
    <p><strong>Pruebas aprobadas:</strong> ${aprobadas}/${total}</p>
    <ul>
      ${resultados.map(r => `<li class="${r.ok ? 'test-ok' : 'test-fail'}">${r.ok ? '✓' : '✗'} ${r.nombre}: ${r.detalle}</li>`).join('')}
    </ul>
    <pre>${JSON.stringify(resultados, null, 2)}</pre>
  `;
})();
