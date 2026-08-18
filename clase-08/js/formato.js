export default function formatearPrecio(precio) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "USD",
  }).format(precio);
}
