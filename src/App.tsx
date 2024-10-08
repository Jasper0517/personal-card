export default function App() {
  return (
    <main className="flex justify-center pt-[200px]">
      {/* top */}
      <div className="flex flex-col gap-4 bg-white w-[340px] rounded-lg p-6 drop-shadow">
        <div className="flex">
          <img
            src="/assets/avatar.png"
            alt="Jasper Photo"
            className="w-12 h-12 rounded-full mr-5"
          />
          <div className="flex flex-col gap-px grow">
            <span className="font-semibold text-lg text-neutral-900">
              Jasper Tseng
            </span>
            <a
              href="https://github.com/jasper0517"
              target="_blank"
              className="font-normal text-sm text-neutral-600"
            >
              @jasper0517
            </a>
          </div>
        </div>
        {/* bottom */}
        <p className="font-normal text-base text-neutral-600">
          I'm a Front-end Developer and Software Engineer currently seeking job
          opportunities in Los Angeles. If you'd like to connect, feel free to
          email me at{" "}
          <a href="mailto:maple0517@gmail.com" className="text-slate-400">
            maple0517@gmail.com
          </a>{" "}
          or connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/jasper-tseng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </main>
  );
}
