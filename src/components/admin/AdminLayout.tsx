import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
    BarChart3,
    Users,
    Settings,
    LogOut,
    Menu,
    X,
    LayoutDashboard,
    MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    // Determine screen size for initial state
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(window.innerWidth >= 1024);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1024);
    const navigate = useNavigate();
    const location = useLocation();

    // Handle Resize
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setIsMobile(true);
                setIsSidebarOpen(false); // Close sidebar on mobile by default
            } else {
                setIsMobile(false);
                setIsSidebarOpen(true); // Open sidebar on desktop
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("sirah_admin_token");
        localStorage.removeItem("sirah_admin_user");
        navigate("/admin/login");
    };

    const navItems = [
        { name: "Overview", icon: BarChart3, path: "/admin/dashboard" },
        { name: "Leads", icon: MessageSquare, path: "/admin/leads" },
    ];

    return (
        <div className="flex h-screen bg-background text-foreground overflow-hidden">
            {/* Sidebar Overlay for Mobile */}
            {isMobile && isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 transition-opacity duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed lg:relative top-0 left-0 h-full z-30 transition-all duration-300 ease-in-out bg-secondary/10 backdrop-blur-xl border-r border-white/5 flex flex-col
                    ${isSidebarOpen ? "w-64 translate-x-0 overflow-y-auto" : "w-0 lg:w-20 -translate-x-full lg:translate-x-0 overflow-hidden lg:overflow-visible"}
                `}
            >
                <div className="p-4 flex items-center justify-between min-h-[4rem]">
                    {isSidebarOpen && (
                        <span className="font-bold text-xl gradient-text whitespace-nowrap">Sirah Admin</span>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-400 hover:text-white hover:bg-white/5 hidden lg:flex ml-auto"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-400 hover:text-white hover:bg-white/5 lg:hidden ml-auto"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <X size={20} />
                    </Button>
                </div>

                <nav className="flex-1 px-3 py-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => isMobile && setIsSidebarOpen(false)}
                            className={`flex items-center p-3 rounded-xl transition-all duration-300 group whitespace-nowrap ${location.pathname === item.path
                                ? "bg-primary/20 text-primary shadow-[0_0_15px_-3px_rgba(var(--primary),0.4)]"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <item.icon size={20} className={`shrink-0 ${location.pathname === item.path ? "text-primary" : "group-hover:text-primary transition-colors"}`} />
                            <span className={`ml-3 font-medium transition-opacity duration-200 ${!isSidebarOpen && !isMobile ? "lg:opacity-0 lg:hidden" : "opacity-100"}`}>
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/5 mt-auto">
                    <Button
                        variant="ghost"
                        className={`w-full justify-start text-red-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl whitespace-nowrap ${!isSidebarOpen && !isMobile ? "px-2 justify-center" : ""}`}
                        onClick={handleLogout}
                    >
                        <LogOut size={20} className="shrink-0" />
                        {(isSidebarOpen || isMobile) && <span className="ml-3 font-medium">Logout</span>}
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative w-full">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

                <header className="h-16 bg-secondary/10 backdrop-blur-md border-b border-white/5 flex items-center px-4 lg:px-8 justify-between relative z-10 shrink-0">
                    <div className="flex items-center gap-4">
                        {/* Mobile Menu Button - Only visible on mobile when sidebar is closed */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden text-slate-400 hover:text-white"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Menu size={24} />
                        </Button>

                        <h1 className="text-lg lg:text-xl font-bold text-white tracking-tight truncate">
                            {navItems.find(item => item.path === location.pathname)?.name || "Dashboard"}
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-white/5 border-white/10 hover:bg-white/10 text-slate-300 rounded-lg text-xs lg:text-sm"
                            onClick={() => navigate("/")}
                        >
                            View Site
                        </Button>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-4 lg:p-8 relative z-10 w-full">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
