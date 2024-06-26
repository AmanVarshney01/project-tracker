import { Suspense } from "react";
import ProjectsGridSkeleton from "@/components/skeletons/ProjectsGridSkeleton";
import JoinedProjectsGrid from "@/app/(main)/joined-projects/_components/JoinedProjectsGrid";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default async function JoinedProjectsPage() {
  return (
    <ScrollArea className="h-full w-full p-2">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
        <Card className="border-0 bg-background shadow-none">
          <CardHeader className="flex flex-row items-center gap-4 p-2 md:p-6">
            <Link href={"/"}>
              <Button variant={"ghost"}>
                <ArrowLeftIcon />
              </Button>
            </Link>
            <CardTitle className="text-xl font-semibold md:text-2xl">
              Joined Projects
            </CardTitle>
          </CardHeader>
        </Card>
        <Suspense fallback={<ProjectsGridSkeleton />}>
          <JoinedProjectsGrid />
        </Suspense>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
