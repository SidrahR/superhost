import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
export default function Home() {
  return (
    <main>
      <div className="min-h-screen hidden lg:block">
        <Header currentPage="Home" />
      </div>
      <div className="block lg:hidden">
        <MobileHeader currentPage="Home" />
      </div>
      <div className="text-lg text-center fixed -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Welcome to superhost dashboard
      </div>
    </main>
  );
}
