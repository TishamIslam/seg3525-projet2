import { useRouter } from 'next/router'

export default function Component() {
  const router = useRouter()
  const { component } = router.query

  return <p>Composant: {component}</p>
}