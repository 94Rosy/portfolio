import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export type Filters = {
  mood: string[];
  situation: string[];
  tempo: string[];
  lang: string[];
};

type Props = {
  filters: Filters;
  onToggle: (key: keyof Filters, value: string) => void;
  hint: string;
  onHintChange: (value: string) => void;
  onReset: () => void;
};

const MOOD = ["잔잔", "신남", "감성", "집중", "드라이브", "밤"];
const SITUATION = ["공부/작업", "출근", "운동", "산책", "카페", "집정리"];
const TEMPO = ["느림", "중간", "빠름"];
const LANG = ["무관", "한국어", "영어", "일본어"];

const chipClass = (active: boolean) =>
  [
    "rounded-full border px-3 py-1 text-sm transition",
    active
      ? "bg-neutral-900 text-white border-neutral-900"
      : "text-neutral-800 hover:bg-neutral-50",
  ].join(" ");

export default function ExploreControls({
  filters,
  onToggle,
  hint,
  onHintChange,
  onReset,
}: Props) {
  const selected = [
    ...filters.mood.map((item) => ({ type: "mood", value: item })),
    ...filters.situation.map((item) => ({ type: "situation", value: item })),
    ...filters.tempo.map((item) => ({ type: "tempo", value: item })),
    ...filters.lang.map((item) => ({ type: "lang", value: item })),
  ].filter(
    (item, idx, arr) =>
      arr.findIndex((x) => x.type === item.type && x.value === item.value) ===
      idx
  );

  return (
    <div className="rounded-xl border bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-base font-medium">키워드</h2>
          <p className="text-sm text-neutral-600">
            아래에서 원하는 분위기와 상황을 고르고 추천을 받아보세요.
          </p>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex h-9 items-center justify-center rounded-md border px-3 text-sm text-neutral-900 transition hover:bg-neutral-50"
        >
          전체 초기화
        </button>
      </div>

      {selected.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs text-neutral-600">선택됨:</span>

          {selected.map(({ type, value }) => (
            <span
              key={`${type}-${value}`}
              className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-800"
            >
              {value}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5">
        <Tabs defaultValue="mood">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="mood">분위기</TabsTrigger>
            <TabsTrigger value="situation">상황</TabsTrigger>
            <TabsTrigger value="tempo">템포</TabsTrigger>
            <TabsTrigger value="lang">언어</TabsTrigger>
          </TabsList>

          <TabsContent value="mood" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {MOOD.map((t) => {
                const active = filters.mood.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      onToggle("mood", t);
                    }}
                    className={chipClass(active)}
                    aria-pressed={active}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="situation" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {SITUATION.map((t) => {
                const active = filters.situation.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => onToggle("situation", t)}
                    className={chipClass(active)}
                    aria-pressed={active}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="tempo" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {TEMPO.map((t) => {
                const active = filters.tempo.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => onToggle("tempo", t)}
                    className={chipClass(active)}
                    aria-pressed={active}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="lang" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {LANG.map((t) => {
                const active = filters.lang.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => onToggle("lang", t)}
                    className={chipClass(active)}
                    aria-pressed={active}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-neutral-900">
          추가 힌트(선택)
        </label>
        <p className="text-sm text-neutral-600">
          예: 보컬 없음, 비오는 날, 90년대 감성
        </p>
        <input
          value={hint}
          onChange={(e) => onHintChange(e.target.value)}
          placeholder="원하는 내용을 적으시면 더 정확히 추천해 드려요."
          className="mt-2 h-10 w-full rounded-md border px-3 text-sm outline-none focus:border-neutral-900"
        />
      </div>
    </div>
  );
}
