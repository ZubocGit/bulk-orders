import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Plus, Trash2, MessageCircle } from "lucide-react";

interface OrderRow {
  product: string;
  quantity: string;
}

const WHATSAPP_NUMBER = "918891343496";

export function OrderBuilder() {
  const [rows, setRows] = useState<OrderRow[]>([{ product: "", quantity: "" }]);

  const addRow = () => {
    setRows([...rows, { product: "", quantity: "" }]);
  };

  const removeRow = (index: number) => {
    if (rows.length > 1) {
      setRows(rows.filter((_, i) => i !== index));
    }
  };

  const updateRow = (index: number, field: keyof OrderRow, value: string) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [field]: value };
    setRows(newRows);
  };

  const isValid = rows.every(
    (r) => r.product.trim() && r.quantity.trim() && parseInt(r.quantity) > 0,
  );

  const getWhatsAppLink = () => {
    let message = "Hi Zuboc team, I’d like to place a bulk order enquiry:\n";
    rows.forEach((r) => {
      if (r.product && r.quantity) {
        message += `• ${r.product} — ${r.quantity} pcs\n`;
      }
    });
    message +=
      "Please share pricing, customization options, and delivery timeline. Thank you!";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const handleConversionClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16693364295/4xAeCI-msZIcEMeMgpg-'
      });
    }
  };

  return (
    <section
      id="bulk-order"
      className="py-20 bg-gradient-to-b from-white to-zuboc-creamyYellow/30"
    >
      <div className="container mx-auto px-4 md:px-6"> 
        <SectionHeader
          title="Build Your Bulk Order"
          subtitle="Add multiple items to your list and get a combined quote instantly."
        />

        <div className="max-w-3xl mx-auto">
          <Card className="border-zuboc-mutedGold/20 shadow-xl bg-white/80 backdrop-blur-sm">
            <div className="space-y-6">
              {/* Header Row */}
              <div className="hidden sm:grid grid-cols-12 gap-4 text-sm font-medium text-zuboc-neutral-muted px-2">
                <div className="col-span-1 border-b pb-2">#</div>
                <div className="col-span-7 border-b pb-2">Product Name</div>
                <div className="col-span-3 border-b pb-2">Quantity</div>
                <div className="col-span-1 border-b pb-2"></div>
              </div>

              {/* Input Structure */}
              {rows.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <div className="hidden sm:flex items-center justify-center h-10 text-zuboc-neutral-muted col-span-1 font-mono">
                    {index + 1}
                  </div>
                  <div className="col-span-12 sm:col-span-7">
                    <Input
                      placeholder="e.g. Wax Seals Gold"
                      value={row.product}
                      onChange={(e) =>
                        updateRow(index, "product", e.target.value)
                      }
                      className="bg-white"
                    />
                  </div>
                  <div className="col-span-10 sm:col-span-3">
                    <Input
                      type="number"
                      placeholder="Qty"
                      value={row.quantity}
                      onChange={(e) =>
                        updateRow(index, "quantity", e.target.value)
                      }
                      className="bg-white"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex justify-end sm:justify-center">
                    {rows.length > 1 && (
                      <button
                        onClick={() => removeRow(index)}
                        className="p-2 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-dashed border-zuboc-neutral-muted/20 mt-4">
                <Button variant="ghost" onClick={addRow} className="group">
                  <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform" />
                  Add another product
                </Button>

                <div className="w-full sm:w-auto">
                  <a
                    href={isValid ? getWhatsAppLink() : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto ${!isValid ? "pointer-events-none opacity-50" : ""}`}
                    onClick={isValid ? handleConversionClick : undefined}
                  >
                    <Button
                      variant="primary"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Send on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              {/* Live Preview */}
              {/* <div className="mt-8 p-4 bg-zuboc-neutral-bg rounded-lg border border-zuboc-neutral-border text-xs md:text-sm text-zuboc-neutral-muted font-mono leading-relaxed relative overflow-hidden">
                <div className="absolute top-0 right-0 px-2 py-1 bg-zuboc-neutral-border text-[10px] uppercase font-bold tracking-wider rounded-bl-lg">
                  Preview
                </div>
                <p>Hi Zuboc team, I’d like to place a bulk order enquiry:</p>
                <div className="pl-4 my-2 border-l-2 border-zuboc-mutedGold/30">
                  {rows.map(
                    (r, i) =>
                      r.product && (
                        <div key={i}>
                          • {r.product}{" "}
                          {r.quantity ? `— ${r.quantity} pcs` : ""}
                        </div>
                      ),
                  )}
                  {!rows[0].product && (
                    <span className="italic opacity-50 text-[10px]">
                      (Add items to see preview)
                    </span>
                  )}
                </div>
                <p>
                  Please share pricing, customization options, and delivery
                  timeline. Thank you!
                </p>
              </div> */}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
