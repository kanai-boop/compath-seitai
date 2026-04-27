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
  "肩・首のこりがひどく、毎日つらい",
  "産後から骨盤のゆがみや体型が気になる",
  "猫背・反り腰など姿勢が悪いと言われる",
  "腰痛で長時間の立ち仕事・デスクワークがつらい",
];

const features = [
  {
    num: "01",
    title: "骨格から整える根本改善",
    desc: "表面的な症状だけでなく、骨格・筋肉・生活習慣までアプローチ。一時的な緩和ではなく、再発しない身体づくりを目指します。",
  },
  {
    num: "02",
    title: "国家資格保有の施術者",
    desc: "柔道整復師の国家資格を持つ施術者が担当。解剖学に基づいた安全で効果的な施術を、丁寧なカウンセリングとともに提供します。",
  },
  {
    num: "03",
    title: "完全予約制・丁寧な対応",
    desc: "他のお客様を気にせず施術に集中できる完全予約制。カウンセリングから施術後のセルフケア指導まで、お一人おひとりに向き合います。",
  },
];

const menus = [
  { name: "姿勢矯正コース", desc: "骨格から整える全身バランス調整", price: "¥8,800〜" },
  { name: "産後骨盤矯正コース", desc: "産後の骨盤・体型崩れをケア", price: "¥7,700〜" },
  { name: "小顔矯正コース", desc: "顔のゆがみ・むくみをスッキリ", price: "¥9,900〜" },
  { name: "腰痛集中ケア", desc: "慢性的な腰痛の根本改善", price: "¥7,150〜" },
];

const testimonials = [
  { name: "M.S", meta: "32歳・産後ケア", text: "産後3ヶ月から通い始め、骨盤の歪みが少しずつ改善されています。毎回丁寧にカウンセリングをしてもらえるので安心して施術を受けられます。体の変化を実感でき、育児が少し楽になった気がします。" },
  { name: "K.T", meta: "38歳・肩こり改善", text: "長年の肩こりで悩んでいましたが、3回の施術で驚くほど楽になりました。姿勢も改善されてきて、毎日のデスクワークが辛くなくなりました。原因から教えてもらえるので納得して通えています。" },
  { name: "A.N", meta: "35歳・姿勢矯正", text: "姿勢が悪いと言われ続けていたので来院。丁寧なカウンセリングで安心して施術を受けられました。施術後は自然と背筋が伸びるようになり、周りからも変わったと言われるようになりました。" },
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
        <section className="bg-[#1E2B22] px-6 pt-14 pb-12 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] tracking-[0.18em] text-[#7AAA8C] font-medium">
              三軒茶屋駅 徒歩3分 ｜ 完全予約制
            </p>
            <h1 className="text-[26px] font-bold text-white leading-[1.6] tracking-tight">
              整うことで、<br />
              自分の方向が<br />
              見えてくる。
            </h1>
            <p className="text-[13px] text-[#9AB5A4] leading-[1.9]">
              からだ整体院 COMPATH（コンパス）は<br />
              30〜40代女性のお身体のお悩みに寄り添う<br />
              美容整体・姿勢矯正の専門院です。
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/access/#contact"
              className="block text-center py-[15px] rounded-lg bg-[#3D8A5A] text-white font-bold text-[15px] tracking-wide"
            >
              LINE で予約する
            </Link>
            <Link
              href="/menu/"
              className="block text-center py-[14px] rounded-lg border border-white/20 text-white/80 text-[14px] tracking-wide"
            >
              施術メニューを見る
            </Link>
            <p className="text-[11px] text-[#6A8A77] text-center">初回限定 お試し施術 ¥3,980</p>
          </div>
        </section>

        {/* Worries */}
        <section className="bg-white px-5 py-12">
          <div className="mb-7">
            <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">WORRIES</p>
            <h2 className="text-[18px] font-bold text-[#1A1918] leading-snug">こんなお悩みは<br />ありませんか？</h2>
          </div>
          <ul className="flex flex-col gap-3">
            {worries.map((w, i) => (
              <li key={i} className="flex items-start gap-3 py-3 border-b border-[#F0EFEC]">
                <span className="text-[#3D8A5A] font-bold text-sm mt-0.5 shrink-0">—</span>
                <p className="text-[13px] text-[#333333] leading-relaxed">{w}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] text-[#3D8A5A] font-semibold text-center">
            そのお悩み、COMPATHで根本から改善できます。
          </p>
        </section>

        {/* Features */}
        <section className="bg-[#F5F4F1] px-5 py-12">
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">FEATURES</p>
            <h2 className="text-[18px] font-bold text-[#1A1918]">COMPATHの<br />3つの特徴</h2>
          </div>
          <div className="flex flex-col gap-5">
            {features.map((f) => (
              <div key={f.num} className="bg-white rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="text-[28px] font-bold text-[#D8D3CC] leading-none shrink-0 mt-1">{f.num}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[15px] font-bold text-[#1A1918]">{f.title}</h3>
                    <p className="text-[13px] text-[#666666] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Menu */}
        <section className="bg-white px-5 py-12">
          <div className="mb-7">
            <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">MENU</p>
            <h2 className="text-[18px] font-bold text-[#1A1918]">施術メニュー</h2>
          </div>
          <div className="flex flex-col">
            {menus.map((m, i) => (
              <div key={i} className="flex items-start justify-between py-4 border-b border-[#F0EFEC] gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-semibold text-[#1A1918]">{m.name}</p>
                  <p className="text-[12px] text-[#888888]">{m.desc}</p>
                </div>
                <p className="text-[14px] font-bold text-[#3D8A5A] shrink-0">{m.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 py-3 border-b border-[#F0EFEC]">
            <p className="text-[12px] text-[#C07050] font-semibold">初回限定 お試し施術</p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-[13px] text-[#666666]">どのコースも初回は特別価格</p>
              <p className="text-[15px] font-bold text-[#C07050]">¥3,980</p>
            </div>
          </div>
          <Link href="/menu/" className="mt-5 block text-center py-[13px] rounded-lg border border-[#3D8A5A] text-[#3D8A5A] text-[13px] font-semibold tracking-wide">
            メニュー・料金をすべて見る
          </Link>
        </section>

        {/* Testimonials */}
        <section className="bg-[#F5F4F1] px-5 py-12">
          <div className="mb-7">
            <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">VOICE</p>
            <h2 className="text-[18px] font-bold text-[#1A1918]">お客様の声</h2>
          </div>
          <div className="flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-5">
                <p className="text-[12px] text-[#C8A882] tracking-widest mb-3">★★★★★</p>
                <p className="text-[13px] text-[#333333] leading-relaxed mb-4">{t.text}</p>
                <div className="flex items-center gap-2 pt-3 border-t border-[#F0EFEC]">
                  <div className="w-7 h-7 rounded-full bg-[#D8D3CC] shrink-0" />
                  <p className="text-[11px] text-[#888888]">{t.name}（{t.meta}）</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/voice/" className="mt-5 block text-center py-[13px] rounded-lg border border-[#3D8A5A] text-[#3D8A5A] text-[13px] font-semibold tracking-wide">
            すべての口コミを見る
          </Link>
        </section>

        {/* Doctor */}
        <section className="bg-white px-5 py-12">
          <div className="mb-7">
            <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">DIRECTOR</p>
            <h2 className="text-[18px] font-bold text-[#1A1918]">院長プロフィール</h2>
          </div>
          <div className="bg-[#F5F4F1] rounded-xl p-5 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-[72px] h-[72px] rounded-full bg-[#D8D3CC] shrink-0" />
              <div className="flex flex-col gap-1">
                <p className="text-[16px] font-bold text-[#1A1918]">田中 みのり</p>
                <p className="text-[11px] text-[#3D8A5A] font-semibold tracking-wide">柔道整復師 ｜ 国家資格保有</p>
                <p className="text-[11px] text-[#888888]">施術歴 12年 ｜ 累計 3,000名以上</p>
              </div>
            </div>
            <p className="text-[13px] text-[#555555] leading-[1.9] border-t border-[#E8E5DF] pt-4">
              自身の腰痛体験から整体師の道へ。「症状を一時的に和らげるだけでなく、再発しない身体づくり」をモットーに、一人ひとりに向き合った施術を心がけています。
            </p>
          </div>
          <Link href="/about/" className="mt-4 block text-center py-[13px] rounded-lg border border-[#3D8A5A] text-[#3D8A5A] text-[13px] font-semibold tracking-wide">
            院長プロフィールをくわしく見る
          </Link>
        </section>

        {/* Access */}
        <section className="bg-[#F5F4F1] px-5 py-12">
          <div className="mb-6">
            <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">ACCESS</p>
            <h2 className="text-[18px] font-bold text-[#1A1918]">アクセス</h2>
          </div>
          <div className="h-44 rounded-xl bg-[#D8E4D8] mb-4 flex items-center justify-center">
            <p className="text-[13px] text-[#4A6E55] font-medium tracking-wide">地図（Google Maps）</p>
          </div>
          <div className="bg-white rounded-xl p-5 flex flex-col gap-3">
            {[
              { label: "住所", value: "東京都世田谷区三軒茶屋 1-XX-XX" },
              { label: "アクセス", value: "三軒茶屋駅（東急田園都市線・世田谷線）徒歩3分" },
              { label: "営業時間", value: "10:00〜20:00（最終受付 19:00）" },
              { label: "定休日", value: "水曜日　完全予約制" },
            ].map((row, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[11px] font-semibold text-[#3D8A5A] w-14 shrink-0 pt-0.5">{row.label}</span>
                <p className="text-[13px] text-[#444444] leading-relaxed">{row.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white px-5 py-12">
          <div className="mb-7">
            <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">FAQ</p>
            <h2 className="text-[18px] font-bold text-[#1A1918]">よくあるご質問</h2>
          </div>
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5 border-b border-[#F0EFEC]">
                <p className="text-[13px] font-semibold text-[#1A1918] mb-2 flex gap-2">
                  <span className="text-[#3D8A5A] shrink-0">Q.</span>
                  {faq.q}
                </p>
                <p className="text-[13px] text-[#666666] leading-relaxed flex gap-2">
                  <span className="text-[#C8A882] shrink-0">A.</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1E2B22] px-6 py-14 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.2em] text-[#7AAA8C] font-medium">CONTACT</p>
            <h2 className="text-[20px] font-bold text-white leading-relaxed">
              まずはお気軽に<br />ご相談ください
            </h2>
            <p className="text-[13px] text-[#7AAA8C]">初回限定 お試し施術 ¥3,980</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/access/#contact" className="block text-center py-[15px] rounded-lg bg-[#3D8A5A] text-white font-bold text-[15px]">
              LINE で予約する
            </Link>
            <Link href="/access/#contact" className="block text-center py-[14px] rounded-lg bg-white text-[#1E2B22] font-semibold text-[14px]">
              お問い合わせフォーム
            </Link>
          </div>
          <p className="text-[11px] text-[#4A6A55] text-center">
            完全予約制｜10:00〜20:00（水曜定休）
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
