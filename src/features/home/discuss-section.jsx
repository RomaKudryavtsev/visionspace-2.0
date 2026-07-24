'use client';

import React, { useEffect, useState } from "react";
import { $t } from "@/utils/lang.utils";

/**
 * StepFlow (Tailwind) — диагональная цепочка карточек с коннекторами.
 *
 * Вся статичная стилистика (цвета, тени, радиусы, типографика) — обычные
 * классы Tailwind. Единственное, что остаётся инлайн-стилями — это
 * реально вычисляемые на лету числа (отступ слева и позиция точки
 * коннектора), потому что это проценты + calc() под конкретный индекс
 * карточки, а не что-то из фиксированной шкалы Tailwind.
 *
 * Крутилки — константы ниже:
 *  - CARD_WIDTH_PCT   — ширина карточки, % от контейнера
 *  - TRACK_BASE_PCT   — стартовый отступ слева для двух "рельсов" (чёт/нечёт)
 *  - TRACK_STEP_PCT   — насколько дальше уезжает каждый следующий заход в тот же рельс
 *  - GAP_V            — вертикальный зазор между карточками (px, = Tailwind h-10)
 *  - ICON_INSET       — отступ точки от края нижней карточки (px, ~центр иконки)
 */

const CARD_WIDTH_PCT = 48;
const TRACK_BASE_PCT = [5, 33];
const TRACK_STEP_PCT = 7;
const GAP_V = 40; // держите равным высоте класса h-10 ниже
const ICON_INSET = 42;

function marginPct(index) {
  const track = index % 2;
  const rep = Math.floor(index / 2);
  return TRACK_BASE_PCT[track] + rep * TRACK_STEP_PCT;
}

// left коннектора относительно ВЕРХНЕЙ карточки: %(от её ширины) ± px
function connectorLeft(index) {
  const upper = marginPct(index);
  const lower = marginPct(index + 1);
  const forward = lower >= upper;

  const anchorContainerPct = forward ? lower : lower + CARD_WIDTH_PCT;
  const itemRelativePct = ((anchorContainerPct - upper) / CARD_WIDTH_PCT) * 100;
  const sign = forward ? "+" : "-";
  return `calc(${itemRelativePct}% ${sign} ${ICON_INSET}px)`;
}

function useIsDesktop(breakpoint = 640) {
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

function StepCard({ icon, title, description }) {
  const hasTitle = Boolean(title && title.trim());
  const hasDesc = Boolean(description && description.trim());

  return (
    <div className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5 shadow-xl">
      <div className="flex-none w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
        {icon}
      </div>
      <div className="flex-1 min-w-0 pt-0.5">
        {hasTitle ? (
          <h3 className="text-xl font-semibold text-slate-900 mb-2 leading-snug">
            {title}
          </h3>
        ) : (
          <div className="w-1/2 h-5 bg-slate-200 rounded mb-2" aria-hidden="true" />
        )}

        {hasDesc ? (
          <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
        ) : (
          <>
            <div className="w-11/12 h-3 bg-slate-200 rounded mt-2" aria-hidden="true" />
            <div className="w-2/3 h-3 bg-slate-200 rounded mt-2" aria-hidden="true" />
          </>
        )}
      </div>
    </div>
  );
}

function StepFlow({ steps: stepsProp }) {
  const isDesktop = useIsDesktop();

  // Пустые карточки — заполните icon/title/description сами.
  const steps =
    stepsProp || [
      { icon: null, title: "", description: "" },
      { icon: null, title: "", description: "" },
      { icon: null, title: "", description: "" },
      { icon: null, title: "", description: "" },
    ];

  return (
    <div className="p-10 sm:p-14 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="relative max-w-2xl mx-auto">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;

          const itemStyle = isDesktop
            ? { width: `${CARD_WIDTH_PCT}%`, marginLeft: `${marginPct(i)}%` }
            : { width: "100%", marginLeft: 0 };

          const connectorStyle = isDesktop
            ? { left: connectorLeft(i) }
            : { left: `${ICON_INSET}px` };

          return (
            <div
              key={i}
              className={`relative ${isLast ? "mb-0" : "mb-10"}`}
              style={itemStyle}
            >
              <StepCard {...step} />

              {!isLast && (
                <div className="absolute top-full h-10 w-0" style={connectorStyle}>
                  <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-white rounded-full shadow-sm" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-4 h-4 rounded-full bg-white border-4 border-blue-600 ring-8 ring-blue-100" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DiscussSection({ lang }) {
    return (
        <section>
          <StepFlow></StepFlow>
        </section>
    );
}