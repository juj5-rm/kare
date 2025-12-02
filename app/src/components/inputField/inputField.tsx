"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./InputField.module.css";

interface InputProps {
  label: string;
  type: "text" | "email" | "password" | "textarea";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  icon?: string; // Imagen opcional
  iconSize?: number; // Tamaño de la imagen (ancho y alto)
}

const InputField: React.FC<InputProps> = ({ label, type, name, value, onChange, icon, iconSize = 24 }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles["input-box"]}>
      {type === "textarea" ? (
        <div className="relative">
          <textarea
            id={name}
            name={name}
            value={value}
            placeholder=" "
            onChange={onChange}
            className={styles.textarea}
          />
          <label className={styles.label} htmlFor={name}>
            {label}
          </label>
          {icon && (
            <Image
              src={icon}
              alt={label}
              width={iconSize}
              height={iconSize}
              className={styles.icon}
            />
          )}
        </div>
      ) : (
        <div className="relative">
          <input
            id={name}
            type={type === "password" && showPassword ? "text" : type}
            name={name}
            value={value}
            placeholder=" "
            onChange={onChange}
            className={styles.input}
          />
          <label className={styles.label} htmlFor={name}>
            {label}
          </label>
          
          {icon && (
            <Image
              src={icon}
              alt={label}
              width={iconSize}
              height={iconSize}
              className={styles.icon}
            />
          )}

          {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.toggleButton}
            >
              <Image
                src={showPassword ? "/eye-open.svg" : "/lock.svg"}
                alt="Toggle Password Visibility"
                width={20}
                height={20}
                className={styles.icon}
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
