interface Role {
  role: string
}
interface Account {
  active: boolean
  email: string
  role: Role
}

export interface User {
  id: string
  display_name: string
  avatar_url: string | null
  account: Account
}
