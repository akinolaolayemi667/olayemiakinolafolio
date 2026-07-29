import HeaderSmall from "@components/HeaderSmall";
import { PrimaryButton } from "@components/ui/PrimaryButton";
import { TWorkExperience } from "@type/Company";
import Image from "next/image";
import { workCopy } from "@data/work";

export default function WorkLandingSection({
  workExperiences,
}: {
  workExperiences: TWorkExperience[];
}) {
  return (
    <div className="relative py-6 lg:py-10">
      <div className="grid h-full grid-cols-12 items-center gap-6 place-items-center md:gap-8">
        <div className="col-span-12 flex min-w-0 flex-col items-center justify-center md:col-span-7 lg:col-span-6">
          <div className="relative w-full max-w-xl">
            <HeaderSmall text={workCopy.eyebrow} />
            <p className="hv-body-lg mt-3">{workCopy.intro}</p>
            <h1 className="hv-heading-xl mt-6">
              {workCopy.title}{" "}
              <span className="text-accent">{workCopy.titleAccent}</span>
            </h1>
            {workExperiences.length === 0 ? (
              <div className="hv-empty mt-8">
                <p className="text-base font-semibold text-[color:var(--hv-fg)]">
                  {workCopy.emptyTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--hv-fg-muted)]">
                  {workCopy.emptyBody}
                </p>
                <div className="mt-5">
                  <PrimaryButton href={workCopy.emptyCtaHref} glow>
                    {workCopy.emptyCtaLabel}
                  </PrimaryButton>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {workExperiences.length > 0 ? (
          <div className="col-span-12 my-8 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 sm:gap-8 md:col-span-5 lg:col-span-6 lg:gap-10">
            {workExperiences.map(
              (company, index) =>
                company.companyLogo && (
                  <Image
                    width={200}
                    height={200}
                    src={company.companyLogo}
                    alt={company.name}
                    key={`${company.name}-${index}`}
                    className="h-auto w-16 object-contain opacity-90 transition-opacity hover:opacity-100 sm:w-24 md:w-28"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 64px, 112px"
                  />
                )
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
