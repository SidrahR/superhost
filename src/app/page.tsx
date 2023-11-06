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
    </main>
  );
}
