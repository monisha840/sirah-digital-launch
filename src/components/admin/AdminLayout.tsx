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
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("sirah_admin_token");
        localStorage.removeItem("sirah_admin_user");
        navigate("/admin/login");
    };

    const navItems = [
        { name: "Overview", icon: BarChart3, path: "/admin/dashboard" },
        { name: "Leads", icon: MessageSquare, path: "/admin/leads" },
        { name: "Users", icon: Users, path: "/admin/users" },
        { name: "Settings", icon: Settings, path: "/admin/settings" },
    ];

    return (
        <div className="flex h-screen bg-background text-foreground overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? "w-64" : "w-20"
                    } transition-all duration-300 bg-secondary/10 backdrop-blur-xl border-r border-white/5 flex flex-col z-20`}
            >
                <div className="p-4 flex items-center justify-between">
                    {isSidebarOpen && (
                        <span className="font-bold text-xl gradient-text">Sirah Admin</span>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-400 hover:text-white hover:bg-white/5"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </Button>
                </div>

                <nav className="flex-1 px-3 py-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center p-3 rounded-xl transition-all duration-300 group ${location.pathname === item.path
                                ? "bg-primary/20 text-primary shadow-[0_0_15px_-3px_rgba(var(--primary),0.4)]"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <item.icon size={20} className={location.pathname === item.path ? "text-primary" : "group-hover:text-primary transition-colors"} />
                            {isSidebarOpen && <span className="ml-3 font-medium">{item.name}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-red-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl"
                        onClick={handleLogout}
                    >
                        <LogOut size={20} />
                        {isSidebarOpen && <span className="ml-3 font-medium">Logout</span>}
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

                <header className="h-16 bg-secondary/10 backdrop-blur-md border-b border-white/5 flex items-center px-8 justify-between relative z-10">
                    <h1 className="text-xl font-bold text-white tracking-tight">
                        {navItems.find(item => item.path === location.pathname)?.name || "Dashboard"}
                    </h1>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-white/5 border-white/10 hover:bg-white/10 text-slate-300 rounded-lg"
                            onClick={() => navigate("/")}
                        >
                            View Site
                        </Button>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-8 relative z-10">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
