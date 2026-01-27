import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, TrendingUp, Clock } from "lucide-react";
import { toast } from "sonner";
import { API_URL } from "@/lib/api";

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalLeads: 0,
        newLeads: 0,
        totalUsers: 0,
        conversionRate: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const token = localStorage.getItem("sirah_admin_token");
                const response = await fetch(`${API_URL}/api/leads`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const leads = await response.json();
                    setStats({
                        totalLeads: leads.length,
                        newLeads: leads.filter((l: any) => l.status === "new").length,
                        totalUsers: 1, // Placeholder
                        conversionRate: 0, // Placeholder
                    });
                }
            } catch (error) {
                toast.error("Failed to fetch dashboard stats");
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const statCards = [
        {
            title: "Total Leads",
            value: stats.totalLeads,
            icon: MessageSquare,
            description: "All time form submissions",
            color: "text-primary",
            bg: "bg-primary/10",
        },
        {
            title: "New Leads",
            value: stats.newLeads,
            icon: Clock,
            description: "Awaiting response",
            color: "text-accent",
            bg: "bg-accent/10",
        },
        {
            title: "Active Users",
            value: stats.totalUsers,
            icon: Users,
            description: "Admin panel users",
            color: "text-purple-400",
            bg: "bg-purple-400/10",
        },
        {
            title: "Growth",
            value: "N/A",
            icon: TrendingUp,
            description: "Leads vs last month",
            color: "text-green-400",
            bg: "bg-green-400/10",
        },
    ];

    return (
        <AdminLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statCards.map((stat, index) => (
                    <Card key={index} className="glass border-white/5 shadow-premium hover:border-primary/20 transition-all duration-300">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-[0.1em]">
                                {stat.title}
                            </CardTitle>
                            <div className={`p-2 rounded-xl ${stat.bg}`}>
                                <stat.icon className={`h-4 w-4 ${stat.color} glow-soft`} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-white tracking-tight">
                                {loading ? (
                                    <div className="h-8 w-16 bg-white/5 animate-pulse rounded" />
                                ) : (
                                    stat.value
                                )}
                            </div>
                            <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                                {stat.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="glass border-white/5 shadow-premium">
                    <CardHeader className="border-b border-white/5">
                        <CardTitle className="text-lg font-bold text-white">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="text-sm text-slate-500 text-center py-20 bg-white/[0.02]">
                            No recent activity to show
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass border-white/5 shadow-premium">
                    <CardHeader className="border-b border-white/5">
                        <CardTitle className="text-lg font-bold text-white">Lead Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="text-sm text-slate-500 text-center py-20 bg-white/[0.02]">
                            Chart data coming soon
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
