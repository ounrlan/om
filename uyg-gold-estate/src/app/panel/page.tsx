import type { Metadata } from "next";
import PanelApp from "@/components/panel/PanelApp";

export const metadata: Metadata = {
  title: "Emlakçı Paneli | UYG Gold Estate",
  description: "UYG Gold Estate emlakçı portföy yönetim paneli.",
  robots: { index: false, follow: false },
};

export default function PanelPage() {
  return <PanelApp />;
}
