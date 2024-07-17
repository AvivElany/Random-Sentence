'use strict'

const title = document.querySelector('.card-header');
const kind = document.querySelector('.card-title');
const generator = document.querySelector('#generator');
const param = document.querySelector('.card-text');
let sentence = "";

const CNStorage = [
{kind:"משפט צ'אק נוריס", id:"אחת", sentence:"צ'אק נוריס לא מציית לחוק, החוק מציית לצ'אק נוריס."},
{kind:"משפט צ'אק נוריס", id:"שתיים", sentence:"צ'אק נוריס ישן עם אור בלילה לא מפני שהוא מפחד מהחושך, אלא כי החושך מפחד מצ'אק נוריס."},
{kind:"משפט צ'אק נוריס", id:"שלוש", sentence:"כשצ'אק נוריס עושה שכיבות סמיכה, הוא לא עולה ויורד אלא דוחף את כדור הארץ כלפי מטה."},
{kind:"משפט צ'אק נוריס", id:"ארבע", sentence:"-צ'אק נוריס יכול לרקוד על שתי חתונות."},
{kind:"משפט צ'אק נוריס", id:"חמש", sentence:"צ'אק נוריס לא ישן, הוא מחכה."},
{kind:"משפט צ'אק נוריס", id:"שש", sentence:"אין דבר כזה אבולוציה, אלא רק שורה של יצורים שצ'אק נוריס הרשה להם לחיות."},
{kind:"משפט צ'אק נוריס", id:"שבע", sentence:"כשצ'אק נוריס נכנס לחדר, הוא לא מדליק את האור, הוא מכבה את החושך."},
{kind:"משפט צ'אק נוריס", id:"שמונה", sentence:"צ'אק נוריס בעט בטלוויזיה. המציא את המסך השטוח."},
{kind:"משפט צ'אק נוריס", id:"תשע", sentence:"כשצ'אק נוריס חותך בצל הבצל בוכה."},
{kind:"משפט צ'אק נוריס", id:"עשר", sentence:"צ'אק נוריס לא צריך GPS. הוא מחליט איפה הוא נמצא."},
{kind:"משפט צ'אק נוריס", id:"אחת עשרה", sentence:"צ'אק נוריס יכול להבעיר מדורה עי שפשןף של שתי קוביות קרח."},
{kind:"משפט צ'אק נוריס", id:"שתיים עשרה", sentence:"צ'אק נוריס זרק רימון והרג 50 איש. ואז הרימון התפוצץ."},
{kind:"משפט צ'אק נוריס", id:"שלוש עשרה", sentence:"צ'אק נוריס יכול לקטוף תפוחים מעץ תפוזים ולהכין מהם לימונדה."},
{kind:"משפט צ'אק נוריס", id:"ארבע עשרה", sentence:"צ'אק נוריס בנה את בית החולים שבו הוא נולד."},
{kind:"משפט צ'אק נוריס", id:"חמש עשרה", sentence:"צ'אק נוריס יכול לאפות עוגה בפריזר."},
{kind:"משפט צ'אק נוריס", id:"שש עשרה", sentence:"צ׳אק נוריס מסתכל במראה ולא רואה כלום למה? כי צ׳אק נוריס יש רק אחד"},
{kind:"משפט צ'אק נוריס", id:"שבע עשרה", sentence:"צ'אק נוריס ברא את אלוהים ביום שבת המנוחה, שלפני יום ראשון"},
{kind:"משפט צ'אק נוריס", id:"שמונה עשרה", sentence:"צ׳אק נוריס לא כפוף לחוקי מרפי"},
{kind:"משפט צ'אק נוריס", id:"תשע עשרה", sentence:"כשאלכסנדר גרהם בל המציא את הטלפון היו לו 3 שיחות שלא נענו מצ'אק נוריס"},
{kind:"משפט צ'אק נוריס", id:"עשרים", sentence:"תאריך מותו של צ'אק נוריס היה לפני 20 שנה אבל מלאך המוות מפחד להודיע לו את זה."},
{kind:"משפט צ'אק נוריס", id:"עשרים ואחת", sentence:"צ'אק נוריס וסופרמן עשו פעם קרב ביניהם בהתערבות. המפסיד יהיה חייב ללבוש תחתונים אדומים מחוץ למכנסיים."},
{kind:"משפט צ'אק נוריס", id:"עשרים ושתיים", sentence:"צ'אק נוריס ספר עד אין סוף – פעמיים."},
{kind:"משפט צ'אק נוריס", id:"עשרים ושלוש", sentence:"צ'אק נוריס יכול להדליק אש באמצעות שפשוף 2 קוביות קרח."},
{kind:"משפט צ'אק נוריס", id:"עשרים וארבע", sentence:"צ'אק נוריס עשה קורס פולסטאק בתקופת האבן."},
{kind:"משפט צ'אק נוריס", id:"עשרים וחמש", sentence:"צ'אק נוריס לא מדליק את האור, הוא מכבה את החושך."},
];

const murphyStorage = [
{kind:"חוק מרפי", id:"אחת", sentence:"מה שיכול להשתבש, תמיד ישתבש."},
{kind:"חוק מרפי", id:"שתיים", sentence:"הבגד שאתה צריך יהיה בתחתית הערימה."},
{kind:"חוק מרפי", id:"שלוש", sentence:"פרוסה עם ריבה תמיד תיפול על הצד המרוח."},
{kind:"חוק מרפי", id:"ארבע", sentence:"מי שנוחר הכי חזק – תמיד יירדם ראשון."},
{kind:"חוק מרפי", id:"חמש", sentence:"ביום שהחלטת לא להביא מטרייה – יירד גשם."},
{kind:"חוק מרפי", id:"שש", sentence:"עניבה חדשה מושכת תמיד את מרק היום."},
{kind:"חוק מרפי", id:"שבע", sentence:"הדבר ששכחת לקנות, הוא הדבר שגרם לך ללכת לקניות."},
{kind:"חוק מרפי", id:"שמונה", sentence:"השירותים תמיד ריקים, עד שאתה צריך להשתמש בהם."},
{kind:"חוק מרפי", id:"תשע", sentence:"מלבד המצרכים להם אתה זקוק, הכול בחנות יהיה בהוזלה."},
{kind:"חוק מרפי", id:"עשר", sentence:"אם בחרת ללכת בדרך כלשהי, היה סמוך ובטוח כי יש דרך קלה יותר."},
{kind:"חוק מרפי", id:"אחת עשרה", sentence:"כשתרצה להראות לטכנאי את הבעיה במכשיר, הוא יתחיל לעבוד כמו שצריך. (תסמונת החלוק הלבן)"},
{kind:"חוק מרפי", id:"שתיים עשרה", sentence:"ככול שאתה יותר אוהב את החולצה, כך גובר הסיכוי שלה להתלכלך."},
{kind:"חוק מרפי", id:"שלוש עשרה", sentence:"רק אחרי שאתה מתחתן, מלכת הכיתה תחזר אחריך"},
{kind:"חוק מרפי", id:"ארבע עשרה", sentence:"ברגע שדיילות מגישות קפה בטיסה, מתחילים זעזועים כתוצאה מכיסי אוויר."},
{kind:"חוק מרפי", id:"חמש עשרה", sentence:"ברגע שיידלק השלט 'נא הדקו חגורות' בטיסה אתה תצטרך לשירותים."},
{kind:"חוק מרפי", id:"שש עשרה", sentence:"מספר הפעמים שהלחם ייפול עם הצד של החמאה כלפי מטה, עולה ביחס ישר למחיר של השטיח."},
{kind:"חוק מרפי", id:"שבע עשרה", sentence:"המבצע ייצא לחנויות בדיוק יום אחד אחרי שכבר קנית את המוצר."},
{kind:"חוק מרפי", id:"שמונה עשרה", sentence:"תתחיל מלחמה בדיוק ביום שתוכל להגיד שהגשמת את עצמך"},
{kind:"חוק מרפי", id:"תשע עשרה", sentence:"רק כאשר תתחמם במיטה ותרגיש בנוחות מקסימלית, תגלה ששכחת לכבות את האור בסלון."},
{kind:"חוק מרפי", id:"עשרים", sentence:"אם מישהו תמיד טועה, הוא יהיה צודק בפעם דווקא כשתחליט לא להקשיב לו יותר."},
{kind:"חוק מרפי", id:"עשרים ואחת", sentence:"כשאתה צריך להיזכר במשהו, לעולם לא תזכור אותו. כשכבר לא תצטרך – מיד תיזכר."},
{kind:"חוק מרפי", id:"עשרים ושתיים", sentence:"תמיד כשתהייה לבד בבית ותתקלח, הטלפון יצלצל. ברגע שתצא מחדר המקלחת, ינתקו את השיחה."},
{kind:"חוק מרפי", id:"עשרים ושלוש", sentence:"אם אתה אומר שמשהו לא נכון, בסוף יסתבר שהוא נכון"},
{kind:"חוק מרפי", id:"עשרים וארבע", sentence:"תמיד תמצא את מה שאתה מחפש במקום האחרון בו תחשוב לחפש."},
{kind:"חוק מרפי", id:"עשרים וחמש", sentence:"לא משנה באיזה תור תבחרו, תמיד התור האחר יתקדם מהר יותר."},
];

const CNRandom = () => {
    let item = CNStorage[Math.floor(Math.random()*CNStorage.length)];
    kind.innerText =`${item.kind}`
    title.innerText =`בדיחה מספר ${item.id} מתוך ${CNStorage[CNStorage.length-1].id} `
    param.innerText =`${item.sentence}`
    sentence = item.sentence;

    saveHSToLS();

}

const murphyRandom = () => {
    let item = murphyStorage[Math.floor(Math.random()*murphyStorage.length)];
    kind.innerText =`${item.kind}`
    title.innerText =`חוק מספר ${item.id} מתוך ${murphyStorage[murphyStorage.length-1].id}`
    param.innerText =`${item.sentence}`
    sentence = item.sentence;
    
    saveHSToLS();

}

const saveHSToLS = () => {
        window.localStorage.setItem('sentence for today',sentence)
    }
















