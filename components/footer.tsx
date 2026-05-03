import Link from 'next/link'

const columns = [
  {
    title: 'Institute',
    links: [
      { href: '#programs', label: 'Programs' },
      { href: '#events', label: 'Global Gatherings' },
      { href: '/blog', label: 'Journal' },
      { href: '#careers', label: 'Careers' },
    ],
  },
  {
    title: 'Members',
    links: [
      { href: '#insights', label: 'Private Dispatch' },
      { href: '#insights', label: 'Request Invitation' },
      { href: 'mailto:members@colloqate.com', label: 'members@colloqate.com' },
    ],
  },
  {
    title: 'Offices',
    links: [
      { href: '#', label: 'Miami' },
      { href: '#', label: 'Lisbon' },
      { href: '#', label: 'Cape Town' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-serif text-2xl tracking-wide">Colloqate</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A private institute for the few who refuse to waste another year.
              By invitation. By application. By referral.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="eyebrow mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1" />
        </div>

        <div className="hairline" />

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Colloqate Institute. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Member Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
