const products = [
  {
    name: "Noir Executive",
    tagline: "极夜黑钛 · 18K 金饰环",
    price: "¥3,980",
    accent: "from-white/10 to-champagne/10",
  },
  {
    name: "Aurum Studio",
    tagline: "香槟金砂 · 建筑级拉丝",
    price: "¥4,680",
    accent: "from-champagne/18 to-white/5",
  },
  {
    name: "Obsidian Reserve",
    tagline: "曜石黑漆 · 限量编号",
    price: "¥6,980",
    accent: "from-antique/20 to-black/20",
  },
];

export function ProductGallery() {
  return (
    <section id="系列" className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white lg:px-10">
      <div className="absolute inset-0 luxury-grid opacity-20" />
      <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-champagne/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-champagne/75">Collection</p>
            <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">黑金系列，以一支笔定义秩序感。</h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-white/58">
            每一款产品卡片都模拟高级橱窗的玻璃反射、金属高光与悬浮动效，适合展示旗舰、商务和限量系列。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.name}
              className={`product-card group relative min-h-[34rem] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${product.accent} p-7 shadow-glass backdrop-blur`}
            >
              <div className="absolute inset-x-8 top-8 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/36">
                <span>0{index + 1}</span>
                <span>Signature</span>
              </div>
              <div className="absolute left-1/2 top-1/2 h-7 w-[78%] -translate-x-1/2 -translate-y-1/2 rotate-[-28deg] rounded-full pen-body transition duration-700 group-hover:scale-105" />
              <div className="absolute left-[19%] top-[39%] h-16 w-16 rounded-full border border-champagne/35 bg-black/30 blur-[1px]" />
              <div className="absolute right-[18%] top-[52%] h-20 w-20 rounded-full border border-white/10 bg-champagne/10 blur-sm" />
              <div className="absolute inset-x-7 bottom-7 rounded-[1.5rem] border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
                <h3 className="text-3xl font-semibold tracking-[-0.04em]">{product.name}</h3>
                <p className="mt-2 text-sm tracking-[0.12em] text-champagne/75">{product.tagline}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-2xl font-semibold text-white">{product.price}</span>
                  <button className="rounded-full border border-champagne/35 px-5 py-2 text-xs uppercase tracking-[0.22em] text-champagne transition group-hover:bg-champagne group-hover:text-black">
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
