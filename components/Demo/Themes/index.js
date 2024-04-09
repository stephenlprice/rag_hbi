import { DHL } from './DHL';

export const Themes = (props) => {
  const { theme } = props;
  const SheetComponent = theme?.component;

  if (SheetComponent) {
    return (
      <SheetComponent />
    )
  }

  // if above check fails, load Superstore by default
  return (
    <DHL />
  )
}

export { DHL };
export { ThemeSelector } from './ThemeSelector';
