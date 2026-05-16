const navigation = ["工艺", "系列", "体验", "礼赠"];

export function HeroShowcase() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-obsidian text-white">
      <div className="absolute inset-0 hero-video-fallback">
        <video
          className="h-full w-full object-cover opacity-55 mix-blend-screen"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/zolor-hero-poster.svg"
          aria-label="Zolor 黑金金属笔宣传视频"
        >
          <source src="/videos/zolor-black-gold-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0,rgba(5,5,5,0.18)_35%,rgba(5,5,5,0.92)_74%)]" />
      <div className="absolute inset-0 luxury-grid opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne/10 bg-radial-gold blur-2xl animate-orb" />

      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <a href="#top" className="group flex items-center gap-3" aria-label="Zolor Pens 首页">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne/40 bg-white/5 text-sm font-semibold tracking-[0.35em] text-champagne shadow-glass">Z</span>
          <span className="text-sm font-semibold uppercase tracking-[0.42em] text-white/85 group-hover:text-champagne">Zolor</span>
        </a>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.32em] text-white/62 md:flex">
          {navigation.map((item) => (
            <a key={item} href={`#${item}`} className="transition hover:text-champagne">
              {item}
            </a>
          ))}
        </nav>
        <a href="#礼赠" className="rounded-full border border-champagne/40 px-5 py-2 text-xs uppercase tracking-[0.28em] text-champagne transition hover:bg-champagne hover:text-black">
          预约鉴赏
        </a>
      </header>

      <div id="top" className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 pb-20 pt-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="mb-6 animate-reveal text-xs font-medium uppercase tracking-[0.55em] text-champagne/80">Black Gold Signature Instrument</p>
          <h1 className="animate-reveal text-6xl font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-8xl lg:text-[9.5rem]" style={{ animationDelay: "120ms" }}>
            Metal, refined to <span className="gold-text">silence.</span>
          </h1>
          <p className="mt-8 max-w-2xl animate-reveal text-lg leading-8 text-white/68 md:text-xl" style={{ animationDelay: "240ms" }}>
            Zolor 以航空级金属、微米级黑金电镀与手工配重，打造介于科技美学与书写仪式之间的旗舰金属笔。
          </p>
          <div className="mt-10 flex animate-reveal flex-col gap-4 sm:flex-row" style={{ animationDelay: "360ms" }}>
            <a href="#系列" className="rounded-full bg-champagne px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-black shadow-gold transition hover:-translate-y-1 hover:bg-[#f1d48a]">
              探索系列
            </a>
            <a href="#工艺" className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white backdrop-blur transition hover:-translate-y-1 hover:border-champagne/60 hover:text-champagne">
              观看工艺
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/45 md:flex">
        <span className="h-px w-24 bg-gradient-to-r from-transparent to-champagne/60" />
        Scroll
        <span className="h-px w-24 bg-gradient-to-l from-transparent to-champagne/60" />
      </div>
    </section>
  );
}
