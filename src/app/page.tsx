import Home from "@/components/Home";
import Notes from "@/components/Notes";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Home />
      <Notes />
    </main>
  );
}
