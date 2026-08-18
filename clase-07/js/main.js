const productos = [
  {
    nombre: "MacBook Pro 14",
    precio: 1999.99,
    categoria: "laptops",
    stock: 5
  },
  {
    nombre: "iPhone 13 Pro",
    precio: 1099.99,
    categoria: "smartphones",
    stock: 8
  },
  {
    nombre: "iPad Mini",
    precio: 499.99,
    categoria: "tablets",
    stock: 0
  },
  {
    nombre: "AirPods Max",
    precio: 549.99,
    categoria: "audio",
    stock: 3
  },
  {
    nombre: "Apple Watch",
    precio: 399.99,
    categoria: "smartphones",
    stock: 6
  }
];

console.log("Productos");
console.table(productos);

const catalogo = productos.map(producto => producto.nombre);

console.log("Nombres de productos");
console.log(catalogo);

const ofertasEnStock = productos.filter(
  producto => producto.precio < 600 && producto.stock > 0
);

console.log("Ofertas en stock");
console.table(ofertasEnStock);

const productoMasCaro = productos.reduce(
  (masCaro, producto) =>
    producto.precio > masCaro.precio ? producto : masCaro,
  productos[0]
);

console.log("Producto más caro");
console.log(productoMasCaro);

const totalSmartphones = productos
  .filter(
    producto =>
      producto.categoria === "smartphones" && producto.stock > 0
  )
  .reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

console.log("Valor total de smartphones con stock");
console.log(totalSmartphones);

function resumenCarrito(items) {
  return {
    cantidad: items.length,
    total: items.reduce(
      (suma, producto) => suma + producto.precio,
      0
    )
  };
}

const carrito = [
  productos[1],
  productos[3],
  productos[4]
];

const resumen = resumenCarrito(carrito);

console.log("Resumen del carrito");
console.log(resumen);