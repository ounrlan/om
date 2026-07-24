import { announcement, business } from "@/data/site";

export default function AnnouncementBar() {
  return (
    <div className="bg-pine text-cream">
      <div className="container-x flex items-center justify-center gap-x-4 gap-y-1 py-2 text-center">
        <p className="text-[12.5px] font-medium tracking-wide sm:text-[13px]">
          {announcement.text}
        </p>
        <a
          href={business.phoneHref}
          className="hidden font-mono text-[12.5px] font-semibold tracking-label text-sesame underline-offset-4 hover:underline sm:inline"
        >
          {announcement.phone}
        </a>
      </div>
    </div>
  );
}
