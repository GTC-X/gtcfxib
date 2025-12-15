export default function NotAvailable() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 4h.01M5.64 5.64l12.72 12.72M5.64 18.36L18.36 5.64"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-semibold text-gray-900">
            Access Restricted
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            This website is currently available only for visitors accessing from{" "}
            <span className="font-semibold text-gray-900">Iraq</span>
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="mailto:support@gtcfxiq.com"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
            >
              Contact Support
            </a>

            <p className="text-xs text-gray-400">
              If you believe this is a mistake, please reach out
            </p>
          </div>
        </div>

        <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">
            Error code: <span className="font-medium">REGION_BLOCK</span>
          </p>
        </div>
      </div>
    </div>
  );
}
