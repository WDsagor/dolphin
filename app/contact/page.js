// "use client";
import Contact from "@/components/Contact/Contact";

export const metadata = {
  title: "Contact | Dolphin Stationery",
  description: "or any feedbacks or improvements on our online store, please fill in this contact form. ",
};
const Page = () => {
  return (
    <section>
      <Contact />
      <Contact />
    </section>
  );
};

export default Page;
