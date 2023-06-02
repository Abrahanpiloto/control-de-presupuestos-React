//generador de id unico:
const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)
    return random + fecha
  }

export default generarId;

export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  
  const opciones = {
    year: "numeric",
    month: "long",
    day:"2-digit",
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  }
  return fechaNueva.toLocaleDateString("es-ES", opciones)
}