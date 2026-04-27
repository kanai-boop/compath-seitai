import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "院長プロフィール | からだ整体院 COMPATH",
  description:
    "からだ整体院COMPATH院長・田中みのりのプロフィール。柔道整復師国家資格保有。施術歴12年・累計3,000名以上の施術実績。整体師を目指したきっかけから施術のこだわりまで詳しくご紹介。",
  alternates: { canonical: "https://compath-seitai.vercel.app/about/" },
  openGraph: {
    title: "院長プロフィール | からだ整体院 COMPATH",
    description: "柔道整復師国家資格保有・施術歴12年の院長が、整体師を目指した想いと施術への哲学をお伝えします。",
    url: "https://compath-seitai.vercel.app/about/",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "田中 みのり",
  alternateName: "Minori Tanaka",
  jobTitle: "院長 / 柔道整復師",
  worksFor: {
    "@type": "HealthAndBeautyBusiness",
    name: "からだ整体院 COMPATH",
    url: "https://compath-seitai.vercel.app",
  },
  url: "https://compath-seitai.vercel.app/about/",
  description:
    "柔道整復師の国家資格を保有し、整形外科クリニックと大手整体院でのキャリアを経て、2020年にからだ整体院COMPATHを開院。累計3,000名以上の施術実績を持つ。姿勢矯正・骨盤矯正・産後ケア・小顔矯正を専門とし、骨格から整える根本改善を重視した施術スタイルが特徴。",
  knowsAbout: ["柔道整復", "姿勢矯正", "骨盤矯正", "産後骨盤矯正", "小顔矯正", "肩こり改善", "腰痛改善"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "柔道整復師",
    credentialCategory: "国家資格",
  },
};

const career = [
  { year: "2009", text: "柔道整復師 国家資格取得" },
  { year: "2009", text: "整形外科クリニック 勤務（3年間）" },
  { year: "2012", text: "大手整体院 チーフ施術師（5年間）" },
  { year: "2017", text: "独立開業準備・各種研修受講" },
  { year: "2020", text: "からだ整体院 COMPATH 開院" },
];

const stats = [
  { value: "12年", label: "施術経験" },
  { value: "3,000名+", label: "累計施術数" },
  { value: "98%", label: "顧客満足度" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Header />
      <main className="w-full flex flex-col">

        {/* Hero */}
        <section className="bg-[#1A1918] w-full relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=60"
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 pt-12 pb-10 md:pt-16 md:pb-14 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.2em] text-[#888888] font-medium">ABOUT DIRECTOR</p>
            <h1 className="text-[24px] md:text-[36px] font-bold text-white leading-snug tracking-tight">院長プロフィール</h1>
            <p className="text-[12px] text-[#666666] tracking-widest">Minori Tanaka</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-[#F5F4F1] w-full">
          <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20 flex flex-col gap-12 md:gap-16">

            {/* Profile Card - horizontal layout with photo */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm md:flex md:items-stretch">
              {/* Photo */}
              <div className="h-64 md:h-auto md:w-[280px] md:shrink-0 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
                  alt="院長 田中みのり"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
              </div>
              {/* Info */}
              <div className="p-5 md:p-8 flex flex-col gap-5 flex-1 justify-center">
                <div className="flex flex-col gap-1.5">
                  <p className="text-[20px] md:text-[24px] font-bold text-[#1A1918]">田中 みのり</p>
                  <p className="text-[11px] text-[#888888] tracking-widest">Minori Tanaka</p>
                  <span className="self-start text-[11px] font-semibold text-[#3D8A5A] bg-[#EBF5EE] px-3 py-1 rounded-full mt-1">
                    柔道整復師 国家資格
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-0 border-t border-[#F0EFEC] pt-5">
                  {stats.map((s, i) => (
                    <div key={i} className={`flex flex-col items-center gap-1 ${i < 2 ? "border-r border-[#F0EFEC]" : ""}`}>
                      <p className="text-[18px] md:text-[22px] font-bold text-[#3D8A5A]">{s.value}</p>
                      <p className="text-[10px] md:text-[11px] text-[#999999]">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[13px] text-[#666666] leading-relaxed">
                  整形外科クリニックと大手整体院でキャリアを積み、2020年にCOMPATHを開院。姿勢矯正・骨盤矯正・産後ケア・小顔矯正を専門に、骨格から整える根本改善を重視した施術を行っています。
                </p>
              </div>
            </div>

            {/* Story + Career (2-col on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

              {/* Story */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-[#3D8A5A]" />
                    <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold">STORY</p>
                  </div>
                  <h2 className="text-[16px] md:text-[18px] font-bold text-[#1A1918]">整体師を目指したきっかけ</h2>
                </div>
                <div className="flex flex-col gap-4 text-[13px] text-[#444444] leading-[1.9]">
                  <p>
                    学生時代から腰痛に悩み、病院では「異常なし」と言われ続けていました。痛み止めを飲んでもその場しのぎにしかならず、「一生この痛みと付き合っていくのか」と絶望した時期もありました。
                  </p>
                  <p>
                    あらゆる治療を試した末に出会った整体の施術で、初めて根本からの改善を実感しました。「なぜこんなに楽になれるのか」という驚きと感動が、整体師を目指す原点となりました。
                  </p>
                  <p>
                    人の身体には、本来自己回復する力があります。その力を最大限に引き出すことが整体師の使命だと信じています。自分が体験した「劇的な変化」を、今度は私が患者さんに届けたい。その一心で、この道を歩んでいます。
                  </p>
                </div>
              </div>

              {/* Career */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-[#3D8A5A]" />
                    <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold">CAREER</p>
                  </div>
                  <h2 className="text-[16px] md:text-[18px] font-bold text-[#1A1918]">経歴・資格</h2>
                </div>
                <div className="flex flex-col gap-0">
                  {career.map((c, i) => (
                    <div key={i} className="flex gap-5 py-3 border-b border-[#ECEAE5]">
                      <span className="text-[12px] font-semibold text-[#3D8A5A] w-10 shrink-0">{c.year}</span>
                      <p className="text-[13px] text-[#444444]">{c.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy (full width) */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-[#3D8A5A]" />
                  <p className="text-[10px] tracking-[0.2em] text-[#3D8A5A] font-semibold">PHILOSOPHY</p>
                </div>
                <h2 className="text-[16px] md:text-[18px] font-bold text-[#1A1918]">施術のこだわり・方針</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-[13px] text-[#444444] leading-[1.9]">
                <p>
                  「症状を一時的に和らげるだけでなく、再発しない身体づくりを目指す」というのが私の施術の核にある考えです。
                </p>
                <p>
                  カウンセリングでは生活習慣・仕事環境・姿勢の癖まで丁寧にヒアリングします。同じ「肩こり」でも、原因は人によってまったく異なります。デスクワークの姿勢が原因の方もいれば、育児中の抱っこの仕方が原因の方も。だからこそ、一人ひとりに向き合う時間をしっかりとることが大切だと思っています。
                </p>
                <p>
                  施術はお一人おひとりの骨格・筋肉の状態に合わせてオーダーメイドで設計します。マニュアル通りの施術ではなく、その日の身体の状態・お悩み・ご要望をしっかり把握した上で、最適なアプローチを選択しています。
                </p>
                <p>
                  施術後には必ずセルフケアの方法をお伝えし、ご自宅でもケアを続けていただけるようにサポートしています。整体は「受けるだけ」では限界があります。日常生活の中での姿勢の意識や簡単なストレッチを習慣化していただくことで、より早い改善と持続的な効果が期待できます。
                </p>
              </div>
              <p className="text-[13px] text-[#444444] leading-[1.9]">
                「整うことで、自分の方向が見えてくる。」このコンセプトの通り、身体が整うと心も前向きになれる方をたくさん見てきました。あなたの「なりたい姿」に向けて、一緒に歩んでいきましょう。
              </p>
            </div>

            {/* CTA */}
            <div className="bg-[#1E2B22] rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=60"
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <p className="text-[14px] md:text-[16px] font-bold text-white leading-relaxed">まずは体のお悩みをお気軽にご相談ください</p>
                <Link href="/access/#contact" className="shrink-0 block text-center py-[14px] px-10 rounded-lg bg-[#3D8A5A] text-white font-bold text-[14px] hover:bg-[#2E6B44] transition-colors">
                  LINE で予約する
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
