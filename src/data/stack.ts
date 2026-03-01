import type { StackCategory } from '@/types'

export const stack: StackCategory[] = [
  {
    label: 'linguagens & backend',
    items: [
      {
        name: 'Java',
        sub: [
          'Spring Boot',
          'Spring Security',
          'JPA/Hibernate',
          'Thymeleaf',
          'Flyway',
        ],
      },
      {
        name: 'Node.js/TypeScript',
        sub: ['NestJS', 'Express.js'],
      },
    ],
  },
  {
    label: 'cloud & infra',
    items: [
      { name: 'Docker' },
      { name: 'AWS', sub: ['S3', 'EC2', 'RDS', 'Lambda'] },
      { name: 'CI/CD', sub: ['GitHub Actions'] },
      { name: 'Git' },
    ],
  },
  {
    label: 'mensageria & event-driven',
    items: [
      { name: 'Apache Kafka' },
      { name: 'RabbitMQ' },
      { name: 'Arquitetura de Microsserviços' },
    ],
  },
  {
    label: 'banco de dados & armazenamento',
    items: [
      { name: 'SQL', sub: ['PostgreSQL', 'MySQL', 'SQL Server'] },
      { name: 'NoSQL', sub: ['MongoDB', 'Redis'] },
    ],
  },
  {
    label: 'frontend & web',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
    ],
  },
  {
    label: 'testes',
    items: [{ name: 'JUnit' }, { name: 'Mockito' }],
  },
]

export const softSkills: string[] = [
  'aprendizado rápido',
  'atenção a detalhes',
  'pensamento analítico',
  'comunicação clara',
  'autogestão',
  'colaboração',
  'resolução de problemas',
]
