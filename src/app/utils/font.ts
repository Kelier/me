import localFont from 'next/font/local'

export const majorFont = localFont({
  src: [
    {
      path: '../fonts/MajorMonoDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--major-font',
})
export const supplyFont = localFont({
  src: [
    {
      path: '../fonts/PPSupplyMono-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--supply-font',
})
export const minchoFont = localFont({
  src: [
    {
      path: '../fonts/mincho.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--mincho-font',
})
