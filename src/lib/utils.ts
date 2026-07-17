import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Fungsi cn (classNames) untuk menggabungkan class dengan aman
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
