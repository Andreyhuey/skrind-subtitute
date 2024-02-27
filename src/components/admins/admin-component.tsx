import { Admin, columns } from "./columns";
import { AdminTable } from "./table";

async function getData(): Promise<Admin[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "Kubra",
      email: "Ikhidie_Obianuju95@hotmail.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/901.jpg",
      lastActive: "pending invite",
      role: "Admin",
    },
    {
      id: 2,
      name: "Wale",
      email: "Nnamdi32@yahoo.com",
      avatar: "https://avatars.githubusercontent.com/u/33030659",
      lastActive: "2 hrs ago",
      role: "Admin",
    },
    {
      id: 3,
      name: "Simisola",
      email: "Titilayo_Akerele@yahoo.com",
      avatar: "https://avatars.githubusercontent.com/u/81880526",
      lastActive: "pending invite",
      role: "Admin",
    },
    {
      id: 4,
      name: "Tari",
      email: "Olaide.Ajakaiye58@hotmail.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/968.jpg",
      lastActive: "2 hrs ago",
      role: "Admin",
    },
    {
      id: 5,
      name: "Habiba",
      email: "Yakubu41@gmail.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/787.jpg",
      lastActive: "2 hrs ago",
      role: "Super Admin",
    },
    {
      id: 6,
      name: "Chinedu",
      email: "Ifeanyichukwu.Adeniyan@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/38145955",
      lastActive: "active",
      role: "Super Admin",
    },
    {
      id: 7,
      name: "Toluwani",
      email: "Ifunanya_Temitope@hotmail.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1021.jpg",
      lastActive: "active",
      role: "Super Admin",
    },
    {
      id: 8,
      name: "Gbemisola",
      email: "Shade85@hotmail.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/294.jpg",
      lastActive: "2 hrs ago",
      role: "Super Admin",
    },
    {
      id: 9,
      name: "Ayinde",
      email: "Akande_Aligbe@hotmail.com",
      avatar: "https://avatars.githubusercontent.com/u/47095923",
      lastActive: "Jan 6,2023",
      role: "Super Admin",
    },
    {
      id: 10,
      name: "Tari",
      email: "Gbeminiyi_Sylvester3@hotmail.com",
      avatar: "https://avatars.githubusercontent.com/u/16766822",
      lastActive: "2 hrs ago",
      role: "Admin",
    },
    {
      id: 11,
      name: "Rotimi",
      email: "Titilayo_Afunku15@hotmail.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/767.jpg",
      lastActive: "2 hrs ago",
      role: "Admin",
    },
    {
      id: 12,
      name: "Kubura",
      email: "Ifeanyichukwu_Ebubechukwu@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/14845617",
      lastActive: "pending invite",
      role: "Admin",
    },
    {
      id: 13,
      name: "Damilare",
      email: "Aminu60@yahoo.com",
      avatar: "https://avatars.githubusercontent.com/u/87270629",
      lastActive: "pending invite",
      role: "Admin",
    },
    {
      id: 14,
      name: "Chizoba",
      email: "Makinwa_Clare51@yahoo.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1133.jpg",
      lastActive: "Jan 6,2023",
      role: "Admin",
    },
    {
      id: 15,
      name: "Rasheedah",
      email: "Gbemisola18@hotmail.com",
      avatar: "https://avatars.githubusercontent.com/u/3001546",
      lastActive: "2 hrs ago",
      role: "Admin",
    },
    {
      id: 16,
      name: "Ikhidie",
      email: "Ireti40@hotmail.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/263.jpg",
      lastActive: "Jan 6,2023",
      role: "Super Admin",
    },
    {
      id: 17,
      name: "Abimbola",
      email: "Aminat_Ademayowa34@hotmail.com",
      avatar: "https://avatars.githubusercontent.com/u/9722451",
      lastActive: "Jan 6,2023",
      role: "Super Admin",
    },
    {
      id: 18,
      name: "Ikhidie",
      email: "Chinyere_Mukaram73@yahoo.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/268.jpg",
      lastActive: "Jan 6,2023",
      role: "Admin",
    },
    {
      id: 19,
      name: "Kemi",
      email: "Shade27@yahoo.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/242.jpg",
      lastActive: "Jan 6,2023",
      role: "Super Admin",
    },
    {
      id: 20,
      name: "Kubra",
      email: "Sumayyah.Grace87@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/99349061",
      lastActive: "active",
      role: "Admin",
    },
    {
      id: 21,
      name: "Onoriode",
      email: "Cherechi83@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/12570346",
      lastActive: "Jan 6,2023",
      role: "Admin",
    },
    {
      id: 22,
      name: "Fatima",
      email: "Rotimi67@yahoo.com",
      avatar: "https://avatars.githubusercontent.com/u/1783616",
      lastActive: "Yesterday",
      role: "Super Admin",
    },
    {
      id: 23,
      name: "Toluwani",
      email: "Olumide79@yahoo.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/700.jpg",
      lastActive: "Yesterday",
      role: "Super Admin",
    },
    {
      id: 24,
      name: "Remilekun",
      email: "Bankole_Oluwaseyi@gmail.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1094.jpg",
      lastActive: "Yesterday",
      role: "Admin",
    },
    {
      id: 25,
      name: "Olumide",
      email: "Lolade.Sulaimon@gmail.com",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1101.jpg",
      lastActive: "Jan 6,2023",
      role: "Admin",
    },
  ];
}

export default async function AdminComponent() {
  const data = await getData();

  return (
    <div className="py-5">
      <AdminTable columns={columns} data={data} />
    </div>
  );
}
