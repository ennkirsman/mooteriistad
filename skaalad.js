/* =====================================================================
   SKAALADE KATALOOG
   ---------------------------------------------------------------------
   Iga rida kirjeldab ühe päris mõõteriista skaala. Rakendus valib
   ülesande jaoks juhusliku rea ja seab osuti juhuslikku kohta.

   Veerud:
     nimi    – mõõteriista nimi, mis kuvatakse skaala kohal
     ühik    – mm, cm, m, km, N, °C, s, km/h, m/s, J, A, V, kPa või kg
               (ühik määrab ka mõõteriista kuju: mm/cm/m/km = joonlaud,
               N = dünamomeeter, °C = termomeeter, s = stopper,
               ülejäänud = osutiga ümar skaala)
     algus   – skaala väikseim väärtus
     lõpp    – skaala suurim väärtus
     jaotis  – jaotise väärtus (kahe kõrvuti kriipsu vahe)
     k       – mitu jaotist on kahe kõrvuti asuva arvu vahel
     tase    – 1 = kerge, 2 = paras, 3 = raske
     aken    – (valikuline) pika skaala korral näidatakse ainult lõiku,
               kus on nii mitu nummerdatud vahemikku; lõigu asukoht
               valitakse juhuslikult. Selliseid ridu ei kasutata
               harjutuses „Skaala andmed“, sest seal küsitakse kogu
               mõõtepiirkonda.

   Kümnendmurrud kirjuta PUNKTIGA (0.1), mitte komaga.
   Kõiki ridu saab vaadata lehel index.html#kataloog
   ===================================================================== */

window.SKAALAD = [
// nimi                        ühik    algus  lõpp   jaotis  k   tase aken

// ---------- joonlauad ja mõõdulindid ----------
['Joonlaud',                   'mm',   0,     50,    1,      10, 1],
['Joonlaud',                   'mm',   0,     300,   1,      10, 1,  5],
['Joonlaud',                   'mm',   0,     200,   1,      10, 1,  4],
['Joonlaud',                   'mm',   0,     500,   2,      10, 2,  6],
['Joonlaud',                   'mm',   0,     300,   1,      10, 3,  3],
['Joonlaud',                   'cm',   0,     50,    1,      5,  1],
['Mõõdupuu',                   'cm',   0,     100,   1,      10, 1,  5],
['Joonlaud',                   'cm',   0,     10,    0.2,    5,  2],
['Joonlaud',                   'cm',   0,     30,    0.1,    10, 2,  5],
['Joonlaud',                   'cm',   0,     15,    0.1,    10, 2,  4],
['Joonlaud',                   'cm',   0,     30,    0.1,    10, 3,  3],
['Joonlaud (poolmillimeetrid)','cm',   0,     20,    0.05,   20, 3,  2],
['Mõõdulint',                  'm',    0,     20,    1,      5,  1],
['Mõõdulint',                  'm',    0,     50,    1,      10, 1,  4],
['Mõõdulint',                  'm',    0,     5,     0.1,    10, 2],
['Mõõdulint',                  'm',    0,     10,    0.2,    5,  2],
['Mõõdulint',                  'm',    0,     3,     0.05,   10, 3],
['Mõõdulint',                  'm',    0,     30,    0.01,   10, 3,  4],
['Mõõdulint',                  'm',    0,     5,     0.02,   5,  3,  6],
['Kaardi mõõtkava',            'km',   0,     40,    2,      5,  1],
['Kaardi mõõtkava',            'km',   0,     200,   10,     5,  1],
['Kaardi mõõtkava',            'km',   0,     10,    1,      2,  1],
['Kaardi mõõtkava',            'km',   0,     4,     0.2,    5,  2],
['Kaardi mõõtkava',            'km',   0,     10,    0.5,    4,  2],
['Kaardi mõõtkava',            'km',   0,     2,     0.1,    5,  2],
['Kaardi mõõtkava',            'km',   0,     1,     0.05,   4,  3],
['Kaardi mõõtkava',            'km',   0,     3,     0.25,   4,  3],
['Kaardi mõõtkava',            'km',   0,     0.5,   0.025,  4,  3],

// ---------- dünamomeetrid ----------
['Dünamomeeter',               'N',    0,     20,    1,      5,  1],
['Dünamomeeter',               'N',    0,     50,    1,      5,  1],
['Dünamomeeter',               'N',    0,     100,   2,      5,  1],
['Dünamomeeter',               'N',    0,     10,    0.5,    2,  2],
['Dünamomeeter',               'N',    0,     5,     0.1,    10, 2],
['Dünamomeeter',               'N',    0,     10,    0.2,    5,  2],
['Dünamomeeter',               'N',    0,     4,     0.1,    5,  2],
['Dünamomeeter',               'N',    0,     3,     0.1,    10, 2],
['Dünamomeeter',               'N',    0,     1,     0.02,   5,  3],
['Dünamomeeter',               'N',    0,     2,     0.05,   4,  3],
['Dünamomeeter',               'N',    0,     2.5,   0.05,   10, 3],
['Dünamomeeter',               'N',    0,     0.5,   0.01,   10, 3],

// ---------- termomeetrid ----------
['Toatermomeeter',             '°C',   -10,   50,    1,      10, 1],
['Välistermomeeter',           '°C',   -40,   50,    2,      5,  1],
['Laboritermomeeter',          '°C',   0,     100,   2,      5,  1],
['Saunatermomeeter',           '°C',   0,     120,   5,      4,  1],
['Vannitermomeeter',           '°C',   0,     50,    1,      10, 1],
['Kraadiklaas',                '°C',   35,    42,    0.1,    10, 2],
['Toatermomeeter',             '°C',   10,    40,    0.5,    10, 2],
['Akvaariumi termomeeter',     '°C',   10,    40,    0.5,    10, 2],
['Laboritermomeeter',          '°C',   -10,   110,   0.5,    10, 2,  4],
['Laboritermomeeter',          '°C',   -10,   110,   1,      10, 2,  4],
['Täppistermomeeter',          '°C',   0,     50,    0.1,    10, 3,  4],
['Kalorimeetri termomeeter',   '°C',   10,    30,    0.05,   20, 3,  2],
['Täppistermomeeter',          '°C',   0,     5,     0.01,   10, 3,  4],
['Ilmajaama termomeeter',      '°C',   -30,   40,    0.2,    5,  3,  5],

// ---------- stopperid ----------
['Stopper',                    's',    0,     60,    1,      5,  1],
['Stopper',                    's',    0,     30,    1,      5,  1],
['Stopper',                    's',    0,     60,    2,      5,  1],
['Stopper',                    's',    0,     30,    0.5,    10, 2],
['Stopper',                    's',    0,     10,    0.2,    5,  2],
['Stopper',                    's',    0,     15,    0.5,    2,  2],
['Stopper',                    's',    0,     20,    0.5,    4,  2],
['Stopper',                    's',    0,     3,     0.05,   10, 3],
['Stopper',                    's',    0,     15,    0.25,   4,  3],

// ---------- osutiga mõõteriistad ----------
['Spidomeeter',                'km/h', 0,     200,   10,     2,  1],
['Spidomeeter',                'km/h', 0,     120,   5,      4,  1],
['Jalgratta spidomeeter',      'km/h', 0,     60,    2,      5,  1],
['Spidomeeter',                'km/h', 0,     220,   5,      4,  2],
['Spidomeeter',                'km/h', 0,     180,   5,      4,  2],
['Tuulemõõtja',                'm/s',  0,     30,    1,      5,  1],
['Tuulemõõtja',                'm/s',  0,     10,    0.2,    5,  2],
['Tuulemõõtja',                'm/s',  0,     5,     0.1,    10, 2],
['Tuulemõõtja',                'm/s',  0,     20,    0.5,    4,  2],
['Tuulemõõtja',                'm/s',  0,     2,     0.05,   4,  3],
['Tuulemõõtja',                'm/s',  0,     1,     0.02,   5,  3],
['Tuulemõõtja',                'm/s',  0,     3,     0.05,   10, 3],
['Energiamõõtja',              'J',    0,     100,   2,      5,  1],
['Energiamõõtja',              'J',    0,     10,    0.2,    5,  2],
['Energiamõõtja',              'J',    0,     2,     0.05,   4,  3],
['Energiamõõtja',              'J',    0,     1,     0.02,   5,  3],
['Energiamõõtja',              'J',    0,     2.5,   0.05,   10, 3],
['Ampermeeter',                'A',    0,     20,    1,      5,  1],
['Ampermeeter',                'A',    0,     3,     0.1,    10, 2],
['Ampermeeter',                'A',    0,     5,     0.1,    5,  2],
['Ampermeeter',                'A',    0,     10,    0.5,    2,  2],
['Ampermeeter',                'A',    0,     1,     0.02,   5,  3],
['Ampermeeter',                'A',    0,     0.6,   0.02,   5,  3],
['Ampermeeter',                'A',    0,     2,     0.05,   4,  3],
['Voltmeeter',                 'V',    0,     30,    1,      5,  1],
['Voltmeeter',                 'V',    0,     250,   10,     5,  1],
['Voltmeeter',                 'V',    0,     15,    0.5,    10, 2],
['Voltmeeter',                 'V',    0,     6,     0.2,    5,  2],
['Voltmeeter',                 'V',    0,     3,     0.1,    5,  2],
['Voltmeeter',                 'V',    0,     3,     0.05,   10, 3],
['Voltmeeter',                 'V',    0,     1.5,   0.05,   10, 3],
['Manomeeter',                 'kPa',  0,     400,   10,     10, 1],
['Manomeeter',                 'kPa',  0,     250,   5,      10, 1],
['Manomeeter',                 'kPa',  0,     600,   20,     5,  2],
['Manomeeter',                 'kPa',  0,     1000,  25,     8,  3],
['Personaalkaal',              'kg',   0,     100,   2,      5,  1],
['Köögikaal',                  'kg',   0,     5,     0.1,    5,  2],
['Köögikaal',                  'kg',   0,     10,    0.2,    5,  2],
['Köögikaal',                  'kg',   0,     1,     0.025,  4,  3],
['Köögikaal',                  'kg',   0,     2,     0.05,   4,  3]
];
