import Link from "next/link";

const categories = [
  {
    label: "غرفة النوم",
    icon: "bed",
    desc: "طقم نوم ومراتب فاخرة",
    image: "/bed.webp",
    href: "/products?category=bedroom",
  },
  {
    label: "غرفة المعيشة",
    icon: "weekend",
    desc: "أثاث وديكور عصري",
    image: "/hero.webp",
    href: "/products?category=living_room",
  },
  {
    label: "غرفة الطعام",
    icon: "dining",
    desc: "طاولات وكراسي أنيقة",
    image: "/food.webp",
    href: "/products?category=outdoor_furniture",
  },
];

export default function ProductCategories() {
  return (
    <section dir="rtl" className="py-10 sm:py-14 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-7">
        <div className="w-1 h-7 bg-secondary rounded-full" />
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-on-surface">تسوق حسب القسم</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((cat) => (
          <div key={cat.href} className="group relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[260px] sm:h-[320px]">
            <img
              src={cat.image}
              alt={cat.label}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
              <span className="material-symbols-outlined text-white/80 text-[32px] mb-2">{cat.icon}</span>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{cat.label}</h3>
              <p className="text-white/70 text-xs sm:text-sm mb-4">{cat.desc}</p>
              <Link
                href={cat.href}
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all w-fit"
              >
                تسوق الآن
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
