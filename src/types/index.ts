export interface Project {
  name: string
  description: string
  tags: string[]
  date: string
  repoUrl: string
  liveUrl?: string
}

export interface StackItem {
  name: string
  sub?: string[]
}

export interface StackCategory {
  label: string
  items: StackItem[]
}

export interface ContactLink {
  key: string
  value: string
  href: string
  icon: 'email' | 'linkedin' | 'github' | 'phone'
}
