export const stack = {
  backend: ['C#', '.NET 8/9', 'ASP.NET Core', 'EF Core', 'MediatR', 'Minimal APIs', 'gRPC', 'SignalR'],
  data: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  cloud: ['GCP', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions'],
  frontend: ['React', 'TypeScript', 'Blazor'],
  ai: ['OpenAI', 'Claude', 'Gemini', 'RAG', 'Embeddings', 'Function Calling'],
} as const;

export type StackGroup = keyof typeof stack;
