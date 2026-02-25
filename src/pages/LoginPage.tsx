import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <Send size={28} className="text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Sent</h1>
          <p className="text-muted-foreground text-[15px] mt-1">Send messages through time</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="bg-card rounded-lg p-4">
            <label className="text-sm text-muted-foreground mb-1.5 block">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-transparent text-[15px] text-foreground placeholder:text-muted-foreground/50 outline-none"
            />
          </div>

          <div className="bg-card rounded-lg p-4">
            <label className="text-sm text-muted-foreground mb-1.5 block">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-[15px] text-foreground placeholder:text-muted-foreground/50 outline-none"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-[15px] mt-2"
          >
            Sign In
          </motion.button>

          <p className="text-center text-muted-foreground text-sm mt-4">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-primary font-medium"
            >
              Sign Up
            </button>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
