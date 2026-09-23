import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { legalContent, type LegalDocument as LegalDocumentContent } from '@/content/legalContent';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type LegalDocumentProps = {
  document: 'terms' | 'privacy';
};

const LegalDocument = ({ document }: LegalDocumentProps) => {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.split('-')[0];
  const locale = language === 'en' || language === 'pt' ? language : 'es';
  const content: LegalDocumentContent = legalContent[locale][document];

  const renderParagraph = (paragraph: string) => {
    const privacyPath = '/aviso-de-privacidad';
    const parts = paragraph.split(privacyPath);

    if (parts.length === 1) return paragraph;

    return (
      <>
        {parts[0]}
        <Link to={privacyPath} className="font-medium text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary">
          {privacyPath}
        </Link>
        {parts.slice(1).join(privacyPath)}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <header className="border-b border-border bg-card/40 py-16 lg:py-20">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              {content.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-foreground lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-5 text-sm text-muted-foreground">{content.updated}</p>
          </div>
        </header>

        <article className="container mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="space-y-10">
            {content.sections.map((section) => (
              <section key={section.title} className="border-b border-border/70 pb-9 last:border-0">
                <h2 className="mb-4 text-xl font-semibold text-foreground sm:text-2xl">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mb-4 text-base leading-7 text-muted-foreground last:mb-0">
                    {renderParagraph(paragraph)}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground marker:text-primary">
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LegalDocument;