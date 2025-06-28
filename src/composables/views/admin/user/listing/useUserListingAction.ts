export default function useUserListingAction() {
  const headers = ['nome', 'email'];

  const rows = [
    {
      name: 'nome',
      email: 'email@example.com'
    }
  ];

  return {
    headers,
    rows
  };
}