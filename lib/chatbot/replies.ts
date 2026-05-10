import { isArabic } from "./intent-detector";

export function r(en: string, ar: string, msg = "") {
  return isArabic(msg) ? ar : en;
}

export const REPLIES = {
  mainMenu: (msg = "") =>
    r(
      `Welcome to The Pet Dr\n\nHow can I help you today?\n\n1. Book an appointment\n2. Grooming\n3. Boarding\n4. Vaccination\n5. Ask a question / Enquiry\n6. Chat directly with our team\n7. Clinic info`,
      `أهلاً بك في The Pet Dr\n\nكيف أقدر أساعدك؟\n\n1. حجز موعد\n2. تزيين\n3. إيداع\n4. تطعيم\n5. استفسار\n6. تواصل مباشر مع فريقنا\n7. معلومات العيادة`,
      msg
    ),

  afterBooking: (bookingId: string, msg = "") =>
    r(
      `We've received your request\n\nBooking Ref: #${bookingId.slice(-6).toUpperCase()}\n\nOur team will confirm your appointment shortly.\n\nWhat would you like to do next?\n\n1. Chat directly with our team\n2. Back to main menu`,
      `وصلنا طلبك\n\nرقم الحجز: #${bookingId.slice(-6).toUpperCase()}\n\nفريقنا بيتواصل معك قريباً لتأكيد الموعد.\n\nماذا تريد الآن؟\n\n1. تحدث مع فريقنا مباشرة\n2. القائمة الرئيسية`,
      msg
    ),

  directChatIntro: (msg = "") =>
    r(
      `Sure! Type your message below and our team will respond on WhatsApp shortly.\n\n(Type menu anytime to go back)`,
      `تفضل! اكتب رسالتك وفريقنا بيرد عليك على WhatsApp قريباً.\n\n(اكتب menu للرجوع)`,
      msg
    ),

  directChatReceived: (msg = "") =>
    r(
      `Your message has been forwarded to our team. They'll reply to you shortly on WhatsApp.`,
      `وصلت رسالتك لفريقنا. بيردون عليك على WhatsApp قريباً.`,
      msg
    ),

  enquiryMenu: (msg = "") =>
    r(
      `What would you like to know?\n\n1. Clinic hours\n2. Location\n3. Services we offer\n4. Grooming prices\n5. Vaccination info\n6. Boarding info\n7. Something else\n\n(Type menu to go back)`,
      `ماذا تريد أن تعرف؟\n\n1. أوقات العمل\n2. الموقع\n3. خدماتنا\n4. أسعار التزيين\n5. معلومات التطعيم\n6. معلومات الإيداع\n7. استفسار آخر\n\n(اكتب menu للرجوع)`,
      msg
    ),

  clinicInfo: (msg = "") =>
    r(
      `The Pet Dr\n\nLocation: Sharjah, UAE\nMap: https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8\n\nHours:\n- Monday: Closed\n- Tuesday to Sunday: 10am to 9pm\n- Friday: 1pm to 10pm`,
      `The Pet Dr\n\nالموقع: الشارقة، الإمارات\nالخريطة: https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8\n\nأوقات العمل:\n- الإثنين: مغلق\n- الثلاثاء إلى الأحد: 10ص إلى 9م\n- الجمعة: 1م إلى 10م`,
      msg
    ),

  servicesInfo: (msg = "") =>
    r(
      `Our services at The Pet Dr\n\n- Veterinary Consultations\n- Grooming (Basic & Full)\n- Vaccinations\n- Boarding\n- Diagnostics & Lab\n- Dental Care\n- Holistic Wellness\n\nType a service name to book or ask more.`,
      `خدماتنا في The Pet Dr\n\n- استشارات بيطرية\n- تزيين (أساسي وكامل)\n- تطعيمات\n- إيداع\n- مختبر وتشخيص\n- العناية بالأسنان\n- الصحة الشاملة\n\nاكتب اسم الخدمة للحجز أو لمزيد من المعلومات.`,
      msg
    ),

  groomingInfo: (msg = "") =>
    r(
      `Grooming at The Pet Dr\n\nWe offer:\n- Basic Groom: bath, blow-dry, nail trim\n- Full Groom: bath, cut, styling, ear clean, teeth brush\n\nPricing depends on pet type, size and coat condition.\n\nWant to book a grooming session? Just type groom.`,
      `التزيين في The Pet Dr\n\nنقدم:\n- تزيين أساسي: استحمام، تجفيف، قص أظافر\n- تزيين كامل: استحمام، قص، تصفيف، تنظيف أذن، فرشاة أسنان\n\nالسعر يعتمد على نوع الحيوان والحجم وحالة الشعر.\n\nتبي تحجز جلسة تزيين؟ اكتب groom.`,
      msg
    ),

  vaccinationInfo: (msg = "") =>
    r(
      `Vaccinations at The Pet Dr\n\nWe provide core and non-core vaccines for:\n- Dogs: DHPP, Rabies, Bordetella\n- Cats: FVRCP, Rabies, FeLV\n- Rabbits: RHDV\n\nSchedule depends on your pet's age and history.\n\nType vaccine to book.`,
      `التطعيمات في The Pet Dr\n\nنقدم التطعيمات الأساسية لـ:\n- الكلاب\n- القطط\n- الأرانب\n\nالجدول يعتمد على عمر حيوانك وتاريخه الطبي.\n\nاكتب vaccine للحجز.`,
      msg
    ),

  boardingInfo: (msg = "") =>
    r(
      `Boarding at The Pet Dr\n\nSafe, comfortable stays for dogs and cats.\n\n- Climate-controlled rooms\n- Daily feeding and care\n- Vet on-site\n- 24/7 monitoring\n\nRequirements: Up-to-date vaccinations\n\nType boarding to check availability.`,
      `الإيداع في The Pet Dr\n\nإقامة آمنة ومريحة للكلاب والقطط.\n\n- غرف مكيفة\n- تغذية يومية ورعاية\n- طبيب بيطري موجود\n- مراقبة 24/7\n\nالشرط: تطعيمات محدّثة\n\nاكتب boarding للاستفسار عن التوفر.`,
      msg
    ),

  confirmationStatus: (status: "confirmed" | "rejected", date?: string, time?: string, reason?: string, msg = "") => {
    if (status === "confirmed") {
      return r(
        `Your appointment at The Pet Dr has been confirmed.\n\nDate: ${date}\nTime: ${time}\n\nSee you soon.\n\nLocation: https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8\n\nNeed help? Type chat to speak with our team.`,
        `تم تأكيد موعدك في The Pet Dr.\n\nالتاريخ: ${date}\nالوقت: ${time}\n\nنراك قريباً.\n\nالموقع: https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8\n\nتحتاج مساعدة؟ اكتب chat`,
        msg
      );
    }
    return r(
      `We're sorry, we're unable to confirm your appointment for the requested time.\n\n${reason ? `Reason: ${reason}\n\n` : ""}Our team will suggest alternative slots shortly.\n\nType book to reschedule or chat to speak with us directly.`,
      `نأسف، لم نتمكن من تأكيد موعدك في الوقت المطلوب.\n\n${reason ? `السبب: ${reason}\n\n` : ""}فريقنا سيقترح مواعيد بديلة قريباً.\n\nاكتب book لإعادة الحجز أو chat للتحدث معنا.`,
      msg
    );
  },

  outsideHours: (msg = "") =>
    r(
      `Thank you for messaging The Pet Dr.\nWe're currently closed. Our team will reply once the clinic reopens.\n\nType hours to see our opening times.`,
      `شكراً لتواصلك مع The Pet Dr.\nنحن مغلقون الآن. فريقنا بيرد عليك بعد ما تفتح العيادة.\n\nاكتب hours لمعرفة أوقات العمل.`,
      msg
    ),

  urgentReply: (msg = "") =>
    r(
      `This may need urgent veterinary attention.\n\nPlease come to the clinic immediately or call us now.\n\nLocation: https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8`,
      `هذا يحتاج رعاية طارئة.\n\nتفضل للعيادة فوراً أو اتصل بنا الآن.\n\nالموقع: https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8`,
      msg
    ),

  priceReply: (service: string, msg = "") =>
    r(
      `Pricing for ${service} depends on your pet's size, breed, and condition. Please contact us directly or visit the clinic for an accurate quote.\n\nType chat to speak with our team.`,
      `سعر ${service} يعتمد على حجم الحيوان وسلالته وحالته. تواصل معنا مباشرة أو زر العيادة للحصول على سعر دقيق.\n\nاكتب chat للتحدث مع فريقنا.`,
      msg
    ),

  thankYou: (msg = "") =>
    r(
      `You're welcome. Is there anything else I can help with?`,
      `العفو. في شيء ثاني أقدر أساعد فيه؟`,
      msg
    ),

  handover: (msg = "") =>
    r("Our team will assist you shortly.", "فريقنا بيتواصل معك قريباً.", msg),

  askName: (msg = "") =>
    r("May I have your name please?", "شو اسمك الكريم؟", msg),

  askPhone: (msg = "") =>
    r("And your mobile number?", "ورقم جوالك؟", msg),

  askPetName: (msg = "") =>
    r("What is your pet's name?", "شو اسم حيوانك؟", msg),

  askSpecies: (msg = "") =>
    r("Is your pet a cat, dog, bird, or rabbit?", "حيوانك قطة، كلب، طير، أو أرنب؟", msg),

  askConcern: (msg = "") =>
    r("What is the reason for the visit?", "شو سبب الزيارة؟", msg),

  askDate: (msg = "") =>
    r("What date works for you? (e.g. tomorrow, Friday)", "أي يوم يناسبك؟ (مثل: بكرة، الجمعة)", msg),

  askTime: (msg = "") =>
    r("What time works for you? (e.g. 11am, 3pm)", "أي وقت يناسبك؟ (مثل: 11 الصبح، 3 العصر)", msg),

  askGroomingSize: (msg = "") =>
    r("Is your dog small, medium, or large?", "كلبك صغير، وسط، أو كبير؟", msg),

  askGroomingType: (msg = "") =>
    r("Basic groom or full groom?", "تزيين أساسي أو كامل؟", msg),

  askBoardingDates: (msg = "") =>
    r("What dates do you need? (check-in to check-out)", "من متى لمتى؟", msg),

  askVaccinated: (msg = "") =>
    r("Is your pet vaccinated? Do you have their records?", "حيوانك مطعّم؟ عندك السجل؟", msg),

  askPetAge: (msg = "") =>
    r("How old is your pet?", "كم عمر حيوانك؟", msg),

  cancelFlow: (msg = "") =>
    r("No problem. Is there anything else I can help with?", "لا بأس. في شيء ثاني أقدر أساعد فيه؟", msg),

  unknown: (msg = "") =>
    r("I'm here to help. Type menu to see all options.", "أنا هنا لأساعدك. اكتب menu لعرض الخيارات.", msg),

  groomingReminder: (msg = "") =>
    r("Please bring your pet's vaccination card.", "لا تنسى تجيب بطاقة التطعيم.", msg),

  groomingVaccineReminder: (msg = "") =>
    r("Reminder: Please bring your pet's vaccination records to the appointment.", "تذكير: لا تنسى تجيب سجل تطعيمات حيوانك للموعد.", msg),

  confirmSummary: (data: Record<string, string>, msg = "") => {
    const en = `Here is your booking summary\n\nName: ${data.client_name ?? "—"}\nPhone: ${data.phone ?? "—"}\nPet: ${data.pet_name ?? "—"} (${data.species ?? "—"})\nService: ${data.service ?? "—"}\nDate: ${data.preferred_date ?? "—"}\nTime: ${data.preferred_time ?? "—"}\n\nWe've received your request. Our team will confirm shortly.\n\nWhat's next?\n1. Chat with our team directly\n2. Back to main menu`;
    const ar = `ملخص حجزك\n\nالاسم: ${data.client_name ?? "—"}\nالهاتف: ${data.phone ?? "—"}\nالحيوان: ${data.pet_name ?? "—"} (${data.species ?? "—"})\nالخدمة: ${data.service ?? "—"}\nالتاريخ: ${data.preferred_date ?? "—"}\nالوقت: ${data.preferred_time ?? "—"}\n\nوصلنا طلبك. فريقنا بيتواصل معك قريباً.\n\nماذا الآن؟\n1. تحدث مع فريقنا مباشرة\n2. القائمة الرئيسية`;
    return r(en, ar, msg);
  },
};