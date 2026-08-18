import formatearPrecio from "./formato.js";

export function fichaProducto(producto) {
  const { nombre, precio, categoria, stock } = producto;

  return `${nombre} | ${formatearPrecio(precio)} | ${categoria} | Stock: ${stock}`;
}

export function resumenStock(items) {
  const disponibles = items.filter(({ stock }) => stock > 0);
  const hayAgotados = items.some(({ stock }) => stock === 0);

  return {
    disponibles: disponibles.map(({ nombre }) => nombre),
    hayAgotados,
  };
}
