import { Timer } from "lucide-react";
import { Letter, formatDate, getCountdownText } from "@/lib/letters";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface LetterCardProps {
  letter: Letter;
  index: number;
}

const LetterCard = ({ letter, index }: LetterCardProps) => {
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => navigate(`/letter/${letter.id}`)}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.35 }}
      className="flex items-stretch gap-3 bg-card rounded-lg overflow-hidden active:scale-[0.98] transition-transform cursor-pointer"
    >
      <div className="w-1 bg-primary rounded-l-lg shrink-0" />
      <div className="flex-1 py-4 pr-4">
        <span className="text-xs text-muted-foreground">
          Sent {formatDate(letter.sentDate)}
        </span>
        <h4 className="text-[15px] font-medium text-foreground mt-1">
          {letter.title}
        </h4>
        <span className="text-sm text-primary mt-1 inline-block">
          {getCountdownText(letter.deliveryDate)}
        </span>
      </div>
      <div className="flex items-center pr-4">
        <Timer size={18} className="text-primary" />
      </div>
    </motion.div>
  );
};

export default LetterCard;
