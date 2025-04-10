export function formatPrice(value) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    maximumFractionDigits: 3,
    currency: "USD",
  }).format(value);
}
