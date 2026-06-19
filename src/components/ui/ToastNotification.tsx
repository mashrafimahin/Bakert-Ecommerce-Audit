// dependencies
import type { FC } from "react";
// utilities
import { cn } from "../../utils/ClassMerger";
// controller
import useSlices from "../../hooks/useSlices";
import { hideNotification } from "../../app/features/globalController";
// icons
import { ShieldAlert, ShieldCheck, ShieldX, X } from "lucide-react";
// components
import Typography from "../typography";
// pattern - icon
const IconPattern = {
  success: {
    icon: ShieldCheck,
    color: "text-green-600",
  },
  warning: {
    icon: ShieldAlert,
    color: "text-amber-500",
  },
  error: {
    icon: ShieldX,
    color: "text-red-600",
  },
};

// main
const ToastNotification: FC = () => {
  // state
  const { data, dispatch } = useSlices("globalController");
  const show = data.showNotification;
  const mark = data.notificationType as keyof typeof IconPattern;

  // select icon
  const Icon = IconPattern[mark].icon;

  // handle Click
  const handleClick = (): void => {
    dispatch(hideNotification());
  };

  return (
    <>
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 bg-white shadow-2xl border-2 rounded-2xl py-3 px-6 z-70 transition-all",
          show ? "top-8" : "-top-20",
        )}
      >
        <div className="flex items-center gap-2">
          <Icon size={20} className={cn(IconPattern[mark].color)} />
          <Typography className="text-md text-gray-800 font-semibold">
            {data.notificationMessage}
          </Typography>
          <X size={20} onClick={handleClick} className="ml-1 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

// exports
export default ToastNotification;
