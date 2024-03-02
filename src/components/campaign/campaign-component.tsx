import { Campaign, columns } from "./columns";
import { CampaignTable } from "./table";

async function getData(): Promise<Campaign[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "Sale-a-Palooza",
      noOfImages: 15,
      dateCreated:
        "Fri Jul 28 2023 10:03:10 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Tue Feb 13 2024 06:32:39 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 2,
      name: "Flash Deals Biltz",
      noOfImages: 5,
      dateCreated:
        "Sat Apr 29 2023 13:33:00 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Wed Dec 06 2023 22:28:29 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 3,
      name: "Clearance Carnival",
      noOfImages: 2,
      dateCreated:
        "Tue Jun 06 2023 03:10:13 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sun Aug 13 2023 22:54:56 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 4,
      name: "Flash Deals Biltz",
      noOfImages: 2,
      dateCreated:
        "Sun Apr 02 2023 13:01:21 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sat Apr 15 2023 20:06:37 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 5,
      name: "Daily Dazzle Deals",
      noOfImages: 18,
      dateCreated:
        "Fri Sep 15 2023 16:58:51 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Tue Oct 03 2023 13:56:02 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 6,
      name: "Seasonal Spectacular",
      noOfImages: 15,
      dateCreated:
        "Thu May 18 2023 15:21:26 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Tue Dec 05 2023 05:47:01 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 7,
      name: "Reward Roundup",
      noOfImages: 6,
      dateCreated:
        "Sat May 20 2023 23:31:20 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Fri Feb 09 2024 05:57:06 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 8,
      name: "Reward Roundup",
      noOfImages: 13,
      dateCreated:
        "Thu May 18 2023 12:56:51 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sun Oct 29 2023 09:12:56 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 9,
      name: "Clearance Carnival",
      noOfImages: 18,
      dateCreated:
        "Sat Apr 08 2023 03:35:46 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sat Jun 17 2023 23:06:54 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 10,
      name: "Holiday Hustle",
      noOfImages: 6,
      dateCreated:
        "Thu Jun 08 2023 12:37:05 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Thu Jun 15 2023 14:32:41 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 11,
      name: "Clearance Carnival",
      noOfImages: 19,
      dateCreated:
        "Mon Apr 17 2023 08:20:58 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Fri May 05 2023 02:07:22 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 12,
      name: "Reward Roundup",
      noOfImages: 11,
      dateCreated:
        "Tue Jul 25 2023 23:32:06 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sun Apr 23 2023 15:56:14 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 13,
      name: "Bundle Bonanza",
      noOfImages: 5,
      dateCreated:
        "Thu Aug 17 2023 17:07:55 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Mon May 29 2023 09:29:53 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 14,
      name: "Daily Dazzle Deals",
      noOfImages: 3,
      dateCreated:
        "Tue Oct 31 2023 06:53:46 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sun May 07 2023 20:11:17 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 15,
      name: "Seasonal Spectacular",
      noOfImages: 8,
      dateCreated:
        "Sun Sep 10 2023 16:02:57 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Fri May 05 2023 06:12:13 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 16,
      name: "Holiday Hustle",
      noOfImages: 17,
      dateCreated:
        "Sat Jul 01 2023 17:41:08 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Fri Jan 26 2024 12:40:36 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 17,
      name: "Sale-a-Palooza",
      noOfImages: 14,
      dateCreated:
        "Fri Jul 14 2023 18:18:39 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Thu Nov 16 2023 10:54:23 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 18,
      name: "Bundle Bonanza",
      noOfImages: 5,
      dateCreated:
        "Mon Aug 14 2023 03:46:54 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Mon Mar 13 2023 20:06:55 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 19,
      name: "Sale-a-Palooza",
      noOfImages: 12,
      dateCreated:
        "Sun Nov 05 2023 09:21:44 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Fri Jul 28 2023 07:12:00 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 20,
      name: "Clearance Carnival",
      noOfImages: 8,
      dateCreated:
        "Sat Mar 11 2023 23:15:13 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Mon Jun 05 2023 15:33:46 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 21,
      name: "Flash Deals Biltz",
      noOfImages: 19,
      dateCreated:
        "Wed May 03 2023 17:22:24 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Mon Feb 12 2024 13:48:49 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 22,
      name: "Seasonal Spectacular",
      noOfImages: 15,
      dateCreated:
        "Tue May 30 2023 19:56:39 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sun Aug 13 2023 14:13:27 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 23,
      name: "Daily Dazzle Deals",
      noOfImages: 13,
      dateCreated:
        "Tue Feb 20 2024 00:09:31 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Tue Feb 13 2024 12:03:45 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 24,
      name: "Clearance Carnival",
      noOfImages: 11,
      dateCreated:
        "Thu May 11 2023 01:38:13 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sat Oct 07 2023 07:11:42 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 25,
      name: "Bundle Bonanza",
      noOfImages: 14,
      dateCreated:
        "Sat Oct 21 2023 14:02:36 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Wed May 17 2023 11:04:17 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 26,
      name: "Sale-a-Palooza",
      noOfImages: 5,
      dateCreated:
        "Mon Jun 19 2023 09:29:01 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Tue Jan 16 2024 04:35:14 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 27,
      name: "VIP Exclusive Showcase",
      noOfImages: 1,
      dateCreated:
        "Fri Oct 27 2023 14:48:13 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sat Jan 20 2024 02:34:25 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 28,
      name: "Bundle Bonanza",
      noOfImages: 9,
      dateCreated:
        "Mon Nov 20 2023 13:48:59 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sun Oct 29 2023 21:24:29 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 29,
      name: "VIP Exclusive Showcase",
      noOfImages: 7,
      dateCreated:
        "Tue Sep 05 2023 15:06:18 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Thu Mar 16 2023 01:55:58 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 30,
      name: "Holiday Hustle",
      noOfImages: 2,
      dateCreated:
        "Fri Aug 25 2023 10:09:21 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Tue Apr 11 2023 13:22:44 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 31,
      name: "Daily Dazzle Deals",
      noOfImages: 3,
      dateCreated:
        "Wed May 24 2023 20:32:20 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sat Apr 01 2023 16:40:37 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 32,
      name: "Holiday Hustle",
      noOfImages: 8,
      dateCreated:
        "Wed Nov 22 2023 03:35:51 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Fri Jan 26 2024 08:13:51 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 33,
      name: "Bundle Bonanza",
      noOfImages: 2,
      dateCreated:
        "Mon May 15 2023 09:09:55 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sat Aug 19 2023 23:28:32 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 34,
      name: "Reward Roundup",
      noOfImages: 16,
      dateCreated:
        "Sun Oct 22 2023 18:54:56 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sat Aug 12 2023 14:28:34 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 35,
      name: "Flash Deals Biltz",
      noOfImages: 14,
      dateCreated:
        "Sat Apr 29 2023 20:14:06 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Mon Jan 22 2024 18:15:44 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 36,
      name: "Seasonal Spectacular",
      noOfImages: 3,
      dateCreated:
        "Sat Aug 12 2023 12:06:33 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sat Oct 21 2023 12:34:00 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 37,
      name: "Clearance Carnival",
      noOfImages: 16,
      dateCreated:
        "Sun Apr 16 2023 16:55:51 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Wed Nov 15 2023 17:25:23 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 38,
      name: "Clearance Carnival",
      noOfImages: 6,
      dateCreated:
        "Thu Jun 01 2023 09:02:19 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sun Dec 31 2023 23:16:14 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 39,
      name: "Sale-a-Palooza",
      noOfImages: 12,
      dateCreated:
        "Fri Jun 16 2023 17:39:12 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sun Oct 08 2023 16:11:07 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 40,
      name: "Seasonal Spectacular",
      noOfImages: 14,
      dateCreated:
        "Wed Dec 20 2023 13:21:14 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Tue Dec 26 2023 21:57:40 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 41,
      name: "Sale-a-Palooza",
      noOfImages: 13,
      dateCreated:
        "Mon Nov 27 2023 23:42:34 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Thu Dec 07 2023 04:21:15 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 42,
      name: "Reward Roundup",
      noOfImages: 2,
      dateCreated:
        "Fri Oct 20 2023 19:52:50 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Tue Oct 03 2023 14:30:08 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 43,
      name: "Sale-a-Palooza",
      noOfImages: 9,
      dateCreated:
        "Sat Mar 04 2023 21:27:06 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Mon Aug 14 2023 22:07:07 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 44,
      name: "Seasonal Spectacular",
      noOfImages: 14,
      dateCreated:
        "Sun Jul 23 2023 11:26:43 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Fri Sep 22 2023 22:59:15 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 45,
      name: "Clearance Carnival",
      noOfImages: 11,
      dateCreated:
        "Sun Apr 09 2023 03:26:27 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sat May 27 2023 13:01:34 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 46,
      name: "Bundle Bonanza",
      noOfImages: 11,
      dateCreated:
        "Tue Jul 25 2023 05:47:38 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Fri Jun 30 2023 06:56:21 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 47,
      name: "Seasonal Spectacular",
      noOfImages: 2,
      dateCreated:
        "Mon Feb 26 2024 19:43:27 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sun Jul 09 2023 03:45:28 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
    {
      id: 48,
      name: "Flash Deals Biltz",
      noOfImages: 7,
      dateCreated:
        "Sat Jan 13 2024 15:45:19 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Sun Apr 30 2023 00:46:07 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 49,
      name: "Sale-a-Palooza",
      noOfImages: 2,
      dateCreated:
        "Tue Jan 09 2024 08:03:43 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Wed Sep 27 2023 05:07:04 GMT+0100 (West Africa Standard Time)",
      status: false,
    },
    {
      id: 50,
      name: "VIP Exclusive Showcase",
      noOfImages: 1,
      dateCreated:
        "Wed Aug 09 2023 15:42:25 GMT+0100 (West Africa Standard Time)",
      dateEdited:
        "Fri Sep 08 2023 03:17:14 GMT+0100 (West Africa Standard Time)",
      status: true,
    },
  ];
}

export default async function CampaignComponent() {
  const data = await getData();

  return (
    <div className="py-5">
      <CampaignTable columns={columns} data={data} />
    </div>
  );
}
