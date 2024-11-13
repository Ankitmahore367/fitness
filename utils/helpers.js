export function format_date(date) {
  return date.toLocaleDateString();
}
export function format_amount(amount) {
  return parseInt(amount).toLocaleString();
}
export function setChecked(value, currentValue) {
  if (value == currentValue) {
    return "checked";
  } else {
    return "";
  };
}