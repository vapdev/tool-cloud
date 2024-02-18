export interface MenuItem {
  type: "item" | "separator"
  label?: string
  shortcut?: string
  disabled?: boolean
}

export interface MenuGroup {
  trigger: string
  content: MenuItem[]
}

export const menuGroups: MenuGroup[] = [
  {
    trigger: "Arquivo",
    content: [
      { type: "item", label: "Novo Arquivo", shortcut: "⌘N" },
      { type: "item", label: "Abrir Arquivo...", shortcut: "⌘O" },
      { type: "separator" },
      { type: "item", label: "Salvar", shortcut: "⌘S" },
      { type: "item", label: "Salvar Como...", shortcut: "⇧⌘S" },
      { type: "separator" },
      { type: "item", label: "Imprimir...", shortcut: "⌘P" },
      { type: "item", label: "Sair", shortcut: "⌘Q" },
    ],
  },
  {
    trigger: "Editar",
    content: [
      { type: "item", label: "Desfazer", shortcut: "⌘Z" },
      { type: "item", label: "Refazer", shortcut: "⇧⌘Z" },
      { type: "separator" },
      { type: "item", label: "Recortar", shortcut: "⌘X" },
      { type: "item", label: "Copiar", shortcut: "⌘C" },
      { type: "item", label: "Colar", shortcut: "⌘V" },
    ],
  },
  {
    trigger: "Visualizar",
    content: [
      { type: "item", label: "Ampliar", shortcut: "⌘+" },
      { type: "item", label: "Reduzir", shortcut: "⌘-" },
      { type: "item", label: "Restaurar Zoom", shortcut: "⌘0" },
    ],
  },
  {
    trigger: "Ajuda",
    content: [
      { type: "item", label: "Ver Ajuda" },
      { type: "separator" },
      { type: "item", label: "Sobre o Aplicativo" },
    ],
  },
]
