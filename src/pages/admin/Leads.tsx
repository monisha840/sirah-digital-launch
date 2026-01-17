import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
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
import { Eye, Search, Filter, Pencil, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Lead {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    notes?: string;
    status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed' | 'not qualified';
    createdAt: string;
}

const AdminLeads = () => {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    // Edit State
    const [editingLead, setEditingLead] = useState<Lead | null>(null);
    const [isEditOpen, setIsEditOpen] = useState(false);

    // Delete State
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

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

    const handleDelete = async () => {
        if (!deleteId) return;
        try {
            const token = localStorage.getItem("sirah_admin_token");
            const response = await fetch(`http://localhost:5000/api/leads/${deleteId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                toast.success("Lead deleted successfully");
                setLeads(prev => prev.filter(l => l._id !== deleteId));
                setIsDeleteOpen(false);
            } else {
                toast.error("Failed to delete lead");
            }
        } catch (error) {
            toast.error("Error deleting lead");
        }
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingLead) return;

        try {
            const token = localStorage.getItem("sirah_admin_token");
            const response = await fetch(`http://localhost:5000/api/leads/${editingLead._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(editingLead),
            });

            if (response.ok) {
                const updatedLead = await response.json();
                toast.success("Lead updated successfully");
                setLeads(prev => prev.map(l => l._id === updatedLead._id ? updatedLead : l));
                setIsEditOpen(false);
            } else {
                toast.error("Failed to update lead");
            }
        } catch (error) {
            toast.error("Error updating lead");
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'new': return <Badge className="bg-primary/10 text-primary border-primary/20">New</Badge>;
            case 'contacted': return <Badge className="bg-amber-400/10 text-amber-400 border-amber-400/20">Contacted</Badge>;
            case 'qualified': return <Badge className="bg-purple-400/10 text-purple-400 border-purple-400/20">Qualified</Badge>;
            case 'converted': return <Badge className="bg-green-400/10 text-green-400 border-green-400/20">Converted</Badge>;
            case 'not qualified': return <Badge className="bg-red-400/10 text-red-400 border-red-400/20">Not Qualified</Badge>;
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
                                                    <div className="flex justify-end gap-2">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-9 w-9 text-slate-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-xl"
                                                            onClick={() => {
                                                                setEditingLead(lead);
                                                                setIsEditOpen(true);
                                                            }}
                                                        >
                                                            <Pencil className="h-4 w-4" />
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-9 w-9 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl"
                                                            onClick={() => {
                                                                setDeleteId(lead._id);
                                                                setIsDeleteOpen(true);
                                                            }}
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
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

            {/* Edit Dialog */}
            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                <DialogContent className="bg-slate-900 border-white/10 text-white sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Lead</DialogTitle>
                        <DialogDescription className="text-slate-400">
                            Update lead details and status here.
                        </DialogDescription>
                    </DialogHeader>
                    {editingLead && (
                        <form onSubmit={handleUpdate} className="grid gap-4 py-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="text-slate-300">First name</Label>
                                    <Input
                                        id="firstName"
                                        value={editingLead.firstName}
                                        onChange={(e) => setEditingLead({ ...editingLead, firstName: e.target.value })}
                                        className="bg-white/5 border-white/10 text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="text-slate-300">Last name</Label>
                                    <Input
                                        id="lastName"
                                        value={editingLead.lastName}
                                        onChange={(e) => setEditingLead({ ...editingLead, lastName: e.target.value })}
                                        className="bg-white/5 border-white/10 text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-slate-300">Email</Label>
                                <Input
                                    id="email"
                                    value={editingLead.email}
                                    onChange={(e) => setEditingLead({ ...editingLead, email: e.target.value })}
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-slate-300">Phone</Label>
                                <Input
                                    id="phone"
                                    value={editingLead.phone}
                                    onChange={(e) => setEditingLead({ ...editingLead, phone: e.target.value })}
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-slate-300">Company</Label>
                                <Input
                                    id="company"
                                    value={editingLead.company}
                                    onChange={(e) => setEditingLead({ ...editingLead, company: e.target.value })}
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="status" className="text-slate-300">Status</Label>
                                <Select
                                    value={editingLead.status}
                                    onValueChange={(value: any) => setEditingLead({ ...editingLead, status: value })}
                                >
                                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-white/10 text-white">
                                        <SelectItem value="new">New</SelectItem>
                                        <SelectItem value="contacted">Contacted</SelectItem>
                                        <SelectItem value="qualified">Qualified</SelectItem>
                                        <SelectItem value="not qualified">Not Qualified</SelectItem>
                                        <SelectItem value="converted">Converted</SelectItem>
                                        <SelectItem value="closed">Closed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2 col-span-2">
                                <Label htmlFor="notes" className="text-slate-300">Notes</Label>
                                <Textarea
                                    id="notes"
                                    placeholder="Add internal notes about this lead..."
                                    value={editingLead.notes || ""}
                                    onChange={(e) => setEditingLead({ ...editingLead, notes: e.target.value })}
                                    className="bg-white/5 border-white/10 text-white min-h-[100px]"
                                />
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="bg-primary text-black hover:opacity-90">Save changes</Button>
                            </DialogFooter>
                        </form>
                    )}
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
                <DialogContent className="bg-slate-900 border-white/10 text-white sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Delete Lead</DialogTitle>
                        <DialogDescription className="text-slate-400">
                            Are you sure you want to delete this lead? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex gap-2 justify-end mt-4">
                        <Button variant="outline" onClick={() => setIsDeleteOpen(false)} className="bg-transparent border-white/10 text-slate-300 hover:bg-white/10">Cancel</Button>
                        <Button variant="destructive" onClick={handleDelete} className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20">Delete</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </AdminLayout>
    );
};

export default AdminLeads;
