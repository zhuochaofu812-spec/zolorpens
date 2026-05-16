import { HeroShowcase } from "@/components/HeroShowcase";
import { ProductGallery } from "@/components/ProductGallery";

const craftStats = [
  ["0.03mm", "笔夹 CNC 误差控制"],
  ["42g", "书写重心精准配比"],
  ["18K", "黑金饰环与笔尖选配"],
];

const rituals = ["航空铝胚冷锻", "七层曜石黑漆", "纳米级防指纹镀膜", "手工编号与礼盒封签"];

export default function Home() {
  return (
    <main className="bg-obsidian text-white">
      <HeroShowcase />

      <section id="工艺" className="relative overflow-hidden px-6 py-28 lg:px-10">
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-champagne/40 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-champagne/75">Craftsmanship</p>
            <h2 className="text-5xl font-semibold tracking-[-0.055em] md:text-7xl">像 Apple 一样克制，像 Montblanc 一样有分量。</h2>
            <p className="mt-7 text-lg leading-8 text-white/60">
              首页采用大留白、低饱和黑场和精准金色点缀，配合视差光晕、渐显文字、悬浮产品与玻璃拟态信息层，营造高端消费电子与奢侈书写工具的交汇质感。
            </p>
          </div>
          <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-glass backdrop-blur">
            <div className="absolute -inset-1 rounded-[2.7rem] bg-gold-sheen opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-champagne/15 bg-black/70 p-8">
              <div className="mb-14 h-6 rounded-full pen-body animate-float" />
              <div className="grid gap-4 sm:grid-cols-3">
                {craftStats.map(([value, label]) => (
                  <div key={value} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <strong className="gold-text block text-3xl">{value}</strong>
                    <span className="mt-2 block text-sm leading-6 text-white/50">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-3">
                {rituals.map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/68">
                    <span>{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-champagne shadow-[0_0_24px_rgba(215,181,109,0.9)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGallery />

      <section id="体验" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 shadow-glass md:p-14">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-champagne/75">Experience</p>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <h2 className="text-5xl font-semibold tracking-[-0.055em] md:text-7xl">每一次落笔，都像打开一件精密器物。</h2>
            <p className="text-lg leading-8 text-white/58">
              从吸附式笔帽到柔和阻尼，从无声旋入到平衡配重，Zolor 将产品展示区延伸为品牌故事、规格、材质与预约咨询的完整转化路径。
            </p>
          </div>
        </div>
      </section>

      <section id="礼赠" className="relative overflow-hidden px-6 pb-28 lg:px-10">
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-champagne/10 to-transparent" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-champagne/75">Private Appointment</p>
          <h2 className="text-5xl font-semibold tracking-[-0.055em] md:text-7xl">为签约、晋升与收藏时刻，定制黑金礼赠。</h2>
          <a href="mailto:atelier@zolorpens.com" className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-black transition hover:-translate-y-1 hover:bg-champagne">
            联系品牌顾问
          </a>
        </div>
      </section>
    </main>
  );
}
