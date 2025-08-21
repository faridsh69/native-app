import { useRouter } from 'expo-router'

export const useChangePath = () => {
  const router = useRouter()

  const navigate = (to: string) => {
    router.push(to)
  }

  return { navigate }
}
