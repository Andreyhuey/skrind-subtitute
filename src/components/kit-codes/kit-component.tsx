import { KitCodes, columns } from "./columns";
import { KitCodesTable } from "./table";

async function getData(): Promise<KitCodes[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      testType: "hepatitis b",
      code: "debeb",
      dateCreated:
        "Fri Dec 08 2023 20:10:16 GMT+0100 (West Africa Standard Time)",
      usedBy: "Shade",
      status: "active",
    },
    {
      id: 2,
      testType: "malaria",
      code: "f550a",
      dateCreated:
        "Tue Oct 24 2023 22:23:44 GMT+0100 (West Africa Standard Time)",
      usedBy: "Zainab",
      status: "active",
    },
    {
      id: 3,
      testType: "hepatitis b",
      code: "72f56",
      dateCreated:
        "Thu Aug 24 2023 20:59:50 GMT+0100 (West Africa Standard Time)",
      usedBy: "Chimamanda",
      status: "active",
    },
    {
      id: 4,
      testType: "hepatitis c",
      code: "0706f",
      dateCreated:
        "Sun Dec 24 2023 13:08:18 GMT+0100 (West Africa Standard Time)",
      usedBy: "Jadesola",
      status: "used",
    },
    {
      id: 5,
      testType: "hepatitis b",
      code: "965df",
      dateCreated:
        "Sun Sep 24 2023 07:01:47 GMT+0100 (West Africa Standard Time)",
      usedBy: "Jolayemi",
      status: "active",
    },
    {
      id: 6,
      testType: "hepatitis b",
      code: "c560b",
      dateCreated:
        "Thu Mar 09 2023 06:18:43 GMT+0100 (West Africa Standard Time)",
      usedBy: "Akunna",
      status: "used",
    },
    {
      id: 7,
      testType: "hepatitis b",
      code: "170b0",
      dateCreated:
        "Tue Sep 05 2023 17:24:54 GMT+0100 (West Africa Standard Time)",
      usedBy: "Zainab",
      status: "used",
    },
    {
      id: 8,
      testType: "hepatitis c",
      code: "3feee",
      dateCreated:
        "Sat Apr 29 2023 06:18:49 GMT+0100 (West Africa Standard Time)",
      usedBy: "Aminu",
      status: "used",
    },
    {
      id: 9,
      testType: "hepatitis c",
      code: "304a4",
      dateCreated:
        "Thu Jul 06 2023 00:45:24 GMT+0100 (West Africa Standard Time)",
      usedBy: "Tomiloba",
      status: "active",
    },
    {
      id: 10,
      testType: "malaria",
      code: "d678f",
      dateCreated:
        "Fri Dec 08 2023 15:38:55 GMT+0100 (West Africa Standard Time)",
      usedBy: "Ayinde",
      status: "active",
    },
    {
      id: 11,
      testType: "hepatitis b",
      code: "884b2",
      dateCreated:
        "Sun Aug 13 2023 07:20:41 GMT+0100 (West Africa Standard Time)",
      usedBy: "Alade",
      status: "used",
    },
    {
      id: 12,
      testType: "hepatitis b",
      code: "15989",
      dateCreated:
        "Wed Jul 05 2023 01:04:41 GMT+0100 (West Africa Standard Time)",
      usedBy: "Lola",
      status: "used",
    },
    {
      id: 13,
      testType: "malaria",
      code: "08ab1",
      dateCreated:
        "Wed Oct 11 2023 01:03:22 GMT+0100 (West Africa Standard Time)",
      usedBy: "Emmanuel",
      status: "used",
    },
    {
      id: 14,
      testType: "hepatitis b",
      code: "4f66b",
      dateCreated:
        "Wed Jun 14 2023 04:44:48 GMT+0100 (West Africa Standard Time)",
      usedBy: "Gbemisola",
      status: "active",
    },
    {
      id: 15,
      testType: "Hiv/Aids",
      code: "aeace",
      dateCreated:
        "Sun Jul 16 2023 17:29:44 GMT+0100 (West Africa Standard Time)",
      usedBy: "Banji",
      status: "used",
    },
    {
      id: 16,
      testType: "hepatitis c",
      code: "2510c",
      dateCreated:
        "Wed Nov 01 2023 07:17:53 GMT+0100 (West Africa Standard Time)",
      usedBy: "Efe",
      status: "active",
    },
    {
      id: 17,
      testType: "Hiv/Aids",
      code: "a89e0",
      dateCreated:
        "Sun Sep 24 2023 09:58:46 GMT+0100 (West Africa Standard Time)",
      usedBy: "Wale",
      status: "used",
    },
    {
      id: 18,
      testType: "Hiv/Aids",
      code: "69c7e",
      dateCreated:
        "Sun Jan 07 2024 00:30:25 GMT+0100 (West Africa Standard Time)",
      usedBy: "Omawunmi",
      status: "active",
    },
    {
      id: 19,
      testType: "Hiv/Aids",
      code: "9023c",
      dateCreated:
        "Wed Nov 15 2023 17:38:41 GMT+0100 (West Africa Standard Time)",
      usedBy: "Lolade",
      status: "active",
    },
    {
      id: 20,
      testType: "hepatitis c",
      code: "10942",
      dateCreated:
        "Fri Dec 01 2023 14:12:36 GMT+0100 (West Africa Standard Time)",
      usedBy: "Habiba",
      status: "active",
    },
    {
      id: 21,
      testType: "Hiv/Aids",
      code: "cb252",
      dateCreated:
        "Fri Jun 23 2023 15:53:18 GMT+0100 (West Africa Standard Time)",
      usedBy: "Ireti",
      status: "active",
    },
    {
      id: 22,
      testType: "hepatitis b",
      code: "aad0b",
      dateCreated:
        "Mon Nov 20 2023 19:17:16 GMT+0100 (West Africa Standard Time)",
      usedBy: "Adedayo",
      status: "active",
    },
    {
      id: 23,
      testType: "malaria",
      code: "5243a",
      dateCreated:
        "Tue May 09 2023 06:41:50 GMT+0100 (West Africa Standard Time)",
      usedBy: "Omawunmi",
      status: "active",
    },
    {
      id: 24,
      testType: "Hiv/Aids",
      code: "0140c",
      dateCreated:
        "Sat Aug 26 2023 08:25:29 GMT+0100 (West Africa Standard Time)",
      usedBy: "Yakubu",
      status: "active",
    },
    {
      id: 25,
      testType: "malaria",
      code: "d840b",
      dateCreated:
        "Sun Mar 12 2023 12:17:06 GMT+0100 (West Africa Standard Time)",
      usedBy: "Abimbola",
      status: "used",
    },
    {
      id: 26,
      testType: "malaria",
      code: "4e5d6",
      dateCreated:
        "Sun Apr 09 2023 11:59:00 GMT+0100 (West Africa Standard Time)",
      usedBy: "Olaide",
      status: "used",
    },
    {
      id: 27,
      testType: "malaria",
      code: "3f83b",
      dateCreated:
        "Tue Jul 18 2023 01:10:59 GMT+0100 (West Africa Standard Time)",
      usedBy: "Jolayemi",
      status: "active",
    },
    {
      id: 28,
      testType: "hepatitis c",
      code: "517eb",
      dateCreated:
        "Sun Mar 05 2023 18:55:38 GMT+0100 (West Africa Standard Time)",
      usedBy: "Musa",
      status: "used",
    },
    {
      id: 29,
      testType: "hepatitis b",
      code: "0fada",
      dateCreated:
        "Thu Jun 22 2023 07:52:02 GMT+0100 (West Africa Standard Time)",
      usedBy: "Shalewa",
      status: "active",
    },
    {
      id: 30,
      testType: "Hiv/Aids",
      code: "ca2e0",
      dateCreated:
        "Sun Jan 07 2024 09:39:33 GMT+0100 (West Africa Standard Time)",
      usedBy: "Wale",
      status: "active",
    },
    {
      id: 31,
      testType: "hepatitis c",
      code: "b0ee8",
      dateCreated:
        "Wed May 03 2023 20:45:45 GMT+0100 (West Africa Standard Time)",
      usedBy: "Abisoye",
      status: "active",
    },
    {
      id: 32,
      testType: "Hiv/Aids",
      code: "24b99",
      dateCreated:
        "Sat May 20 2023 23:25:39 GMT+0100 (West Africa Standard Time)",
      usedBy: "Ikhidie",
      status: "active",
    },
    {
      id: 33,
      testType: "malaria",
      code: "e99c9",
      dateCreated:
        "Tue Oct 03 2023 17:30:16 GMT+0100 (West Africa Standard Time)",
      usedBy: "Makinwa",
      status: "used",
    },
    {
      id: 34,
      testType: "Hiv/Aids",
      code: "1085b",
      dateCreated:
        "Mon Jun 05 2023 09:40:32 GMT+0100 (West Africa Standard Time)",
      usedBy: "Yusuf",
      status: "active",
    },
    {
      id: 35,
      testType: "Hiv/Aids",
      code: "09f2e",
      dateCreated:
        "Thu Oct 12 2023 21:56:46 GMT+0100 (West Africa Standard Time)",
      usedBy: "Yakubu",
      status: "active",
    },
    {
      id: 36,
      testType: "hepatitis b",
      code: "57624",
      dateCreated:
        "Mon Jan 01 2024 00:51:13 GMT+0100 (West Africa Standard Time)",
      usedBy: "Isioma",
      status: "used",
    },
    {
      id: 37,
      testType: "malaria",
      code: "914a3",
      dateCreated:
        "Thu Jun 15 2023 19:48:06 GMT+0100 (West Africa Standard Time)",
      usedBy: "Olufunmi",
      status: "active",
    },
    {
      id: 38,
      testType: "hepatitis c",
      code: "6b75a",
      dateCreated:
        "Sat Sep 09 2023 15:06:55 GMT+0100 (West Africa Standard Time)",
      usedBy: "Sname",
      status: "active",
    },
    {
      id: 39,
      testType: "malaria",
      code: "4a30a",
      dateCreated:
        "Tue Sep 12 2023 02:33:52 GMT+0100 (West Africa Standard Time)",
      usedBy: "Chinedu",
      status: "active",
    },
    {
      id: 40,
      testType: "Hiv/Aids",
      code: "409bc",
      dateCreated:
        "Thu Sep 21 2023 19:38:35 GMT+0100 (West Africa Standard Time)",
      usedBy: "Johnson",
      status: "active",
    },
    {
      id: 41,
      testType: "hepatitis b",
      code: "3dbd5",
      dateCreated:
        "Fri May 05 2023 04:19:54 GMT+0100 (West Africa Standard Time)",
      usedBy: "Onome",
      status: "active",
    },
    {
      id: 42,
      testType: "Hiv/Aids",
      code: "ee4a8",
      dateCreated:
        "Mon Jul 03 2023 15:47:15 GMT+0100 (West Africa Standard Time)",
      usedBy: "Damilola",
      status: "active",
    },
    {
      id: 43,
      testType: "malaria",
      code: "3f544",
      dateCreated:
        "Sat Aug 19 2023 16:30:30 GMT+0100 (West Africa Standard Time)",
      usedBy: "Omolara",
      status: "used",
    },
    {
      id: 44,
      testType: "hepatitis c",
      code: "fac4c",
      dateCreated:
        "Mon Oct 02 2023 06:27:58 GMT+0100 (West Africa Standard Time)",
      usedBy: "Lola",
      status: "active",
    },
    {
      id: 45,
      testType: "Hiv/Aids",
      code: "b5d17",
      dateCreated:
        "Sun Sep 24 2023 16:44:55 GMT+0100 (West Africa Standard Time)",
      usedBy: "Johnson",
      status: "active",
    },
    {
      id: 46,
      testType: "malaria",
      code: "e14c9",
      dateCreated:
        "Thu Dec 28 2023 10:22:02 GMT+0100 (West Africa Standard Time)",
      usedBy: "Ifeanyichukwu",
      status: "used",
    },
    {
      id: 47,
      testType: "hepatitis b",
      code: "0b500",
      dateCreated:
        "Thu Mar 30 2023 08:25:03 GMT+0100 (West Africa Standard Time)",
      usedBy: "Azubuike",
      status: "used",
    },
    {
      id: 48,
      testType: "Hiv/Aids",
      code: "01ce4",
      dateCreated:
        "Sat Jun 10 2023 10:05:44 GMT+0100 (West Africa Standard Time)",
      usedBy: "Ebiere",
      status: "used",
    },
    {
      id: 49,
      testType: "malaria",
      code: "42222",
      dateCreated:
        "Fri Jul 21 2023 07:41:50 GMT+0100 (West Africa Standard Time)",
      usedBy: "Nnamdi",
      status: "used",
    },
    {
      id: 50,
      testType: "Hiv/Aids",
      code: "146d8",
      dateCreated:
        "Sun Nov 12 2023 14:48:59 GMT+0100 (West Africa Standard Time)",
      usedBy: "Sumayyah",
      status: "used",
    },
    {
      id: 51,
      testType: "malaria",
      code: "224af",
      dateCreated:
        "Mon Apr 24 2023 05:38:40 GMT+0100 (West Africa Standard Time)",
      usedBy: "Bankole",
      status: "used",
    },
    {
      id: 52,
      testType: "hepatitis c",
      code: "a0c14",
      dateCreated:
        "Fri Jun 23 2023 12:25:26 GMT+0100 (West Africa Standard Time)",
      usedBy: "Abisola",
      status: "active",
    },
    {
      id: 53,
      testType: "hepatitis b",
      code: "f8350",
      dateCreated:
        "Wed May 10 2023 02:12:56 GMT+0100 (West Africa Standard Time)",
      usedBy: "Banji",
      status: "active",
    },
    {
      id: 54,
      testType: "malaria",
      code: "62dc0",
      dateCreated:
        "Sun Jul 02 2023 13:13:59 GMT+0100 (West Africa Standard Time)",
      usedBy: "Isioma",
      status: "active",
    },
    {
      id: 55,
      testType: "malaria",
      code: "997f3",
      dateCreated:
        "Sat Aug 26 2023 20:30:13 GMT+0100 (West Africa Standard Time)",
      usedBy: "Titilope",
      status: "used",
    },
    {
      id: 56,
      testType: "Hiv/Aids",
      code: "85321",
      dateCreated:
        "Sat Dec 30 2023 04:23:29 GMT+0100 (West Africa Standard Time)",
      usedBy: "Buchi",
      status: "used",
    },
    {
      id: 57,
      testType: "hepatitis c",
      code: "ad55c",
      dateCreated:
        "Mon Mar 27 2023 13:23:06 GMT+0100 (West Africa Standard Time)",
      usedBy: "Damilola",
      status: "active",
    },
    {
      id: 58,
      testType: "Hiv/Aids",
      code: "7dbb9",
      dateCreated:
        "Sun Nov 12 2023 03:31:46 GMT+0100 (West Africa Standard Time)",
      usedBy: "Chiamaka",
      status: "active",
    },
    {
      id: 59,
      testType: "hepatitis c",
      code: "01711",
      dateCreated:
        "Thu Sep 07 2023 06:00:42 GMT+0100 (West Africa Standard Time)",
      usedBy: "Akunna",
      status: "used",
    },
    {
      id: 60,
      testType: "hepatitis b",
      code: "23657",
      dateCreated:
        "Mon Dec 11 2023 21:25:50 GMT+0100 (West Africa Standard Time)",
      usedBy: "Emeka",
      status: "used",
    },
    {
      id: 61,
      testType: "hepatitis b",
      code: "4ae72",
      dateCreated:
        "Thu Jan 25 2024 12:30:18 GMT+0100 (West Africa Standard Time)",
      usedBy: "Simisola",
      status: "used",
    },
    {
      id: 62,
      testType: "hepatitis b",
      code: "89989",
      dateCreated:
        "Sun Apr 23 2023 06:18:03 GMT+0100 (West Africa Standard Time)",
      usedBy: "Ifunanya",
      status: "active",
    },
    {
      id: 63,
      testType: "malaria",
      code: "87bb1",
      dateCreated:
        "Fri May 12 2023 19:07:55 GMT+0100 (West Africa Standard Time)",
      usedBy: "Kubura",
      status: "used",
    },
    {
      id: 64,
      testType: "malaria",
      code: "ac0f4",
      dateCreated:
        "Mon Feb 19 2024 02:04:38 GMT+0100 (West Africa Standard Time)",
      usedBy: "Adedayo",
      status: "active",
    },
    {
      id: 65,
      testType: "malaria",
      code: "94426",
      dateCreated:
        "Fri Jun 16 2023 08:13:48 GMT+0100 (West Africa Standard Time)",
      usedBy: "Damilola",
      status: "active",
    },
    {
      id: 66,
      testType: "hepatitis c",
      code: "ed58e",
      dateCreated:
        "Tue Mar 21 2023 05:48:37 GMT+0100 (West Africa Standard Time)",
      usedBy: "Emeka",
      status: "active",
    },
    {
      id: 67,
      testType: "Hiv/Aids",
      code: "edbba",
      dateCreated:
        "Sun Aug 13 2023 03:41:13 GMT+0100 (West Africa Standard Time)",
      usedBy: "Shade",
      status: "active",
    },
    {
      id: 68,
      testType: "Hiv/Aids",
      code: "c7cb0",
      dateCreated:
        "Fri Feb 02 2024 23:37:21 GMT+0100 (West Africa Standard Time)",
      usedBy: "Fatima",
      status: "used",
    },
    {
      id: 69,
      testType: "Hiv/Aids",
      code: "d600a",
      dateCreated:
        "Sat Oct 21 2023 00:01:03 GMT+0100 (West Africa Standard Time)",
      usedBy: "Augustina",
      status: "used",
    },
    {
      id: 70,
      testType: "hepatitis b",
      code: "ec6ed",
      dateCreated:
        "Sun Jun 04 2023 04:20:47 GMT+0100 (West Africa Standard Time)",
      usedBy: "Tobiloba",
      status: "active",
    },
    {
      id: 71,
      testType: "malaria",
      code: "a120d",
      dateCreated:
        "Sat Nov 18 2023 19:47:26 GMT+0100 (West Africa Standard Time)",
      usedBy: "Omolara",
      status: "active",
    },
    {
      id: 72,
      testType: "hepatitis c",
      code: "4148d",
      dateCreated:
        "Sat Aug 26 2023 01:39:25 GMT+0100 (West Africa Standard Time)",
      usedBy: "Gbemisola",
      status: "used",
    },
    {
      id: 73,
      testType: "malaria",
      code: "4ff2a",
      dateCreated:
        "Thu Apr 27 2023 18:25:02 GMT+0100 (West Africa Standard Time)",
      usedBy: "Tobiloba",
      status: "used",
    },
    {
      id: 74,
      testType: "hepatitis c",
      code: "7dc89",
      dateCreated:
        "Tue Mar 14 2023 03:24:38 GMT+0100 (West Africa Standard Time)",
      usedBy: "Ifeanyichukwu",
      status: "used",
    },
    {
      id: 75,
      testType: "hepatitis b",
      code: "c167f",
      dateCreated:
        "Thu Nov 16 2023 04:25:15 GMT+0100 (West Africa Standard Time)",
      usedBy: "Esse",
      status: "used",
    },
    {
      id: 76,
      testType: "malaria",
      code: "4753f",
      dateCreated:
        "Sun May 28 2023 20:11:39 GMT+0100 (West Africa Standard Time)",
      usedBy: "Danjuma",
      status: "active",
    },
    {
      id: 77,
      testType: "malaria",
      code: "1be9a",
      dateCreated:
        "Sun Nov 19 2023 23:02:51 GMT+0100 (West Africa Standard Time)",
      usedBy: "Chinyere",
      status: "used",
    },
    {
      id: 78,
      testType: "malaria",
      code: "4f064",
      dateCreated:
        "Wed Oct 25 2023 18:40:51 GMT+0100 (West Africa Standard Time)",
      usedBy: "Bankole",
      status: "used",
    },
    {
      id: 79,
      testType: "hepatitis c",
      code: "c38f7",
      dateCreated:
        "Fri Mar 10 2023 22:45:53 GMT+0100 (West Africa Standard Time)",
      usedBy: "Toluwani",
      status: "used",
    },
    {
      id: 80,
      testType: "hepatitis b",
      code: "b1d6d",
      dateCreated:
        "Thu Apr 06 2023 00:25:54 GMT+0100 (West Africa Standard Time)",
      usedBy: "Adaugo",
      status: "active",
    },
    {
      id: 81,
      testType: "hepatitis c",
      code: "6716c",
      dateCreated:
        "Fri May 19 2023 07:05:35 GMT+0100 (West Africa Standard Time)",
      usedBy: "Akanni",
      status: "used",
    },
    {
      id: 82,
      testType: "malaria",
      code: "5d1ac",
      dateCreated:
        "Fri Jul 21 2023 22:35:41 GMT+0100 (West Africa Standard Time)",
      usedBy: "Onome",
      status: "used",
    },
    {
      id: 83,
      testType: "malaria",
      code: "017b0",
      dateCreated:
        "Tue Dec 05 2023 23:19:07 GMT+0100 (West Africa Standard Time)",
      usedBy: "Ikenna",
      status: "active",
    },
    {
      id: 84,
      testType: "Hiv/Aids",
      code: "2d321",
      dateCreated:
        "Fri Apr 28 2023 11:57:48 GMT+0100 (West Africa Standard Time)",
      usedBy: "Obioma",
      status: "active",
    },
    {
      id: 85,
      testType: "hepatitis b",
      code: "9641a",
      dateCreated:
        "Wed Nov 22 2023 16:16:15 GMT+0100 (West Africa Standard Time)",
      usedBy: "Titi",
      status: "used",
    },
    {
      id: 86,
      testType: "Hiv/Aids",
      code: "04547",
      dateCreated:
        "Wed Nov 22 2023 08:54:57 GMT+0100 (West Africa Standard Time)",
      usedBy: "Habiba",
      status: "used",
    },
    {
      id: 87,
      testType: "hepatitis c",
      code: "703a1",
      dateCreated:
        "Tue Nov 21 2023 10:33:08 GMT+0100 (West Africa Standard Time)",
      usedBy: "Abimbola",
      status: "used",
    },
    {
      id: 88,
      testType: "Hiv/Aids",
      code: "5f8b0",
      dateCreated:
        "Fri Aug 25 2023 14:38:28 GMT+0100 (West Africa Standard Time)",
      usedBy: "Titi",
      status: "used",
    },
    {
      id: 89,
      testType: "hepatitis b",
      code: "8d2dd",
      dateCreated:
        "Fri Mar 31 2023 20:08:24 GMT+0100 (West Africa Standard Time)",
      usedBy: "Augustina",
      status: "active",
    },
    {
      id: 90,
      testType: "hepatitis c",
      code: "60b14",
      dateCreated:
        "Wed Mar 01 2023 05:21:04 GMT+0100 (West Africa Standard Time)",
      usedBy: "Chiamaka",
      status: "active",
    },
    {
      id: 91,
      testType: "Hiv/Aids",
      code: "cf3b5",
      dateCreated:
        "Thu Jun 08 2023 16:57:24 GMT+0100 (West Africa Standard Time)",
      usedBy: "Simisola",
      status: "active",
    },
    {
      id: 92,
      testType: "hepatitis b",
      code: "a6222",
      dateCreated:
        "Sun Mar 12 2023 20:31:47 GMT+0100 (West Africa Standard Time)",
      usedBy: "Zainab",
      status: "active",
    },
    {
      id: 93,
      testType: "hepatitis c",
      code: "b64ca",
      dateCreated:
        "Mon Oct 16 2023 12:24:20 GMT+0100 (West Africa Standard Time)",
      usedBy: "Emmanuel",
      status: "active",
    },
    {
      id: 94,
      testType: "Hiv/Aids",
      code: "ae9c8",
      dateCreated:
        "Tue Jun 13 2023 10:05:22 GMT+0100 (West Africa Standard Time)",
      usedBy: "Omolara",
      status: "used",
    },
    {
      id: 95,
      testType: "Hiv/Aids",
      code: "0f24d",
      dateCreated:
        "Wed Jan 31 2024 01:31:33 GMT+0100 (West Africa Standard Time)",
      usedBy: "Emeka",
      status: "active",
    },
    {
      id: 96,
      testType: "hepatitis c",
      code: "53c8f",
      dateCreated:
        "Mon Nov 13 2023 21:03:20 GMT+0100 (West Africa Standard Time)",
      usedBy: "Chukwu",
      status: "used",
    },
    {
      id: 97,
      testType: "Hiv/Aids",
      code: "33957",
      dateCreated:
        "Sat Dec 02 2023 16:52:16 GMT+0100 (West Africa Standard Time)",
      usedBy: "Ifeoma",
      status: "active",
    },
    {
      id: 98,
      testType: "Hiv/Aids",
      code: "67037",
      dateCreated:
        "Fri Jun 16 2023 19:11:59 GMT+0100 (West Africa Standard Time)",
      usedBy: "Simisola",
      status: "active",
    },
    {
      id: 99,
      testType: "hepatitis c",
      code: "bd4ab",
      dateCreated:
        "Sun Nov 19 2023 05:44:51 GMT+0100 (West Africa Standard Time)",
      usedBy: "Nnamdi",
      status: "active",
    },
    {
      id: 100,
      testType: "hepatitis b",
      code: "f4279",
      dateCreated:
        "Fri Jan 12 2024 10:19:37 GMT+0100 (West Africa Standard Time)",
      usedBy: "Makinwa",
      status: "active",
    },
    {
      id: 101,
      testType: "hepatitis b",
      code: "68426",
      dateCreated:
        "Fri Jul 14 2023 10:11:04 GMT+0100 (West Africa Standard Time)",
      usedBy: "Emmanuel",
      status: "active",
    },
    {
      id: 102,
      testType: "hepatitis b",
      code: "add33",
      dateCreated:
        "Fri Apr 14 2023 01:27:20 GMT+0100 (West Africa Standard Time)",
      usedBy: "Ayinde",
      status: "used",
    },
  ];
}

export default async function KitCodesComponent() {
  const data = await getData();

  return (
    <div className="py-5">
      <KitCodesTable columns={columns} data={data} />
    </div>
  );
}
