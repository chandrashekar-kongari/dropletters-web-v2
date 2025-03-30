import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl gap-8 pt-16 pb-4">
      {/* Announcement Banner */}
      <Link
        href="#"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm hover:bg-gray-200 transition-colors"
      >
        <span>🎉 We just launched on Product Hunt</span>
        <span>→</span>
      </Link>

      {/* Main Title */}
      <h1 className="text-4xl leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight font-bold text-center">
        <span className="text-[#184c5a]">Speed up your communication </span>
        <span className="text-gray-400">without the noise</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-500 max-w-2xl">
        Fix your spelling and grammar with in-place shortcuts (⌘ + Q)
      </p>

      {/* CTA Button */}
      <Link
        href="#"
        className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#184c5a] text-white font-medium hover:bg-[#184c5a]/90 transition-colors"
      >
        <span>🍎</span>
        <span>Download Droplet for Mac</span>
      </Link>

      {/* Demo Video */}
      <div className="mt-8 w-full max-w-3xl rounded-lg overflow-hidden shadow-xl">
        <video className="w-full" controls autoPlay muted loop>
          <source src="/example.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <footer className="w-full text-center py-4 mt-auto">
        <h1 className="text-sm text-gray-500">
          Have feedback?
          <a
            href="https://tally.so/r/mDa0Wl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline p-2"
          >
            click here
          </a>
        </h1>
      </footer>
    </div>
  );
}
