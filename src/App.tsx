import { useEffect, useRef, useState } from "react";
import hero from "../public/images/hero.jpg";
import logo from "../public/images/logo.png";
import { LINKS, PROGRAMS, type ProgramId } from "./data";

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramId | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const program = selectedProgram ? PROGRAMS[selectedProgram] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selectedProgram || !dialog) return;

    // The native modal manages keyboard focus, Escape and focus restoration.
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProgram]);

  function closeProgram() {
    dialogRef.current?.close();
    setSelectedProgram(null);
  }

  return (
    <div className="relative min-h-screen text-cream">
      <img src={hero} alt="" className="pointer-events-none fixed inset-0 h-full w-full object-cover" />
      <div className="pointer-events-none fixed inset-0 bg-[#0c1e16]/78" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-10">
        <header className="text-center">
          <img
            src={logo}
            alt="Logo da Secretaria Municipal de Agricultura de Vilhena"
            width={128}
            height={128}
            className="mx-auto h-32 w-32 object-contain"
          />
          <p className="mt-5 text-[11px] tracking-[0.22em] text-gold uppercase">Vilhena · Rondônia</p>
          <h1 className="mt-1 font-display text-5xl leading-none">SEMAGRI</h1>
          <p className="mt-2 text-sm text-cream/80">Secretaria Municipal de Agricultura</p>
          <a
            href="https://www.instagram.com/semagrivilhena/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-lime hover:underline"
          >
            @semagrivilhena
          </a>
        </header>

        <div className="mt-8 space-y-6">
          {LINKS.map((group) => (
            <section key={group.label}>
              <h2 className="mb-2 px-1 text-[11px] tracking-[0.18em] text-gold uppercase">{group.label}</h2>
              <ul className="space-y-2">
                {group.items.map((item) => {
                  if (item.type === "program") {
                    return (
                      <li key={item.title}>
                        <button
                          type="button"
                          aria-haspopup="dialog"
                          aria-controls="program-details"
                          onClick={() => setSelectedProgram(item.programId)}
                          className="link-button flex w-full items-center justify-between gap-3 rounded-2xl bg-cream px-4 py-3 text-left text-forest shadow-md hover:bg-white"
                        >
                          <span className="block font-medium">{item.title}</span>
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5 shrink-0 text-clay">
                            <circle cx="12" cy="12" r="9" />
                            <path strokeLinecap="round" d="M12 11v6M12 7v.1" />
                          </svg>
                        </button>
                      </li>
                    );
                  }
                  const external = item.href.startsWith("http");
                  return (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="link-button flex items-center justify-between gap-3 rounded-2xl bg-cream px-4 py-3 text-forest shadow-md hover:bg-white"
                      >
                        <span className="min-w-0 text-left">
                          <span className="block font-medium">{item.title}</span>
                          {item.hint && <span className="block truncate text-xs text-soil/75">{item.hint}</span>}
                        </span>
                        <span aria-hidden className="text-lg leading-none text-clay">
                          →
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        <footer className="mt-8 text-center text-xs leading-relaxed text-cream/55">
          SEMAGRI · Vilhena, Rondônia
        </footer>
      </main>

      <dialog
        ref={dialogRef}
        id="program-details"
        aria-labelledby="program-title"
        aria-describedby="program-description"
        onClose={() => setSelectedProgram(null)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          const outside =
            event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom;
          if (outside) closeProgram();
        }}
        className="program-dialog m-auto w-[calc(100%_-_2rem)] max-w-md overflow-y-auto rounded-3xl border-0 bg-paper p-0 text-ink shadow-2xl"
      >
        {program && (
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] tracking-[0.18em] text-soil uppercase">Programas da SEMAGRI</p>
              <button
                type="button"
                onClick={closeProgram}
                aria-label="Fechar explicação do programa"
                autoFocus
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest/8 text-forest transition-colors hover:bg-forest/15"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <path strokeLinecap="round" d="m6 6 12 12M6 18 18 6" />
                </svg>
              </button>
            </div>
            <h2 id="program-title" className="mt-3 font-display text-3xl leading-tight text-forest">{program.title}</h2>
            <p className="mt-1 text-sm text-soil/75">{program.fullName}</p>

            <h3 className="mt-6 text-sm font-semibold text-forest">O que é</h3>
            <p id="program-description" className="mt-2 text-sm leading-relaxed text-soil">{program.description}</p>

            <h3 className="mt-5 text-sm font-semibold text-forest">O que faz</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-soil marker:text-leaf">
              {program.activities.map((activity) => <li key={activity}>{activity}</li>)}
            </ul>

            {program.extra && (
              <>
                <h3 className="mt-6 text-sm font-semibold text-forest">{program.extra.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soil">{program.extra.text}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-soil marker:text-leaf">
                  {program.extra.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </>
            )}
            {program.note && (
              <p className="mt-5 rounded-2xl bg-lime/45 px-4 py-3 text-sm leading-relaxed text-forest">{program.note}</p>
            )}
            <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-soil/75">
              Para mais informações, fale com a SEMAGRI pelo Instagram, por e-mail ou presencialmente.
            </p>
            <button type="button" onClick={closeProgram} className="mt-5 w-full rounded-2xl bg-forest px-4 py-3 text-sm font-medium text-cream transition-colors hover:bg-deep">
              Fechar
            </button>
          </div>
        )}
      </dialog>
    </div>
  );
}
