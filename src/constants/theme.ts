import {css} from '@linaria/core'

export const theme = css`
  --color-primary: black;
  --color-secondary: #545454;
  --bg-primary: white;
  --bg-secondary: #bebebe;

  --border-width: 4px;
  --spacing: 8px;
  --max-width: 1000px;

  --border: var(--border-width) solid black;
`

export const tabletMinWidth = '@media(min-width: 600px)'
export const desktopMinWidth = '@media(min-width: 769px)'

export const borderedComponent = {
  borderStyle: 'solid',
  borderWidth: '4px',
  borderColor: 'var(--color-primary)',
  borderRadius: '20px',
  borderImageSlice: 4,
  borderImageWidth: 2,
  borderImageOutset: 0,
  borderImageSource: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12'><path d='M2 2h2v2H2zM4 0h2v2H4zM10 4h2v2h-2zM0 4h2v2H0zM6 0h2v2H6zM8 2h2v2H8zM8 8h2v2H8zM6 10h2v2H6zM0 6h2v2H0zM10 6h2v2h-2zM4 10h2v2H4zM2 8h2v2H2z' fill='%23000' /></svg>")`,
}
