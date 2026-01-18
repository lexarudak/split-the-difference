import styles from "./button.module.css";
import cn from "classnames";

type Props = {
	variant?: "primary" | "secondary" | "no-border";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant = "primary", ...props }: Props) => {
	return <button className={cn(styles.button, styles[variant])} {...props} />;
};
