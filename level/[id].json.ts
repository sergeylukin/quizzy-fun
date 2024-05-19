export function getStaticPaths() {
  return [
    { params: { id: 'a.json' } }, // ✅ works => outputs '/a.json'
    { params: { id: '2' }, props: { author: 'Erika' } },
    { params: { id: '3' }, props: { author: 'Matthew' } },
  ]
}

export async function GET({ params }) {
  const id = params.id
  return new Response(JSON.stringify({ id }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
