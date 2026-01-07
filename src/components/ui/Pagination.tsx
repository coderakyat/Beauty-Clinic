import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, className, ...props }: PaginationProps) {
    return (
        <div className={cn("flex items-center justify-center gap-2", className)} {...props}>
            <Button
                variant="outline"
                size="icon"
                disabled={currentPage <= 1}
                className="h-10 w-10"
            >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous Page</span>
            </Button>

            <Button
                variant={currentPage === 1 ? "default" : "outline"}
                size="icon"
                className="h-10 w-10"
            >
                1
            </Button>

            {/* Stub logic: just showing 2 and 3 for visual completion as per mockup if total pages > 1 */}
            <Button variant="outline" size="icon" className="h-10 w-10">2</Button>
            <Button variant="outline" size="icon" className="h-10 w-10">3</Button>

            <Button
                variant="outline"
                size="icon"
                disabled={currentPage >= totalPages}
                className="h-10 w-10"
            >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next Page</span>
            </Button>
        </div>
    )
}
