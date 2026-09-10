import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "الشروط والأحكام | برج المبدع للأثاث المنزلي",
};

const sections = [
  {
    icon: "description",
    title: "مقدمة",
    content:
      "مرحباً بكم في برج المبدع للأثاث المنزلي. باستخدامكم لموقعنا الإلكتروني أو تطبيقنا، فإنكم توافقون على الالتزام بهذه الشروط والأحكام. يُرجى قراءتها بعناية قبل استخدام خدماتنا.\n\nتسري هذه الشروط على جميع المستخدمين:",
  },
  {
    icon: "person",
    title: "1. أهلية الاستخدام",
    items: [
      "يجب أن يكون عمرك 18 عاماً أو أكثر لاستخدام خدماتنا.",
      "يجب أن تكون المعلومات التي تقدمها دقيقة وصحيحة وكاملة.",
      "أنت مسؤول عن الحفاظ على سرية بيانات حسابك.",
    ],
  },
  {
    icon: "manage_accounts",
    title: "2. إنشاء الحساب",
    content: "عند إنشاء حساب، أنت توافق على:",
    items: [
      "تقديم معلومات صحيحة ودقيقة.",
      "تحديث بياناتك عند الحاجة.",
      "عدم مشاركة بيانات الدخول مع أي شخص آخر.",
      "إخطارنا فوراً في حال الاشتباه بأي استخدام غير مصرح به لحسابك.",
      "عدم إنشاء حسابات متعددة أو استخدام هوية مزيفة أو انتحال شخصية الآخرين.",
      "عدم استخدام الموقع لأي أغراض غير مشروعة أو مخالفة للأنظمة المعمول بها.",
      "نحتفظ بالحق في تعليق أو إنهاء حسابك في حال مخالفة هذه الشروط أو الاشتباه بنشاط احتيالي.",
    ],
  },
  {
    icon: "shopping_cart",
    title: "3. الطلبات والشراء",
    content: "عند إتمام عملية الشراء:",
    items: [
      "تأكيد الطلب لا يعني قبوله النهائي، ونحتفظ بحق رفض أي طلب لأسباب مشروعة.",
      "الأسعار قابلة للتغيير دون إشعار مسبق، وتُطبق الأسعار المعروضة وقت الطلب.",
      "يجب أن تكون معلومات الدفع صحيحة وكاملة.",
      "نحتفظ بحق إلغاء الطلبات في حال وجود أخطاء في الأسعار أو توفر المنتجات.",
      "سيتم إرسال تأكيد الطلب إلى بريدك الإلكتروني المسجل.",
      "أنت مسؤول عن دقة عنوان التوصيل، وقد تُطبق رسوم إضافية في حال التعديل.",
      "لا يمكن تعديل الطلب بعد تأكيده إلا بالتواصل مع خدمة العملاء.",
    ],
  },
  {
    icon: "payments",
    title: "4. الدفع",
    items: [
      "نقبل وسائل الدفع المعتمدة المعروضة على الموقع، وقد تتغير دون إشعار.",
      "جميع المبالغ بالريال السعودي وتشمل الضريبة المضافة إن وجدت.",
      "في حال فشل عملية الدفع، يقع على عاتقك التواصل مع جهة الإصدار.",
    ],
  },
  {
    icon: "language",
    title: "5. الملكية الفكرية",
    content:
      "جميع المحتويات (النصوص، الصور، الشعارات، التصاميم، الأكواد البرمجية، وغيرها) المنشورة على الموقع هي ملك حصري لبرج المبدع أو مرخصة له.\n\nيُحظر نسخ أو توزيع أو تعديل أي محتوى دون إذن كتابي مسبق منا.\n\nأي انتهاك لحقوق الملكية الفكرية سيُعرّض صاحبه للمساءلة القانونية. تُعدّ العلامات التجارية \"برج المبدع\" و\"Burj Al Mubdi\" ملكاً حصرياً للمؤسسة ولا يجوز استخدامها دون إذن.",
  },
  {
    icon: "email",
    title: "6. التواصل والإشعارات",
    content:
      "بتسجيلك في الموقع، توافق على تلقي رسائل إلكترونية تتعلق بطلباتك وحسابك. قد نرسل لك أيضاً عروضاً ترويجية، ويمكنك إلغاء الاشتراك في أي وقت. الإشعارات الرسمية المتعلقة بالخدمة لا يمكن إيقافها. يُعدّ البريد الإلكتروني المسجل هو وسيلة التواصل الرسمية معك.",
  },
  {
    icon: "verified_user",
    title: "7. الضمان والإرجاع",
    items: [
      "يحق لك إرجاع المنتج خلال 48 ساعة من الاستلام في حال وجود عيب مصنعي أو تلف ناتج عن الشحن.",
      "يجب أن يكون المنتج في حالته الأصلية وبتغليفه الأصلي.",
      "تستغرق عملية الاسترداد من 1 إلى 8 أيام عمل بعد استلام المنتج والتحقق منه.",
    ],
  },
  {
    icon: "handshake",
    title: "8. تحديد المسؤولية",
    content:
      "لا نتحمل المسؤولية عن أي أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام خدماتنا أو المنتجات المشتراة، بما في ذلك الأضرار الناجمة عن سوء الاستخدام أو الإهمال.",
  },
  {
    icon: "privacy_tip",
    title: "9. الخصوصية",
    content:
      "نلتزم بحماية خصوصيتك وفقاً لسياسة الخصوصية المعتمدة لدينا. نجمع بياناتك الضرورية فقط (كالاسم والعنوان ومعلومات الدفع) لإتمام طلباتك. لن نشارك بياناتك مع أطراف ثالثة إلا بموافقتك أو بموجب القانون.",
  },
  {
    icon: "info",
    title: "10. التعديلات",
    content:
      "نحتفظ بالحق في تعديل هذه الشروط في أي وقت، وسيتم إشعارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على الموقع. استمرارك في استخدام الخدمة بعد التعديل يُعدّ قبولاً للشروط الجديدة. يُنصح بمراجعة هذه الصفحة بانتظام للاطلاع على آخر التحديثات.",
  },
  {
    icon: "gavel",
    title: "11. القانون المطبق",
    content:
      "تخضع هذه الشروط لأنظمة المملكة العربية السعودية وتُفسَّر وفقاً لها. أي نزاع ينشأ عن هذه الشروط يُحال إلى الجهات القضائية المختصة في المملكة العربية السعودية.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main dir="rtl" className="max-w-[900px] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-16">
        {/* Hero */}
        <div className="text-center mb-6 sm:mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-secondary/10 mb-3 sm:mb-4">
            <span className="material-symbols-outlined text-secondary text-[28px] sm:text-[40px]">
              gavel
            </span>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-on-surface">
            الشروط والأحكام
          </h1>
          <p className="text-xs sm:text-base text-on-surface-variant mt-2 max-w-md mx-auto">
            يُرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4 sm:space-y-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white border border-outline-variant/15 rounded-2xl p-4 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-2.5 sm:gap-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-[18px] sm:text-[24px]">
                    {section.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base sm:text-lg font-bold text-on-surface mb-2">
                    {section.title}
                  </h2>
                  {section.content && (
                    <p className="text-sm sm:text-[15px] text-on-surface-variant leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  )}
                  {section.items && (
                    <ul className="mt-3 space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm sm:text-[15px] text-on-surface-variant"
                        >
                          <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
