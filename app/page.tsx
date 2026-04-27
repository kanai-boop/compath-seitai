import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "からだ整体院 COMPATH（コンパス）｜三軒茶屋の美容整体・姿勢矯正",
  description:
    "東京・三軒茶屋の整体院COMPATH。肩こり・腰痛・姿勢矯正・骨盤矯正・産後ケアに対応。国家資格保有の女性施術者による完全予約制の美容整体院。三軒茶屋駅徒歩3分。初回¥3,980〜。",
  alternates: { canonical: "https://compath-seitai.vercel.app/" },
  openGraph: {
    title: "からだ整体院 COMPATH（コンパス）｜三軒茶屋の美容整体・姿勢矯正",
    description: "肩こり・腰痛・姿勢矯正・産後ケアに対応。三軒茶屋駅徒歩3分・完全予約制・初回¥3,980〜。",
    url: "https://compath-seitai.vercel.app/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "どんな症状に対応していますか？", acceptedAnswer: { "@type": "Answer", text: "肩こり・腰痛・姿勢の乱れ・骨盤のゆがみ・産後の体型崩れ・小顔矯正など幅広くご対応しています。" } },
    { "@type": "Question", name: "初めてでも大丈夫ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、もちろんです。初回はカウンセリングから丁寧に行いますのでご安心ください。" } },
    { "@type": "Question", name: "施術は痛くないですか？", acceptedAnswer: { "@type": "Answer", text: "痛みのない優しい施術を心がけています。ご要望に応じて力加減を調整しますのでお気軽にお申し付けください。" } },
    { "@type": "Question", name: "何回くらいで改善しますか？", acceptedAnswer: { "@type": "Answer", text: "症状やお身体の状態によって異なりますが、目安として3〜5回の施術で変化を実感される方が多いです。" } },
    { "@type": "Question", name: "予約方法を教えてください", acceptedAnswer: { "@type": "Answer", text: "LINEまたはお問い合わせフォームからご予約いただけます。お気軽にご連絡ください。" } },
    { "@type": "Question", name: "駐車場はありますか？", acceptedAnswer: { "@type": "Answer", text: "専用駐車場はございません。近隣のコインパーキングをご利用ください。三軒茶屋駅から徒歩3分のためお電車でのご来院もおすすめです。" } },
    { "@type": "Question", name: "保険は使えますか？", acceptedAnswer: { "@type": "Answer", text: "当院は自由診療となります。健康保険はご利用いただけませんが、初回限定の特別価格（¥3,980）をご用意しております。" } },
    { "@type": "Question", name: "産後いつから通えますか？", acceptedAnswer: { "@type": "Answer", text: "産後6〜8週間を目安にご来院いただけます。産後の状態には個人差がありますので、まずはご相談ください。" } },
  ],
};

const worries = [
  { icon: "💆", text: "肩・首のこりがひどく、毎日つらい" },
  { icon: "🤰", text: "産後から骨盤のゆがみや体型が気になる" },
  { icon: "🪑", text: "猫背・反り腰など姿勢が悪いと言われる" },
  { icon: "🔧", text: "腰痛で長時間立ったり座ったりがつらい" },
];

const features = [
  { icon: "🦴", title: "骨格から整える根本改善", desc: "表面的な症状だけでなく、骨格・筋肉・生活習慣までアプローチ。再発しない身体づくりを目指します。" },
  { icon: "📜", title: "国家資格保有の施術者", desc: "柔道整復師の国家資格を持つ施術者が担当。解剖学に基づいた安全で効果的な施術を提供します。" },
  { icon: "📅", title: "完全予約制・丁寧な施術", desc: "他のお客様を気にせず施術に集中できる完全予約制。カウンセリングから施術後のアドバイスまで丁寧に対応。" },
];

const testimonials = [
  { name: "M.S さん", meta: "32歳・産後ケア", text: "産後3ヶ月から通い始め、骨盤の歪みが少しずつ改善されています。毎回丁寧にカウンセリングをしてもらえるので安心して施術を受けられます。", color: "#D89575" },
  { name: "K.T さん", meta: "38歳・肩こり改善", text: "長年の肩こりで悩んでいましたが、3回の施術で驚くほど楽になりました。姿勢も改善されてきて、毎日のデスクワークが辛くなくなりました。", color: "#3D8A5A" },
  { name: "A.N さん", meta: "35歳・姿勢矯正", text: "姿勢が悪いと言われ続けていたので来院。丁寧なカウンセリングで安心して施術を受けられました。小顔にもなった気がして嬉しいです！", color: "#D89575" },
];

const faqs = [
  { q: "どんな症状に対応していますか？", a: "肩こり・腰痛・姿勢の乱れ・骨盤のゆがみ・産後の体型崩れ・小顔矯正など幅広くご対応しています。" },
  { q: "初めてでも大丈夫ですか？", a: "はい、もちろんです。初回はカウンセリングから丁寧に行いますのでご安心ください。" },
  { q: "施術は痛くないですか？", a: "痛みのない優しい施術を心がけています。ご要望に応じて力加減を調整しますのでお気軽にお申し付けください。" },
  { q: "何回くらいで改善しますか？", a: "症状やお身体の状態によって異なりますが、目安として3〜5回の施術で変化を実感される方が多いです。" },
  { q: "予約方法を教えてください", a: "LINEまたはお問い合わせフォームからご予約いただけます。お気軽にご連絡ください。" },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="max-w-[390px] mx-auto w-full flex flex-col">

        {/* Hero */}
        <section className="relative min-h-[420px] flex flex-col justify-center px-6 py-16" style={{ background: "linear-gradient(135deg, #1A1918 0%, #2D4A36 100%)" }}>
          <span className="inline-block text-[11px] font-semibold tracking-widest text-[#A8D5B8] border border-[#3D8A5A] rounded-full px-3 py-1 mb-4 w-fit">
            三軒茶屋駅 徒歩3分 ｜ 完全予約制
          </span>
          <h1 className="text-2xl font-bold text-white leading-relaxed mb-2">
            整うことで、<br />自分の方向が<br />見えてくる。
          </h1>
          <p className="text-[13px] text-[#A8D5B8] mb-8 leading-relaxed">
            からだ整体院 COMPATH（コンパス）は<br />30〜40代女性のお身体のお悩みに寄り添う<br />美容整体・姿勢矯正の専門院です。
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/access/#contact" className="block text-center py-4 rounded-xl bg-[#06C755] text-white font-bold text-base">LINE で予約する</Link>
            <Link href="/menu/" className="block text-center py-4 rounded-xl border border-white/40 text-white font-semibold text-sm">施術メニューを見る</Link>
          </div>
          <p className="text-[11px] text-[#888888] mt-4 text-center">初回限定 お試し施術 ¥3,980</p>
        </section>

        {/* Worries */}
        <section className="bg-white px-5 py-10">
          <h2 className="text-[18px] font-bold text-[#1A1918] mb-6">こんなお悩みありませんか？</h2>
          <div className="flex flex-col gap-3">
            {worries.map((w, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#F5F4F1] rounded-xl p-4">
                <span className="text-xl">{w.icon}</span>
                <p className="text-[13px] text-[#333333] leading-snug">{w.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#3D8A5A] font-semibold mt-6">そのお悩み、COMPATHで解決できます。</p>
        </section>

        {/* Features */}
        <section className="bg-[#F5F4F1] px-5 py-10">
          <h2 className="text-[18px] font-bold text-[#1A1918] mb-6">COMPATHの3つの特徴</h2>
          <div className="flex flex-col gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-[140px] bg-[#EBF5EE] flex items-center justify-center">
                  <span className="text-5xl">{f.icon}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-[15px] font-bold text-[#1A1918] mb-2">{f.title}</h3>
                  <p className="text-[13px] text-[#555555] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Preview */}
        <section className="bg-white px-5 py-10">
          <h2 className="text-[18px] font-bold text-[#1A1918] mb-2">施術メニュー</h2>
          <p className="text-[13px] text-[#666666] mb-6 leading-relaxed">お身体のお悩みに合わせたメニューをご用意しています</p>
          <div className="flex flex-col gap-3">
            {[
              { icon: "🦴", name: "姿勢矯正コース", desc: "骨格から整える全身バランス調整", bg: "#3D8A5A" },
              { icon: "🤰", name: "産後骨盤矯正コース", desc: "産後の骨盤・体型崩れをケア", bg: "#D89575" },
              { icon: "✨", name: "小顔矯正コース", desc: "顔のゆがみ・むくみをスッキリ", bg: "#3D8A5A" },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#F5F4F1] rounded-xl p-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0" style={{ backgroundColor: m.bg }}>
                  {m.icon}
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[#1A1918]">{m.name}</p>
                  <p className="text-[12px] text-[#666666]">{m.desc}</p>
                  <p className="text-[13px] font-semibold text-[#3D8A5A]">初回 ¥3,980〜</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/menu/" className="mt-5 block text-center py-4 rounded-xl border-[1.5px] border-[#3D8A5A] text-[#3D8A5A] text-sm font-semibold">施術メニュー・料金を見る →</Link>
        </section>

        {/* Testimonials */}
        <section className="bg-[#F5F4F1] px-5 py-10">
          <h2 className="text-[18px] font-bold text-[#1A1918] mb-6">お客様の声</h2>
          <div className="flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
                <p className="text-sm text-[#D89575] mb-3">★★★★★</p>
                <p className="text-[13px] text-[#333333] leading-relaxed mb-4">{t.text}</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: t.color }} />
                  <p className="text-[12px] text-[#666666]">{t.name}（{t.meta}）</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/voice/" className="mt-5 block text-center py-4 rounded-xl border-[1.5px] border-[#3D8A5A] text-[#3D8A5A] text-sm font-semibold">もっと見る →</Link>
        </section>

        {/* Doctor */}
        <section className="bg-white px-5 py-10">
          <h2 className="text-[18px] font-bold text-[#1A1918] mb-5">院長プロフィール</h2>
          <div className="bg-[#F5F4F1] rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-full bg-[#D89575] shrink-0" />
              <div>
                <p className="text-[17px] font-bold text-[#1A1918]">田中 みのり</p>
                <p className="text-[12px] text-[#3D8A5A] font-semibold">柔道整復師・国家資格保有</p>
                <p className="text-[12px] text-[#666666]">施術歴12年｜3,000名以上の実績</p>
              </div>
            </div>
            <p className="text-[13px] text-[#444444] leading-relaxed">
              「なぜ整体師になったのか。それは、自分自身が長年の腰痛に苦しんだ経験があるからです。病院に行っても原因がわからず、整体院で初めて根本から改善できた体験が、今の私の原点になっています。」
            </p>
          </div>
          <Link href="/about/" className="mt-4 block text-center py-4 rounded-xl border-[1.5px] border-[#3D8A5A] text-[#3D8A5A] text-sm font-semibold">院長プロフィールをくわしく見る →</Link>
        </section>

        {/* Access Preview */}
        <section className="bg-[#F5F4F1] px-5 py-10">
          <h2 className="text-[18px] font-bold text-[#1A1918] mb-5">アクセス</h2>
          <div className="h-44 rounded-xl bg-[#C8D8C0] flex items-center justify-center mb-4">
            <div className="text-center"><p className="text-3xl mb-1">📍</p><p className="text-sm font-semibold text-[#3D8A5A]">三軒茶屋駅 徒歩3分</p></div>
          </div>
          <div className="bg-white rounded-xl p-5 flex flex-col gap-3">
            <p className="text-sm font-bold text-[#1A1918]">東京都世田谷区三軒茶屋 1-XX-XX</p>
            <p className="text-[13px] text-[#666666] leading-relaxed">東急田園都市線・世田谷線 三軒茶屋駅 徒歩3分</p>
            <p className="text-[13px] text-[#444444]">営業時間：10:00〜20:00（最終受付 19:00）</p>
            <p className="text-[13px] text-[#444444]">定休日：水曜日　完全予約制</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white px-5 py-10">
          <h2 className="text-[18px] font-bold text-[#1A1918] mb-2">よくあるご質問</h2>
          <p className="text-[13px] text-[#666666] mb-6 leading-relaxed">初めての方からよくいただくご質問をまとめました</p>
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div key={i} className="py-4 border-b border-[#E8E8E8]">
                <p className="text-sm font-semibold text-[#1A1918] mb-2">Q. {faq.q}</p>
                <p className="text-[13px] text-[#555555] leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#3D8A5A] px-6 py-12">
          <h2 className="text-xl font-bold text-white text-center mb-2 leading-relaxed">まずはお気軽にご相談ください</h2>
          <p className="text-sm text-[#A8D5B8] text-center mb-6">初回限定 お試し施術 ¥3,980</p>
          <div className="flex flex-col gap-3">
            <Link href="/access/#contact" className="block text-center py-4 rounded-xl bg-[#06C755] text-white font-bold text-base">LINE で予約する</Link>
            <Link href="/access/#contact" className="block text-center py-4 rounded-xl bg-white text-[#3D8A5A] font-semibold text-base">お問い合わせフォーム</Link>
          </div>
          <p className="text-[12px] text-[#A8D5B8] text-center mt-4">完全予約制｜営業時間 10:00〜20:00（水曜定休）</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
