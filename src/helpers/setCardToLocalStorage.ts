export function setCardToLocalStorage(name: string, data: unknown) {
  localStorage.setItem(name, JSON.stringify(data));
}
