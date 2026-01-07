
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { useState } from "react";
import { Calendar, Clock, MapPin, User, LogOut, Settings, History } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const upcomingAppointments = [
  {
    id: 101,
    service: "Signature Glow Facial",
    doctor: "Dr. Sarah Johnson",
    date: "Mon, 15 Oct 2024",
    time: "10:00 AM",
    status: "Confirmed",
  },
];

const appointmentHistory = [
  {
    id: 98,
    service: "Acne Clear Facial",
    doctor: "Dr. Emily Davis",
    date: "10 Sep 2024",
    status: "Completed",
  },
  {
    id: 85,
    service: "Consultation",
    doctor: "Dr. Sarah Johnson",
    date: "01 Aug 2024",
    status: "Completed",
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("appointments");

  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full md:w-64 space-y-6">
            <Card className="border-none shadow-md overflow-hidden">
                <div className="h-24 bg-primary/10"></div>
                <div className="px-6 pb-6 -mt-12 text-center">
                    <div className="w-24 h-24 rounded-full bg-white p-1 mx-auto mb-3 shadow-sm">
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                            <User className="w-10 h-10" />
                        </div>
                    </div>
                    <h2 className="font-heading font-bold text-xl">Jane Doe</h2>
                    <p className="text-sm text-muted-foreground">Premium Member</p>
                </div>
            </Card>

            <nav className="space-y-2">
                <button
                    onClick={() => setActiveTab("appointments")}
                    className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        activeTab === "appointments" ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:bg-white/50"
                    )}
                >
                    <Calendar className="w-4 h-4" /> Attributes
                </button>
                <button
                    onClick={() => setActiveTab("history")}
                    className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        activeTab === "history" ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:bg-white/50"
                    )}
                >
                    <History className="w-4 h-4" /> History
                </button>
                 <button
                    onClick={() => setActiveTab("settings")}
                    className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        activeTab === "settings" ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:bg-white/50"
                    )}
                >
                    <Settings className="w-4 h-4" /> Settings
                </button>
                 <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-destructive hover:bg-red-50 transition-colors mt-8">
                    <LogOut className="w-4 h-4" /> Logout
                </button>
            </nav>
          </aside>

          {/* Main Content */}
          <section className="flex-1 space-y-6">
            
            {activeTab === "appointments" && (
                <div>
                   <h2 className="text-2xl font-heading font-bold mb-6">Upcoming Appointments</h2>
                   {upcomingAppointments.length > 0 ? (
                       <div className="space-y-4">
                           {upcomingAppointments.map((apt) => (
                               <Card key={apt.id} className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
                                   <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                       <div>
                                           <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md font-bold mb-2">
                                               {apt.status}
                                           </span>
                                           <h3 className="text-lg font-bold">{apt.service}</h3>
                                           <p className="text-muted-foreground text-sm mb-1">{apt.doctor}</p>
                                            <div className="flex items-center gap-4 text-sm mt-3">
                                               <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-primary" /> {apt.date}</span>
                                               <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-primary" /> {apt.time}</span>
                                           </div>
                                       </div>
                                       <div className="flex gap-2 w-full md:w-auto">
                                           <Button variant="outline" size="sm" className="flex-1">Reschedule</Button>
                                           <Button variant="destructive" size="sm" className="flex-1">Cancel</Button>
                                       </div>
                                   </CardContent>
                               </Card>
                           ))}
                       </div>
                   ) : (
                       <div className="text-center py-12 bg-white rounded-xl border">
                           <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                           <p className="text-muted-foreground">No upcoming appointments.</p>
                           <Button className="mt-4">Book Now</Button>
                       </div>
                   )}
                </div>
            )}

            {activeTab === "history" && (
                <div>
                   <h2 className="text-2xl font-heading font-bold mb-6">Treatment History</h2>
                   <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                       <table className="w-full text-sm text-left">
                           <thead className="bg-muted/50 text-muted-foreground font-medium border-b">
                               <tr>
                                   <th className="px-6 py-4">Treatment</th>
                                   <th className="px-6 py-4">Date</th>
                                   <th className="px-6 py-4">Doctor</th>
                                   <th className="px-6 py-4">Status</th>
                               </tr>
                           </thead>
                           <tbody className="divide-y">
                               {appointmentHistory.map((item) => (
                                   <tr key={item.id} className="hover:bg-muted/20">
                                       <td className="px-6 py-4 font-medium">{item.service}</td>
                                       <td className="px-6 py-4">{item.date}</td>
                                       <td className="px-6 py-4">{item.doctor}</td>
                                       <td className="px-6 py-4">
                                           <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                               {item.status}
                                           </span>
                                       </td>
                                   </tr>
                               ))}
                           </tbody>
                       </table>
                   </div>
                </div>
            )}
            
             {activeTab === "settings" && (
                <div>
                   <h2 className="text-2xl font-heading font-bold mb-6">Account Settings</h2>
                   <Card>
                       <CardHeader>
                           <CardTitle>Profile Information</CardTitle>
                       </CardHeader>
                       <CardContent className="space-y-4">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               <div className="space-y-2">
                                   <label className="text-sm font-medium">Full Name</label>
                                   <input type="text" defaultValue="Jane Doe" className="w-full px-3 py-2 border rounded-md" />
                               </div>
                               <div className="space-y-2">
                                   <label className="text-sm font-medium">Email</label>
                                   <input type="email" defaultValue="jane@example.com" className="w-full px-3 py-2 border rounded-md" />
                               </div>
                               <div className="space-y-2">
                                   <label className="text-sm font-medium">Phone Number</label>
                                   <input type="tel" defaultValue="+62 812 3456 7890" className="w-full px-3 py-2 border rounded-md" />
                               </div>
                           </div>
                           <Button className="mt-4">Save Changes</Button>
                       </CardContent>
                   </Card>
                </div>
            )}

          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
