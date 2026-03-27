import type { StackCategory } from '@/types'

export const stack: StackCategory[] = [
  {
    label: 'backend',
    items: [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'Spring Security' },
      { name: 'JPA / Hibernate' },
      { name: 'Flyway' },
      { name: 'Node.js' },
      { name: 'TypeScript' },
      { name: 'NestJS' },
      { name: 'Express.js' },
      { name: 'Prisma ORM' },
    ],
  },
  {
    label: 'frontend',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    label: 'cloud & infra',
    items: [
      { name: 'Docker' },
      { name: 'AWS EC2' },
      { name: 'AWS S3' },
      { name: 'AWS RDS' },
      { name: 'AWS Lambda' },
      { name: 'Terraform' },
      { name: 'CI/CD (GitHub Actions, Vercel)' },
    ],
  },
  {
    label: 'mensageria & eventos',
    items: [
      { name: 'Apache Kafka' },
      { name: 'RabbitMQ' },
      { name: 'Microservices' },
      { name: 'Event-Driven Architecture' },
    ],
  },
  {
    label: 'dados & cache',
    items: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'SQL Server' },
      { name: 'MongoDB' },
      { name: 'Redis' },
    ],
  },
  {
    label: 'automação & ia',
    items: [
      { name: 'Python' },
      { name: 'Selenium' },
      { name: 'OpenCV' },
      { name: 'RAG Architecture' },
      { name: 'NLP & LLMs' },
      { name: 'Machine Learning' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    label: 'testes & metodologias',
    items: [
      { name: 'JUnit' },
      { name: 'Mockito' },
      { name: 'Vitest' },
      { name: 'TDD' },
      { name: 'PMBOK' },
      { name: 'Scrum' },
      { name: 'Kanban' },
      { name: 'SOLID' },
    ],
  },
]
