type Side = {
  part: string;
  score: string;
};

export default function DetailScoreGrid({
  left,
  right,
}: {
  left: Side[];
  right: Side[];
}) {
  const parts = left.map((item) => item.part);

  // 공통 스타일 모음
  const thClass = "body-02-bold text-gray-700";
  const labelTdClass = "w-20 body-02-bold text-gray-600 pt-3";
  const scoreTdClass = "headline-01 text-primary-300 pt-3";

  return (
    <div className="rounded-[15px] bg-[linear-gradient(180deg,#F9FAFB_0%,#EDEEF0_100%)] p-5 m-7 overflow-x-auto">
      <table className="w-full table-fixed text-center border-collapse">
        <thead>
          <tr>
            <th className={thClass}></th>
            {parts.map((part) => (
              <th key={part} className={thClass}>
                {part}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={labelTdClass}>왼쪽</td>
            {left.map(({ part, score }) => (
              <td key={`left-${part}`} className={scoreTdClass}>
                {score}
              </td>
            ))}
          </tr>
          <tr>
            <td className={labelTdClass}>오른쪽</td>
            {right.map(({ part, score }) => (
              <td key={`right-${part}`} className={scoreTdClass}>
                {score}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
