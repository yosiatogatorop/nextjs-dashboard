export default function Loading() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-rose-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-rose-700">Memuat kue penuh cinta...</p>
        </div>
      </div>
    );
  }