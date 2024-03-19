import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ModalProps = {
  children: ReactNode;
  shouldShow: boolean;
  onRequestClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
  shouldShow,
  onRequestClose,
  children,
}) => {
  return shouldShow ? (
    <div
      className="fixed top-0 left-0 mx-0 flex items-end justify-center h-full w-full bg-black/10 overflow-auto"
      onClick={onRequestClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1 }}
        className={`w-full mx-2 md:mx-0 md:w-3/4 h-2/3 p-5 md:p-12 bg-white flex items-center relative rounded-tr-[2rem] rounded-tl-[2rem]`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="text-xl absolute rounded-md right-8 top-8 text-white hover: bg-asianColor py-1 px-3 shadow-md"
          onClick={onRequestClose}
        >
          X
        </button>
        <div>{children}</div>
      </motion.div>
    </div>
  ) : null;
};

export default Modal;
