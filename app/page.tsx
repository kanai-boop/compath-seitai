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
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "02",
    title: "国家資格保有の施術者",
    desc: "柔道整復師の国家資格を持つ施術者が担当。解剖学に基づいた安全で効果的な施術を、丁寧なカウンセリングとともに提供します。",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "03",
    title: "完全予約制・丁寧な対応",
    desc: "他のお客様を気にせず施術に集中できる完全予約制。カウンセリングから施術後のセルフケア指導まで、お一人おひとりに向き合います。",
    img: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=600&q=80",
  },
];

const menus = [
  { name: "姿勢矯正コース", desc: "骨格から整える全身バランス調整", price: "¥8,800〜" },
  { name: "産後骨盤矯正コース", desc: "産後の骨盤・体型崩れをケア", price: "¥7,700〜" },
  { name: "小顔矯正コース", desc: "顔のゆがみ・むくみをスッキリ", price: "¥9,900〜" },
  { name: "腰痛集中ケア", desc: "慢性的な腰痛の根本改善", price: "¥7,150〜" },
];

const testimonials = [
  {
    name: "M.S",
    meta: "32歳・産後ケア",
    text: "産後3ヶ月から通い始め、骨盤の歪みが少しずつ改善されています。毎回丁寧にカウンセリングをしてもらえるので安心して施術を受けられます。体の変化を実感でき、育児が少し楽になった気がします。",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "K.T",
    meta: "38歳・肩こり改善",
    text: "長年の肩こりで悩んでいましたが、3回の施術で驚くほど楽になりました。姿勢も改善されてきて、毎日のデスクワークが辛くなくなりました。原因から教えてもらえるので納得して通えています。",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "A.N",
    meta: "35歳・姿勢矯正",
    text: "施術を受けてから、自然と背筋が伸びるようになり周りからも変わったと言われるように。施術中もリラックスできる雰囲気で、毎回癒されています。",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
  },
];

const faqs = [
  { q: "どんな症状に対応していますか？", a: "肩こり・腰痛・姿勢の乱れ・骨盤のゆがみ・産後の体型崩れ・小顔矯正など幅広くご対応しています。" },
  { q: "初めてでも大丈夫ですか？", a: "はい、もちろんです。初回はカウンセリングから丁寧に行いますのでご安心ください。" },
  { q: "施術は痛くないですか？", a: "痛みのない優しい施術を心がけています。ご要望に応じて力加減を調整しますのでお気軽にお申し付けください。" },
  { q: "何回くらいで改善しますか？", a: "症状やお身体の状態によって異なりますが、目安として3〜5回の施術で変化を実感される方が多いです。" },
  { q: "予約方法を教えてください", a: "LINEまたはお問い合わせフォームからご予約いただけます。お気軽にご連絡ください。" },
  { q: "駐車場はありますか？", a: "専用駐車場はございません。近隣のコインパーキングをご利用ください。" },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="w-full flex flex-col">

        {/* Hero */}
        <section className="bg-[#1E2B22] w-full">
          <div className="max-w-5xl mx-auto px-6 md:px-8 pt-16 pb-0 md:pt-24 md:pb-20 md:flex md:items-center md:gap-12">
            <div className="flex flex-col gap-7 md:flex-1 pb-16 md:pb-0">
              <div className="flex flex-col gap-4">
                <p className="text-[11px] tracking-[0.2em] text-[#7AAA8C] font-medium">
                  三軒茶屋駅 徒歩3分 ｜ 完全予約制
                </p>
                <h1 className="text-[28px] md:text-[42px] font-bold text-white leading-[1.6] tracking-tight">
                  整うことで、<br />
                  自分の方向が<br />
                  見えてくる。
                </h1>
                <p className="text-[13px] md:text-[15px] text-[#9AB5A4] leading-[1.9] max-w-sm">
                  からだ整体院 COMPATH（コンパス）は<br />
                  30〜40代女性のお身体のお悩みに寄り添う<br />
                  美容整体・姿勢矯正の専門院です。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:flex-col md:max-w-[260px]">
                <Link href="/access/#contact" className="block text-center py-[15px] rounded-lg bg-[#3D8A5A] text-white font-bold text-[15px] tracking-wide hover:bg-[#2E6B44] transition-colors">
                  LINE で予約する
                </Link>
                <Link href="/menu/" className="block text-center py-[14px] rounded-lg border border-white/20 text-white/80 text-[14px] tracking-wide hover:border-white/40 transition-colors">
                  施術メニューを見る
                </Link>
              </div>
              <p className="text-[11px] text-[#4A6A55]">初回限定 お試し施術 ¥3,980</p>
            </div>

            {/* PC: right image block */}
            <div className="hidden md:block flex-1 relative">
              <div className="h-[480px] rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80"
                  alt="COMPATHの施術"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2B22]/80 via-[#1E2B22]/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2">
                    {["肩こり・首こり", "産後骨盤矯正", "姿勢矯正", "小顔矯正", "腰痛ケア"].map((s, i) => (
                      <span key={i} className="text-[11px] text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: hero image strip */}
          <div className="md:hidden w-full h-60 overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
              alt="COMPATHの施術"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2B22]/60 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5">
              <div className="flex flex-wrap gap-1.5">
                {["肩こり", "産後骨盤矯正", "姿勢矯正", "小顔矯正"].map((s, i) => (
                  <span key={i} className="text-[10px] text-white/90 bg-white/10 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Worries */}
        <section className="bg-white w-full">
          <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="mb-8 md:mb-10">
              <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">WORRIES</p>
              <h2 className="text-[20px] md:text-[26px] font-bold text-[#1A1918] leading-snug">こんなお悩みは<br className="md:hidden" />ありませんか？</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-12">
              {worries.map((w, i) => (
                <li key={i} className="flex items-start gap-3 py-4 border-b border-[#F0EFEC]">
                  <span className="text-[#3D8A5A] font-bold text-sm mt-0.5 shrink-0">—</span>
                  <p className="text-[13px] md:text-[14px] text-[#333333] leading-relaxed">{w}</p>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[13px] md:text-[14px] text-[#3D8A5A] font-semibold md:text-center">
              そのお悩み、COMPATHで根本から改善できます。
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#F5F4F1] w-full">
          <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="mb-8 md:mb-12">
              <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">FEATURES</p>
              <h2 className="text-[20px] md:text-[26px] font-bold text-[#1A1918]">COMPATHの3つの特徴</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {features.map((f) => (
                <div key={f.num} className="bg-white rounded-xl overflow-hidden flex flex-col shadow-sm">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={f.img}
                      alt={f.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                  </div>
                  <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                    <span className="text-[28px] font-bold text-[#E8E3DC] leading-none">{f.num}</span>
                    <h3 className="text-[15px] md:text-[16px] font-bold text-[#1A1918]">{f.title}</h3>
                    <p className="text-[13px] text-[#666666] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="bg-white w-full">
          <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="md:flex md:items-end md:justify-between mb-8 md:mb-10">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">MENU</p>
                <h2 className="text-[20px] md:text-[26px] font-bold text-[#1A1918]">施術メニュー</h2>
              </div>
              <Link href="/menu/" className="hidden md:inline-block text-[13px] text-[#3D8A5A] font-semibold border-b border-[#3D8A5A] pb-0.5 hover:opacity-70 transition-opacity">
                メニュー・料金をすべて見る →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-12">
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
            <div className="mt-2 py-4 border-b border-[#F0EFEC] flex items-center justify-between">
              <div>
                <p className="text-[12px] text-[#C07050] font-semibold">初回限定 お試し施術</p>
                <p className="text-[13px] text-[#666666]">どのコースも初回は特別価格</p>
              </div>
              <p className="text-[18px] font-bold text-[#C07050]">¥3,980</p>
            </div>
            <div className="md:hidden mt-5">
              <Link href="/menu/" className="block text-center py-[13px] rounded-lg border border-[#3D8A5A] text-[#3D8A5A] text-[13px] font-semibold tracking-wide">
                メニュー・料金をすべて見る
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#F5F4F1] w-full">
          <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="md:flex md:items-end md:justify-between mb-8 md:mb-10">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">VOICE</p>
                <h2 className="text-[20px] md:text-[26px] font-bold text-[#1A1918]">お客様の声</h2>
              </div>
              <Link href="/voice/" className="hidden md:inline-block text-[13px] text-[#3D8A5A] font-semibold border-b border-[#3D8A5A] pb-0.5 hover:opacity-70 transition-opacity">
                すべての口コミを見る →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-5 flex flex-col gap-4 shadow-sm">
                  <p className="text-[11px] text-[#C8A882] tracking-widest">★★★★★</p>
                  <p className="text-[13px] text-[#333333] leading-[1.85] flex-1">{t.text}</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-[#F0EFEC]">
                    <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 ring-2 ring-[#F0EFEC]">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-[11px] text-[#888888]">{t.name}（{t.meta}）</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:hidden mt-5">
              <Link href="/voice/" className="block text-center py-[13px] rounded-lg border border-[#3D8A5A] text-[#3D8A5A] text-[13px] font-semibold tracking-wide">
                すべての口コミを見る
              </Link>
            </div>
          </div>
        </section>

        {/* Doctor */}
        <section className="bg-white w-full">
          <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="mb-7 md:mb-10">
              <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">DIRECTOR</p>
              <h2 className="text-[20px] md:text-[26px] font-bold text-[#1A1918]">院長プロフィール</h2>
            </div>
            <div className="bg-[#F5F4F1] rounded-xl overflow-hidden md:flex md:items-stretch">
              {/* Image side (desktop) */}
              <div className="md:w-[260px] md:shrink-0 h-52 md:h-auto overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
                  alt="院長 田中みのり"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
              </div>
              {/* Content side */}
              <div className="p-5 md:p-8 flex flex-col gap-4 flex-1 justify-center">
                <div className="flex flex-col gap-1">
                  <p className="text-[17px] md:text-[20px] font-bold text-[#1A1918]">田中 みのり</p>
                  <p className="text-[11px] text-[#3D8A5A] font-semibold tracking-wide">柔道整復師 ｜ 国家資格保有</p>
                  <p className="text-[11px] text-[#888888]">施術歴 12年 ｜ 累計 3,000名以上</p>
                </div>
                <p className="text-[13px] md:text-[14px] text-[#555555] leading-[1.9] border-t border-[#E8E5DF] pt-4">
                  自身の腰痛体験から整体師の道へ。「症状を一時的に和らげるだけでなく、再発しない身体づくり」をモットーに、一人ひとりに向き合った施術を心がけています。骨格・筋肉・生活習慣までトータルにアプローチし、カウンセリングから施術後のセルフケア指導まで丁寧に対応します。
                </p>
                <Link href="/about/" className="self-start text-[13px] text-[#3D8A5A] font-semibold border-b border-[#3D8A5A] pb-0.5 hover:opacity-70 transition-opacity">
                  院長プロフィールをくわしく見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Access */}
        <section className="bg-[#F5F4F1] w-full">
          <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="mb-7 md:mb-10">
              <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">ACCESS</p>
              <h2 className="text-[20px] md:text-[26px] font-bold text-[#1A1918]">アクセス</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-8">
              <div className="md:flex-1 h-48 md:h-auto md:min-h-[220px] rounded-xl bg-[#D8E4D8] flex items-center justify-center">
                <p className="text-[13px] text-[#4A6E55] font-medium tracking-wide">地図（Google Maps）</p>
              </div>
              <div className="md:flex-1 bg-white rounded-xl p-5 md:p-6 flex flex-col gap-3 justify-center">
                {[
                  { label: "住所", value: "東京都世田谷区三軒茶屋 1-XX-XX" },
                  { label: "アクセス", value: "三軒茶屋駅（東急田園都市線・世田谷線）徒歩3分" },
                  { label: "営業時間", value: "10:00〜20:00（最終受付 19:00）" },
                  { label: "定休日", value: "水曜日　完全予約制" },
                ].map((row, i) => (
                  <div key={i} className="flex gap-3 items-start border-b border-[#F5F4F1] pb-3 last:border-0 last:pb-0">
                    <span className="text-[11px] font-semibold text-[#3D8A5A] w-14 shrink-0 pt-0.5">{row.label}</span>
                    <p className="text-[13px] text-[#444444] leading-relaxed">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white w-full">
          <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="mb-8 md:mb-10">
              <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold mb-2">FAQ</p>
              <h2 className="text-[20px] md:text-[26px] font-bold text-[#1A1918]">よくあるご質問</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-12">
              {faqs.map((faq, i) => (
                <div key={i} className="py-5 border-b border-[#F0EFEC]">
                  <p className="text-[13px] md:text-[14px] font-semibold text-[#1A1918] mb-2 flex gap-2">
                    <span className="text-[#3D8A5A] shrink-0">Q.</span>{faq.q}
                  </p>
                  <p className="text-[13px] text-[#666666] leading-relaxed flex gap-2">
                    <span className="text-[#C8A882] shrink-0">A.</span>{faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1E2B22] w-full relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1400&q=60"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] tracking-[0.2em] text-[#7AAA8C] font-medium">CONTACT</p>
              <h2 className="text-[22px] md:text-[32px] font-bold text-white leading-relaxed">
                まずはお気軽に<br />ご相談ください
              </h2>
              <p className="text-[13px] text-[#7AAA8C]">初回限定 お試し施術 ¥3,980</p>
              <p className="text-[11px] text-[#4A6A55]">完全予約制｜10:00〜20:00（水曜定休）</p>
            </div>
            <div className="flex flex-col gap-3 md:w-[260px] shrink-0">
              <Link href="/access/#contact" className="block text-center py-[15px] rounded-lg bg-[#3D8A5A] text-white font-bold text-[15px] hover:bg-[#2E6B44] transition-colors">
                LINE で予約する
              </Link>
              <Link href="/access/#contact" className="block text-center py-[14px] rounded-lg bg-white text-[#1E2B22] font-semibold text-[14px] hover:bg-gray-50 transition-colors">
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
