import { isArabic } from "./intent-detector";

export function r(en: string, ar: string, msg = "") {
  return isArabic(msg) ? ar : en;
}

export const REPLIES = {
  mainMenu: (msg = "") =>
    r(
      `Welcome to The Pet Dr 🤍\n\nHow can I help you today?\n\n1️⃣ Book an appointment\n2️⃣ Grooming\n3️⃣ Boarding\n4️⃣ Vaccination\n5️⃣ Ask a question / Enquiry\n6️⃣ Chat directly with our team\n7️⃣ Clinic info`,
      `أهلاً بك في The Pet Dr 🤍\n\nكيف أقدر أساعدك؟\n\n1️⃣ حجز موعد\n2️⃣ تزيين\n3️⃣ إيداع\n4️⃣ تطعيم\n5️⃣ استفسار\n6️⃣ تواصل مباشر مع فريقنا\n7️⃣ معلومات العيادة`,
      msg
    ),

  afterBooking: (bookingId: string, msg = "") =>
    r(
      `We've received your request 🤍\n\nBooking Ref: #${bookingId.slice(-6).toUpperCase()}\n\nOur team will confirm your appointment shortly.\n\nWhat would you like to do next?\n\n1️⃣ Chat directly with our team\n2️⃣ Back to main menu`,
      `وصلنا طلبك 🤍\n\nرقم الحجز: #${bookingId.slice(-6).toUpperCase()}\n\nفريقنا بيتواصل معك قريباً لتأكيد الموعد.\n\nماذا تريد الآن؟\n\n1️⃣ تحدث مع فريقنا مباشرة\n2️⃣ القائمة الرئيسية`,
      msg
    ),

  directChatIntro: (msg = "") =>
    r(
      `Sure! Type your message below and our team will respond on WhatsApp shortly 🤍\n\n(Type *menu* anytime to go back)`,
      `تفضل! اكتب رسالتك وفريقنا بيرد عليك على WhatsApp قريباً 🤍\n\n(اكتب *menu* للرجوع)`,
      msg
    ),

  directChatReceived: (msg = "") =>
    r(
      `Your message has been forwarded to our team 🤍 They'll reply to you shortly on WhatsApp.`,
      `وصلت رسالتك لفريقنا 🤍 بيردون عليك على WhatsApp قريباً.`,
      msg
    ),

  enquiryMenu: (msg = "") =>
    r(
      `What would you like to know? 🤍\n\n1️⃣ Clinic hours\n2️⃣ Location\n3️⃣ Services we offer\n4️⃣ Grooming prices\n5️⃣ Vaccination info\n6️⃣ Boarding info\n7️⃣ Something else\n\n(Type *menu* to go back)`,
      `ماذا تريد أن تعرف؟ 🤍\n\n1️⃣ أوقات العمل\n2️⃣ الموقع\n3️⃣ خدماتنا\n4️⃣ أسعار التزيين\n5️⃣ معلومات التطعيم\n6️⃣ معلومات الإيداع\n7️⃣ استفسار آخر\n\n(اكتب *menu* للرجوع)`,
      msg
    ),

  clinicInfo: (msg = "") =>
    r(
      `The Pet Dr 🐾\n\n📍 Sharjah, UAE\n🗺 https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8\n\n🕐 Hours:\n• Mon: Closed\n• Tue–Sun: 10am – 9pm\n• Friday: 1pm – 10pm`,
      `The Pet Dr 🐾\n\n📍 الشارقة، الإمارات\n🗺 https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8\n\n🕐 أوقات العمل:\n• الإثنين: مغلق\n• الثلاثاء–الأحد: 10ص – 9م\n• الجمعة: 1م – 10م`,
      msg
    ),

  servicesInfo: (msg = "") =>
    r(
      `Our services at The Pet Dr 🤍\n\n🩺 Veterinary Consultations\n✂️ Grooming (Basic & Full)\n💉 Vaccinations\n🏨 Boarding\n🔬 Diagnostics & Lab\n🦷 Dental Care\n🌿 Holistic Wellness\n\nType a service name to book or ask more!`,
      `خدماتنا في The Pet Dr 🤍\n\n🩺 استشارات بيطرية\n✂️ تزيين (أساسي وكامل)\n💉 تطعيمات\n🏨 إيداع\n🔬 مختبر وتشخيص\n🦷 العناية بالأسنان\n🌿 الصحة الشاملة\n\nاكتب اسم الخدمة للحجز أو لمزيد من المعلومات!`,
      msg
    ),

  groomingInfo: (msg = "") =>
    r(
      `Grooming at The Pet Dr ✂️\n\nWe offer:\n• Basic Groom – bath, blow-dry, nail trim\n• Full Groom – bath, cut, styling, ear clean, teeth brush\n\nPricing depends on pet type, size & coat condition.\n\nWant to book a grooming session? Just type *groom* 🤍`,
      `التزيين في The Pet Dr ✂️\n\nنقدم:\n• تزيين أساسي – استحمام، تجفيف، قص أظافر\n• تزيين كامل – استحمام، قص، تصفيف، تنظيف أذن، فرشاة أسنان\n\nالسعر يعتمد على نوع الحيوان والحجم وحالة الشعر.\n\nتبي تحجز جلسة تزيين؟ اكتب *groom* 🤍`,
      msg
    ),

  vaccinationInfo: (msg = "") =>
    r(
      `Vaccinations at The Pet Dr 💉\n\nWe provide core and non-core vaccines for:\n🐶 Dogs – DHPP, Rabies, Bordetella\n🐱 Cats – FVRCP, Rabies, FeLV\n🐰 Rabbits – RHDV\n\nSchedule depends on your pet's age and history.\n\nType *vaccine* to book 🤍`,
      `التطعيمات في The Pet Dr 💉\n\nنقدم التطعيمات الأساسية لـ:\n🐶 الكلاب\n🐱 القطط\n🐰 الأرانب\n\nالجدول يعتمد على عمر حيوانك وتاريخه الطبي.\n\nاكتب *vaccine* للحجز 🤍`,
      msg
    ),

  boardingInfo: (msg = "") =>
    r(
      `Boarding at The Pet Dr 🏨\n\nSafe, comfortable stays for dogs and cats.\n\n• Climate-controlled rooms\n• Daily feeding & care\n• Vet on-site\n• 24/7 monitoring\n\nRequirements: Up-to-date vaccinations\n\nType *boarding* to check availability 🤍`,
      `الإيداع في The Pet Dr 🏨\n\nإقامة آمنة ومريحة للكلاب والقطط.\n\n• غرف مكيفة\n• تغذية يومية ورعاية\n• طبيب بيطري موجود\n• مراقبة 24/7\n\nالشرط: تطعيمات محدّثة\n\nاكتب *boarding* للاستفسار عن التوفر 🤍`,
      msg
    ),

  confirmationStatus: (status: "confirmed" | "rejected", date?: string, time?: string, reason?: string, msg = "") => {
    if (status === "confirmed") {
      return r(
        `Great news! 🎉 Your appointment at The Pet Dr has been confirmed!\n\n📅 Date: ${date}\n⏰ Time: ${time}\n\nSee you soon 🤍\n\n📍 https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8\n\nNeed help? Type *chat* to speak with our team.`,
        `أخبار رائعة! 🎉 تم تأكيد موعدك في The Pet Dr!\n\n📅 التاريخ: ${date}\n⏰ الوقت: ${time}\n\nنراك قريباً 🤍\n\n📍 https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8\n\nتحتاج مساعدة؟ اكتب *chat*`,
        msg
      );
    }
    return r(
      `We're sorry, we're unable to confirm your appointment for the requested time 🤍\n\n${reason ? `Reason: ${reason}\n\n` : ""}Our team will suggest alternative slots shortly.\n\nType *book* to reschedule or *chat* to speak with us directly.`,
      `نأسف، لم نتمكن من تأكيد موعدك في الوقت المطلوب 🤍\n\n${reason ? `السبب: ${reason}\n\n` : ""}فريقنا سيقترح مواعيد بديلة قريباً.\n\nاكتب *book* لإعادة الحجز أو *chat* للتحدث معنا.`,
      msg
    );
  },

  outsideHours: (msg = "") =>
    r(
      `Thank you for messaging The Pet Dr 🤍\nWe're currently closed. Our team will reply once the clinic reopens.\n\nType *hours* to see our opening times.`,
      `شكراً لتواصلك مع The Pet Dr 🤍\nنحن مغلقون الآن. فريقنا بيرد عليك بعد ما تفتح العيادة.\n\nاكتب *hours* لمعرفة أوقات العمل.`,
      msg
    ),

  urgentReply: (msg = "") =>
    r(
      `⚠️ This may need urgent veterinary attention.\n\nPlease come to the clinic immediately or call us now 🤍\n\n📍 https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8`,
      `⚠️ هذا يحتاج رعاية طارئة.\n\nتفضل للعيادة فوراً أو اتصل بنا الآن 🤍\n\n📍 https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8`,
      msg
    ),

  handover: (msg = "") =>
    r("Our team will assist you shortly 🤍", "فريقنا بيتواصل معك قريب 🤍", msg),
  askName: (msg = "") => r("May I have your name please? 🤍", "شو اسمك الكريم؟ 🤍", msg),
  askPhone: (msg = "") => r("And your mobile number? 📱", "ورقم جوالك؟ 📱", msg),
  askPetName: (msg = "") => r("What's your pet's name? 🐾", "شو اسم حيوانك؟ 🐾", msg),
  askSpecies: (msg = "") => r("Is your pet a cat or dog? 🐱🐶", "قطة ولا كلب؟ 🐱🐶", msg),
  askConcern: (msg = "") => r("What's the reason for the visit? 🤍", "شو سبب الزيارة؟ 🤍", msg),
  askDate: (msg = "") => r("What date works for you? (e.g. tomorrow, Friday) 📅", "أي يوم يناسبك؟ 📅", msg),
  askTime: (msg = "") => r("What time? (e.g. 11am, 3pm) ⏰", "أي وقت؟ ⏰", msg),
  askGroomingSize: (msg = "") => r("Is your dog small, medium, or large? 🐶", "كلبك صغير، وسط، أو كبير؟ 🐶", msg),
  askGroomingType: (msg = "") => r("Basic groom or full groom? ✂️", "تزيين أساسي أو كامل؟ ✂️", msg),
  askBoardingDates: (msg = "") => r("What dates do you need? (check-in to check-out) 🏨", "من متى لمتى؟ 🏨", msg),
  askVaccinated: (msg = "") => r("Is your pet vaccinated? Do you have their records? 💉", "حيوانك مطعّم؟ عندك السجل؟ 💉", msg),
  askPetAge: (msg = "") => r("How old is your pet? 🐾", "كم عمر حيوانك؟ 🐾", msg),
  cancelFlow: (msg = "") => r("No problem 🤍 Is there anything else I can help with?", "لا بأس 🤍 في شيء ثاني أقدر أساعد فيه؟", msg),
  unknown: (msg = "") => r("I'm here to help 🤍 Type *menu* to see all options.", "أنا هنا لأساعدك 🤍 اكتب *menu* لعرض الخيارات.", msg),
  groomingReminder: (msg = "") => r("Please bring your pet's vaccination card 🤍", "لا تنسى تجيب بطاقة التطعيم 🤍", msg),

  confirmSummary: (data: Record<string, string>, bookingId: string, msg = "") => {
    const ref = `#${bookingId.slice(-6).toUpperCase()}`;
    const en = `Here's your booking summary 🤍\n\n👤 ${data.client_name ?? "—"}\n📱 ${data.phone ?? "—"}\n🐾 ${data.pet_name ?? "—"} (${data.species ?? "—"})\n🏥 ${data.service ?? "—"}\n📅 ${data.preferred_date ?? "—"}\n⏰ ${data.preferred_time ?? "—"}\n\nRef: ${ref}\n\nWe've received your request 🤍 Our team will confirm shortly.\n\nWhat's next?\n1️⃣ Chat with our team directly\n2️⃣ Back to main menu`;
    const ar = `ملخص حجزك 🤍\n\n👤 ${data.client_name ?? "—"}\n📱 ${data.phone ?? "—"}\n🐾 ${data.pet_name ?? "—"} (${data.species ?? "—"})\n🏥 ${data.service ?? "—"}\n📅 ${data.preferred_date ?? "—"}\n⏰ ${data.preferred_time ?? "—"}\n\nرقم الحجز: ${ref}\n\nوصلنا طلبك 🤍 فريقنا بيتواصل معك قريباً.\n\nماذا الآن؟\n1️⃣ تحدث مع فريقنا مباشرة\n2️⃣ القائمة الرئيسية`;
    return r(en, ar, msg);
  },
};