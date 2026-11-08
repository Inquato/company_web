"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) { return <div className="wrap sec"><h1 className="h2">Something went wrong</h1><p className="mt-3 text-mute">Please try again.</p><button onClick={reset} className="btn-p mt-6">Try again</button></div>; }
