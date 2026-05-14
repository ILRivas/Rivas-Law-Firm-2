interface PageHeaderProps {
  title: string
  subtitle: string
  description: string
}

export function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <section className="relative bg-primary pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            {subtitle}
          </p>
          <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">{title}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            <span className="text-pretty">{description}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
