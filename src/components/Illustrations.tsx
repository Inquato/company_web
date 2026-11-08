const B = "#2166D0", S = "#EAF1FD", K = "#111111";
type Kind = "services" | "projects" | "pricing" | "about" | "contact";
export function PageArt({ kind }: { kind: Kind }) {
  const d = (i: number) => ({ animationDelay: `${i * 0.8}s` });
  return (<svg viewBox="0 0 480 360" role="img" aria-label={`Abstract ${kind} illustration`} className="h-auto w-full"><circle cx="240" cy="180" r="150" fill={S} />
    {kind === "services" && <><g className="float"><rect x="110" y="215" width="260" height="70" rx="14" fill="#fff" stroke={B} /><path className="draw" d="M140 250h110" stroke={B} strokeWidth="6" strokeLinecap="round" /></g>
      <g className="float" style={d(1)}><rect x="130" y="150" width="260" height="70" rx="14" fill={S} stroke={B} /><path className="draw" d="M160 185h150" stroke={B} strokeWidth="6" strokeLinecap="round" /></g>
      <g className="float" style={d(2)}><rect x="150" y="85" width="260" height="70" rx="14" fill={B} /><path className="draw" d="M180 120h90" stroke="#fff" strokeWidth="6" strokeLinecap="round" /><circle className="pulse" cx="375" cy="120" r="9" fill="#fff" /></g></>}
    {kind === "projects" && [[90, 60], [250, 60], [90, 195], [250, 195]].map(([x, y], i) => <g key={i} className="float" style={d(i)}><rect x={x} y={y} width="140" height="110" rx="14" fill={i === 1 ? B : "#fff"} stroke={B} />
      <rect x={x + 16} y={y + 18} width="60" height="8" rx="4" fill={i === 1 ? "#fff" : B} /><rect x={x + 16} y={y + 38} width="100" height="6" rx="3" fill={i === 1 ? "#8FB4F0" : "#D1D5DB"} /><rect x={x + 16} y={y + 54} width="80" height="6" rx="3" fill={i === 1 ? "#8FB4F0" : "#D1D5DB"} /><circle className="pulse" cx={x + 118} cy={y + 88} r="7" fill={i === 1 ? "#fff" : B} /></g>)}
    {kind === "pricing" && [0, 1, 2].map((i) => <g key={i} className="float" style={d(i)}><rect x={80 + i * 112} y={190 - i * 55} width="100" height={120 + i * 55} rx="14" fill={i === 1 ? B : i === 2 ? K : "#fff"} stroke={B} />
      <circle cx={130 + i * 112} cy={225 - i * 55} r="14" fill="none" stroke={i ? "#fff" : B} strokeWidth="3" /><path className="draw" d={`M${123 + i * 112} ${225 - i * 55}l5 5 9-10`} stroke={i ? "#fff" : B} strokeWidth="3" fill="none" strokeLinecap="round" /></g>)}
    {kind === "about" && <><path className="draw" d="M240 180L125 105M240 180L355 105M240 180L240 295" stroke={B} strokeWidth="3" fill="none" />
      {[[125, 105], [355, 105], [240, 295]].map(([x, y], i) => <g key={i} className="float" style={d(i)}><circle cx={x} cy={y} r="32" fill="#fff" stroke={B} strokeWidth="2" /><circle cx={x} cy={y - 6} r="9" fill={B} /><path d={`M${x - 14} ${y + 16}a14 12 0 0 1 28 0z`} fill={B} /></g>)}
      <circle className="pulse" cx="240" cy="180" r="44" fill={B} /><path d="M222 180h36M240 162v36" stroke="#fff" strokeWidth="5" strokeLinecap="round" /></>}
    {kind === "contact" && <><g className="float"><rect x="100" y="130" width="260" height="170" rx="18" fill="#fff" stroke={B} /><path className="draw" d="M100 150l130 95 130-95" stroke={B} strokeWidth="3" fill="none" /></g>
      <g className="float" style={d(1)}><rect x="290" y="62" width="120" height="64" rx="18" fill={B} />{[0, 1, 2].map((i) => <circle key={i} className="pulse" cx={326 + i * 18} cy="94" r="5" fill="#fff" />)}</g></>}
  </svg>);
}
export function MockShot() {
  return (<svg viewBox="0 0 320 200" role="img" aria-label="Project mockup illustration" className="h-full w-full"><rect width="320" height="200" fill={S} /><rect x="28" y="24" width="264" height="152" rx="12" fill="#fff" stroke={B} strokeOpacity=".35" /><path d="M28 36a12 12 0 0 1 12-12h240a12 12 0 0 1 12 12v12H28z" fill={B} />
    <rect x="46" y="64" width="90" height="10" rx="5" fill={K} /><rect x="46" y="84" width="130" height="6" rx="3" fill="#D1D5DB" /><rect x="46" y="98" width="110" height="6" rx="3" fill="#D1D5DB" /><rect x="46" y="122" width="64" height="20" rx="10" fill={B} />
    {[0, 1, 2].map((i) => <rect key={i} x={196 + i * 28} y={150 - (i + 1) * 22} width="18" height={(i + 1) * 22} rx="4" fill={i === 2 ? B : "#BFD3F5"} />)}</svg>);
}
