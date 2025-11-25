import { ContactModal } from "./ContactModal";

interface ProjectContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectTitle?: string;
}

export function ProjectContactModal({
  open,
  onOpenChange,
  projectTitle,
}: ProjectContactModalProps) {
  return (
    <ContactModal
      open={open}
      onOpenChange={onOpenChange}
      title="Готовы начать проект?"
      description={
        projectTitle
          ? `Обсудим проект похожий на "${projectTitle}"`
          : "Оставьте заявку и мы свяжемся с вами в течение 24 часов"
      }
    />
  );
}
