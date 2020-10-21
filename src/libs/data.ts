export const hasPersianChar: (data: string) => boolean = (data: string) => {
  const rules = {
    arabic_alpha: "ةكىيًٍە",
    arabic_num: "٠١٢٣٤٥٦٧٨٩",
    persian_alpha: "ءآأؤإئابتثجحخدذرزسشصضطظعغفقلمنهوَُِّٕپچژکگھی",
    persian_num: "۰۱۲۳۴۵۶۷۸۹",
    punctuation_marks: "،؛؟ـ٪٫٬",
  };
  let rule: keyof typeof rules;
  for (rule in rules) {
    if (data.match(`[${rules[rule]}]`) !== null) return true;
  }
  return false;
};
