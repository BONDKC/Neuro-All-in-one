// ============================================================
// ATTENDING SCHEDULE — manually updated each month from the
// "Neuro ULH-JH-... call" document. See CONTRIBUTING.md for
// exact instructions on replacing this file next month.
//
// Dates are "YYYY-MM-DD". ulhGeneral and interventional are
// date-range blocks (same person all day, every day in range).
// ulhStroke and jewish are PER-DAY entries because the PM
// attending sometimes differs from the AM attending within
// what looks like one continuous block in the source document.
// ============================================================

window.ATTENDING_SCHEDULE = {

  // One name/phone per date range — same attending all day.
  ulhGeneral: [
    { start: "2026-08-01", end: "2026-08-06", name: "Holiday Coverage", phone: "502-485-5140" },
    { start: "2026-08-07", end: "2026-08-13", name: "Chapman", phone: "502-541-2732" },
    { start: "2026-08-14", end: "2026-08-16", name: "Lambert-Cheatham", phone: "317-677-4914" },
    { start: "2026-08-17", end: "2026-08-17", name: "Kwiecinska", phone: "903-487-6919" },
    { start: "2026-08-18", end: "2026-08-20", name: "Lambert-Cheatham", phone: "317-677-4914" },
    { start: "2026-08-21", end: "2026-08-27", name: "Kwiecinska", phone: "903-487-6919" },
    { start: "2026-08-28", end: "2026-08-31", name: "Assuncao", phone: "502-536-6472" }
  ],

  // Per-day: AM covers 7a-5p, PM covers 5p-7a. Often the same
  // person for both; only differs on the days noted below.
  ulhStroke: [
    { date: "2026-08-01", am: "Chulluncuy Rivas", pm: "Chulluncuy Rivas", phone: "513-593-8712" },
    { date: "2026-08-02", am: "Chulluncuy Rivas", pm: "Chulluncuy Rivas", phone: "513-593-8712" },
    { date: "2026-08-03", am: "Chulluncuy Rivas", pm: "Chulluncuy Rivas", phone: "513-593-8712" },
    { date: "2026-08-04", am: "Chulluncuy Rivas", pm: "Shah", phone: "513-593-8712" },
    { date: "2026-08-05", am: "Chulluncuy Rivas", pm: "Shah", phone: "513-593-8712" },
    { date: "2026-08-06", am: "Chulluncuy Rivas", pm: "Shah", phone: "513-593-8712" },
    { date: "2026-08-07", am: "Shah", pm: "Shah", phone: "914-643-6566" },
    { date: "2026-08-08", am: "Shah", pm: "Shah", phone: "914-643-6566" },
    { date: "2026-08-09", am: "Shah", pm: "Shah", phone: "914-643-6566" },
    { date: "2026-08-10", am: "Shah", pm: "Hasan", phone: "914-643-6566" },
    { date: "2026-08-11", am: "Hasan", pm: "Hasan", phone: "716-398-2584" },
    { date: "2026-08-12", am: "Hasan", pm: "Hasan", phone: "716-398-2584" },
    { date: "2026-08-13", am: "Hasan", pm: "Shah", phone: "716-398-2584" },
    { date: "2026-08-14", am: "Shah", pm: "Shah", phone: "914-643-6566" },
    { date: "2026-08-15", am: "Shah", pm: "Shah", phone: "914-643-6566" },
    { date: "2026-08-16", am: "Shah", pm: "Shah", phone: "914-643-6566" },
    { date: "2026-08-17", am: "Shah", pm: "Chulluncuy Rivas", phone: "914-643-6566" },
    { date: "2026-08-18", am: "Shah", pm: "Chulluncuy Rivas", phone: "914-643-6566" },
    { date: "2026-08-19", am: "Shah", pm: "Chulluncuy Rivas", phone: "914-643-6566" },
    { date: "2026-08-20", am: "Shah", pm: "Alley", phone: "914-643-6566" },
    { date: "2026-08-21", am: "Alley", pm: "Alley", phone: "347-279-5056" },
    { date: "2026-08-22", am: "Alley", pm: "Alley", phone: "347-279-5056" },
    { date: "2026-08-23", am: "Alley", pm: "Alley", phone: "347-279-5056" },
    { date: "2026-08-24", am: "Alley", pm: "Sequeiros", phone: "347-279-5056" },
    { date: "2026-08-25", am: "Sequeiros", pm: "Sequeiros", phone: "319-321-4991" },
    { date: "2026-08-26", am: "Sequeiros", pm: "Sequeiros", phone: "319-321-4991" },
    { date: "2026-08-27", am: "Sequeiros", pm: "Chulluncuy Rivas", phone: "319-321-4991" },
    { date: "2026-08-28", am: "Chulluncuy Rivas", pm: "Chulluncuy Rivas", phone: "513-593-8712" },
    { date: "2026-08-29", am: "Chulluncuy Rivas", pm: "Chulluncuy Rivas", phone: "513-593-8712" },
    { date: "2026-08-30", am: "Chulluncuy Rivas", pm: "Chulluncuy Rivas", phone: "513-593-8712" },
    { date: "2026-08-31", am: "Chulluncuy Rivas", pm: "Shah", phone: "513-593-8712" }
  ],

  // Per-day: AM covers 7a-5p, PM covers 5p-7a, Jewish Hospital.
  jewish: [
    { date: "2026-08-01", am: "Alley", pm: "Chulluncuy Rivas", phone: "347-279-5056" },
    { date: "2026-08-02", am: "Alley", pm: "Chulluncuy Rivas", phone: "347-279-5056" },
    { date: "2026-08-03", am: "Fakhri", pm: "Fakhri", phone: "706-767-3271" },
    { date: "2026-08-04", am: "Shah", pm: "Shah", phone: "914-643-6566" },
    { date: "2026-08-05", am: "Shah", pm: "Shah", phone: "914-643-6566" },
    { date: "2026-08-06", am: "Shah", pm: "Shah", phone: "914-643-6566" },
    { date: "2026-08-07", am: "Alley", pm: "Alley", phone: "347-279-5056" },
    { date: "2026-08-08", am: "Alley", pm: "Alley", phone: "347-279-5056" },
    { date: "2026-08-09", am: "Alley", pm: "Alley", phone: "347-279-5056" },
    { date: "2026-08-10", am: "Cordoves-Feria", pm: "Cordoves-Feria", phone: "786-343-3086" },
    { date: "2026-08-11", am: "Cordoves-Feria", pm: "Cordoves-Feria", phone: "786-343-3086" },
    { date: "2026-08-12", am: "Shah", pm: "Shah", phone: "914-643-6566" },
    { date: "2026-08-13", am: "Shah", pm: "Shah", phone: "914-643-6566" },
    { date: "2026-08-14", am: "Chulluncuy Rivas", pm: "Shah", phone: "513-593-8712" },
    { date: "2026-08-15", am: "Chulluncuy Rivas", pm: "Shah", phone: "513-593-8712" },
    { date: "2026-08-16", am: "Chulluncuy Rivas", pm: "Shah", phone: "513-593-8712" },
    { date: "2026-08-17", am: "Chulluncuy Rivas", pm: "Chulluncuy Rivas", phone: "513-593-8712" },
    { date: "2026-08-18", am: "Chulluncuy Rivas", pm: "Chulluncuy Rivas", phone: "513-593-8712" },
    { date: "2026-08-19", am: "Chulluncuy Rivas", pm: "Chulluncuy Rivas", phone: "513-593-8712" },
    { date: "2026-08-20", am: "Hasan", pm: "Hasan", phone: "716-398-2584" },
    { date: "2026-08-21", am: "Hernandez", pm: "Hernandez", phone: "478-0684 (pgr)" },
    { date: "2026-08-22", am: "Hernandez", pm: "Hernandez", phone: "478-0684 (pgr)" },
    { date: "2026-08-23", am: "Hernandez", pm: "Hernandez", phone: "478-0684 (pgr)" },
    { date: "2026-08-24", am: "Hasan", pm: "Hasan", phone: "716-398-2584" },
    { date: "2026-08-25", am: "Hasan", pm: "Hasan", phone: "716-398-2584" },
    { date: "2026-08-26", am: "Hasan", pm: "Hasan", phone: "716-398-2584" },
    { date: "2026-08-27", am: "Hasan", pm: "Hasan", phone: "716-398-2584" },
    { date: "2026-08-28", am: "Shah", pm: "Chulluncuy Rivas", phone: "914-643-6566" },
    { date: "2026-08-29", am: "Shah", pm: "Chulluncuy Rivas", phone: "914-643-6566" },
    { date: "2026-08-30", am: "Shah", pm: "Chulluncuy Rivas", phone: "914-643-6566" },
    { date: "2026-08-31", am: "Shah", pm: "Shah", phone: "914-643-6566" }
  ],

  // One attending + backup per date range.
  interventional: [
    { start: "2026-08-01", end: "2026-08-02", name: "Ding", phone: "713-382-7709", backup: "" },
    { start: "2026-08-03", end: "2026-08-09", name: "Sequeiros", phone: "319-321-4991", backup: "" },
    { start: "2026-08-10", end: "2026-08-16", name: "Rahmani", phone: "718-809-2189", backup: "" },
    { start: "2026-08-17", end: "2026-08-24", name: "Fakhri", phone: "706-767-3271", backup: "" },
    { start: "2026-08-25", end: "2026-08-27", name: "Abecassis", phone: "847-471-0503", backup: "" },
    { start: "2026-08-28", end: "2026-08-30", name: "Ding", phone: "713-382-7709", backup: "" },
    { start: "2026-08-31", end: "2026-08-31", name: "Sequeiros", phone: "319-321-4991", backup: "" }
  ]
};
