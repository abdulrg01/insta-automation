import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const layout = ({ children, params }: Props) => {

  return (
    <div className="p-3">
      <Sidebar slug={params.slug} />
      <div className="lg:ml-64 lg:pl-10 lg:py-2 flex flex-col overflow-auto">
        <Navbar slug={params.slug} />
        {children}
      </div>
    </div>
  );
};

export default layout;
