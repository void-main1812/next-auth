import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full justify-center rounded-lg from-gray-800 to-gray-600 bg-gradient-to-b px-4 py-3 text-white shadow-xl shadow-gray-300 hover:shadow-transparent transition-all duration-75 focus:outline-offset-0"
    >
      <Icon size={20} />
    </button>
  );
};

export default AuthSocialButton;
