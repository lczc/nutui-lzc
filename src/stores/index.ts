import { createPinia } from 'pinia'

export const store = createPinia()

export { useMemberStore } from './memberStore'
export { useRoleStore } from './roleStore'
export { useCityDataStore } from './cityDataStore'
