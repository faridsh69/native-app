import { Navbar } from 'components/Navbar/Navbar'

export const HeaderNavbar = () => {
  const categoryOptions = [
    {
      label: 'Cabernet Sauvignon',
      path: '/red-wine/cabernet-sauvignon',
    },
    {
      label: 'Pinot Noir',
      path: '/red-wine/pinot-noir',
    },
    {
      label: 'Merlot',
      path: '/red-wine/merlot',
    },
    {
      label: 'Malbec',
      path: '/red-wine/malbec',
    },
    {
      label: 'Shiraz / Syrah',
      path: '/red-wine/shiraz',
    },
    {
      label: 'Cabernet Franc',
      path: '/red-wine/cabernet',
    },
    {
      label: 'Nebbiolo',
      path: 'red-wine/nebbiolo',
    },
    {
      label: 'Grenache',
      path: 'red-wine/grenache',
    },
    {
      label: 'Red Blend',
      path: 'red-wine/red-blend',
    },
    {
      label: 'Sweet Red Wine',
      path: 'red-wine/sweet-red-wine',
    },
  ]
  const categories = [
    {
      label: 'Red Grape Varieties',
      path: 'rose-wine/rose-wine-styles',
      options: categoryOptions,
    },
    {
      label: 'Red Wine Regions',
      path: 'rose-wine/rose-wine-styles',
      options: categoryOptions,
    },
    {
      label: 'Popular Red Wines',
      path: 'rose-wine/rose-wine-styles',
      options: categoryOptions,
    },
  ]
  const options = [
    {
      label: 'Red Wine',
      categories: categories,
    },
    {
      label: 'White Wine',
      categories: categories,
    },
    {
      label: 'Rosé / Pink Wine',
      categories: categories,
    },
    {
      label: 'Sparkling Wine',
      categories: categories,
    },
    {
      label: 'News & Articles',
      categories: categories,
    },
  ]

  return <Navbar options={options} logoPressPath='/' />
}
