import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Search, Filter } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

interface Lead {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
    createdAt: string;
}

const AdminLeads = () => {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLeads();
    }, []);

    useEffect(() => {
        const results = leads.filter(lead =>
            `${lead.firstName} ${lead.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.company?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredLeads(results);
    }, [searchTerm, leads]);

    const fetchLeads = async () => {
        try {
            const token = localStorage.getItem("sirah_admin_token");
            const response = await fetch("http://localhost:5000/api/leads", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setLeads(data);
                setFilteredLeads(data);
            } else {
                toast.error("Failed to fetch leads");
            }
        } catch (error) {
            toast.error("An error occurred while fetching leads");
        } finally {
            setLoading(false);
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'new': return <Badge className="bg-primary/10 text-primary border-primary/20">New</Badge>;
            case 'contacted': return <Badge className="bg-amber-400/10 text-amber-400 border-amber-400/20">Contacted</Badge>;
            case 'qualified': return <Badge className="bg-purple-400/10 text-purple-400 border-purple-400/20">Qualified</Badge>;
            case 'converted': return <Badge className="bg-green-400/10 text-green-400 border-green-400/20">Converted</Badge>;
            default: return <Badge variant="secondary" className="bg-white/5 text-slate-400">{status}</Badge>;
        }
    };

    return (
        <AdminLayout>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500 group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="Search leads..."
                            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 rounded-xl">
                            <Filter className="h-4 w-4" />
                            Filter
                        </Button>
                        <Button
                            size="sm"
                            onClick={fetchLeads}
                            className="bg-primary text-black hover:opacity-90 font-bold rounded-xl"
                        >
                            Refresh
                        </Button>
                    </div>
                </div>

                <Card className="glass border-white/5 shadow-premium overflow-hidden">
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader className="bg-white/5">
                                    <TableRow className="border-white/5 hover:bg-transparent">
                                        <TableHead className="font-bold text-slate-400 uppercase tracking-wider text-xs">Name</TableHead>
                                        <TableHead className="font-bold text-slate-400 uppercase tracking-wider text-xs">Contact Info</TableHead>
                                        <TableHead className="font-bold text-slate-400 uppercase tracking-wider text-xs">Company</TableHead>
                                        <TableHead className="font-bold text-slate-400 uppercase tracking-wider text-xs">Status</TableHead>
                                        <TableHead className="font-bold text-slate-400 uppercase tracking-wider text-xs">Date</TableHead>
                                        <TableHead className="text-right font-bold text-slate-400 uppercase tracking-wider text-xs">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {loading ? (
                                        <TableRow className="border-white/5">
                                            <TableCell colSpan={6} className="text-center py-20 text-slate-500 bg-white/[0.01]">
                                                <div className="flex flex-col items-center gap-3">
                                                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                                    Loading leads...
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ) : filteredLeads.length === 0 ? (
                                        <TableRow className="border-white/5">
                                            <TableCell colSpan={6} className="text-center py-20 text-slate-500 bg-white/[0.01]">
                                                No leads found
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        filteredLeads.map((lead) => (
                                            <TableRow key={lead._id} className="border-white/5 hover:bg-white/[0.02] transition-colors group">
                                                <TableCell className="font-medium text-white">
                                                    {lead.firstName} {lead.lastName}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex flex-col text-sm">
                                                        <span className="text-slate-300 font-medium">{lead.email}</span>
                                                        <span className="text-slate-500 group-hover:text-primary transition-colors">{lead.phone || "No phone"}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-slate-400">{lead.company || "-"}</TableCell>
                                                <TableCell>{getStatusBadge(lead.status)}</TableCell>
                                                <TableCell className="text-slate-500 text-sm">
                                                    {format(new Date(lead.createdAt), "MMM d, h:mm a")}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-xl">
                                                        <Eye className="h-4.5 w-4.5" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
};

export default AdminLeads;
