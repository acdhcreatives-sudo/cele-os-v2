export default function PageLayout({ title, subtitle, children }) {
  return (
    <main className="flex-1 min-h-screen bg-[#F8F5F2]">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">

        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3E2723]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        {children}

      </div>
    </main>
  );
}