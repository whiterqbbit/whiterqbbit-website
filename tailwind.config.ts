import type { Config } from 'tailwindcss'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import catppuccin from '@catppuccin/tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: { colors: { } },
  },
  darkMode: 'class',
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['ci', 'heroicons']),
    }),
    catppuccin({
      prefix: 'ctp',
    }),
  ],
}
// desired font
// provider: 'bunny',
// fonts: 'Nunito'
