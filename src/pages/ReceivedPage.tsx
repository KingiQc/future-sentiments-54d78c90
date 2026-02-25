import { Mail, Unlock } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import { mockReceivedLetters, formatDate } from "@/lib/letters";
import { useState } from "react";

const ReceivedPage = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="max-w-5xl mx-auto px-5 pt-14">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[34px] font-bold text-foreground mb-8"
        >
          Received
        </motion.h1>

        {mockReceivedLetters.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-20 text-muted-foreground">
            <Mail size={48} className="mb-4 opacity-40" />
            <p className="text-[15px]">No letters received yet</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {mockReceivedLetters.map((letter, i) => (
              <motion.div
                key={letter.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                onClick={() => setOpenId(openId === letter.id ? null : letter.id)}
                className="bg-card rounded-lg p-4 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-muted-foreground">
                      Delivered {formatDate(letter.deliveryDate)}
                    </span>
                    <h4 className="text-[15px] font-medium text-foreground mt-1">
                      {letter.title}
                    </h4>
                  </div>
                  <Unlock size={16} className="text-primary mt-1" />
                </div>
                {openId === letter.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-sm text-muted-foreground mt-3 leading-relaxed"
                  >
                    {letter.body}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default ReceivedPage;
