import Link from "next/link";
export default function NotFound() { return <div className="wrap sec"><h1 className="h2">Page not found</h1><p className="mt-3 text-mute">The page you&apos;re looking for doesn&apos;t exist or has moved.</p><Link href="/" className="btn-p mt-6">Back to home</Link></div>; }
