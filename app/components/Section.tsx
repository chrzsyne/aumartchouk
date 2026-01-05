interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-zinc-900 dark:text-white">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}





