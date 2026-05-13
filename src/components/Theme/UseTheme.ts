import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const configAtom = atomWithStorage<string>("themeColor", "")

export function useTheme() {
  return useAtom(configAtom)
}
