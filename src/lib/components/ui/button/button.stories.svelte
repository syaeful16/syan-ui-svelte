<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './button.svelte';
  import { Mail, Trash2 } from '@lucide/svelte';

  const { Story } = defineMeta({
    title: 'Syan UI/Button',
    component: Button,
    // Default args untuk semua story, jadi nggak perlu diulang-ulang
    args: {
      variant: 'default',
      size: 'default',
      disabled: false,
    },
    argTypes: {
      variant: {
        control: 'select',
        // Sudah disesuaikan dengan varian di Button.svelte kamu
        options: ['default', 'destructive', 'outline', 'ghost', 'link'],
        description: 'Variasi gaya visual tombol',
      },
      size: {
        control: 'select',
        // Sudah disesuaikan dengan ukuran di Button.svelte kamu
        options: ['default', 'sm', 'lg', 'icon'],
        description: 'Ukuran dimensi tombol',
      },
      disabled: {
        control: 'boolean',
        description: 'Menonaktifkan interaksi tombol (disabled state)',
      },
      href: {
        control: 'text',
        description: 'Jika diisi, komponen otomatis menjadi tag <a>',
      },
      class: {
        control: 'text',
        description: 'Menimpa atau menambahkan custom class Tailwind',
      },
      type: {
        control: 'select',
        options: ['button', 'submit', 'reset'],
        description: 'Atribut type bawaan HTML (hanya berfungsi jika bukan link)',
      }
    },
  });
</script>

<!-- ==========================================
  KUMPULAN STORY
=========================================== -->

<!-- Karena sudah ada global args, kita tidak perlu tulis args lagi untuk Default -->
<Story name="Default">
  Tombol Default
</Story>

<Story name="Outline" args={{ variant: 'outline' }}>
  Tombol Outline
</Story>

<Story
    name="Link"
    args={{ variant: 'link' }}
    parameters={{
        a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } }
    }}
>
  Tombol Link
</Story>

<Story
    name="Destructive"
    args={{ variant: 'destructive' }}
    parameters={{
        a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } }
    }}
>
  Hapus Data
</Story>

<Story name="Ghost" args={{ variant: 'ghost' }}>
  Tombol Ghost
</Story>

<!-- ==========================================
  KOMBINASI IKON
=========================================== -->

<Story name="With Icon">
  <Mail size={16} />
  Login Email
</Story>

<Story name="Icon Only" args={{ variant: 'outline', size: 'icon', 'aria-label': 'Hapus Data' }}>
  <Trash2 size={16} />
</Story>

<!-- ==========================================
  SEBAGAI LINK (ANCHOR <a>)
=========================================== -->

<Story
    name="As Link (Text)"
    args={{ variant: 'link', href: 'https://svelte.dev', target: '_blank' }}
    parameters={{
        a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } }
    }}
>
  Situs Resmi Svelte
</Story>

<Story name="As Link (Button Style)" args={{ href: '/dashboard' }}>
  Ke Dashboard
</Story>
