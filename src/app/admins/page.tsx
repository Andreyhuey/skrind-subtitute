import AdminComponent from "@/components/admins/admin-component";

const AdminPage = () => {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-16 py-10 min-h-screen flex flex-col gap-4 w-full">
        <div>
          <p className="md:text-[48px] font-[700]">Administrators</p>
        </div>
        <div className="flex flex-col gap-4">
          <AdminComponent />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
