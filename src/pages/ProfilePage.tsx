import { motion } from "framer-motion";
import { ArrowLeft, User, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-5xl mx-auto px-5 pt-14 w-full flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-card flex items-center justify-center"
          >
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-2xl font-bold text-foreground">Profile</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-3">
            <span className="text-primary text-3xl font-bold">S</span>
          </div>
          <h2 className="text-xl font-semibold text-foreground">Sent User</h2>
          <p className="text-sm text-muted-foreground">Member since Feb 2026</p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {[
            { icon: User, label: "Name", value: "Sent User" },
            { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
            { icon: Mail, label: "Letters Sent", value: "5" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="bg-card rounded-lg p-4 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <item.icon size={16} className="text-foreground" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground">{item.label}</span>
                <p className="text-[15px] text-foreground font-medium">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
