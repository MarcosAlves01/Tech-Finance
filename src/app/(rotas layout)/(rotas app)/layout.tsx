import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeWrapper } from "@/components/Theme/ThemeWrapper";
import { ThemeSelector } from "@/components/Theme/ThemeSelector";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";

export default function AppLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider>

            <ThemeWrapper>

                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-14 items-center gap-2 border-b px-4">
                            <SidebarTrigger />
                            <Separator orientation="vertical" className="h-4" />
                            <h1 className="text-sm font-medium w-full">Tech Finance</h1>
                            <div className="flex w-full gap-2 justify-end">
                                <ModeToggle />
                                <ThemeSelector />
                            </div>
                        </header>
                        <div className="flex-1 overflow-auto p-6">
                            {children}
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </ThemeWrapper>
        </ThemeProvider>

    )
}
