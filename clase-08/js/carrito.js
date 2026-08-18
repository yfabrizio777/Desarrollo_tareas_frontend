export const IGV = 0.18;

const redondearPrecio = (precio) => Number(precio.toFixed(2));

export function aplicarDescuento(producto, porcentaje = 10) {
  return {
    ...producto,
    precio: redondearPrecio(producto.precio * (1 - porcentaje / 100)),
  };
}

export function buscarPorNombre(items, nombre) {
  return items.find(
    (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase(),
  );
}

export function agregarAlCarrito(carrito, producto) {
  return [...carrito, producto];
}

export function resumenCarrito(items) {
  const subtotal = redondearPrecio(
    items.reduce((total, { precio }) => total + precio, 0),
  );
  const impuesto = redondearPrecio(subtotal * IGV);

  return {
    cantidad: items.length,
    subtotal,
    igv: impuesto,
    total: redondearPrecio(subtotal + impuesto),
  };
}

export function masCaroDe(items) {
  const [primero, ...resto] = items;

  return resto.reduce(
    (masCaro, producto) =>
      producto.precio > masCaro.precio ? producto : masCaro,
    primero,
  );
}
