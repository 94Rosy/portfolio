"use client";
import { useMemo, useState } from "react";
import ExploreControls, { Filters } from "./ExploreControls";
import ResultList from "./ResultList";

const INSIGHT_POOL = [
  "집중에 방해되지 않도록 반복적인 리듬과 잔잔한 톤으로 구성했어요.",
  "분위기에 맞춰 기분 전환이 되는 밝은 트랙으로 구성했어요.",
];

export default function ExplorePage() {
  const [filters, setFilters] = useState<Filters>({
    lang: [],
    mood: [],
    situation: [],
    tempo: [],
  });
  const [hint, setHint] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);

  const canGenerate = useMemo(() => {
    const count =
      filters.lang.length +
      filters.mood.length +
      filters.situation.length +
      filters.tempo.length;

    return count > 0 || hint.trim().length > 0;
  }, [filters, hint]);

  const toggleFilter = (key: keyof Filters, value: string) => {
    setFilters((prev) => {
      const exists = prev[key].includes(value);
      const nextArr = exists
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value];

      return { ...prev, [key]: nextArr };
    });
  };

  const resetAll = () => {
    setFilters({ mood: [], situation: [], lang: [], tempo: [] });
    setHint("");
    setHasGenerated(false);
    setInsight(null);
  };

  const handleGenerate = async () => {
    if (!canGenerate || isGenerating) return;

    setIsGenerating(true);
    setInsight(null);

    await new Promise((r) => setTimeout(r, 900));

    const next = INSIGHT_POOL[Math.floor(Math.random() * INSIGHT_POOL.length)];
    setInsight(next);
    setHasGenerated(true);
    setIsGenerating(false);
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Music Explore</h1>
        <p className="text-sm text-neutral-600">
          키워드를 선택하고 힌트를 입력하시면 AI가 YouTube 컨텐츠를 골라 드려요.
        </p>
      </header>

      <section className="mt-8">
        <ExploreControls
          filters={filters}
          onToggle={toggleFilter}
          hint={hint}
          onHintChange={setHint}
          onReset={resetAll}
        />
      </section>

      <section className="mt-8 rounded-xl border bg-white p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm: justify-between">
          <div className="space-y-1">
            <h2 className="text-base font-medium">AI 인사이트</h2>
            <p className="text-sm text-neutral-600">
              {isGenerating
                ? "플레이리스트를 구성 중..."
                : "추천 이유 나오는 곳"}
            </p>
          </div>

          <button
            type="button"
            onClick={handleGenerate}
            disabled={!canGenerate || isGenerating}
            className="inline-flex h-10 items-center justify-center rounded-md
             bg-neutral-900 px-4 text-sm font-medium text-white transition 
             hover:bg-neutral-800 disabled:cursor-not-allowed
             disabled:opacity-60 active:scale-[0.99]"
          >
            {isGenerating
              ? "생성 중…"
              : hasGenerated
              ? "비슷한 분위기로 다시 만들기"
              : "AI로 플레이리스트 만들기"}
          </button>
        </div>
        <div className="mt-4 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-700">
          {isGenerating
            ? "AI가 추천 방향을 정리 중이에요…"
            : insight ??
              "조건을 선택한 뒤 버튼을 눌러 인사이트를 생성해보세요."}
        </div>
      </section>

      <section className="mt-8">
        <ResultList isLoading={isGenerating} isVisible={hasGenerated} />
      </section>
    </main>
  );
}
