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
    name: "M.S さん",
    age: "32歳",
    menu: "産後骨盤矯正",
    tag: "産後骨盤矯正",
    tagColor: "#D89575",
    tagBg: "#FEF0E8",
    avatarColor: "#D89575",
    text: "産後3ヶ月から通い始め、骨盤の歪みが少しずつ改善されています。毎回丁寧にカウンセリングをしてもらえるので安心して施術を受けられます。体の変化を実感でき、育児が少し楽になった気がします。先生の説明もわかりやすく、セルフケアの方法も教えてもらえるので通院日以外も意識して生活できています。",
  },
  {
    name: "K.T さん",
    age: "38歳",
    menu: "肩こり・姿勢矯正",
    tag: "肩こり・姿勢矯正",
    tagColor: "#3D8A5A",
    tagBg: "#EBF5EE",
    avatarColor: "#3D8A5A",
    text: "長年の肩こりに悩んでいましたが、3回通っただけで驚くほど楽になりました。原因が姿勢のゆがみにあることを初めて知り、根本から改善してもらえました。デスクワークでも肩が重くなることが減り、集中力も上がった気がします。先生がとても丁寧で、毎回来るのが楽しみになっています。",
  },
  {
    name: "A.N さん",
    age: "35歳",
    menu: "姿勢矯正・小顔矯正",
    tag: "小顔矯正",
    tagColor: "#D89575",
    tagBg: "#FEF0E8",
    avatarColor: "#D89575",
    text: "姿勢が悪いと長年言われていましたが、なかなか改善できずにいました。COMPATHさんで施術を受けてから、自然と背筋が伸びるようになり周りからも「なんか変わった？」と言われるように。小顔効果もあって嬉しいです！施術中もリラックスできる雰囲気で、毎回癒されています。",
  },
  {
    name: "Y.H さん",
    age: "41歳",
    menu: "腰痛・全身矯正",
    tag: "腰痛改善",
    tagColor: "#3D8A5A",
    tagBg: "#EBF5EE",
    avatarColor: "#3D8A5A",
    text: "5年以上悩んでいた腰痛がこんなに楽になるとは思っていませんでした。他の整体院に通っていましたが改善せず、こちらに来て原因が骨盤のゆがみだとわかりました。施術後は体が軽くなり、階段の上り下りが楽になりました。継続して通いたいと思います。",
  },
  {
    name: "R.O さん",
    age: "29歳",
    menu: "産後骨盤矯正",
    tag: "産後ケア",
    tagColor: "#D89575",
    tagBg: "#FEF0E8",
    avatarColor: "#D89575",
    text: "産後の骨盤矯正でお世話になっています。産後からウエストが戻らず悩んでいましたが、4回の施術で明らかに体型が変わってきました！授乳中でも安心して通えるということで、子育て中のママさんにもおすすめしたいです。先生が子育ての話も聞いてくれて、癒しの時間になっています。",
  },
];

export default function VoicePage() {
  return (
    <>
      <Header />
      <main className="max-w-[390px] mx-auto w-full flex flex-col">

        {/* Hero */}
        <section className="bg-[#D89575] px-5 py-8 flex flex-col items-center gap-3">
          <h1 className="text-[22px] font-bold text-white tracking-tight text-center">お客様の声</h1>
          <p className="text-[13px] text-[#F8E8DF] text-center leading-relaxed">
            COMPATHに通ってくださった方々のリアルな声をお届けします
          </p>
        </section>

        {/* Reviews */}
        <section className="bg-[#F5F4F1] px-5 py-10 flex flex-col gap-6">
          {reviews.map((r, i) => (
            <article key={i} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full shrink-0" style={{ backgroundColor: r.avatarColor }} />
                  <div>
                    <p className="text-sm font-bold text-[#1A1918]">{r.name}</p>
                    <p className="text-[12px] text-[#666666]">{r.age}・{r.menu}</p>
                  </div>
                </div>
                <p className="text-sm text-[#D89575]">★★★★★</p>
              </div>
              <span
                className="self-start text-[11px] font-semibold px-3 py-1 rounded-full"
                style={{ color: r.tagColor, backgroundColor: r.tagBg }}
              >
                {r.tag}
              </span>
              <p className="text-[13px] text-[#333333] leading-relaxed">{r.text}</p>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-[#3D8A5A] px-6 py-10 flex flex-col gap-4">
          <h2 className="text-[15px] font-bold text-white leading-relaxed">あなたも体の変化を体験してみませんか？</h2>
          <p className="text-sm text-[#A8D5B8]">初回限定 お試し施術 ¥3,980</p>
          <Link href="/access/#contact" className="block text-center py-4 rounded-xl bg-white text-[#3D8A5A] font-bold text-base">LINE で予約する →</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
