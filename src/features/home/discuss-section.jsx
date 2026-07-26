'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import LinkButton from "@/components/link-button";
import ArrowIcon from "@/components/arrow-icon";
import DiscussCard from "./discuss-card";
import { $t } from "@/utils/lang.utils";

const ICON_INSET = 42; // отступ точки от края карточки (px, ~центр иконки) — одинаков для обеих версий, т.к. это внутренний паддинг DiscussCard

const DESKTOP_CONFIG = {
  CARD_WIDTH_PCT: 50,
  TRACK_BASE_PCT: [5, 33],
  TRACK_STEP_PCT: 10,
};

const MOBILE_CONFIG = {
  CARD_WIDTH_PCT: 90,
  TRACK_BASE_PCT: [0, 6],
  TRACK_STEP_PCT: 3,
};

function marginPct(index, config) {
  const track = index % 2;
  const rep = Math.floor(index / 2);
  return config.TRACK_BASE_PCT[track] + rep * config.TRACK_STEP_PCT;
}

// left коннектора относительно ВЕРХНЕЙ карточки: %(от её ширины) ± px
function connectorLeft(index, config) {
  const upper = marginPct(index, config);
  const lower = marginPct(index + 1, config);
  const forward = lower >= upper;

  const anchorContainerPct = forward ? lower : lower + config.CARD_WIDTH_PCT;
  const itemRelativePct = ((anchorContainerPct - upper) / config.CARD_WIDTH_PCT) * 100;
  const sign = forward ? "+" : "-";
  return `calc(${itemRelativePct}% ${sign} ${ICON_INSET}px)`;
}

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);
  return isDesktop;
}

function StepFlow({ lang }) {
  const isDesktop = useIsDesktop();
  const config = isDesktop ? DESKTOP_CONFIG : MOBILE_CONFIG;

  const steps = ['discuss_analysis', 'discuss_strategy', 'discuss_solution', 'discuss_growth'];

  return (
    <div className="relative grow">
      { steps.map((step, i) => {
        const isLast = i === steps.length - 1;

        const itemStyle = {
          width: `${config.CARD_WIDTH_PCT}%`,
          marginLeft: `${marginPct(i, config)}%`,
        };

        const connectorStyle = { left: connectorLeft(i, config) };

        return (
          <div
            key={ i }
            className={ `relative ${isLast ? "mb-0" : "mb-10"}` }
            style={ itemStyle }
          >
            <DiscussCard
              icon={ `/${step}` + '.svg' }
              title={ $t(`discuss.${step}.title`, lang) }
              description={ $t(`discuss.${step}.description`, lang) }
            />
            { !isLast && (
              <div className="absolute top-full h-10 w-0" style={ connectorStyle }>
                <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-white rounded-full shadow-sm" />
                {/* мягкое голубое свечение — два размытых слоя для плавного затухания */ }
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-blue-500/20 blur-xl" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-9 h-9 rounded-full bg-blue-500/50 blur-md" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-4 h-4 rounded-full bg-white border-4 border-blue-600" />
              </div>
            ) }
          </div>
        );
      }) }
    </div>
  );
}

export default function DiscussSection({ lang }) {
  return (
    <div className="bg-soft-surface w-full lg:pt-20.5">
      <section className="relative">
        <Image
          src="/discuss-bg.png"
          alt="Discuss background"
          fill
          sizes="100vw"
          className="object-cover object-center z-0"
        />
        <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center">
          <div className="flex flex-col gap-2.5 lg:gap-10 lg:w-128.5">
            <div className="flex flex-col gap-1.5 lg:gap-3.5">
              <h2 className="text-3xl lg:text-5xl font-semibold text-primary">
                { $t('discuss.title', lang) }
              </h2>
              <p className="text-graphite text-base lg:text-lg">{ $t('discuss.description', lang) }</p>
            </div>
            <LinkButton href={ `/${lang}/discuss` } className="self-start">
              <div className="flex items-center gap-2.5">
                <span className="text-white">{ $t('common.discuss_project', lang) }</span>
                <ArrowIcon />
              </div>
            </LinkButton>
          </div>
          <StepFlow lang={ lang } />
        </div>
      </section>
    </div>
  );
}