// Data
const auditTypes = {
  digital: 'קמפוס דיגיטלי',
  tik: 'תיקי יסוד',
  telb: 'תל"ב – ליבה',
  sikhot: 'שיחות חתך'
};

const questions = {
  digital: {
    title: 'קמפוס דיגיטלי',
    topics: [
      {
        title: '1. קורסי אב',
        questions: [
          'האם קיימים קורסי אב התואמים את <em>תיק היסוד</em>?',
          'האם <em>כלי הערכה</em> מקושרים ממאגר התוכן היחידתי בעץ ניהול ההדרכה, אל קורס האב: מבחנים, דפי תצפית, משוב?',
          'האם <em>המידע המקצועי</em> מקושר מהתוכן אשר מופיע בתיק היסוד?',
          'האם <em>המשקלים</em> בעץ ההערכה תואמים את תיק היסוד?',
          'האם <em>המבחנים המתוקפים</em> נמצאים בקורס האב והאם נעשה שימוש ע"ג המערכת?'
        ]
      },
      {
        title: '2. ניהול תוכן',
        questions: [
          'האם קיימים <em>מצגות, סרטונים, לומדות</em> ושיעורים התומכים את נושאי הלימוד וההדרכה ולא קיימים בו תכנים שאינם הדרכתיים?',
          'האם קיימים <em>מאגרי שאלות</em> לפי נושאים, השאלות מוגדרות לפי רמת קושי וסיווג רלוונטי?'
        ]
      },
      {
        title: '3. פיתוח סגל',
        questions: [
          'האם מתקיימת במהלך הכנת הסגל <em>הדרכה בנושא הקמפוס הדיגיטלי לסגל</em> - הזנות על חניכים, שימוש בדוחות, שימוש בלו"ז ועוד?'
        ]
      },
      {
        title: '4. ניהול סביבת למידה',
        questions: [
          'האם מבצעים <em>סיכומי מחזור</em> לשם זיכרון ארגוני? (כולל שאלוני משוב לחניכים וסיכום כתוב הכולל הפק"ל)'
        ]
      }
    ]
  },
  tik: {
    title: 'תיקי יסוד',
    topics: [
      {
        title: '1. תכנית ההכשרה',
        questions: [
          'האם לקחים ושינויים עקרוניים בתכניות ההכשרה מעודכנים בתיקי היסוד?',
          'האם <em>תכניות הכשרה</em> מתקיימות בפועל בהתאמה לתיקי היסוד?',
          'האם לקראת כל מחזור הכשרה מתקיים <em>אישור תוכניות</em> אל מול תיק יסוד?'
        ]
      },
      {
        title: '2. מארזי הדרכה',
        questions: [
          'האם מוגדרות <em>מטרות הדרכתיות</em> במארזי ההדרכה ומבנה יחידת הלימוד והשיטה מותאמים להשגת המטרות?',
          '<em>מערכי השיעור</em> כוללים הנחיות מקצועיות והדרכתיות מספקות למדריך, ובמידת הצורך מותאמים להעברת השיעור עם מצגת/עזרים אחרים?'
        ]
      },
      {
        title: '3. מבחנים',
        questions: [
          'לכל מבחן עיוני קיימת הגדרה של נושא המבחן והמשקל היחסי שלהם במבחן (כמו טבלת מתאר)?',
          'קיימים <em>דפי הערכה</em> למבחן מעשי (תפעול אמצעים, התנסויות פיקודיות/הדרכתיות)?',
          'האם <em>המבחנים המעשיים והעיוניים</em> מאושרים על ידי גורם תורתי/מקצועי והדרכתי?'
        ]
      }
    ]
  },
  telb: {
    title: 'תל"ב – ליבה',
    topics: [
      {
        title: '1. אחריות וסמכות למקצוע ההדרכה ותהליכי הלמידה בדרגים',
        questions: [
          'הנחייה מקצועית ע"ב תורה והוראות (טנ"ה)',
          'הגדרת כשירויות',
          'אישור תיקי יסוד',
          'הנחייה ואישור ת"ע להדרכה: הכשרה, גרף אימונים והקצאת משאבים',
          'הנחייה להכשרה בחירום',
          'קיום מנגנונים ללמידה והערכה בין הבה"ד לשטח, ביצוע וניתוח משובי שטח',
          'הגדרת מדרג הסמכה',
          'העברת מקל בין בה"ד לשטח'
        ]
      },
      {
        title: '2. הסמכת בעלי התפקידים בצה"ל לאור מסלול הקידום המקצועי',
        questions: [
          'הגדרת רצף הלמידה של חייל ע"י המאסדר',
          'הגדרת כשירות',
          'הגדרת בעלי התפקידים המסמיכים (ביחידות ההכשרה)',
          'הכשרת בעלי התפקידים המסמיכים להדרכה והסמכה (ביחידות ההכשרה)'
        ]
      },
      {
        title: '3. מדיניות איוש סגלי הדרכה',
        questions: [
          'מדיניות לתכנון ואיוש סגלי הדרכה אצל הגורם האחראי (המדיניות ברורה לגורם האחראי וליחידות ההדרכה)',
          'סנכרון בין גרף פעילות יחידת ההדרכה לבין תכנון ואיוש סגלי ההדרכה (הכשרה, הכנת סגל, השתלמויות שטח וכו\')'
        ]
      },
      {
        title: '4. הערכת מצב הדרכה ולמידה ארגונית',
        questions: [
          'קיום פורום הערכת מצב הדרכה ולמידה מפקדה ממונה (בשיתוף יחידות הדרכה להכשרות)',
          'קיום עיתי ועקבי של פורום הערכת מצב הדרכה ולמידה מפקדה ממונה (אחת לשנה)'
        ]
      },
      {
        title: '5. מיפוי צרכי הדרכה ולמידה וגיבושם לתוכנית עבודה',
        questions: [
          'ריכוז הפערים וצרכי ההדרכה והלמידה והגדרת סדר עדיפות (אחת לשנה טרם גיבוש ת"ע)'
        ]
      },
      {
        title: '6. הוראת העוסקים בלמידה ביחידה',
        questions: [
          'הגדרת סגל ההדרכה ותפקידיהם',
          'סיווג הכשירויות לבעלי התפקידים',
          'עמידה בכשירויות ההדרכה (הוראות וניהול הדרכה)'
        ]
      },
      {
        title: '7. ניהול מופעי למידה – היערכות',
        questions: [
          'עמידה ביחס חניכה לפי תיק יסוד',
          'פקודת קורס הנגזרת מתיק האב (תיק יסוד להכשרה, ואם קיים תיק אימון) בפורמט יחידתי',
          'אישור תוכניות לפי מימדי ההדרכה בפורמט יחידתי תוך הצגת לקחים ממחזורים קודמים ואופן הטמעתם',
          'מניעת פגיעה ברציונל הלמידה ובכשירות הלומדים',
          'היערכות להכנת סגל ואישורה',
          'תחקיר הכנת הסגל בסיומה (פורמט יחידתי)'
        ]
      },
      {
        title: '8. ניהול מופעי למידה – ביצוע',
        questions: [
          'עמידה במטרות וברציונל הלמידה',
          'עמידה בתוכנית האב כפי שאושרה על ידי רמה ממונה',
          'ביצוע המבחנים בשני מועדים בסטנדרט אחיד',
          'ביצוע המבחנים לפי התוכנית, בקרה ותיעוד ציוני הלומדים',
          'ניתוח פרטי מבחן (עיוני ומעשי)'
        ]
      },
      {
        title: '9. ניהול מופעי למידה – סיום',
        questions: [
          'סיכום מופע למידה לפי מימדי ההדרכה'
        ]
      },
      {
        title: '10. ניהול לומדים',
        questions: [
          'איכות תהליך השיבוץ (השיבוץ יתנהל על פי תהליך מוגדר ואחיד)',
          'תיעוד נתוני הלומדים במערכת לניהול הלמידה'
        ]
      },
      {
        title: '11. ניהול המידע ההדרכתי',
        questions: [
          'איסוף מידע, שימוש בטפסים ובמערכות מידע',
          'שיתוף והנגשת מידע למשתמשים המרכזיים'
        ]
      },
      {
        title: '12. ניהול המידע ההדרכתי – מבנה ואחסון',
        questions: [
          'בפורמט אחיד, אחסון ב-CMS/LMS/VOD/Teams בלבד, כונן רשת מותר רק אם יש גרסה אחת של הקובץ, שימוש במערכות מאושרות'
        ]
      },
      {
        title: '13. ניהול המידע ההדרכתי – ארגון ומיון',
        questions: [
          'תבנית אחידה לשמות קבצים, שימוש בקטגוריות בסיסיות (פיקוד / נושא), ממשק חיפוש בסיסי'
        ]
      },
      {
        title: '14. פיתוח הכשרה ותיעודה בתיק יסוד',
        questions: [
          'ניהול העמ"ט לפיתוח הכשרה/מסלול (קיום נייר עמ"ט המכיל גאנט לתהליך פיתוח הכשרה, התפוקות הנדרשות מתהליך הפיתוח/תיקוף, ומועדי האישור)',
          'פיתוח/תיקוף תיקי יסוד (ניהול ת"ע שנתית)',
          'איכות תיקי היסוד (להכשרות לתפקיד/מקצוע שבליבת החייל 100%)',
          'פורמט זרועי אחיד המכיל את המוגדר בהוראה זו',
          'תיקי היסוד חתומים ומאושרים ע"י מפקד יחידה ההכשרה ומנחה תורתי חילי'
        ]
      },
      {
        title: '15. אמצעי הדרכה – מפיתוח עד ניהול',
        questions: [
          'קיום אמה"ד איכותי התואם את צרכי הלמידה (מיפוי צרכים / הטמעה בתיק היסוד להכשרה)',
          'ניהול האמהד ודרישתו בהתאם לצרכי הקניית הכשירות ומופעי הלמידה (הכשרה/אימון)'
        ]
      },
      {
        title: '16. הערכת הלמידה ביחידות ההדרכה',
        questions: [
          'קיום תוכנית להערכת הלמידה (למחזור אימון/הכשרה)',
          'הערכת כלל מושאי ההדרכה (הערכת הלומד)',
          'ניהול המידע על תהליך הערכת הלמידה (הגדרת הנתונים והמידע לאיסוף ותיעוד והמועד לאיסופם)',
          'הטמעת הלקחים מתהליך הערכת הלמידה (עיבוד התובנות מתהליכי הערכה המשפיעים על מחזור בודד והטמעתם)'
        ]
      }
    ]
  }
};

// Sikhot questions: each question has audience: 'both' | 'hanikhin' | 'sgal'
const sikhotQuestions = [
  {
    text: 'איך אתם חווים את ההכשרה?',
    audience: 'both'
  },
  {
    text: 'האם לדעתכם התכנים בהכשרה מותאמים לתקופה?',
    audience: 'both'
  },
  {
    text: 'אם הועברו לכם הרצאות על ידי מרצי חוץ – איך היו המרצים? האם הם נגעו בתכנים הרלוונטיים והעבירו את המסרים בצורה טובה?',
    audience: 'both'
  },
  {
    text: 'האם אתם מרגישים שיש בידכם את הכלים ההדרכתיים כדי להעביר את תכני ההכשרה לחיילים?',
    audience: 'sgal'
  },
  {
    text: 'האם אתם מרגישים שהמפקדים משתמשים בכלי הדרכה חדשניים ורלוונטיים כדי להכשיר ולחנוך אתכם?',
    audience: 'hanikhin'
  },
  {
    text: 'האם אתם מקבלים חניכה ומשוב הולם על תפקודכם בהכשרה?',
    audience: 'both'
  },
  {
    text: 'איך אתם חווים את השימוש במערכת הקמפוס הדיגיטלי? האם וכיצד היא תורמת לכם?',
    audience: 'both'
  },
  {
    text: 'האם וכיצד משוקפים לכם הציונים וההישגים שלכם? באיזו מידה לדעתכם הציונים משקפים את רמתכם? האם תהליכי ההערכה/בחינה הוגנים?',
    audience: 'hanikhin'
  },
  {
    text: 'האם וכיצד משוקפים לחניכים הציונים וההישגים שלהם? באיזו מידה לדעתכם הציונים משקפים את רמת החניכים? האם תהליכי ההערכה/בחינה הוגנים?',
    audience: 'sgal'
  },
  {
    text: 'כיצד ניתן סיוע לחניכים מתקשים / חניכים שהחסירו תכנים?',
    audience: 'both'
  }
];

// State
let state = {
  selectedTypes: [],
  answers: {}, // key: "type_topicIdx_qIdx" => {rating: 0|1|2|3, notes: ""}
  summaryTexts: {}, // key: type => text
  hiddenFindings: new Set(), // keys of findings hidden from summary (but kept in appendix)
  naTopics: new Set(),   // keys "type_topicIdx" marked as not relevant
  naQuestions: new Set(), // keys "type_topicIdx_qIdx" marked as not relevant
  sikhotGroup: null // 'hanikhin' | 'sgal'
};

// ─── AUTO-SAVE ───────────────────────────────────────────────
const DRAFT_KEY = 'bikoret_draft';

function saveDraft() {
  try {
    const draft = {
      selectedTypes: state.selectedTypes,
      answers: state.answers,
      summaryTexts: state.summaryTexts,
      hiddenFindings: [...state.hiddenFindings],
      naTopics: [...state.naTopics],
      naQuestions: [...state.naQuestions],
      sikhotGroup: state.sikhotGroup,
      fields: {
        location: document.getElementById('location')?.value || '',
        date: document.getElementById('date')?.value || '',
        subject: document.getElementById('subject')?.value || '',
        coordination: document.getElementById('coordination')?.value || '',
        inspector: document.getElementById('inspector')?.value || '',
        participants: document.getElementById('participants')?.value || '',
        'audit-progress': document.getElementById('audit-progress')?.value || '',
        'group-composition': document.getElementById('group-composition')?.value || '',
        signature: document.getElementById('signature')?.value || ''
      },
      telbSelected: document.getElementById('telb-subtypes')?.style.display !== 'none'
    };
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    showDraftIndicator();
  } catch(e) {}
}

function loadDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return false;
    const draft = JSON.parse(raw);

    state.selectedTypes = draft.selectedTypes || [];
    state.answers = draft.answers || {};
    state.summaryTexts = draft.summaryTexts || {};
    state.hiddenFindings = new Set(draft.hiddenFindings || []);
    state.naTopics = new Set(draft.naTopics || []);
    state.naQuestions = new Set(draft.naQuestions || []);
    state.sikhotGroup = draft.sikhotGroup || null;

    // Restore audit type card selections
    document.querySelectorAll('.audit-type-card').forEach(card => {
      const t = card.dataset.type;
      if (t === 'telb') {
        if (state.selectedTypes.includes('telb')) {
          card.classList.add('selected');
          card.querySelector('#telb-subtypes').style.display = 'flex';
        }
      } else if (state.selectedTypes.includes(t)) {
        card.classList.add('selected');
      }
    });

    // Restore form fields
    Object.entries(draft.fields || {}).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) el.value = val;
    });

    // Restore sikhot group
    if (draft.sikhotGroup) {
      selectSikhotGroup(draft.sikhotGroup);
    }

    updateScreen2ForSikhot();
    return true;
  } catch(e) { return false; }
}

function showDraftIndicator() {
  const el = document.getElementById('draft-indicator');
  if (!el) return;
  el.textContent = '✓ טיוטה נשמרה';
  el.style.opacity = '1';
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.style.opacity = '0'; }, 2000);
}

function clearDraft() {
  if (confirm('למחוק את הטיוטה השמורה ולהתחיל מחדש?')) {
    localStorage.removeItem(DRAFT_KEY);
    location.reload();
  }
}

// Auto-save every 10 seconds + on any input
setInterval(saveDraft, 10000);
document.addEventListener('input', saveDraft);
document.addEventListener('click', () => setTimeout(saveDraft, 300));

function selectSikhotGroup(group) {
  state.sikhotGroup = group;
  document.querySelectorAll('.group-type-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('btn-' + group).classList.add('selected');
}

function updateScreen2ForSikhot() {
  const isSikhotOnly = state.selectedTypes.length === 1 && state.selectedTypes.includes('sikhot');
  const hasSikhot = state.selectedTypes.includes('sikhot');

  // Show/hide sikhot-specific fields
  document.getElementById('sikhot-group-row').style.display = hasSikhot ? '' : 'none';
  document.getElementById('sikhot-composition-row').style.display = hasSikhot ? '' : 'none';

  // Update required stars and subtitle
  const requiredFields = ['location', 'date', 'subject', 'coordination', 'inspector', 'participants'];
  if (isSikhotOnly) {
    document.getElementById('screen2-subtitle').innerHTML = 'בשיחות חתך השדות אינם חובה';
    requiredFields.forEach(id => {
      const star = document.getElementById(id + '-star');
      if (star) star.style.display = 'none';
    });
  } else {
    document.getElementById('screen2-subtitle').innerHTML = 'כל השדות הם שדות חובה <span style="color:#E57373;">*</span>';
    requiredFields.forEach(id => {
      const star = document.getElementById(id + '-star');
      if (star) star.style.display = '';
    });
  }
}

function toggleTelb(el) {
  if (el.classList.contains('disabled')) return;
  const wasSelected = el.classList.contains('selected');
  el.classList.toggle('selected');
  const subPanel = el.querySelector('#telb-subtypes');
  if (!wasSelected) {
    subPanel.style.display = 'flex';
    if (!state.selectedTypes.includes('telb')) state.selectedTypes.push('telb');
  } else {
    subPanel.style.display = 'none';
    state.selectedTypes = state.selectedTypes.filter(t => t !== 'telb');
  }
}

function selectTelbSub(e, sub) {
  e.stopPropagation();
  if (sub !== 'liba') return; // only liba available
  document.querySelectorAll('.telb-sub').forEach(el => el.classList.remove('sub-selected'));
  e.currentTarget.classList.add('sub-selected');
}

function toggleType(el) {
  if (el.classList.contains('disabled')) return;
  const type = el.dataset.type;
  el.classList.toggle('selected');
  if (state.selectedTypes.includes(type)) {
    state.selectedTypes = state.selectedTypes.filter(t => t !== type);
  } else {
    state.selectedTypes.push(type);
  }
  updateScreen2ForSikhot();
}

function validateScreen2() {
  const isSikhotOnly = state.selectedTypes.length === 1 && state.selectedTypes.includes('sikhot');
  const hasSikhot = state.selectedTypes.includes('sikhot');
  let valid = true;

  if (!isSikhotOnly) {
    const fields = ['location', 'date', 'subject', 'coordination', 'inspector', 'participants'];
    fields.forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.classList.add('field-error');
        valid = false;
      } else {
        el.classList.remove('field-error');
      }
    });
  }

  if (hasSikhot && !state.sikhotGroup) {
    document.getElementById('sikhot-group-row').style.border = '2px solid #E57373';
    document.getElementById('sikhot-group-row').style.borderRadius = '8px';
    document.getElementById('sikhot-group-row').style.padding = '8px';
    valid = false;
  } else {
    document.getElementById('sikhot-group-row').style.border = '';
    document.getElementById('sikhot-group-row').style.padding = '';
  }

  return valid;
}

function validateScreen4() {
  let valid = true;
  state.selectedTypes.forEach(type => {
    if (type === 'sikhot') return; // open-text, no validation needed
    if (!questions[type]) return;
    questions[type].topics.forEach((topic, topicIdx) => {
      const topicKey = `${type}_${topicIdx}`;
      if (state.naTopics.has(topicKey)) return; // skip N/A topic
      topic.questions.forEach((q, qIdx) => {
        const key = `${type}_${topicIdx}_${qIdx}`;
        if (state.naQuestions.has(key)) return; // skip N/A question
        const ans = state.answers[key];
        const qItem = document.querySelector(`[data-key="${key}"]`);
        const notesArea = qItem ? qItem.querySelector('.question-notes') : null;

        if (!ans || ans.rating === 0) {
          if (qItem) qItem.classList.add('unanswered');
          valid = false;
        } else {
          if (qItem) qItem.classList.remove('unanswered');
          if ((ans.rating === 2 || ans.rating === 3) && (!ans.notes || !ans.notes.trim())) {
            if (notesArea) notesArea.classList.add('notes-required');
            valid = false;
          } else {
            if (notesArea) notesArea.classList.remove('notes-required');
          }
        }
      });
    });
  });
  return valid;
}

function goToScreen(n) {
  if (n === 1) {
    // always ok
  } else if (n === 2) {
    if (state.selectedTypes.length === 0) {
      alert('יש לבחור לפחות סוג ביקורת אחד');
      return;
    }
  } else if (n === 3) {
    if (!validateScreen2()) {
      alert('נא למלא את כל שדות החובה');
      return;
    }
  } else if (n === 4) {
    if (!validateScreen4()) {
      alert('יש לענות על כל שאלות הביקורת.\nבדירוג 2 ו-3 יש למלא הערות חובה.');
      return;
    }
  } else if (n === 5) {
    // screen 4 (progress) is optional – no validation
    buildSummaryScreen();
  }

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + n).classList.add('active');

  for (let i = 1; i <= 5; i++) {
    const step = document.getElementById('step-' + i);
    if (!step) continue;
    step.classList.remove('active', 'done');
    if (i < n) step.classList.add('done');
    if (i === n) step.classList.add('active');
  }

  if (n === 3) { buildQuestionsScreen(); updateProgressCounter(); }
  window.scrollTo(0, 0);
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, '');
}

function countAnswered() {
  let total = 0, answered = 0;
  state.selectedTypes.forEach(type => {
    if (type === 'sikhot') return;
    if (!questions[type]) return;
    questions[type].topics.forEach((topic, topicIdx) => {
      const topicKey = type + '_' + topicIdx;
      if (state.naTopics.has(topicKey)) return;
      topic.questions.forEach((q, qIdx) => {
        const key = type + '_' + topicIdx + '_' + qIdx;
        if (state.naQuestions.has(key)) return;
        total++;
        const ans = state.answers[key];
        if (ans && ans.rating > 0) answered++;
      });
    });
  });
  return { total, answered };
}

function updateProgressCounter() {
  const bar = document.getElementById('q-progress-bar');
  if (!bar) return;
  const { total, answered } = countAnswered();
  if (total === 0) { bar.style.display = 'none'; return; }
  const pct = Math.round((answered / total) * 100);
  bar.style.display = '';
  bar.querySelector('.q-progress-fill').style.width = pct + '%';
  bar.querySelector('.q-progress-text').textContent = answered + ' / ' + total + ' שאלות נענו (' + pct + '%)';
  bar.querySelector('.q-progress-fill').style.background =
    pct === 100 ? 'var(--teal-dark)' : pct >= 50 ? 'var(--teal)' : 'var(--orange)';
}

function buildQuestionsScreen() {
  const container = document.getElementById('questions-container');
  container.innerHTML = '';

  state.selectedTypes.forEach(type => {

    // --- SIKHOT: open-text questions ---
    if (type === 'sikhot') {
      const groupLabel = state.sikhotGroup === 'hanikhin' ? 'חניכים' : 'סגל';
      const typeHeader = document.createElement('div');
      typeHeader.innerHTML = `<div style="font-size:18px; font-weight:700; color:var(--orange-dark); margin-bottom:20px; margin-top:12px; display:flex; align-items:center; gap:10px;"><span style="background:var(--orange-light); padding:4px 14px; border-radius:20px;">שיחות חתך – ${groupLabel}</span></div>`;
      container.appendChild(typeHeader);

      const card = document.createElement('div');
      card.className = 'card';
      card.style.marginBottom = '24px';

      const filteredQs = sikhotQuestions.filter(q =>
        q.audience === 'both' || q.audience === state.sikhotGroup
      );

      filteredQs.forEach((q, idx) => {
        const key = `sikhot_0_${idx}`;
        if (!state.answers[key]) state.answers[key] = { rating: -1, notes: '' }; // -1 = open text mode

        const qItem = document.createElement('div');
        qItem.className = 'question-item';
        qItem.dataset.key = key;

        const qText = document.createElement('div');
        qText.className = 'question-text';
        qText.textContent = q.text;

        const notesArea = document.createElement('textarea');
        notesArea.className = 'question-notes visible';
        notesArea.style.marginTop = '8px';
        notesArea.placeholder = 'תשובה / תיאור...';
        notesArea.value = state.answers[key].notes || '';
        notesArea.addEventListener('input', e => {
          state.answers[key].notes = e.target.value;
        });

        qItem.appendChild(qText);
        qItem.appendChild(notesArea);
        card.appendChild(qItem);
      });

      container.appendChild(card);
      return;
    }

    // --- Standard audit types ---
    if (!questions[type]) return;
    const auditData = questions[type];

    const typeHeader = document.createElement('div');
    typeHeader.innerHTML = `<div style="font-size:18px; font-weight:700; color:var(--orange-dark); margin-bottom:20px; margin-top:12px; display:flex; align-items:center; gap:10px;"><span style="background:var(--orange-light); padding:4px 14px; border-radius:20px;">${auditData.title}</span></div>`;
    container.appendChild(typeHeader);

    const card = document.createElement('div');
    card.className = 'card';
    card.style.marginBottom = '24px';

    auditData.topics.forEach((topic, topicIdx) => {
      const topicKey = `${type}_${topicIdx}`;
      const topicDiv = document.createElement('div');
      topicDiv.className = 'topic-section';
      topicDiv.dataset.topicKey = topicKey;

      // Topic header row with N/A toggle
      const topicHeader = document.createElement('div');
      topicHeader.style.cssText = 'display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;';

      const topicTitle = document.createElement('div');
      topicTitle.className = 'topic-title';
      topicTitle.style.marginBottom = '0';
      topicTitle.style.flex = '1';
      topicTitle.textContent = topic.title.replace(/^\d+\.\s*/, '');

      const naTopicBtn = document.createElement('button');
      naTopicBtn.className = 'na-btn' + (state.naTopics.has(topicKey) ? ' na-active' : '');
      naTopicBtn.textContent = state.naTopics.has(topicKey) ? '↩ שחזר נושא' : 'לא רלוונטי';
      naTopicBtn.addEventListener('click', () => {
        if (state.naTopics.has(topicKey)) {
          state.naTopics.delete(topicKey);
        } else {
          state.naTopics.add(topicKey);
        }
        buildQuestionsScreen();
        updateProgressCounter();
      });

      topicHeader.appendChild(topicTitle);
      topicHeader.appendChild(naTopicBtn);
      topicDiv.appendChild(topicHeader);

      const isTopicNA = state.naTopics.has(topicKey);

      if (isTopicNA) {
        topicDiv.style.opacity = '0.45';
        card.appendChild(topicDiv);
        return;
      }

      // Questions
      topic.questions.forEach((q, qIdx) => {
        const key = `${type}_${topicIdx}_${qIdx}`;
        if (!state.answers[key]) state.answers[key] = { rating: 0, notes: '' };

        const isQNA = state.naQuestions.has(key);

        const qItem = document.createElement('div');
        qItem.className = 'question-item';
        qItem.dataset.key = key;
        if (isQNA) qItem.style.opacity = '0.45';

        // Question text row with N/A toggle
        const qRow = document.createElement('div');
        qRow.style.cssText = 'display:flex; align-items:flex-start; justify-content:space-between; gap:10px; margin-bottom:' + (isQNA ? '0' : '12px') + ';';

        const qText = document.createElement('div');
        qText.className = 'question-text';
        qText.style.marginBottom = '0';
        qText.style.flex = '1';
        qText.innerHTML = q;

        const naQBtn = document.createElement('button');
        naQBtn.className = 'na-btn na-btn-sm' + (isQNA ? ' na-active' : '');
        naQBtn.textContent = isQNA ? '↩' : 'לא רלוונטי';
        naQBtn.title = isQNA ? 'שחזר שאלה' : 'סמן כלא רלוונטי';
        naQBtn.addEventListener('click', () => {
          if (state.naQuestions.has(key)) {
            state.naQuestions.delete(key);
          } else {
            state.naQuestions.add(key);
            state.answers[key] = { rating: 0, notes: '' };
          }
          buildQuestionsScreen();
          updateProgressCounter();
        });

        qRow.appendChild(qText);
        qRow.appendChild(naQBtn);
        qItem.appendChild(qRow);

        if (!isQNA) {
          const ratingDiv = document.createElement('div');
          ratingDiv.className = 'rating-buttons';

          const ratings = [
            { val: 1, label: 'קיים', cls: 'selected-1' },
            { val: 2, label: 'קיים חלקית', cls: 'selected-2' },
            { val: 3, label: 'לא קיים', cls: 'selected-3' }
          ];

          const notesArea = document.createElement('textarea');
          notesArea.className = 'question-notes';
          notesArea.placeholder = 'הערות (חובה)...';
          notesArea.value = state.answers[key].notes;
          notesArea.addEventListener('input', e => {
            state.answers[key].notes = e.target.value;
            if (e.target.value.trim()) notesArea.classList.remove('notes-required');
          });

          ratings.forEach(r => {
            const btn = document.createElement('button');
            btn.className = 'rating-btn';
            btn.textContent = r.label;
            if (state.answers[key].rating === r.val) {
              btn.classList.add(r.cls);
              if (r.val === 2 || r.val === 3) notesArea.classList.add('visible');
            }
            btn.addEventListener('click', () => {
              ratingDiv.querySelectorAll('.rating-btn').forEach(b => b.className = 'rating-btn');
              btn.classList.add(r.cls);
              state.answers[key].rating = r.val;
              qItem.classList.remove('unanswered');
              if (r.val === 2 || r.val === 3) {
                notesArea.classList.add('visible');
              } else {
                notesArea.classList.remove('visible');
                notesArea.classList.remove('notes-required');
                state.answers[key].notes = '';
                notesArea.value = '';
              }
              updateProgressCounter();
            });
            ratingDiv.appendChild(btn);
          });

          qItem.appendChild(ratingDiv);
          qItem.appendChild(notesArea);
        }

        topicDiv.appendChild(qItem);
      });

      card.appendChild(topicDiv);
    });

    container.appendChild(card);
  });
}

function buildSummaryScreen() {
  const sectionsDiv = document.getElementById('summary-type-sections');
  sectionsDiv.innerHTML = '';

  state.selectedTypes.forEach(type => {
    if (type === 'sikhot') return; // sikhot answers shown directly in final output

    const typeName = auditTypes[type] || type;
    const card = document.createElement('div');
    card.className = 'card';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'card-title';
    titleDiv.textContent = typeName;

    const subtitle = document.createElement('div');
    subtitle.className = 'card-subtitle';
    subtitle.textContent = 'מלל חופשי לסיכום סוג ביקורת זה';

    const ta = document.createElement('textarea');
    ta.rows = 5;
    ta.style.width = '100%';
    ta.style.border = '1.5px solid var(--border)';
    ta.style.borderRadius = '8px';
    ta.style.padding = '10px 14px';
    ta.style.fontFamily = 'Heebo, sans-serif';
    ta.style.fontSize = '14px';
    ta.style.direction = 'rtl';
    ta.style.resize = 'vertical';
    ta.placeholder = `פרט ממצאים לגבי ${typeName}...`;
    ta.value = state.summaryTexts[type] || '';
    ta.addEventListener('input', e => {
      state.summaryTexts[type] = e.target.value;
      updateFinalOutput();
    });

    card.appendChild(titleDiv);
    card.appendChild(subtitle);
    card.appendChild(ta);
    sectionsDiv.appendChild(card);
  });

  // Build findings
  buildFindingsPreview();
  buildAppendix();
  updateFinalOutput();
}

function getAllFindings() {
  // Returns ALL findings with rating=3, excluding N/A topics/questions
  const findings = [];
  Object.keys(state.answers).forEach(key => {
    if (state.naQuestions.has(key)) return;
    const parts = key.split('_');
    const topicKey = parts[0] + '_' + parts[1];
    if (state.naTopics.has(topicKey)) return;
    const ans = state.answers[key];
    if (ans.rating === 3) {
      const type = parts[0];
      const topicIdx = parseInt(parts[1]);
      const qIdx = parseInt(parts[2]);
      if (questions[type] && questions[type].topics[topicIdx]) {
        const rawQ = questions[type].topics[topicIdx].questions[qIdx];
        findings.push({ key, text: stripHtml(rawQ), notes: ans.notes });
      }
    }
  });
  return findings;
}

function getVisibleFindings() {
  // Returns only findings NOT hidden (for summary output)
  return getAllFindings().filter(f => !state.hiddenFindings.has(f.key));
}

function buildFindingsPreview() {
  const findingsDiv = document.getElementById('findings-preview');
  findingsDiv.innerHTML = '';
  const findings = getAllFindings();

  if (findings.length === 0) {
    findingsDiv.innerHTML = '<p style="color:var(--text-light); font-size:13px;">לא נמצאו ליקויים (לא סומנו שאלות כ"לא קיים")</p>';
    return;
  }

  const hint = document.createElement('p');
  hint.style.cssText = 'font-size:12px; color:var(--text-light); margin-bottom:10px;';
  hint.textContent = 'לחץ על ✕ להסרת ליקוי מהסיכום (יישאר בנספח)';
  findingsDiv.appendChild(hint);

  findings.forEach(f => {
    const chip = document.createElement('div');
    const isHidden = state.hiddenFindings.has(f.key);
    chip.className = 'finding-chip';
    if (isHidden) chip.classList.add('finding-hidden');
    chip.style.display = 'flex';
    chip.style.justifyContent = 'space-between';
    chip.style.alignItems = 'flex-start';

    const textDiv = document.createElement('div');
    textDiv.innerHTML = `<span style="font-weight:600;">• ${f.text}</span>${f.notes ? `<span style="font-size:11px; color:#888; margin-top:3px; display:block;">(${f.notes})</span>` : ''}`;
    if (isHidden) textDiv.style.opacity = '0.45';

    const removeBtn = document.createElement('button');
    removeBtn.className = 'finding-remove-btn';
    removeBtn.title = isHidden ? 'החזר לסיכום' : 'הסר מהסיכום';
    removeBtn.textContent = isHidden ? '↩' : '✕';
    removeBtn.style.cssText = `
      background: none; border: none; cursor: pointer; font-size: 14px;
      color: ${isHidden ? '#5DB87A' : '#E57373'}; font-weight: 700;
      padding: 0 4px; flex-shrink: 0; line-height: 1;
    `;
    removeBtn.addEventListener('click', () => {
      if (state.hiddenFindings.has(f.key)) {
        state.hiddenFindings.delete(f.key);
      } else {
        state.hiddenFindings.add(f.key);
      }
      buildFindingsPreview();
      updateFinalOutput();
    });

    chip.appendChild(textDiv);
    chip.appendChild(removeBtn);
    findingsDiv.appendChild(chip);
  });
}

function buildAppendix() {
  const appendixDiv = document.getElementById('appendix-container');
  appendixDiv.innerHTML = '';

  const table = document.createElement('table');
  table.className = 'appendix-table';

  const thead = document.createElement('thead');
  thead.innerHTML = `<tr>
    <th style="width:5%">#</th>
    <th style="width:30%">נושא</th>
    <th>שאלה</th>
    <th style="width:14%">דירוג</th>
    <th style="width:22%">הערות</th>
  </tr>`;
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  let rowNum = 1;

  const ratingLabels = { 1: 'קיים', 2: 'קיים חלקית', 3: 'לא קיים' };
  const ratingClasses = { 1: 'rating-badge-1', 2: 'rating-badge-2', 3: 'rating-badge-3' };

  state.selectedTypes.forEach(type => {
    if (!questions[type]) return;
    questions[type].topics.forEach((topic, topicIdx) => {
      const topicKey = type + '_' + topicIdx;
      const isTopicNA = state.naTopics.has(topicKey);
      const cleanTopic = topic.title.replace(/^\d+\.\s*/, '');

      topic.questions.forEach((q, qIdx) => {
        const key = type + '_' + topicIdx + '_' + qIdx;
        const isQNA = state.naQuestions.has(key) || isTopicNA;
        const ans = state.answers[key] || { rating: 0, notes: '' };
        const ratingLabel = isQNA ? 'לא רלוונטי' : (ans.rating ? ratingLabels[ans.rating] : '—');
        const ratingClass = isQNA ? 'rating-badge-na' : (ans.rating ? ratingClasses[ans.rating] : '');

        const tr = document.createElement('tr');
        if (isQNA) tr.style.opacity = '0.5';
        tr.innerHTML =
          '<td style="text-align:center;">' + rowNum + '</td>' +
          '<td>' + cleanTopic + '</td>' +
          '<td>' + stripHtml(q) + '</td>' +
          '<td style="text-align:center;"><span class="rating-badge ' + ratingClass + '">' + ratingLabel + '</span></td>' +
          '<td>' + (ans.notes || '') + '</td>';
        tbody.appendChild(tr);
        rowNum++;
      });
    });
  });

  table.appendChild(tbody);
  appendixDiv.appendChild(table);
}

function copyAppendix() {
  const ratingLabels = { 1: 'קיים', 2: 'קיים חלקית', 3: 'לא קיים' };
  let text = 'נספח ליקויים מלא\n';
  text += '═══════════════════════════════════\n';
  text += '#\tנושא\tשאלה\tדירוג\tהערות\n';
  text += '───────────────────────────────────\n';
  let rowNum = 1;
  state.selectedTypes.forEach(type => {
    if (!questions[type]) return;
    questions[type].topics.forEach((topic, topicIdx) => {
      const cleanTopic = topic.title.replace(/^\d+\.\s*/, '');
      topic.questions.forEach((q, qIdx) => {
        const key = `${type}_${topicIdx}_${qIdx}`;
        const ans = state.answers[key] || { rating: 0, notes: '' };
        const ratingLabel = ans.rating ? ratingLabels[ans.rating] : '—';
        text += `${rowNum}\t${cleanTopic}\t${stripHtml(q)}\t${ratingLabel}\t${ans.notes || ''}\n`;
        rowNum++;
      });
    });
  });

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copy-appendix-btn');
    const orig = btn.textContent;
    btn.textContent = '✅ הועתק!';
    btn.style.background = 'linear-gradient(135deg, #5DB87A, #3A9A5C)';
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 2000);
  });
}

function downloadAppendix() {
  const ratingLabels = { 1: 'קיים', 2: 'קיים חלקית', 3: 'לא קיים' };
  // Build CSV with BOM for Hebrew Excel support
  let csv = '\uFEFF#,נושא,שאלה,דירוג,הערות\n';
  let rowNum = 1;
  state.selectedTypes.forEach(type => {
    if (!questions[type]) return;
    questions[type].topics.forEach((topic, topicIdx) => {
      const cleanTopic = topic.title.replace(/^\d+\.\s*/, '');
      topic.questions.forEach((q, qIdx) => {
        const key = `${type}_${topicIdx}_${qIdx}`;
        const ans = state.answers[key] || { rating: 0, notes: '' };
        const ratingLabel = ans.rating ? ratingLabels[ans.rating] : '—';
        const escape = v => `"${String(v).replace(/"/g, '""')}"`;
        csv += `${rowNum},${escape(cleanTopic)},${escape(stripHtml(q))},${escape(ratingLabel)},${escape(ans.notes || '')}\n`;
        rowNum++;
      });
    });
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'נספח_ליקויים_מלא.csv';
  a.click();
  URL.revokeObjectURL(url);
}

function updateFinalOutput() {
  const loc = document.getElementById('location').value;
  const date = document.getElementById('date').value;
  const subject = document.getElementById('subject').value;
  const coord = document.getElementById('coordination').value;
  const inspector = document.getElementById('inspector').value;
  const participants = document.getElementById('participants').value;
  const progress = document.getElementById('audit-progress').value;
  const groupComposition = document.getElementById('group-composition') ? document.getElementById('group-composition').value : '';

  let dateFormatted = date;
  if (date) {
    const d = new Date(date);
    dateFormatted = d.toLocaleDateString('he-IL');
  }

  const hasSikhot = state.selectedTypes.includes('sikhot');
  const groupLabel = state.sikhotGroup === 'hanikhin' ? 'חניכים' : state.sikhotGroup === 'sgal' ? 'סגל' : '___';

  let output = '';
  output += `ביקורת ${state.selectedTypes.map(t => auditTypes[t]).join(' + ')}\n`;
  if (hasSikhot && state.selectedTypes.length === 1) {
    output += `(קבוצת שיחה: ${groupLabel})\n`;
  }
  output += `═══════════════════════════════════\n\n`;
  output += `יחידה: ${loc || '___'}\n`;
  output += `תאריך: ${dateFormatted || '___'}\n`;
  output += `נושא: ${subject || '___'}\n`;
  output += `תיאום מול: ${coord || '___'}\n`;
  output += `מי ביקר: ${inspector || '___'}\n`;
  output += `משתתפים: ${participants || '___'}\n`;
  if (hasSikhot && groupComposition) {
    output += `הרכב הקבוצה: ${groupComposition}\n`;
  }
  output += `\nמהלך הביקורת:\n${progress || '___'}\n`;
  output += `\n═══════════════════════════════════\n`;
  output += `סיכום וממצאים\n`;
  output += `═══════════════════════════════════\n\n`;

  state.selectedTypes.forEach(type => {
    const typeName = auditTypes[type] || type;
    if (type === 'sikhot') {
      output += `שיחות חתך – ${groupLabel}:\n`;
      const filteredQs = sikhotQuestions.filter(q => q.audience === 'both' || q.audience === state.sikhotGroup);
      filteredQs.forEach((q, idx) => {
        const key = `sikhot_0_${idx}`;
        const ans = state.answers[key];
        output += `\nש: ${q.text}\n`;
        output += `ת: ${(ans && ans.notes) ? ans.notes : '___'}\n`;
      });
      output += '\n';
    } else {
      output += `${typeName}:\n`;
      output += `${state.summaryTexts[type] || '___'}\n\n`;
    }
  });

  const findings = getVisibleFindings();
  if (findings.length > 0) {
    output += `ליקויים:\n`;
    findings.forEach(f => {
      output += `• ${f.text}`;
      if (f.notes) output += ` (${f.notes})`;
      output += '\n';
    });
    output += '\n';
  }

  output += `מצורף מסמך ליקויים מלא\n\n`;
  output += `תג"ב אחרון לתיקון ליקויים אלו הינו: ___________`;

  const sig = document.getElementById('signature')?.value?.trim();
  if (sig) {
    output += `\n\n───────────────────────────────────\nנערך על ידי: ${sig}`;
  }

  document.getElementById('final-output').textContent = output;
}

function copyOutput() {
  updateFinalOutput();
  const text = document.getElementById('final-output').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copy-btn');
    const orig = btn.textContent;
    btn.textContent = '✅ הועתק בהצלחה!';
    btn.style.background = 'linear-gradient(135deg, #5DB87A, #3A9A5C)';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
    }, 2000);
  });
}

// ─── EXPORT AS TXT ───────────────────────────────────────────
function downloadTxt() {
  updateFinalOutput();
  const text = document.getElementById('final-output').textContent;
  const loc = document.getElementById('location')?.value || 'ביקורת';
  const date = document.getElementById('date')?.value || '';
  const filename = `סיכום_ביקורת_${loc}${date ? '_' + date : ''}.txt`;
  const blob = new Blob(['\uFEFF' + text], { type: 'text/plain;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

// ─── INIT ────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const hasDraft = loadDraft();
  if (hasDraft) {
    const banner = document.getElementById('draft-banner');
    if (banner) banner.style.display = 'flex';
  }
});
