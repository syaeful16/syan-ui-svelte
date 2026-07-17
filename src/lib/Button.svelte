<script lang="ts" module>
    import { cva, type VariantProps } from 'class-variance-authority';
    import { cn } from './utils.js';
    import type { Snippet } from 'svelte';
    import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

    // 1. Definisikan CVA di dalam module agar bisa diekspor dan dipakai di file lain
    export const buttonVariants = cva(
        "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4",
        {
            variants: {
                variant: {
                    default: 'bg-black text-white hover:bg-gray-800',
                    destructive: 'bg-red-500 text-white hover:bg-red-600',
                    outline: 'border border-gray-200 bg-transparent hover:bg-gray-100 text-black',
                    ghost: 'hover:bg-gray-100 text-black',
                    link: 'text-blue-500 underline-offset-4 hover:underline',
                },
                size: {
                    default: 'h-10 px-4 py-2',
                    sm: 'h-9 rounded-md px-3',
                    lg: 'h-11 rounded-md px-8',
                    icon: 'h-10 w-10',
                },
            },
            defaultVariants: {
                variant: 'default',
                size: 'default',
            },
        }
    );

    // 2. Ekspor Tipe Props agar pengguna library bisa mengimpor tipe ini jika butuh
    export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
    export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

    // Gabungkan atribut Button dan Anchor, ditambah custom props kita
    export type ButtonProps = HTMLButtonAttributes & HTMLAnchorAttributes & {
        variant?: ButtonVariant;
        size?: ButtonSize;
        ref?: HTMLButtonElement | HTMLAnchorElement | null;
        children?: Snippet;
    };
</script>

<script lang="ts">
    // 3. Tangkap props menggunakan Runes
    let {
        class: className,
        variant = "default",
        size = "default",
        ref = $bindable(null),
        href = undefined,
        type = "button",
        disabled,
        children,
        ...restProps
    }: ButtonProps = $props();
</script>

<!-- 4. Render secara dinamis: Anchor <a> atau <button> -->
{#if href}
    <a
        bind:this={ref as HTMLAnchorElement}
        class={cn(buttonVariants({ variant, size }), className)}
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        role={disabled ? "link" : undefined}
        tabindex={disabled ? -1 : undefined}
        {...restProps}
    >
        {#if children}
            {@render children()}
        {:else}
            Tombol
        {/if}
    </a>
{:else}
    <button
        bind:this={ref as HTMLButtonElement}
        class={cn(buttonVariants({ variant, size }), className)}
        {type}
        {disabled}
        {...restProps}
    >
        {#if children}
            {@render children()}
        {:else}
            Tombol
        {/if}
    </button>
{/if}
