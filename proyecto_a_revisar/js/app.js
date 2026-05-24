/*
  Semana 11 - Proyecto a revisar
  Verificador de participación comunitaria

  IMPORTANTE PARA ESTUDIANTES:
  Este archivo contiene errores intencionales. El objetivo NO es borrar todo el código,
  sino diagnosticar los bugs, priorizarlos, corregirlos y comprobar que el sistema funciona.
*/

const estadoAplicacion = {
  registros: []
};

function normalizarTexto(valor) {
  return valor.trim();
}

function validarDatos(datos) {
  const errores = [];

  // Requisito: el nombre debe tener al menos 3 caracteres.
  if (datos.nombre.length < 3) {
    errores.push('El nombre debe tener al menos 3 caracteres.');
  }

  // Requisito: el teléfono debe tener exactamente 10 dígitos numéricos.
  if (datos.telefono.length !== 10 || isNaN(datos.telefono)) {
    errores.push('El teléfono debe tener exactamente 10 dígitos numéricos.');
  }

  // Requisito: la edad debe estar entre 12 y 80.
  if (Number.isNaN(datos.edad) || datos.edad < 12 || datos.edad > 80) {
    errores.push('La edad debe estar entre 12 y 80 años.');
  }

  // Requisito: la asistencia debe estar entre 0 y 100.
  if (Number.isNaN(datos.asistencia) || datos.asistencia < 0 || datos.asistencia > 100) {
    errores.push('La asistencia debe estar entre 0 y 100.');
  }

  // Requisito: actividades entre 0 y 5.
  if (Number.isNaN(datos.actividades) || datos.actividades < 0 || datos.actividades > 5) {
    errores.push('Las actividades completadas deben estar entre 0 y 5.');
  }

  if (datos.taller === '') {
    errores.push('Debe seleccionar un taller.');
  }

  return errores;
}

function clasificarParticipante(datos) {
  // Requisito esperado:
  // - Certificado: asistencia >= 80 y actividades >= 3.
  // - En seguimiento: asistencia >= 60 y actividades >= 2.
  // - Requiere refuerzo: los demás casos.
  if (datos.asistencia >= 80 && datos.actividades >= 3) {
    return 'Certificado';
  } else if (datos.asistencia >= 60 && datos.actividades >= 2) {
    return 'En seguimiento';
  } else {
    return 'Requiere refuerzo';
  }
}

function calcularCupoSugerido(taller) {
  let cupo = 0;

  switch (taller) {
    case 'huerta':
      cupo = 20;
      break;
    case 'programacion':
      cupo = 15;
      break;
    case 'emprendimiento':
      cupo = 25;
      break;
    default:
      cupo = 10;
  }

  return cupo;
}

function crearRegistro(datos) {
  const registro = {
    id: estadoAplicacion.registros.length,
    nombre: datos.nombre,
    telefono: datos.telefono,
    edad: datos.edad,
    asistencia: datos.asistencia,
    actividades: datos.actividades,
    taller: datos.taller,
    estado: clasificarParticipante(datos),
    cupoSugerido: calcularCupoSugerido(datos.taller)
  };

  estadoAplicacion.registros.push(registro);
  return registro;
}

function obtenerClaseEstado(estado) {
  if (estado === 'Certificado') return 'ok';
  if (estado === 'En seguimiento') return 'warn';
  return 'bad';
}

function agregarFila(registro) {
  const tbody = document.getElementById('tbody-registros');

  tbody.innerHTML += `
    <tr>
      <td>${registro.id}</td>
      <td>${registro.nombre}</td>
      <td>${registro.taller}</td>
      <td>${registro.asistencia}%</td>
      <td>${registro.actividades}</td>
      <td><span class="badge ${obtenerClaseEstado(registro.estado)}">${registro.estado}</span></td>
      <td>${registro.cupoSugerido}</td>
    </tr>
  `;
}

function actualizarIndicadores() {
  document.getElementById('total-registros').textContent = estadoAplicacion.registros.length;

  const certificados = estadoAplicacion.registros.filter(function (registro) {
    return registro.estado === 'Certificado';
  }).length;

  const seguimiento = estadoAplicacion.registros.filter(function (registro) {
    return registro.estado === 'En seguimiento';
  }).length;

  document.getElementById('total-certificados').textContent = certificados;
  document.getElementById('total-seguimiento').textContent = seguimiento;
}

function mostrarErrores(errores) {
  const panel = document.getElementById('mensajes');
  panel.className = 'messages error';
  panel.innerHTML = '<strong>Revisa los siguientes puntos:</strong><ul>' + errores.map(e => `<li>${e}</li>`).join('') + '</ul>';
}

function mostrarExito(registro) {
  const panel = document.getElementById('mensajes');
  panel.className = 'messages success';
  panel.textContent = `Registro creado para ${registro.nombre}. Estado: ${registro.estado}.`;
}

function leerFormulario() {
  return {
    nombre: normalizarTexto(document.getElementById('nombre').value),
    telefono: document.getElementById('telefono').value,
    edad: Number(document.getElementById('edad').value),
    asistencia: Number(document.getElementById('asistencia').value),
    actividades: Number(document.getElementById('actividades').value),
    taller: document.getElementById('taller').value
  };
}

function manejarEnvio(evento) {
  evento.preventDefault();
  const datos = leerFormulario();
  const errores = validarDatos(datos);

  if (errores.length === 0) {
    const registro = crearRegistro(datos);
    agregarFila(registro);
    actualizarIndicadores();
    mostrarExito(registro);
  } else {
    mostrarErrores(errores);
  }
}

function limpiarFormulario() {
  document.getElementById('form-registro').reset();
  document.getElementById('mensajes').className = 'messages';
  document.getElementById('mensajes').textContent = '';
}

function generarResumen(registros) {
  const nombres = [];

  for (let i = 0; i < registros.length; i++) {
    nombres.push(registros[i].nombre);
  }

  return `Participantes: ${nombres.join(', ')}`;
}

// Se exponen funciones para pruebas.
window.QAApp = {
  estadoAplicacion,
  normalizarTexto,
  validarDatos,
  clasificarParticipante,
  calcularCupoSugerido,
  crearRegistro,
  generarResumen
};

// Conexión con la interfaz.
document.getElementById('form-registro').addEventListener('submit', manejarEnvio);
document.getElementById('btn-limpiar').addEventListener('click', limpiarFormulario);
