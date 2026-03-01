import type { Project } from '@/types'

export const projects: Project[] = [
  {
    name: 'SmartFinance',
    description:
      'API REST para controle de gastos com análise de comportamento financeiro, permitindo registro e categorização de transações, acompanhamento de despesas e geração de insights sobre padrões de consumo. Conta com autenticação segura, versionamento de banco de dados, documentação API, testes automatizados e suporte à execução em ambientes isolados para facilitar desenvolvimento e deploy.',
    tags: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'JPA/Hibernate',
      'Docker',
      'PostgreSQL',
      'Flyway',
      'OpenAPI',
      'CI',
    ],
    date: 'mar 2026',
    repoUrl: 'https://github.com/ccaueg/smartfinance',
  },
  {
    name: 'Encurtador de URL',
    description:
      'API REST para encurtamento de URLs com geração automática de QR Codes. Backend estruturado com JPA/Hibernate e PostgreSQL, armazenamento de arquivos no AWS S3 e separação clara entre domínio e infraestrutura. Organizado para facilitar execução local e deploy em produção.',
    tags: ['Java', 'Spring Boot', 'JPA/Hibernate', 'PostgreSQL', 'AWS S3'],
    date: 'fev 2026',
    repoUrl: 'https://github.com/ccaueg/encurtador-url',
  },
  {
    name: 'Sportize',
    description:
      'API escalável para gerenciamento de múltiplos eventos esportivos simultâneos, com controle de participantes, fases e autenticação segura via JWT. Regras de negócio completamente isoladas da infraestrutura.',
    tags: [
      'TypeScript',
      'Node.js',
      'NestJS',
      'JWT',
      'Prisma ORM',
      'Docker',
      'PostgreSQL',
    ],
    date: 'out 2024 – jun 2025',
    repoUrl: 'https://github.com/ccaueg/sportize-backend',
  },
]
