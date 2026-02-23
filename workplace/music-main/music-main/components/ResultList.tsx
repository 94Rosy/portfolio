import { Skeleton } from "@/components/ui/skeleton";

const mockResults = [
  {
    id: "1",
    title: "일할 때 집중력 올라가는 플레이리스트",
    channel: "AI 추천 · YouTube",
    duration: "2:14:33",
  },
  {
    id: "2",
    title: "새해에 듣기 좋은 플레이리스트",
    channel: "AI 추천 · YouTube",
    duration: "58:12",
  },
  {
    id: "3",
    title: "요즘 인기 많은 K-POP 플레이리스트",
    channel: "AI 추천 · YouTube",
    duration: "1:20:05",
  },
];

type Props = {
  isLoading: boolean;
  isVisible: boolean;
};

export default function ResultList({ isLoading, isVisible }: Props) {
  if (!isVisible && !isLoading) {
    return (
      <div className="rounded-xl border bg-white p-5 text-sm text-neutral-600">
        결과가 없습니다. 조건을 고른 뒤에{" "}
        <span className="font-medium text-neutral-900">
          AI로 플레이리스트 만들기
        </span>
        를 눌러보세요.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between">
        <h2 className="text-base font-medium">추천 결과</h2>
        <p className="text-sm text-neutral-600">YouTube 검색 결과(더미)</p>
      </div>

      {isLoading ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border bg-white p-4">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="mt-3 h-3 w-1/2" />
            <Skeleton className="mt-4 h-9 w-28" />
          </div>
          <div className="rounded-xl border bg-white p-4">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="mt-3 h-3 w-1/2" />
            <Skeleton className="mt-4 h-9 w-28" />
          </div>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {mockResults.map((item) => (
            <article key={item.id} className="rounded-xl border bg-white p-4">
              <h3 className="line-clamp-2 text-sm font-medium text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-neutral-600">
                {item.channel} · {item.duration}
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-neutral-900 px-3 text-sm text-white transition hover:bg-neutral-800"
                >
                  유튜브에서 열기
                </button>
                <button
                  type="button"
                  className="inline-flex h-9 items-center justify-center rounded-md border px-3 text-sm text-neutral-900 transition hover:bg-neutral-50"
                >
                  담기
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
