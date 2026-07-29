import { TWorkExperience } from "@type/Company";
import { sectionCopy } from "@data/about";

type Props = {
  activeCompany: TWorkExperience;
};

function periodLabel(item: TWorkExperience) {
  if (item.timelineLabel) return item.timelineLabel;
  if (item.endDate) return `${item.startDate} – ${item.endDate}`;
  return `${item.startDate} – ${sectionCopy.presentLabel}`;
}

export default function CompanyDetails({ activeCompany }: Props) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-accent/20 bg-surface-elevated/90 p-4 text-white sm:mx-auto md:max-w-lg md:p-8 xl:max-w-none xl:min-h-full">
      <p className="mb-2 cursor-auto text-xl font-bold lg:text-3xl">
        {activeCompany.name}
      </p>
      <p className="mb-1 text-lg">{activeCompany.position}</p>
      <p className="text-sm italic lg:text-base">{periodLabel(activeCompany)}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {activeCompany.skills.map((skill) => (
          <span
            key={skill}
            className="inline-block rounded-md bg-accent/20 px-2 py-1 text-xs font-medium text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
      <ul className="z-30 ml-5 mt-4 list-disc cursor-auto text-sm md:text-base">
        {activeCompany.responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
