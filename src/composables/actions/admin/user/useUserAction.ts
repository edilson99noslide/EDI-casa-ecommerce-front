export function useUser() {
  const getUser = localStorage.getItem('user');
  const user = getUser ? JSON.parse(getUser) : null;

  return {
    user
  };
}