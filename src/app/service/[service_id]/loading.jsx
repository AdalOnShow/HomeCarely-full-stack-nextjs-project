import { Skeleton } from "@/components/ui/skeleton";

export default function ServiceDetailLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <section className="relative pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Skeleton className="h-24 w-24 rounded-2xl mx-auto" />
            <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
            <Skeleton className="h-8 w-full max-w-xl mx-auto" />
            <Skeleton className="h-12 w-40 mx-auto" />
          </div>
        </div>
      </section>

      {/* Description Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card border-white/10 rounded-2xl p-8 md:p-12 space-y-6">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />

              <div className="grid md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-3">
                  <Skeleton className="h-6 w-40" />
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Skeleton key={i} className="h-5 w-full" />
                  ))}
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-6 w-40" />
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-5 w-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Skeleton className="h-8 w-32 mx-auto mb-8" />
            <div className="glass-card border-white/10 rounded-2xl p-8">
              <div className="flex justify-center gap-8">
                <div className="text-center space-y-2">
                  <Skeleton className="h-6 w-16 mx-auto" />
                  <Skeleton className="h-10 w-20 mx-auto" />
                  <Skeleton className="h-4 w-16 mx-auto" />
                </div>
                <div className="text-center space-y-2">
                  <Skeleton className="h-6 w-16 mx-auto" />
                  <Skeleton className="h-10 w-20 mx-auto" />
                  <Skeleton className="h-4 w-16 mx-auto" />
                </div>
              </div>
              <Skeleton className="h-12 w-40 mx-auto mt-8" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
