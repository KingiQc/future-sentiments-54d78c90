import { Send, Timer, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HighlightCard from "@/components/HighlightCard";
import LetterCard from "@/components/LetterCard";
import BottomNav from "@/components/BottomNav";
import { mockLetters } from "@/lib/letters";

const SentPage = () => {
  const navigate = useNavigate();
  const nextDelivery = mockLetters[0];
  const upcoming = mockLetters.slice(1);

  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="max-w-5xl mx-auto px-5 pt-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <h1 className="text-[34px] font-bold text-foreground">Sent</h1>
          <button
            onClick={() => navigate("/create")}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 active:scale-95 transition-transform"
          >
            <Plus size={22} className="text-primary-foreground" />
          </button>
        </motion.div>

        {/* Delivers Next */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Send size={14} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Delivers Next</span>
          </div>
          <HighlightCard letter={nextDelivery} />
        </div>

        {/* Upcoming */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Timer size={14} className="text-foreground" />
            <span className="text-[15px] font-medium text-foreground">
              Upcoming Letters
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {upcoming.map((letter, i) => (
              <LetterCard key={letter.id} letter={letter} index={i} />
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default SentPage;
