export const productos = [
  { nombre: "MacBook Pro 14", precio: 1999.99, categoria: "laptops", stock: 5 },
  { nombre: "iPhone 13 Pro", precio: 1099.99, categoria: "smartphones", stock: 8 },
  { nombre: "iPad Mini", precio: 499.99, categoria: "tablets", stock: 0 },
  { nombre: "AirPods Max", precio: 549.99, categoria: "audio", stock: 3 },
  { nombre: "Apple Watch", precio: 399.99, categoria: "wearables", stock: 6 },
];

export const contarPorCategoria = (items) =>
  items.reduce(
    (conteo, { categoria }) => ({
      ...conteo,
      [categoria]: (conteo[categoria] ?? 0) + 1,
    }),
    {},
  );
