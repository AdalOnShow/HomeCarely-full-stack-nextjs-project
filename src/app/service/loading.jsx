import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ServicesLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <section className="relative pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Skeleton className="h-6 w-48 mx-auto" />
            <Skeleton className="h-16 w-full max-w-xl mx-auto" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Grid Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="glass-card border-white/10 h-full">
                <CardHeader>
                  <Skeleton className="h-12 w-12 rounded-lg mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {[1, 2, 3, 4].map((j) => (
                      <Skeleton key={j} className="h-4 w-full" />
                    ))}
                  </div>
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
