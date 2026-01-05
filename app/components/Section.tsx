interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-12 scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-white text-center">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}





