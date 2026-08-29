import {css} from '@linaria/core'

export const theme = css`
  --color-primary: #16202c;
  --color-secondary: #5c6b7a;
  --color-accent: #2f5d8f;
  --color-accent-dark: #234a70;
  --bg-primary: #ffffff;
  --bg-secondary: #f5f6f8;
  --border-color: #dfe3e8;
  --action-bg: #2f5d8f;
  --action-color: #ffffff;

  --spacing: 8px;
  --max-width: 900px;
  --radius: 6px;

  --border: 1px solid var(--border-color);
`

export const tabletMinWidth = '@media(min-width: 600px)'
export const desktopMinWidth = '@media(min-width: 769px)'
