export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        <span className="terminal-text">&gt; </span>
        {title}
        <span className="terminal-text">.</span>
      </h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
