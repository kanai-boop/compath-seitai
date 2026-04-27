import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "施術メニュー・料金 | からだ整体院 COMPATH",
  description:
    "COMPATHの施術メニューと料金一覧。姿勢矯正・骨盤矯正・小顔矯正・産後骨盤矯正・肩こりケアなど。初回限定¥3,980のお試し施術あり。東京・三軒茶屋の整体院。",
  alternates: { canonical: "https://compath-seitai.vercel.app/menu/" },
  openGraph: {
    title: "施術メニュー・料金 | からだ整体院 COMPATH",
    description: "姿勢矯正・骨盤矯正・小顔矯正・産後ケアなど。初回限定¥3,980〜。",
    url: "https://compath-seitai.vercel.app/menu/",
  },
};

const categories = [
  {
    label: "姿勢矯正",
    items: [
      { name: "全身姿勢矯正", time: "60 min", price: "¥8,800", desc: "骨格のゆがみを根本から改善。全身のバランスを整え、正しい姿勢へ導きます。" },
      { name: "肩こり・首こりケア", time: "40 min", price: "¥6,600", desc: "デスクワークによる肩・首のこりを集中ケア。血行促進と筋肉のリリースで軽快な毎日を。" },
    ],
  },
  {
    label: "産後骨盤矯正",
    items: [
      { name: "産後骨盤集中コース", time: "50 min", price: "¥7,700", desc: "産後の骨盤のゆがみを丁寧に矯正。体型の戻りをサポートし、腰痛・むくみの改善にも。", popular: true },
      { name: "産後全身リセット", time: "75 min", price: "¥9,900", desc: "骨盤矯正に加えて産後の全身のゆがみをリセット。体力の回復とボディラインの改善を目指します。" },
    ],
  },
  {
    label: "小顔矯正",
    items: [
      { name: "小顔・フェイシャル矯正", time: "45 min", price: "¥9,900", desc: "顔のゆがみ・エラのはり・むくみを改善。フェイスラインをすっきり整えます。" },
    ],
  },
  {
    label: "腰痛・慢性痛ケア",
    items: [
      { name: "腰痛集中ケア", time: "50 min", price: "¥7,150", desc: "慢性的な腰痛の原因にアプローチ。骨盤・脊椎のアライメントを整え、根本から改善を目指します。" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="max-w-[390px] mx-auto w-full flex flex-col">

        {/* Hero */}
        <section className="bg-[#1E2B22] px-6 pt-10 pb-10 flex flex-col gap-3">
          <p className="text-[10px] tracking-[0.2em] text-[#7AAA8C] font-medium">MENU & PRICE</p>
          <h1 className="text-[22px] font-bold text-white leading-snug tracking-tight">施術メニュー・料金</h1>
          <p className="text-[13px] text-[#9AB5A4] leading-relaxed">
            お身体の状態に合わせて最適なコースをご提案します
          </p>
          <div className="mt-1 self-start border border-[#C07050]/60 rounded-full px-4 py-1.5">
            <p className="text-[12px] text-[#C07050] font-semibold">初回限定 ¥3,980〜</p>
          </div>
        </section>

        {/* Menu List */}
        <section className="bg-[#F5F4F1] px-5 py-10 flex flex-col gap-10">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-[#DEDAD4]" />
                <span className="text-[10px] tracking-[0.18em] text-[#3D8A5A] font-semibold shrink-0">{cat.label}</span>
                <div className="h-px flex-1 bg-[#DEDAD4]" />
              </div>
              <div className="flex flex-col gap-3">
                {cat.items.map((item) => (
                  <div key={item.name} className="bg-white rounded-xl overflow-hidden">
                    <div className="px-5 pt-4 pb-3 flex items-start justify-between gap-3">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <p className="text-[14px] font-bold text-[#1A1918]">{item.name}</p>
                          {item.popular && (
                            <span className="text-[10px] font-semibold text-white bg-[#C07050] px-2 py-0.5 rounded-full">人気</span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#AAAAAA]">{item.time}</p>
                      </div>
                      <p className="text-[15px] font-bold text-[#3D8A5A] shrink-0">{item.price}</p>
                    </div>
                    <div className="h-px bg-[#F5F4F1]" />
                    <p className="px-5 py-3 text-[12px] text-[#666666] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Campaign */}
          <div className="bg-[#1E2B22] rounded-xl p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <p className="text-[10px] tracking-[0.2em] text-[#7AAA8C] font-medium">FIRST VISIT</p>
              <p className="text-[16px] font-bold text-white">初回限定キャンペーン</p>
            </div>
            <p className="text-[13px] text-[#9AB5A4] leading-relaxed">
              どのコースでも初回は特別価格 <span className="text-white font-bold">¥3,980</span> でお試しいただけます。まずはお気軽にご体験ください。
            </p>
            <Link href="/access/#contact" className="block text-center py-[14px] rounded-lg bg-[#3D8A5A] text-white font-bold text-[14px]">
              LINE で予約する
            </Link>
          </div>
        </section>

        <section className="bg-white px-5 py-8">
          <Link href="/access/#contact" className="block text-center py-[14px] rounded-lg border border-[#3D8A5A] text-[#3D8A5A] text-[13px] font-semibold tracking-wide">
            お問い合わせ・ご予約
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
