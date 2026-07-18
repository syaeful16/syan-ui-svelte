import Root, {
    type ButtonProps,
    type ButtonSize,
    type ButtonVariant,
    buttonVariants,
} from "./button.svelte";

export {
    Root,
    buttonVariants,
    // Ekspor tipe data asli untuk kebutuhan internal/eksternal
    type ButtonProps,
    type ButtonSize,
    type ButtonVariant,
    // Ekspor alias yang lebih ringkas dan ramah pengguna
    Root as Button,
    type ButtonProps as Props,
};
