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
  { year: "2009年", text: "柔道整復師国家資格取得" },
  { year: "2009年〜", text: "整形外科クリニック勤務（3年間）" },
  { year: "2012年〜", text: "大手整体院チーフ施術師として勤務（5年間）" },
  { year: "2017年〜", text: "独立開業の準備期間・各種研修受講" },
  { year: "2020年", text: "からだ整体院 COMPATH 開院" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Header />
      <main className="max-w-[390px] mx-auto w-full flex flex-col">

        {/* Hero */}
        <section className="bg-[#1A1918] px-5 py-8 flex flex-col items-center gap-2">
          <h1 className="text-[22px] font-bold text-white tracking-tight text-center">院長プロフィール</h1>
          <p className="text-[12px] text-[#888888] tracking-widest text-center">About the Director</p>
        </section>

        <section className="bg-[#F5F4F1] px-5 py-10 flex flex-col gap-8">

          {/* Profile Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-[#D89575] shrink-0" />
              <div className="flex flex-col gap-1">
                <p className="text-xl font-bold text-[#1A1918]">田中 みのり</p>
                <p className="text-xs text-[#888888] tracking-widest">Minori Tanaka</p>
                <span className="self-start bg-[#EBF5EE] text-[#3D8A5A] text-[11px] font-semibold px-3 py-1 rounded-full">柔道整復師 国家資格</span>
              </div>
            </div>
            {/* Stats */}
            <div className="flex items-center">
              <div className="flex-1 flex flex-col items-center gap-1">
                <p className="text-xl font-bold text-[#3D8A5A]">12年</p>
                <p className="text-[11px] text-[#666666]">施術経験</p>
              </div>
              <div className="w-px h-10 bg-[#E8E8E8]" />
              <div className="flex-1 flex flex-col items-center gap-1">
                <p className="text-xl font-bold text-[#3D8A5A]">3,000名+</p>
                <p className="text-[11px] text-[#666666]">累計施術数</p>
              </div>
              <div className="w-px h-10 bg-[#E8E8E8]" />
              <div className="flex-1 flex flex-col items-center gap-1">
                <p className="text-xl font-bold text-[#3D8A5A]">98%</p>
                <p className="text-[11px] text-[#666666]">満足度</p>
              </div>
            </div>
          </div>

          {/* Story 1 */}
          <div className="flex flex-col gap-3">
            <div className="w-8 h-1 rounded-full bg-[#3D8A5A]" />
            <h2 className="text-[16px] font-bold text-[#1A1918]">整体師を目指したきっかけ</h2>
            <div className="text-[13px] text-[#444444] leading-relaxed space-y-4">
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
          <div className="flex flex-col gap-3">
            <div className="w-8 h-1 rounded-full bg-[#3D8A5A]" />
            <h2 className="text-[16px] font-bold text-[#1A1918]">経歴・資格</h2>
            <div className="flex flex-col gap-3">
              {career.map((c, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-[12px] text-[#3D8A5A] font-semibold whitespace-nowrap pt-0.5 w-20 shrink-0">{c.year}</span>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-2 h-2 rounded-full bg-[#3D8A5A] shrink-0 mt-1" />
                    <p className="text-[13px] text-[#444444]">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="flex flex-col gap-3">
            <div className="w-8 h-1 rounded-full bg-[#3D8A5A]" />
            <h2 className="text-[16px] font-bold text-[#1A1918]">施術のこだわり・方針</h2>
            <div className="text-[13px] text-[#444444] leading-relaxed space-y-4">
              <p>
                「症状を一時的に和らげるだけでなく、再発しない身体づくりを目指す」というのが私の施術の核にある考えです。
              </p>
              <p>
                カウンセリングでは生活習慣・仕事環境・姿勢の癖まで丁寧にヒアリングします。同じ「肩こり」でも、原因は人によってまったく異なります。デスクワークの姿勢が原因の方もいれば、育児中の抱っこの仕方が原因の方も。だからこそ、一人ひとりに向き合う時間をしっかりとることが大切だと思っています。
              </p>
              <p>
                施術はお一人おひとりの骨格・筋肉の状態に合わせてオーダーメイドで設計します。「マニュアル通り」の施術ではなく、その日の身体の状態・お悩み・ご要望をしっかり把握した上で、最適なアプローチを選択しています。
              </p>
              <p>
                施術後には必ずセルフケアの方法をお伝えし、ご自宅でもケアを続けていただけるようにサポートしています。整体は「受けるだけ」では限界があります。日常生活の中での姿勢の意識や簡単なストレッチを習慣化していただくことで、より早い改善と持続的な効果が期待できます。
              </p>
              <p>
                「整うことで、自分の方向が見えてくる。」このコンセプトの通り、身体が整うと心も前向きになれる方をたくさん見てきました。体の変化が自信につながり、仕事やプライベートにも良い影響が出るという声をいただくたびに、この仕事をしていて良かったと感じます。
              </p>
              <p>
                あなたの「なりたい姿」に向けて、一緒に歩んでいきましょう。まずはお気軽にご相談ください。
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#3D8A5A] rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="text-sm font-bold text-white leading-relaxed">まずは体のお悩みをお気軽にご相談ください</h2>
            <Link href="/access/#contact" className="block text-center py-4 rounded-xl bg-white text-[#3D8A5A] font-bold text-base">LINE で予約する →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
