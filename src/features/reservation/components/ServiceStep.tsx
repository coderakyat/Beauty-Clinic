
import { Button } from "@/components/ui/Button";
import { services } from "@/features/services";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";

export function ServiceStep({ onNext, onBack }: { onNext: (data: any) => void, onBack: () => void }) {
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState(services[0].id);

    const handleSelect = (service: any) => {
        setSelectedServiceId(service.id);
    };

    const handleNext = () => {
        if (selectedServiceId) {
            const service = services.flatMap(c => c.items).find(s => s.id === selectedServiceId);
            onNext({ service });
        }
    };

    const currentCategory = services.find(c => c.id === selectedCategory);

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-heading font-bold">Select Your Treatment</h2>
                <p className="text-muted-foreground">Choose from our wide range of premium services.</p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
                {services.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all",
                            selectedCategory === cat.id
                                ? "bg-primary text-white shadow-md"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                        )}
                    >
                        {cat.category}
                    </button>
                ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCategory?.items.map((service) => (
                    <div
                        key={service.id}
                        onClick={() => handleSelect(service)}
                        className={cn(
                            "cursor-pointer border-2 rounded-xl p-4 transition-all hover:border-primary/50 relative",
                            selectedServiceId === service.id ? "border-primary bg-primary/5" : "border-transparent bg-white shadow-sm"
                        )}
                    >
                        {selectedServiceId === service.id && (
                            <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
                                <Check className="w-3 h-3" />
                            </div>
                        )}
                        <h3 className="font-bold text-lg">{service.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                        <div className="flex justify-between items-center text-sm font-medium pt-2 border-t mt-2">
                            <span>{service.duration}</span>
                            <span className="text-primary">{service.price}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between pt-8 border-t">
                <Button variant="outline" onClick={onBack}>Back</Button>
                <Button onClick={handleNext} disabled={!selectedServiceId}>
                    Continue
                </Button>
            </div>
        </div>
    );
}
