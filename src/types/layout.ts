import type { MENU_ITEM_TYPE } from '@/enums/layout'

export interface MenuItem {
  type: MENU_ITEM_TYPE
  title: string
  to?: string
  icon?: string
}
