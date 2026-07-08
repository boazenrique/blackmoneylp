import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, ChevronLeft, ChevronRight, ArrowRight, Crown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Comunidade Black Money" },
      { name: "description", content: "A Comunidade que separa os gurus dos players de verdade." },
      { property: "og:title", content: "Comunidade Black Money" },
      { property: "og:description", content: "A Comunidade que separa os gurus dos players de verdade." },
    ],
  }),
  component: Index,
});

const journey = [
  { n: "I", t: "Mineração e Espionagem", d: "Ferramentas ocultas, hacks de espionagens, encontrando melhores ofertas" },
  { n: "II", t: "Criação de Funis com IA", d: "Funis com Claude Code, v0, lovable, e outras IA" },
  { n: "III", t: "Ferramentas Ocultas", d: "Dominios Grátis, Clonagem de Funis, Rateios" },
  { n: "IV", t: "Facebook ads na Raça", d: "Estruturas de campanhas, bid cap, escala baiana, triplo 1" },
  { n: "V", t: "Ambiência e networking", d: "Call's toda semana, Networking com Players, Eventos" },
  { n: "VI", t: "Escala 6 dígitos Mês", d: "Negócios, escala de 6 dígitos por mês" },
];

const subjects = Array.from({ length: 21 }, (_, i) => i + 1);

const notFor = [
  "Pra quem quer ganhar dinheiro rápido e fácil",
  "Pra quem quer só fazer um caixa rápido",
  "Pra quem acha que Low Ticket não dá resultados",
  "Pra quem tem preguiça de aprender e executar",
  "Pra quem acha que existe ferramentas milagrosas que vai fazer tudo",
  "Pra quem quer vender no automático sem fazer nada",
  "Pra quem acha que vai ficar rico do dia pra noite",
];

const isFor = [
  "Pra quem tem sede de resultado e quer mudar o jogo no digital",
  "Pra quem não tem preguiça de aprender e executar",
  "Pra quem quer vender todos os dias com consitência sem atalhos milagrosos",
  "Pra quem quer dominar IA e sair na frente da concorrência",
  "Pra quem já vende no digital, mas quer escalar sua operação para 6D/mês",
  "Pra quem busca networking e quer estar próximo dos maiores players do mercado",
  "Pra quem quer realmente quer faturar +de 100mil/mês com Low Ticket",
];

const testimonials = [8, 7, 6, 5, 4, 3, 2, 1];

const pandaVideos = [
  "c86edde1-7cd5-4628-a19d-8acf783ce7e3",
  "de6314c8-a6a3-4a81-9312-5da0191e9bf2",
  "acc51b7f-2c27-4137-9277-e01eb42d39da",
];

const experts = [
  { name: "Lona", img: "Lona" },
  { name: "André Victor", img: "André Victor" },
  { name: "Henrique Geiss", img: "Henrique Geiss" },
  { name: "Kaua Freitas", img: "Kaua Freitas" },
  { name: "João Lucas", img: "joaolucas" },
  { name: "Yuri Barbosa", img: "Yuri Barbosa" },
  { name: "Erick Bird", img: "Erick Bird" },
  { name: "Fernando Brasão", img: "Fernando Brasão" },
  { name: "Utmify", img: "utmify" },
];

const faqs = [
  { q: "Para quem é a Comunidade Black Money?", a: "Para quem deseja sair da mediocridade e construir uma operação de sucesso no digital." },
  { q: "Quanto tempo dura o acesso?", a: "O Acesso é vitalício. Você terá acesso a todas as atualizações e novos módulos para sempre." },
  { q: "Preciso de experiência prévia?", a: "Não. Na Aréa de membros tem módulos do básico até o avançado para você seguir no seu ritmo." },
  { q: "Qual o valor do investimento?", a: "O valor é apresentado na sessão de inscrição, para garantir que apenas os comprometidos avancem." },
];

function Index() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Garante que a página sempre inicia no topo (Hero), sem restauração de scroll
      window.history.scrollRestoration = "manual";
      window.scrollTo({ top: 0, behavior: "instant" });

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // fromTo com destino explícito: gsap.from captura o valor final do DOM e,
        // com o double-mount do React, o botão (atrasado pelo stagger) lia opacity 0
        gsap.fromTo(
          "[data-hero] > *",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.18, ease: "power3.out" },
        );

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.set(el, { opacity: 0, y: 40 });
          ScrollTrigger.create({
            trigger: el,
            start: "clamp(top 85%)",
            once: true,
            onEnter: () =>
              gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: "power3.out", overwrite: "auto" }),
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
          gsap.set(group.children, { opacity: 0, y: 50 });
          ScrollTrigger.create({
            trigger: group,
            start: "clamp(top 85%)",
            once: true,
            onEnter: () =>
              gsap.to(group.children, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out",
                overwrite: "auto",
              }),
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-slide]").forEach((el) => {
          gsap.set(el, { opacity: 0, x: el.dataset.slide === "right" ? 70 : -70 });
          ScrollTrigger.create({
            trigger: el,
            start: "clamp(top 82%)",
            once: true,
            onEnter: () =>
              gsap.to(el, { opacity: 1, x: 0, duration: 1.1, ease: "power3.out", overwrite: "auto" }),
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.dataset.speed ?? "0.15");
          gsap.fromTo(
            el,
            { yPercent: speed * 100 },
            {
              yPercent: -speed * 100,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
                scrub: true,
              },
            },
          );
        });

        const nav = root.current?.querySelector("header");
        if (nav) {
          const showNav = gsap
            .from(nav, { yPercent: -100, paused: true, duration: 0.35, ease: "power2.out" })
            .progress(1);
          ScrollTrigger.create({
            start: "top -80",
            end: "max",
            onUpdate: (self) => {
              if (self.direction === -1) showNav.play();
              else showNav.reverse();
            },
          });
        }
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Journey />
      <Subjects />
      <Pillars />
      <Testimonials />
      <Founders />
      <Admission />
      <Experts />
      <Faq />
      <Footer />
    </div>
  );
}

function scrollToOferta(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Black Money" className="h-8 w-auto" />
          <span className="text-xs tracking-[0.3em] text-gold-gradient">COMUNIDADE<br></br> BLACK MONEY</span>
        </div>
        <a
          href="#oferta"
          onClick={scrollToOferta}
          className="text-[10px] tracking-[0.25em] px-4 py-2 border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition-all"
        >
          ENTRAR
        </a>
      </div>
    </header>
  );
}

function HeroVideo() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://script-prod.b-cdn.net/V0.700/hostvsl-player.js"]')) {
      const script = document.createElement("script");
      script.src = "https://script-prod.b-cdn.net/V0.700/hostvsl-player.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl mb-10">
      <div
        className="border border-gold/30 bg-card/40 overflow-hidden shadow-[0_10px_60px_-15px_oklch(0.78_0.13_82/0.4)] [&_hostvsl-player]:block [&_hostvsl-player]:w-full"
        dangerouslySetInnerHTML={{
          __html:
            '<hostvsl-player id="vid-5f1ec05b-08d0-4629-acd1-119af9d65023" data-video="https://prod-hostvsl.b-cdn.net/c9c47c1c-97f0-4a3e-9412-13a2040e173a/5f1ec05b-08d0-4629-acd1-119af9d65023/videoInformations.js?VIDEO_ORIGIN=ORIGINAL"></hostvsl-player>',
        }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6">
      <div data-hero className="mx-auto max-w-5xl text-center">
        <h1 className="text-3xl md:text-6xl lg:text-6xl leading-[1.05] mb-10">
          Construa uma operação de
          <span className="text-gold-gradient"> Low Ticket com IA</span> <br />
          que fatura múltiplos 6 dígitos por mês sem aparecer<br />
        </h1>

        <HeroVideo />

        <a
          href="#oferta"
          onClick={scrollToOferta}
          className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-primary-foreground text-xs tracking-[0.3em] shadow-[0_10px_40px_-10px_oklch(0.78_0.13_82/0.5)] hover:shadow-[0_15px_50px_-10px_oklch(0.78_0.13_82/0.7)] transition-all"
        >
          QUERO ENTRAR NA BLACK MONEY
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="relative py-24 px-6 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl text-gold-gradient mb-3">O ambiente certo pra quem escala <br></br> de verdade no digital</h2>
          <p className="text-sm text-muted-foreground tracking-wider">Tudo que você procura reunido em um só lugar</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-[8%] right-[8%] divider-gold" />
          <div data-reveal-group className="grid grid-cols-2 md:grid-cols-6 gap-8 relative">
            {journey.map((s) => (
              <div key={s.n} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 rotate-45 border-gold-gradient flex items-center justify-center bg-card">
                  <span className="-rotate-45 text-gold text-sm tracking-widest">{s.n}</span>
                </div>
                <div className="border border-border/60 bg-card/60 backdrop-blur p-5 w-full min-h-32">
                  <h3 className="text-xs text-gold mb-2 tracking-wider">{s.t}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Subjects() {
  const row1 = subjects.slice(0, 11);
  const row2 = subjects.slice(11);

  return (
    <section className="py-24 border-t border-border/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gold-gradient mb-3">
            +12 Módulos e mais de 15 Bônus
          </h2>
          <p className="text-sm text-muted-foreground tracking-wider">Conteúdo do Básico até o Avançado pra você faturar de verdade</p>
        </div>
      </div>

      <div className="relative space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max gap-4 animate-marquee-left">
          {[...row1, ...row1].map((n, i) => (
            <div
              key={`r1-${n}-${i}`}
              className="w-32 sm:w-40 md:w-48 aspect-[3/4] shrink-0 border border-gold/20 bg-card/40 overflow-hidden"
            >
              <img src={`/images/${n}.png`} alt={`Módulo ${n}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="flex w-max gap-4 animate-marquee-right">
          {[...row2, ...row2].map((n, i) => (
            <div
              key={`r2-${n}-${i}`}
              className="w-32 sm:w-40 md:w-48 aspect-[3/4] shrink-0 border border-gold/20 bg-card/40 overflow-hidden"
            >
              <img src={`/images/${n}.png`} alt={`Módulo ${n}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="py-24 px-6 border-t border-border/40">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="text-center mb-16">
          <p className="text-[10px] tracking-[0.5em] text-gold mb-4">A verdade liberta</p>
          <h2 className="text-3xl md:text-5xl text-gold-gradient">Tenha resultados sem atalhos milagrosos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div data-slide="left" className="border border-destructive/30 bg-card/60 backdrop-blur p-8">
            <h3 className="text-lg text-destructive mb-6 tracking-wider text-center">Pra quem não é a Black Money</h3>
            <ul className="space-y-4">
              {notFor.map((item) => (
                <li key={item} className="flex gap-3 items-start text-xs text-muted-foreground leading-relaxed font-medium">
                  <span className="text-destructive shrink-0">❌</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-slide="right" className="border border-gold/30 bg-card/60 backdrop-blur p-8">
            <h3 className="text-lg text-gold mb-6 tracking-wider text-center">Pra quem é a Black Money</h3>
            <ul className="space-y-4">
              {isFor.map((item) => (
                <li key={item} className="flex gap-3 items-start text-xs text-muted-foreground leading-relaxed font-medium">
                  <span className="text-gold shrink-0">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PandaVideo({ id }: { id: string }) {
  const playerId = `panda-${id}`;

  useEffect(() => {
    if (!document.querySelector('script[src="https://player.pandavideo.com.br/api.v2.js"]')) {
      const script = document.createElement("script");
      script.src = "https://player.pandavideo.com.br/api.v2.js";
      script.async = true;
      document.head.appendChild(script);
    }

    const w = window as any;
    w.pandascripttag = w.pandascripttag || [];
    w.pandascripttag.push(() => {
      const p = new w.PandaPlayer(playerId, {
        onReady() {
          p.loadWindowScreen({ panda_id_player: playerId });
        },
      });
    });
  }, [playerId]);

  return (
    <div className="relative w-full border border-gold/20 overflow-hidden" style={{ paddingTop: "177.7777777777777%" }}>
      <iframe
        id={playerId}
        src={`https://player-vz-796cc82c-715.tv.pandavideo.com.br/embed/?v=${id}&iosFakeFullscreen=true`}
        style={{ border: "none", position: "absolute", top: 0, left: 0 }}
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
        allowFullScreen
        loading="lazy"
        width="100%"
        height="100%"
      />
    </div>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="py-24 px-6 border-t border-border/40">
      <div className="mx-auto max-w-3xl">
        <div data-reveal className="text-center mb-16">
          <p className="text-[10px] tracking-[0.5em] text-gold mb-4">Quem faz parte tem resultados</p>
          <h2 className="text-3xl md:text-5xl text-gold-gradient">Veja o depoimento<br></br> dos membros</h2>
        </div>

        <div data-reveal data-parallax data-speed="0.06" className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="shrink-0 w-10 h-10 border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition-all flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="w-full max-w-xs aspect-[9/19] border border-gold/30 bg-card/40 overflow-hidden">
            <img
              key={testimonials[index]}
              src={`/images/PS${String(testimonials[index]).padStart(2, "0")}.png`}
              alt={`Depoimento ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="shrink-0 w-10 h-10 border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition-all flex items-center justify-center"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((n, i) => (
            <button
              key={n}
              onClick={() => setIndex(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-gold" : "w-1.5 bg-gold/30"}`}
            />
          ))}
        </div>

        <div data-reveal-group className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {pandaVideos.map((id) => (
            <PandaVideo key={id} id={id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Founders() {
  return (
    <section className="py-24 px-6 border-t border-border/40">
      <div className="mx-auto max-w-4xl text-center">
        <div className="divider-gold w-24 mx-auto mb-8" />
        <h2 data-reveal className="text-3xl md:text-5xl text-gold-gradient mb-16">Prazer, meu nome é Boaz Enrique</h2>

        <div data-reveal data-parallax data-speed="0.1" className="max-w-sm mx-auto mb-12">
          <img src="/images/SDASD.png" alt="Fundador" className="w-full h-auto" />
        </div>

        <div className="divider-gold w-24 mx-auto mb-8" />

        <div data-reveal-group className="space-y-5 text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium text-center">
          <p>
            Depois de mais de 6 anos no mercado digital e mais de R$1 milhão de lucro gerado apenas em 2025,
            eu cheguei a uma conclusão simples:
          </p>
          <p>Quem domina oferta e retenção domina o mercado.</p>
          <p>
            Enquanto a maioria continua presa procurando o próximo criativo vencedor, eu descobri que as
            maiores operações Low Ticket são construídas com ofertas fortes, e Funis criados com IA.
          </p>
          <p>
            Foi exatamente assim que construí operações de Low Ticket que faturam +de 6 dígitos por mês sem
            precisar aparecer.
          </p>
          <p>
            E para te mostrar, na prática, tudo o que realmente funciona no mercado digital, eu criei a
            Comunidade Black Money.
          </p>
          <p>
            Aqui você terá acesso às mesmas estratégias, funis, agentes de IA, visão de mercado, clareza com
            tráfego e processos que utilizo diariamente para criar produtos e ofertas que vendem todos os dias.
          </p>
          <p>
            Sem teoria. Sem achismo. Apenas o que realmente funciona para construir uma operação lucrativa e
            escalável no digital.
          </p>
        </div>
      </div>
    </section>
  );
}

function Admission() {
  return (
    <section id="oferta" className="scroll-mt-16 py-24 px-6 border-t border-border/40">
      <div className="mx-auto max-w-3xl text-center">
        <div data-reveal>
          <p className="text-[10px] tracking-[0.5em] text-gold mb-4">INSCREVA-SE</p>
          <h2 className="text-3xl md:text-5xl text-gold-gradient mb-3">COMUNIDADE BLACK MONEY</h2>
          <p className="text-sm text-muted-foreground tracking-wider mb-16">A maior comunidade de Low Ticket da América Latina</p>
        </div>

        <div data-reveal data-parallax data-speed="0.04" className="mx-auto max-w-sm border-gold-gradient p-10 bg-card/40 backdrop-blur">
          <h3 className="text-lg text-gold mb-6 tracking-wide">
            Veja tudo que você terá acesso
          </h3>
          <ul data-reveal-group className="text-left text-xs text-muted-foreground space-y-3 mb-8 font-medium">
            {[
              "Mais de 12 módulos de contéudo",
              "Mais de 15 Bônus Exclusivos",
              "Grupo Exclusivo de Networking no Discord",
              "Calls semanais com players e com convidados especiais",
              "Acesso a ferramentas de IA para criação de funis e ofertas",
              "Mineração de ofertas e espionagem avançada",
              "Ofertas Validadas toda semana para você vender todos os dias",
              "Suporte 24/7 para tirar dúvidas e acelerar resultados",
            ].map((i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-gold mt-0.5">◆</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <div data-reveal className="border border-gold/40 bg-background/40 p-6">
            <p className="text-xs text-muted-foreground line-through mb-1">de R$1.997,90</p>
            <p className="text-xs text-destructive tracking-wider mb-3">por apenas...</p>
            <p className="text-3xl md:text-4xl text-gold-gradient mb-2">12x de R$29,82</p>
            <p className="text-xs text-muted-foreground tracking-wider mb-6">ou R$297,00 à vista</p>

            <button className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-primary-foreground text-xs tracking-[0.3em] shadow-[0_10px_40px_-10px_oklch(0.78_0.13_82/0.5)] hover:shadow-[0_15px_50px_-10px_oklch(0.78_0.13_82/0.7)] transition-all">
              QUERO MEU ACESSO AGORA
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <p className="text-[10px] tracking-[0.3em] text-muted-foreground mt-10">
          AS VAGAS SÃO LIMITADAS PARA PRESERVAR O PADRÃO DE EXCELÊNCIA
        </p>
      </div>
    </section>
  );
}

function Experts() {
  return (
    <section className="py-24 px-6 border-t border-border/40">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-gold-gradient">
            Você estará com os maiores, vai mesmo ficar de fora?
          </h2>
        </div>

        <div data-reveal-group className="flex flex-wrap justify-center gap-x-8 gap-y-10">
          {experts.map((e) => (
            <div key={e.name} className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-gold overflow-hidden shadow-[0_0_25px_-5px_oklch(0.78_0.13_82/0.4)]">
                <img
                  src={`/images/${e.img}.png`}
                  alt={e.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs tracking-wider text-foreground text-center">{e.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 px-6 border-t border-border/40">
      <div className="mx-auto max-w-3xl">
        <div data-reveal className="text-center mb-16">
          <p className="text-[10px] tracking-[0.5em] text-gold mb-4">PERGUNTAS FREQUENTES</p>
          <h2 className="text-3xl md:text-5xl text-gold-gradient">Dúvidas Comuns</h2>
        </div>

        <div data-reveal-group className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gold/25 bg-card/40 hover:bg-card/60 transition-all">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-sm text-foreground tracking-wide">{f.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-gold shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-xs text-muted-foreground leading-relaxed font-medium">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/40">
      <div data-reveal className="mx-auto max-w-7xl text-center">
        <div className="flex justify-center mb-4">
        </div>
        <p className="text-[10px] tracking-[0.4em] text-gold-gradient mb-3">COMUNIDADE BLACK MONEY</p>
        <p className="text-[10px] tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} — TODOS OS DIREITOS RESERVADOS
        </p>
      </div>
    </footer>
  );
}
