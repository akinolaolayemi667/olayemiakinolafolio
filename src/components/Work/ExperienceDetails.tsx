"use client";

import { useState } from "react";
import CompanyDetails from "./CompanyDetails";
import { TWorkExperience } from "@type/Company";

export default function ExperienceDetails({
  workExperiences,
}: {
  workExperiences: TWorkExperience[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCompany = workExperiences[activeIndex] ?? workExperiences[0];

  if (!workExperiences.length || !activeCompany) {
    return null;
  }

  return (
    <div className="grid w-full min-w-0 grid-cols-12 place-items-center gap-4 px-0 sm:px-4">
      <div className="col-span-12 flex w-full min-w-0 flex-col sm:col-span-5">
        <div className="w-full py-5 sm:px-2">
          {workExperiences.map((company, index) => {
            const numbering = index + 1;
            const label =
              numbering <= 9 ? `0${numbering}` : `${numbering}`;
            return (
              <div key={company.name + index} className="mb-8 w-full">
                <p className="relative z-30 -mb-5 text-4xl font-black text-white sm:text-5xl md:text-7xl md:-mb-6">
                  {label}
                </p>
                <button
                  type="button"
                  className={`${
                    activeIndex === index
                      ? "border-transparent bg-accent font-semibold text-ink"
                      : "border-transparent text-white"
                  } w-full max-w-sm rounded-xl border-2 px-6 py-4 text-center transition-all duration-200 ease-in-out hover:scale-[1.02] hover:border-accent hover:bg-accent/15 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink lg:max-w-md`}
                  onClick={() => setActiveIndex(index)}
                >
                  {company.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-span-12 flex min-h-full w-full min-w-0 flex-col items-center justify-center sm:col-span-7">
        <CompanyDetails activeCompany={activeCompany} />
      </div>
    </div>
  );
}
