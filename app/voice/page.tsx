import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "お客様の声 | からだ整体院 COMPATH",
  description:
    "COMPATHに通ってくださったお客様のリアルな声。肩こり・産後骨盤矯正・姿勢矯正・小顔矯正など様々な症状でご来院された方々の体験談。東京・三軒茶屋の整体院。",
  alternates: { canonical: "https://compath-seitai.vercel.app/voice/" },
  openGraph: {
    title: "お客様の声 | からだ整体院 COMPATH",
    description: "肩こり・産後ケア・姿勢矯正など。お客様のリアルな体験談をご紹介。",
    url: "https://compath-seitai.vercel.app/voice/",
  },
};

const reviews = [
  {
    name: "M.S",
    profile: "32歳・産後骨盤矯正",
    tag: "産後骨盤矯正",
    text: "産後3ヶ月から通い始め、骨盤の歪みが少しずつ改善されています。毎回丁寧にカウンセリングをしてもらえるので安心して施術を受けられます。体の変化を実感でき、育児が少し楽になった気がします。先生の説明もわかりやすく、セルフケアの方法も教えてもらえるので通院日以外も意識して生活できています。",
  },
  {
    name: "K.T",
    profile: "38歳・肩こり・姿勢矯正",
    tag: "肩こり改善",
    text: "長年の肩こりに悩んでいましたが、3回通っただけで驚くほど楽になりました。原因が姿勢のゆがみにあることを初めて知り、根本から改善してもらえました。デスクワークでも肩が重くなることが減り、集中力も上がった気がします。先生がとても丁寧で、毎回来るのが楽しみになっています。",
  },
  {
    name: "A.N",
    profile: "35歳・姿勢矯正・小顔矯正",
    tag: "姿勢矯正",
    text: "姿勢が悪いと長年言われていましたが、なかなか改善できずにいました。施術を受けてから、自然と背筋が伸びるようになり周りからも「なんか変わった？」と言われるように。施術中もリラックスできる雰囲気で、毎回癒されています。",
  },
  {
    name: "Y.H",
    profile: "41歳・腰痛・全身矯正",
    tag: "腰痛改善",
    text: "5年以上悩んでいた腰痛がこんなに楽になるとは思っていませんでした。原因が骨盤のゆがみだとわかり、根本から治療してもらえました。施術後は体が軽くなり、階段の上り下りが楽になりました。継続して通いたいと思います。",
  },
  {
    name: "R.O",
    profile: "29歳・産後ケア",
    tag: "産後骨盤矯正",
    text: "産後の骨盤矯正でお世話になっています。4回の施術で明らかに体型が変わってきました。授乳中でも安心して通えるということで、子育て中のママさんにもおすすめしたいです。先生が子育ての話も聞いてくれて、癒しの時間になっています。",
  },
];

export default function VoicePage() {
  return (
    <>
      <Header />
      <main className="max-w-[390px] mx-auto w-full flex flex-col">

        {/* Hero */}
        <section className="bg-[#2B1E1A] px-6 pt-10 pb-10 flex flex-col gap-3">
          <p className="text-[10px] tracking-[0.2em] text-[#C8A882] font-medium">CUSTOMER VOICE</p>
          <h1 className="text-[22px] font-bold text-white leading-snug tracking-tight">お客様の声</h1>
          <p className="text-[13px] text-[#B5A090] leading-relaxed">
            COMPATHに通ってくださった方々のリアルな声をお届けします
          </p>
        </section>

        {/* Reviews */}
        <section className="bg-[#F5F4F1] px-5 py-10 flex flex-col gap-5">
          {reviews.map((r, i) => (
            <article key={i} className="bg-white rounded-xl p-5 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D8D3CC] shrink-0" />
                  <div>
                    <p className="text-[13px] font-bold text-[#1A1918]">{r.name}</p>
                    <p className="text-[11px] text-[#999999]">{r.profile}</p>
                  </div>
                </div>
                <p className="text-[11px] text-[#C8A882] tracking-widest shrink-0">★★★★★</p>
              </div>
              <span className="self-start text-[10px] font-semibold text-[#3D8A5A] bg-[#EBF5EE] px-3 py-1 rounded-full tracking-wide">
                {r.tag}
              </span>
              <p className="text-[13px] text-[#444444] leading-[1.9]">{r.text}</p>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-[#1E2B22] px-6 py-12 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] tracking-[0.2em] text-[#7AAA8C] font-medium">FIRST VISIT</p>
            <h2 className="text-[17px] font-bold text-white leading-relaxed">
              あなたも体の変化を<br />体験してみませんか？
            </h2>
            <p className="text-[13px] text-[#7AAA8C]">初回限定 お試し施術 ¥3,980</p>
          </div>
          <Link href="/access/#contact" className="block text-center py-[14px] rounded-lg bg-[#3D8A5A] text-white font-bold text-[14px]">
            LINE で予約する
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
